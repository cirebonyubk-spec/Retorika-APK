import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

// Body parsing middleware
app.use(express.json());

// Lazy-loaded GoogleGenAI Client
let aiClient: GoogleGenAI | null = null;

function getGenAI(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error('GEMINI_API_KEY is missing. Please set your Gemini API Key in the Settings > Secrets panel of AI Studio.');
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// Resilient JSON extraction and parsing helper
function cleanAndParseJSON(text: string): any {
  let cleaned = text.trim();
  
  const startArr = cleaned.indexOf('[');
  const startObj = cleaned.indexOf('{');
  let startIdx = -1;
  
  if (startArr !== -1 && startObj !== -1) {
    startIdx = Math.min(startArr, startObj);
  } else if (startArr !== -1) {
    startIdx = startArr;
  } else if (startObj !== -1) {
    startIdx = startObj;
  }
  
  const endArr = cleaned.lastIndexOf(']');
  const endObj = cleaned.lastIndexOf('}');
  let endIdx = -1;
  
  if (endArr !== -1 && endObj !== -1) {
    endIdx = Math.max(endArr, endObj);
  } else if (endArr !== -1) {
    endIdx = endArr;
  } else if (endObj !== -1) {
    endIdx = endObj;
  }
  
  if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
    cleaned = cleaned.substring(startIdx, endIdx + 1);
  }
  
  return JSON.parse(cleaned);
}

// Resilient helper to call generateContent with automatic retries and fallback models
async function generateContentWithFallback(
  ai: GoogleGenAI,
  parameters: any,
  fallbackModels = ['gemini-3.1-flash-lite', 'gemini-flash-latest']
): Promise<any> {
  const primaryModel = parameters.model || 'gemini-3.5-flash';
  const modelsToTry = [primaryModel, ...fallbackModels];
  let lastError: any = null;

  for (const model of modelsToTry) {
    // Try up to 3 times for each model in case of transient errors
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        console.log(`[AI Request] Attempting with model: ${model} (attempt ${attempt}/3)`);
        const response = await ai.models.generateContent({
          ...parameters,
          model: model,
        });
        return response;
      } catch (err: any) {
        lastError = err;
        const errMsg = err.message || '';
        const errStr = JSON.stringify(err) || '';
        const errStrObj = err.error ? JSON.stringify(err.error) : '';
        console.error(`[AI Request Failed] Model: ${model}, attempt ${attempt}. Error: ${errMsg || errStr}`);

        // Robustly inspect error code, status, message, and string representation
        const errStatus = err.status || (err.error && err.error.code) || 0;
        const errText = (errMsg + ' ' + errStr + ' ' + errStrObj + ' ' + String(err)).toLowerCase();

        // Check if the error is a known transient rate limit, quota, overloaded, or service unavailable error (e.g. 503, 429)
        const isTransient = 
          errStatus === 503 || 
          errStatus === 429 || 
          errStatus === 504 ||
          errStatus === 408 ||
          errText.includes('503') || 
          errText.includes('429') || 
          errText.includes('unavailable') || 
          errText.includes('resource_exhausted') ||
          errText.includes('temporary') || 
          errText.includes('demand') || 
          errText.includes('busy') ||
          errText.includes('overloaded') ||
          errText.includes('quota') ||
          errText.includes('limit');

        // If it's a structural, credential, or model not found error, try the next model instead of retrying this one
        if (!isTransient) {
          break;
        }

        // If it is a quota limit or rate limit exhaustion, immediately break the retry loop to try the next model
        const isQuotaExceeded = 
          errStatus === 429 || 
          errText.includes('429') || 
          errText.includes('quota') || 
          errText.includes('limit') || 
          errText.includes('resource_exhausted') || 
          errText.includes('exhausted');

        if (isQuotaExceeded) {
          console.warn(`[AI Request] Quota exceeded for model: ${model}. Switching immediately to fallback models to preserve user experience.`);
          break;
        }

        // Exponential backoff before retrying (for transient errors like 503/busy)
        if (attempt < 3) {
          const delay = attempt * 1000;
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      }
    }
  }

  throw lastError || new Error('Semua percobaan model kecerdasan buatan (AI) gagal.');
}

// API Route: AI Rhetoric Coach
app.post('/api/ai/coach', async (req, res) => {
  try {
    const { draftText, grade, focusArea } = req.body;
    if (!draftText) {
      return res.status(400).json({ error: 'Naskah pidato (draftText) tidak boleh kosong.' });
    }

    const ai = getGenAI();
    const response = await generateContentWithFallback(ai, {
      model: 'gemini-3.5-flash',
      contents: `Analisislah draf naskah pidato/retorika berikut ini sebagai seorang Pelatih Retorika Profesional (Asisten dari Jundi Abdul Syahid, S.Pd) untuk siswa Kelas ${grade || 7}.

      Draf Naskah Pidato:
      "${draftText}"

      Fokus area analisis utama: ${focusArea || 'Semua Elemen'}

      Berikan analisis terperinci dalam format JSON dengan skema berikut:
      {
        "score": number, // Rentang nilai 1-100
        "strengths": string[], // Kekuatan dari naskah pidato ini (minimal 2)
        "weaknesses": string[], // Hal yang perlu ditingkatkan (minimal 2)
        "ethosAnalysis": string, // Evaluasi aspek Kredibilitas (Ethos)
        "pathosAnalysis": string, // Evaluasi aspek Emosional (Pathos)
        "logosAnalysis": string, // Evaluasi aspek Logika & Struktur Data (Logos)
        "structureAnalysis": string, // Evaluasi kecocokan Pembuka, Isi, dan Penutup
        "vocalDeliveryTips": string[], // Tips cara membaca (pitch, pace, pause, intonasi)
        "gestureDeliveryTips": string[], // Tips bahasa tubuh, ekspresi wajah, kontak mata
        "revisedSnippet": string // Berikan revisi sebagian paragraf dari pidato tersebut agar terdengar jauh lebih memukau, puitis, dan oratoris (menggunakan majas, anaphora, atau trikolon).
      }

      Gunakan bahasa Indonesia yang elegan, berwibawa, namun memotivasi khas Indonesia luhur. Jawab hanya dengan JSON murni tanpa menyertakan kode blok markdown markdown (\`\`\`json) atau teks pengantar lainnya.`,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.INTEGER },
            strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
            weaknesses: { type: Type.ARRAY, items: { type: Type.STRING } },
            ethosAnalysis: { type: Type.STRING },
            pathosAnalysis: { type: Type.STRING },
            logosAnalysis: { type: Type.STRING },
            structureAnalysis: { type: Type.STRING },
            vocalDeliveryTips: { type: Type.ARRAY, items: { type: Type.STRING } },
            gestureDeliveryTips: { type: Type.ARRAY, items: { type: Type.STRING } },
            revisedSnippet: { type: Type.STRING }
          },
          required: [
            'score', 'strengths', 'weaknesses', 'ethosAnalysis',
            'pathosAnalysis', 'logosAnalysis', 'structureAnalysis',
            'vocalDeliveryTips', 'gestureDeliveryTips', 'revisedSnippet'
          ]
        }
      }
    });

    const resultText = response.text || '{}';
    res.json(cleanAndParseJSON(resultText));
  } catch (error: any) {
    console.error('AI Coach Error:', error);
    res.status(500).json({ error: error.message || 'Gagal menganalisis naskah dengan AI.' });
  }
});

// API Route: AI Speech Generator (Pembuat Pidato Otomatis)
app.post('/api/ai/generate', async (req, res) => {
  try {
    const { topic, grade, tone, keyword } = req.body;
    if (!topic) {
      return res.status(400).json({ error: 'Topik pidato tidak boleh kosong.' });
    }

    const ai = getGenAI();
    const response = await generateContentWithFallback(ai, {
      model: 'gemini-3.5-flash',
      contents: `Buatkan naskah pidato/retorika yang sangat menginspirasi, puitis, berbobot, dan mengalir indah untuk siswa Kelas ${grade || 8}.
      
      Spesifikasi Pidato:
      - Topik: "${topic}"
      - Gaya Nada (Tone): "${tone || 'Semangat Membara'}" (pilihan: Semangat Membara, Tenang & Bijaksana, Puitis & Menyentuh, Akademis & Logis)
      - Kata Kunci Wajib dimasukkan: "${keyword || ''}"
      - Panjang: sekitar 250 - 400 kata.
      - Disusun oleh perwakilan siswa di bawah bimbingan guru retorika agung Jundi Abdul Syahid, S.Pd.

      Naskah harus terdiri dari:
      1. Pembuka (Hook menarik perhatian, sapaan hormat, pengantar).
      2. Isi (Gagasan utama yang logis didukung metafora indah atau data analogis).
      3. Penutup (Ringkasan moral, kata mutiara/quote yang berkesan, ajakan bertindak (call to action), salam penutup).

      Berikan respons dalam format JSON murni dengan skema berikut:
      {
        "title": string, // Judul pidato yang puitis dan keren
        "opening": string, // Bagian Pembuka
        "body": string, // Bagian Isi
        "closing": string, // Bagian Penutup
        "techniquesUsed": string[], // Sebutkan teknik retorika apa saja yang dipasang di naskah ini (misal: Anaphora, Trikolon, Antithesis, Monroe's Motivated Sequence)
        "coachNotes": string // Catatan motivasi hangat dari Jundi Abdul Syahid, S.Pd
      }

      Kembalikan hanya JSON murni tanpa markdown pembungkus.`,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            opening: { type: Type.STRING },
            body: { type: Type.STRING },
            closing: { type: Type.STRING },
            techniquesUsed: { type: Type.ARRAY, items: { type: Type.STRING } },
            coachNotes: { type: Type.STRING }
          },
          required: ['title', 'opening', 'body', 'closing', 'techniquesUsed', 'coachNotes']
        }
      }
    });

    const resultText = response.text || '{}';
    res.json(cleanAndParseJSON(resultText));
  } catch (error: any) {
    console.error('AI Generator Error:', error);
    res.status(500).json({ error: error.message || 'Gagal memproduksi pidato AI.' });
  }
});

// API Route: AI Quiz Generator
app.post('/api/ai/quiz', async (req, res) => {
  try {
    const { grade, topic, count } = req.body;
    const ai = getGenAI();
    const questionCount = count || 5; // Default to 5 or allow selection

    const response = await generateContentWithFallback(ai, {
      model: 'gemini-3.5-flash',
      contents: `Buatkan ${questionCount} pertanyaan kuis pilihan ganda yang cerdas, berbobot, dan menarik mengenai prinsip retorika, cara berbicara di depan umum, atau tokoh retorika kelas ${grade || 8} bertema "${topic || 'Umum'}".

      Setiap pertanyaan harus memiliki 4 pilihan jawaban (A, B, C, D), indeks jawaban yang benar (0 untuk A, 1 untuk B, 2 untuk C, 3 untuk D), dan penjelasan ilmiah ringkas kenapa itu benar.

      Berikan respons dalam bentuk array objek JSON dengan skema berikut:
      [
        {
          "question": string, // Pertanyaan kuis
          "options": [string, string, string, string], // Empat opsi jawaban
          "answerIndex": number, // Indeks jawaban benar (0-3)
          "explanation": string // Penjelasan ringkas yang mendidik khas Jundi Abdul Syahid, S.Pd
        }
      ]

      Berikan hanya JSON murni tanpa markdown block.`,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              question: { type: Type.STRING },
              options: { type: Type.ARRAY, items: { type: Type.STRING } },
              answerIndex: { type: Type.INTEGER },
              explanation: { type: Type.STRING }
            },
            required: ['question', 'options', 'answerIndex', 'explanation']
          }
        }
      }
    });

    const resultText = response.text || '[]';
    res.json(cleanAndParseJSON(resultText));
  } catch (error: any) {
    console.error('AI Quiz Error:', error);
    res.status(500).json({ error: error.message || 'Gagal memproduksi kuis AI.' });
  }
});

// API Route: AI Figure Expander (Meningkatkan & Memperpanjang Kisah Tokoh secara Spektakuler)
app.post('/api/ai/figure/expand', async (req, res) => {
  try {
    const { name, era, category, quote, currentStory } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Nama tokoh tidak boleh kosong.' });
    }

    const ai = getGenAI();
    const response = await generateContentWithFallback(ai, {
      model: 'gemini-3.5-flash',
      contents: `Analisislah tokoh agung retorika berikut dan kembangkan kisah sejarah serta petunjuk retorika mereka menjadi sebuah esai biografi inspiratif yang sangat panjang, mendalam, kaya detail sejarah, dan memuaskan pembaca.

      Profil Tokoh:
      - Nama: ${name}
      - Era: ${era || 'Tidak diketahui'}
      - Kategori: ${category || 'Umum'}
      - Kutipan Emas: "${quote || ''}"
      - Kisah Singkat Saat Ini: "${currentStory || ''}"

      Tugas Anda sebagai asisten ahli bimbingan retorika Jundi Abdul Syahid, S.Pd:
      1. Tulis kisah inspiratif ("longStory") yang sangat panjang (sekitar 300-500 kata), dramatis, menggetarkan jiwa, dan penuh detail perjuangan hidup mereka di bidang seni berbicara (retorika). Gunakan bahasa Indonesia yang sangat puitis, berwibawa, dan kaya kosakata sastra (metode orasi, dampak pidato mereka kepada khalayak, dan analisis teknik bicaranya).
      2. Berikan 3 hingga 5 pelajaran inti retorika ("expandedLessons") yang sangat praktis, aplikatif, dan terperinci untuk dilatih oleh siswa hari ini.
      3. Berikan analisis gaya orasi khas tokoh tersebut ("oratoricalStyle"), seperti karakteristik intonasi, bahasa tubuh, tempo, dan penggunaan majas yang menonjol.

      Kembalikan respons dalam format JSON murni dengan struktur berikut:
      {
        "longStory": string, // Kisah inspiratif mendalam yang sangat panjang (minimal 3-4 paragraf)
        "expandedLessons": string[], // 3-5 pelajaran retorika praktis mendalam
        "oratoricalStyle": string // Analisis gaya bahasa tubuh, vokal, dan taktik orasi khas tokoh
      }

      Berikan hanya JSON murni tanpa menyertakan tanda pembungkus markdown (\`\`\`json) atau teks pengantar lainnya.`,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            longStory: { type: Type.STRING },
            expandedLessons: { type: Type.ARRAY, items: { type: Type.STRING } },
            oratoricalStyle: { type: Type.STRING }
          },
          required: ['longStory', 'expandedLessons', 'oratoricalStyle']
        }
      }
    });

    const resultText = response.text || '{}';
    res.json(cleanAndParseJSON(resultText));
  } catch (error: any) {
    console.error('AI Figure Expand Error:', error);
    res.status(500).json({ error: error.message || 'Gagal memperluas kisah tokoh dengan AI.' });
  }
});

// API Route: AI Essay Generator (Membuat tepat 2 pertanyaan essay berkualitas untuk Kelas 7-9)
app.post('/api/ai/quiz/essay-generate', async (req, res) => {
  try {
    const { grade, topic } = req.body;
    const selectedGrade = grade ? Number(grade) : 8;
    const selectedTopic = topic || 'Retorika Umum';

    const ai = getGenAI();
    const response = await generateContentWithFallback(ai, {
      model: 'gemini-3.5-flash',
      contents: `Buatlah tepat 2 (dua) buah pertanyaan essay/pernyataan analisis retorika yang cerdas, mendalam, dan sangat mendidik untuk siswa Kelas ${selectedGrade} (pilihan kelas 7, 8, atau 9) dengan tema/topik/kata kunci: "${selectedTopic}".

      Tugas Anda sebagai asisten ahli bimbingan retorika Jundi Abdul Syahid, S.Pd:
      1. Kedua pertanyaan wajib relevan dengan kapasitas kognitif siswa Kelas ${selectedGrade}.
         - Kelas 7 berfokus pada: Mentalitas, Pernapasan, Olah Suara/Vokal, Gestur, dan Dasar Keberanian.
         - Kelas 8 berfokus pada: Kerangka Pidato (Exordium, Narratio, Propositio, Refutatio, Peroratio), Seni Persuasi, Logika Argumen, Majas, dan Teknik Penulisan.
         - Kelas 9 berfokus pada: Pidato Kenegaraan, Debat Aktif, Retorika Digital, Orasi Karismatik Tokoh Bangsa, dan Etika Komunikasi Publik Tinggi.
      2. Setiap objek harus memiliki:
         - "topic": Judul topik singkat yang estetis (misal: "Olah Nafas Diafragma", "Seni Menghancurkan Argumen Lawan")
         - "chapterContext": Hubungan bab materi kurikulum retorika terkait (misal: "Bab 2: Fondasi Nafas Oratoris", "Bab 7: Penulisan Naskah Logis")
         - "question": Pertanyaan/pernyataan esai analitis mendalam yang menuntut nalar kritis siswa (berupa kutipan/pernyataan yang harus ditanggapi secara tertulis).
         - "writingGuide": Petunjuk menulis praktis berisi arahan langkah demi langkah bagi siswa untuk mengembangkan draf esai mereka di buku tulis fisik.
         - "keyPoints": Array berisi 3 hingga 4 poin kriteria kunci jawaban indikatif sebagai panduan evaluasi mandiri yang objektif.

      Kembalikan respons dalam format JSON murni berupa ARRAY dengan tepat 2 objek, dengan struktur berikut:
      [
        {
          "topic": "string",
          "chapterContext": "string",
          "question": "string",
          "writingGuide": "string",
          "keyPoints": ["string", "string", "string"]
        },
        {
          "topic": "string",
          "chapterContext": "string",
          "question": "string",
          "writingGuide": "string",
          "keyPoints": ["string", "string", "string"]
        }
      ]

      Berikan hanya JSON murni tanpa menyertakan tanda pembungkus markdown (\`\`\`json) atau teks pengantar lainnya.`,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              topic: { type: Type.STRING },
              chapterContext: { type: Type.STRING },
              question: { type: Type.STRING },
              writingGuide: { type: Type.STRING },
              keyPoints: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: ['topic', 'chapterContext', 'question', 'writingGuide', 'keyPoints']
          }
        }
      }
    });

    const resultText = response.text || '[]';
    res.json(cleanAndParseJSON(resultText));
  } catch (error: any) {
    console.error('AI Essay Quiz Generate Error:', error);
    res.status(500).json({ error: error.message || 'Gagal memproduksi soal essay AI.' });
  }
});

// Serve frontend assets
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Rhetoric server] Running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

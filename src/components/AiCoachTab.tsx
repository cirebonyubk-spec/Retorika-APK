import React, { useState } from 'react';
import { Sparkles, Send, Award, Compass, HelpCircle, Check, Copy, RefreshCw, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function AiCoachTab() {
  const [draftText, setDraftText] = useState('');
  const [grade, setGrade] = useState<number>(8);
  const [focusArea, setFocusArea] = useState('Semua Elemen');
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const sampleDrafts = [
    {
      label: 'Contoh Kelas 7: Kebersihan Kelas',
      text: 'Selamat pagi teman-teman sekalian yang saya sayangi. Hari ini saya mau bicara soal kebersihan kelas kita. Kelas kita kotor sekali akhir-akhir ini. Banyak sampah plastik berserakan di bawah meja. Kita harus rajin piket ya teman-teman agar belajarnya jadi nyaman dan tidak digigit nyamuk. Terima kasih.'
    },
    {
      label: 'Contoh Kelas 8: Pengurangan Sampah Plastik',
      text: 'Teman-teman sekalian, tahukah kalian bahwa setiap kantong plastik yang kita buang akan bertahan ratusan tahun di dalam tanah? Kita sering membeli minuman es kemasan plastik sekali pakai di kantin, lalu langsung membuangnya begitu saja. Bumi kita sedang menangis menahan beban sampah kita. Mari kita bawa botol minum sendiri (tumblr) dari rumah mulai besok. Ini langkah kecil untuk perubahan besar!'
    },
    {
      label: 'Contoh Kelas 9: Harapan Generasi Muda',
      text: 'Pemimpin bangsa masa depan bukanlah mereka yang duduk manis berpangku tangan, melainkan mereka yang berani melangkah meretas batas ketakutan. Hari ini, kita berdiri di ambang kelulusan SMP. Di depan sana, badai tantangan global sudah menanti kita. Kita tidak boleh menjadi pemuda cengeng yang takut bersaing. Kita harus menjadi generasi pembawa obor perubahan demi Indonesia emas.'
    }
  ];

  const handleAnalyze = async () => {
    if (!draftText.trim()) {
      setError('Harap masukkan draf naskah pidato Anda terlebih dahulu.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setAnalysis(null);

    try {
      const response = await fetch('/api/ai/coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ draftText, grade, focusArea }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || 'Terjadi kesalahan sistem.');
      }

      const data = await response.json();
      setAnalysis(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Koneksi ke server AI gagal. Pastikan API Key sudah diset.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
        <h3 className="text-lg font-serif font-bold text-indigo-950 flex items-center gap-2">
          <Sparkles className="text-indigo-600 shrink-0" />
          Coach AI Retorika Mandiri
        </h3>
        <p className="text-slate-700 text-xs mt-1 leading-relaxed">
          Asisten kecerdasan buatan terlatih di bawah kurikulum bimbingan <strong>Jundi Abdul Syahid, S.Pd</strong>. Tulis atau tempelkan draf pidato Anda, lalu biarkan AI menganalisis kekuatan persuasi, integritas argumen, dan memberikan tips pengucapan serta bahasa tubuh yang menakjubkan!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left column: Input Form */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4">
            <h4 className="text-sm font-serif font-bold text-slate-800 border-b border-slate-100 pb-2">
              Draf Pidato Anda
            </h4>

            {/* Quick Templates */}
            <div>
              <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Gunakan Contoh Cepat:
              </label>
              <div className="flex flex-col gap-1.5">
                {sampleDrafts.map((sample, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDraftText(sample.text);
                      setGrade(7 + idx);
                    }}
                    className="text-left text-xs text-indigo-800 hover:bg-indigo-50 border border-indigo-100 rounded-lg p-2 transition-colors font-sans truncate"
                  >
                    {sample.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Config Selectors */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Kelas Siswa:
                </label>
                <select
                  value={grade}
                  onChange={(e) => setGrade(Number(e.target.value))}
                  className="w-full text-xs font-medium border border-slate-200 bg-white rounded-lg p-2 focus:border-indigo-500 focus:outline-hidden"
                >
                  <option value={7}>Kelas 7 (Menengah Pertama)</option>
                  <option value={8}>Kelas 8 (Menengah Madya)</option>
                  <option value={9}>Kelas 9 (Menengah Atas)</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Fokus Analisis:
                </label>
                <select
                  value={focusArea}
                  onChange={(e) => setFocusArea(e.target.value)}
                  className="w-full text-xs font-medium border border-slate-200 bg-white rounded-lg p-2 focus:border-indigo-500 focus:outline-hidden"
                >
                  <option value="Semua Elemen">Semua Elemen</option>
                  <option value="Ethos (Kredibilitas)">Ethos (Kredibilitas)</option>
                  <option value="Pathos (Emosi)">Pathos (Emosi)</option>
                  <option value="Logos (Logika)">Logos (Logika)</option>
                  <option value="Struktur Pembuka & Penutup">Struktur (Opening/Ending)</option>
                </select>
              </div>
            </div>

            {/* Speech Draft Input */}
            <div>
              <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
                Tulis / Tempel Teks Pidato (Min. 30 Kata):
              </label>
              <textarea
                value={draftText}
                onChange={(e) => setDraftText(e.target.value)}
                placeholder="Tuliskan rancangan orasi Anda di sini..."
                rows={10}
                className="w-full text-xs border border-slate-200 rounded-lg p-3 focus:border-indigo-500 focus:outline-hidden font-sans leading-relaxed"
              ></textarea>
              <div className="text-right text-[10px] text-slate-400 font-mono mt-1">
                {draftText.trim().split(/\s+/).filter(Boolean).length} kata
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={handleAnalyze}
              disabled={isLoading}
              className={`w-full py-2.5 rounded-lg text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all ${
                isLoading
                  ? 'bg-slate-400 cursor-not-allowed'
                  : 'bg-indigo-900 hover:bg-indigo-950 shadow-md hover:shadow-lg'
              }`}
            >
              {isLoading ? (
                <>
                  <RefreshCw size={14} className="animate-spin" />
                  Menganalisis Naskah...
                </>
              ) : (
                <>
                  <Send size={14} />
                  Kirim ke Coach AI
                </>
              )}
            </button>

            {error && (
              <div className="bg-red-50 border border-red-100 text-red-700 p-3 rounded-lg text-xs font-sans whitespace-pre-wrap">
                {error}
              </div>
            )}
          </div>
        </div>

        {/* Right column: Results display */}
        <div className="lg:col-span-7">
          {isLoading && (
            <div className="bg-white border border-slate-100 rounded-xl p-12 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full border-4 border-indigo-100 border-t-indigo-600 animate-spin"></div>
              <div>
                <h5 className="text-slate-800 font-serif font-bold text-sm">Menyusun Evaluasi Retorika</h5>
                <p className="text-slate-500 text-xs max-w-xs mt-1">
                  Menganalisis diksi, keseimbangan Aristoteles, susunan kalimat, dan merancang saran penyampaian fisik...
                </p>
              </div>
            </div>
          )}

          {!isLoading && !analysis && (
            <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl p-12 text-center flex flex-col items-center justify-center">
              <HelpCircle size={40} className="text-slate-300 mb-2" />
              <h5 className="text-slate-500 font-serif font-semibold text-sm">Menunggu Masukan Naskah</h5>
              <p className="text-slate-400 text-xs max-w-xs mt-1">
                Silakan tulis draf pidato di kolom kiri, lalu klik tombol "Kirim ke Coach AI" untuk menerima kritik membangun.
              </p>
            </div>
          )}

          {analysis && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Score and Strengths Summary card */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-4 text-center border-b md:border-b-0 md:border-r border-slate-100 pb-4 md:pb-0">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                    Skor Orasi AI
                  </span>
                  <div className="text-5xl font-serif font-black text-indigo-900 my-1">
                    {analysis.score}
                  </div>
                  <div className="flex justify-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={i < Math.round(analysis.score / 20) ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-sans text-slate-500 mt-2 block">
                    Berdasarkan Bobot Kelas {grade}
                  </span>
                </div>

                <div className="md:col-span-8 space-y-3">
                  <div>
                    <h5 className="text-xs font-bold text-slate-800 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                      Kekuatan Draf Anda:
                    </h5>
                    <ul className="list-disc list-inside text-xs text-slate-600 mt-1 pl-1 space-y-1">
                      {analysis.strengths.map((str: string, i: number) => (
                        <li key={i}>{str}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold text-slate-800 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      Perlu Peningkatan:
                    </h5>
                    <ul className="list-disc list-inside text-xs text-slate-600 mt-1 pl-1 space-y-1">
                      {analysis.weaknesses.map((weak: string, i: number) => (
                        <li key={i}>{weak}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Three pillars analysis */}
              <div className="bg-white border border-slate-200 rounded-xl p-5">
                <h4 className="text-sm font-serif font-bold text-slate-800 border-b border-slate-100 pb-2 mb-4">
                  Bedah Tiga Pilar Persuasi (Aristoteles)
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 bg-stone-50 border border-stone-200 rounded-md px-2.5 py-1 inline-block">
                      Ethos (Kredibilitas Pembicara)
                    </h5>
                    <p className="text-xs text-slate-700 mt-1.5 leading-relaxed pl-2">
                      {analysis.ethosAnalysis}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold text-emerald-900 bg-emerald-50 border border-emerald-100 rounded-md px-2.5 py-1 inline-block">
                      Pathos (Ikatan Emosional Audiens)
                    </h5>
                    <p className="text-xs text-slate-700 mt-1.5 leading-relaxed pl-2">
                      {analysis.pathosAnalysis}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold text-indigo-900 bg-indigo-50 border border-indigo-100 rounded-md px-2.5 py-1 inline-block">
                      Logos (Alasan & Struktur Logis)
                    </h5>
                    <p className="text-xs text-slate-700 mt-1.5 leading-relaxed pl-2">
                      {analysis.logosAnalysis}
                    </p>
                  </div>
                </div>
              </div>

              {/* Structure and Delivery advice */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-slate-200 rounded-xl p-5">
                  <h4 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase border-b border-slate-100 pb-2 mb-3">
                    Struktur Narasi Pidato
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed font-sans">
                    {analysis.structureAnalysis}
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4">
                  <div>
                    <h4 className="text-xs font-mono font-bold tracking-wider text-indigo-800 uppercase flex items-center gap-1.5 mb-2">
                      🔊 Cara Pengucapan (Vokal)
                    </h4>
                    <ul className="space-y-1">
                      {analysis.vocalDeliveryTips.map((tip: string, i: number) => (
                        <li key={i} className="text-slate-600 text-xs flex items-start gap-1">
                          <span className="text-indigo-500 mt-0.5">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono font-bold tracking-wider text-indigo-800 uppercase flex items-center gap-1.5 mb-2">
                      🧍 Bahasa Tubuh (Gestur)
                    </h4>
                    <ul className="space-y-1">
                      {analysis.gestureDeliveryTips.map((tip: string, i: number) => (
                        <li key={i} className="text-slate-600 text-xs flex items-start gap-1">
                          <span className="text-indigo-500 mt-0.5">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Improved paragraph snippet */}
              <div className="bg-amber-50/50 border border-amber-300/60 rounded-xl p-5">
                <div className="flex items-center justify-between border-b border-amber-300/30 pb-2 mb-3">
                  <h4 className="text-xs font-mono font-bold tracking-wider text-amber-900 uppercase flex items-center gap-1.5">
                    ✨ Rekomendasi Revisi Paragraf Oratoris
                  </h4>
                  <button
                    onClick={() => handleCopy(analysis.revisedSnippet)}
                    className="flex items-center gap-1 text-[10px] font-mono font-bold text-amber-800 bg-amber-200/40 hover:bg-amber-200 px-2 py-1 rounded-md transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check size={12} className="text-green-700" />
                        Tersalin!
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        Salin Teks
                      </>
                    )}
                  </button>
                </div>
                <p className="text-slate-800 text-xs font-serif italic leading-relaxed whitespace-pre-wrap pl-2 border-l-2 border-amber-500">
                  {analysis.revisedSnippet}
                </p>
                <span className="text-[9px] text-slate-500 block mt-2.5 font-sans italic">
                  *Gunakan teknik penekanan orasi pada frasa puitis di atas untuk menyihir audiens Anda.
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

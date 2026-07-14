import React, { useState } from 'react';
import { Sparkles, Edit3, Award, Send, RefreshCw, Copy, Check, Info } from 'lucide-react';
import { motion } from 'motion/react';

export default function AiSpeechGenTab() {
  const [topic, setTopic] = useState('Pentingnya Gotong Royong di Sekolah');
  const [grade, setGrade] = useState<number>(8);
  const [tone, setTone] = useState('Semangat Membara');
  const [keyword, setKeyword] = useState('kolaborasi');
  const [isLoading, setIsLoading] = useState(false);
  const [speech, setSpeech] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!topic.trim()) {
      setError('Harap masukkan topik pidato Anda terlebih dahulu.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setSpeech(null);

    try {
      const response = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, grade, tone, keyword }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || 'Terjadi kesalahan sistem.');
      }

      const data = await response.json();
      setSpeech(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Koneksi ke server gagal. Pastikan API Key sudah diset.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (text: string, section: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const handleCopyFull = () => {
    if (!speech) return;
    const fullText = `${speech.title}\n\n[PEMBUKA]\n${speech.opening}\n\n[ISI]\n${speech.body}\n\n[PENUTUP]\n${speech.closing}`;
    handleCopy(fullText, 'full');
  };

  return (
    <div className="space-y-6">
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
        <h3 className="text-lg font-serif font-bold text-indigo-950 flex items-center gap-2">
          <Sparkles className="text-indigo-600 shrink-0" />
          Pembuat Pidato Otomatis (AI Speech Writer)
        </h3>
        <p className="text-slate-700 text-xs mt-1 leading-relaxed">
          Mengalami kebuntuan menulis naskah pidato? Ketikkan tema apa saja yang Anda inginkan, pilih sasaran tingkatan kelas serta gaya penyampaian, lalu saksikan bagaimana asisten AI cerdas kami menyusun struktur naskah oratoris yang kaya akan majas dan kearifan lokal!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Input Form */}
        <div className="lg:col-span-4">
          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4">
            <h4 className="text-sm font-serif font-bold text-slate-800 border-b border-slate-100 pb-2">
              Konfigurasi Pidato
            </h4>

            {/* Topic Input */}
            <div>
              <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
                Topik Pidato:
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Misal: Dampak Negatif Gadget, Adat Sopan Santun..."
                className="w-full text-xs border border-slate-200 rounded-lg p-2.5 focus:border-indigo-500 focus:outline-hidden font-sans font-medium"
              />
            </div>

            {/* Grade Option */}
            <div>
              <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
                Tingkat Kesulitan:
              </label>
              <select
                value={grade}
                onChange={(e) => setGrade(Number(e.target.value))}
                className="w-full text-xs font-medium border border-slate-200 bg-white rounded-lg p-2.5 focus:border-indigo-500 focus:outline-hidden"
              >
                <option value={7}>Kelas 7 (Sederhana & Ekspresif)</option>
                <option value={8}>Kelas 8 (Persuasif & Naratif)</option>
                <option value={9}>Kelas 9 (Visioner & Struktural)</option>
              </select>
            </div>

            {/* Tone selector */}
            <div>
              <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
                Gaya Penyampaian (Tone):
              </label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full text-xs font-medium border border-slate-200 bg-white rounded-lg p-2.5 focus:border-indigo-500 focus:outline-hidden"
              >
                <option value="Semasa Membara">Semangat Membara (Oratoris & Patriotik)</option>
                <option value="Tenang & Bijaksana">Tenang & Bijaksana (Reflektif & Filosofis)</option>
                <option value="Puitis & Menyentuh">Puitis & Menyentuh (Menyentuh Kalbu/Pathos)</option>
                <option value="Akademis & Logis">Akademis & Logis (Sarat Data/Logos)</option>
              </select>
            </div>

            {/* Required keyword */}
            <div>
              <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
                Kata Kunci Wajib (Opsional):
              </label>
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Misal: disiplin, toleransi, teknologi..."
                className="w-full text-xs border border-slate-200 rounded-lg p-2.5 focus:border-indigo-500 focus:outline-hidden font-sans"
              />
            </div>

            {/* Generate Action Button */}
            <button
              onClick={handleGenerate}
              disabled={isLoading}
              className={`w-full py-2.5 rounded-lg text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all ${
                isLoading
                  ? 'bg-slate-400 cursor-not-allowed'
                  : 'bg-indigo-900 hover:bg-indigo-950 shadow-md'
              }`}
            >
              {isLoading ? (
                <>
                  <RefreshCw size={14} className="animate-spin" />
                  Menenun Naskah Pidato...
                </>
              ) : (
                <>
                  <Sparkles size={14} />
                  Buat Naskah Pidato
                </>
              )}
            </button>

            {error && (
              <div className="bg-red-50 border border-red-100 text-red-700 p-3 rounded-lg text-xs whitespace-pre-wrap">
                {error}
              </div>
            )}
          </div>
        </div>

        {/* Right Output Area */}
        <div className="lg:col-span-8">
          {isLoading && (
            <div className="bg-white border border-slate-200 rounded-xl p-16 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-14 h-14 rounded-full border-4 border-indigo-100 border-t-indigo-600 animate-spin"></div>
              <div>
                <h5 className="text-slate-800 font-serif font-bold text-base">Sedang Merangkai Kosakata</h5>
                <p className="text-slate-500 text-xs max-w-sm mt-1 leading-relaxed">
                  Asisten AI sedang menyusun alur berpikir logis, menyuntikkan teknik majas pengulangan rima puitis, serta merumuskan pembuka yang menyedot perhatian...
                </p>
              </div>
            </div>
          )}

          {!isLoading && !speech && (
            <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl p-16 text-center flex flex-col items-center justify-center">
              <Edit3 size={44} className="text-slate-300 mb-2" />
              <h5 className="text-slate-500 font-serif font-semibold text-sm">Naskah Siap Dibuat</h5>
              <p className="text-slate-400 text-xs max-w-xs mt-1">
                Atur topik serta gaya di kolom sebelah kiri, kemudian klik tombol "Buat Naskah Pidato" untuk memproduksi mahakarya retorika Anda.
              </p>
            </div>
          )}

          {speech && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden"
            >
              {/* Output Header */}
              <div className="bg-indigo-50/50 px-6 py-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-800 uppercase block">
                    Naskah Pidato Kelas {grade} • {tone}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mt-0.5">
                    {speech.title}
                  </h3>
                </div>

                <button
                  onClick={handleCopyFull}
                  className="self-start sm:self-center shrink-0 flex items-center gap-1 text-xs font-semibold text-indigo-900 bg-indigo-200/50 hover:bg-indigo-200 px-3 py-1.5 rounded-lg transition-colors"
                >
                  {copiedSection === 'full' ? (
                    <>
                      <Check size={14} className="text-green-700" />
                      Tersalin Semua!
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      Salin Utuh
                    </>
                  )}
                </button>
              </div>

              {/* Speech Parts */}
              <div className="p-6 space-y-6">
                {/* Opening Section */}
                <div className="space-y-1 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Bagian 1: Pembuka (Opening)
                    </span>
                    <button
                      onClick={() => handleCopy(speech.opening, 'opening')}
                      className="text-[10px] text-slate-400 hover:text-slate-800 flex items-center gap-0.5"
                    >
                      {copiedSection === 'opening' ? 'Tersalin' : 'Salin bagian'}
                    </button>
                  </div>
                  <p className="text-slate-800 text-sm font-serif italic leading-relaxed pl-4 border-l-2 border-indigo-500 whitespace-pre-wrap">
                    {speech.opening}
                  </p>
                </div>

                {/* Body Section */}
                <div className="space-y-1 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Bagian 2: Isi Utama (Body of Speech)
                    </span>
                    <button
                      onClick={() => handleCopy(speech.body, 'body')}
                      className="text-[10px] text-slate-400 hover:text-slate-800 flex items-center gap-0.5"
                    >
                      {copiedSection === 'body' ? 'Tersalin' : 'Salin bagian'}
                    </button>
                  </div>
                  <p className="text-slate-800 text-sm font-serif italic leading-relaxed pl-4 border-l-2 border-amber-500 whitespace-pre-wrap">
                    {speech.body}
                  </p>
                </div>

                {/* Closing Section */}
                <div className="space-y-1 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Bagian 3: Penutup & Seruan Aksi (Closing)
                    </span>
                    <button
                      onClick={() => handleCopy(speech.closing, 'closing')}
                      className="text-[10px] text-slate-400 hover:text-slate-800 flex items-center gap-0.5"
                    >
                      {copiedSection === 'closing' ? 'Tersalin' : 'Salin bagian'}
                    </button>
                  </div>
                  <p className="text-slate-800 text-sm font-serif italic leading-relaxed pl-4 border-l-2 border-indigo-500 whitespace-pre-wrap">
                    {speech.closing}
                  </p>
                </div>

                {/* Techniques used & Jundi Abdul Syahid's feedback */}
                <div className="border-t border-slate-100 pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                    <h5 className="text-xs font-mono font-bold text-slate-500 uppercase mb-2">
                      🛠️ Alat Retorika Terpasang:
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {speech.techniquesUsed.map((tech: string, i: number) => (
                        <span key={i} className="bg-white border border-slate-200 text-slate-700 text-[10px] font-semibold px-2.5 py-0.5 rounded-full shadow-2xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-indigo-50/50 rounded-xl p-4 border border-indigo-500/10">
                    <h5 className="text-xs font-serif font-bold text-indigo-900 mb-1 flex items-center gap-1">
                      <Award size={14} className="text-indigo-700" />
                      Catatan Penyusun Jundi Abdul Syahid, S.Pd:
                    </h5>
                    <p className="text-slate-700 text-xs font-sans italic leading-relaxed">
                      "{speech.coachNotes}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

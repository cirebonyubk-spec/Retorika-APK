import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  CheckCircle, 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  ListOrdered, 
  Check, 
  FileText, 
  HelpCircle, 
  CornerDownRight, 
  Flame, 
  Notebook,
  ExternalLink,
  Sparkles,
  Cpu
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { essayQuestions, EssayQuestion } from '../data/essayQuestions';

export default function AiQuizTab() {
  const [selectedQuestionId, setSelectedQuestionId] = useState<number>(1);
  const [showAnswerGuide, setShowAnswerGuide] = useState<boolean>(false);
  const [completedQuestions, setCompletedQuestions] = useState<number[]>([]);
  const [streakCount, setStreakCount] = useState<number>(0);
  const [lastCompletedDateStr, setLastCompletedDateStr] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [gradeFilter, setGradeFilter] = useState<number | 'all'>('all');
  const [viewMode, setViewMode] = useState<'daily' | 'ai_generator' | 'catalog'>('daily');

  // States for AI Essay Quiz Generator (exactly 2 questions suitable for grade 7-9)
  const [aiGrade, setAiGrade] = useState<number>(7);
  const [aiTopicInput, setAiTopicInput] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generationError, setGenerationError] = useState<string | null>(null);
  const [aiQuestions, setAiQuestions] = useState<any[]>([]);
  const [completedAiQuestionIdxs, setCompletedAiQuestionIdxs] = useState<number[]>([]);
  const [showAiAnswerGuide, setShowAiAnswerGuide] = useState<boolean[]>([]);

  // Today's date info in Indonesian
  const today = new Date();
  const formatIndonesianDate = (date: Date) => {
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Deterministic question ID for today (1 to 100 based on calendar days)
  const getTodayQuestionId = (): number => {
    const start = new Date(2026, 0, 1); // Epoch: Jan 1, 2026
    const diff = today.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayIndex = Math.floor(diff / oneDay);
    // Modulo 100 to cycle through 100 questions, + 1 to make it 1-based index
    return (Math.abs(dayIndex) % 100) + 1;
  };

  const todayQuestionId = getTodayQuestionId();

  // Load completed questions from localStorage on mount
  useEffect(() => {
    const savedCompleted = localStorage.getItem('retorika_completed_essays');
    if (savedCompleted) {
      try {
        setCompletedQuestions(JSON.parse(savedCompleted));
      } catch (e) {
        console.error(e);
      }
    }

    const savedStreak = localStorage.getItem('retorika_essay_streak');
    if (savedStreak) {
      setStreakCount(parseInt(savedStreak, 10));
    }

    const savedLastDate = localStorage.getItem('retorika_essay_last_date');
    if (savedLastDate) {
      setLastCompletedDateStr(savedLastDate);
    }

    // Load saved AI questions if any exist
    const savedAiQuestions = localStorage.getItem('retorika_saved_ai_essay_questions');
    if (savedAiQuestions) {
      try {
        const parsed = JSON.parse(savedAiQuestions);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setAiQuestions(parsed);
          setShowAiAnswerGuide(new Array(parsed.length).fill(false));
        }
      } catch (e) {
        console.error(e);
      }
    }

    // Set today's question as the default active question
    setSelectedQuestionId(todayQuestionId);
  }, [todayQuestionId]);

  // Set to today's question helper
  const handleSelectToday = () => {
    setSelectedQuestionId(todayQuestionId);
    setViewMode('daily');
    setShowAnswerGuide(false);
  };

  // AI Generation fetch handler
  const handleGenerateAiQuestions = async () => {
    setIsGenerating(true);
    setGenerationError(null);
    try {
      const response = await fetch('/api/ai/quiz/essay-generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          grade: aiGrade,
          topic: aiTopicInput.trim() || 'Prinsip Retorika Dasar'
        })
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || 'Gagal menghasilkan soal dari AI. Silakan coba sesaat lagi.');
      }

      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        setAiQuestions(data);
        setCompletedAiQuestionIdxs([]);
        setShowAiAnswerGuide(new Array(data.length).fill(false));
        localStorage.setItem('retorika_saved_ai_essay_questions', JSON.stringify(data));
      } else {
        throw new Error('Respons AI tidak berbentuk array kuis yang valid.');
      }
    } catch (err: any) {
      console.error(err);
      setGenerationError(err.message || 'Terjadi gangguan koneksi dengan model AI.');
    } finally {
      setIsGenerating(false);
    }
  };

  // Toggle complete state of currently selected question
  const handleToggleComplete = (qId: number) => {
    let newCompleted = [...completedQuestions];
    const isNowCompleted = !newCompleted.includes(qId);
    
    if (isNowCompleted) {
      newCompleted.push(qId);
      
      // Streak calculation
      const todayStr = today.toDateString();
      if (lastCompletedDateStr !== todayStr) {
        let newStreak = streakCount;
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toDateString();

        if (lastCompletedDateStr === yesterdayStr || lastCompletedDateStr === '') {
          newStreak += 1;
        } else {
          newStreak = 1; // reset streak if gap exists
        }
        setStreakCount(newStreak);
        setLastCompletedDateStr(todayStr);
        localStorage.setItem('retorika_essay_streak', newStreak.toString());
        localStorage.setItem('retorika_essay_last_date', todayStr);
      }
    } else {
      newCompleted = newCompleted.filter(id => id !== qId);
    }

    setCompletedQuestions(newCompleted);
    localStorage.setItem('retorika_completed_essays', JSON.stringify(newCompleted));
  };

  const currentQuestion = essayQuestions.find(q => q.id === selectedQuestionId) || essayQuestions[0];

  // Filtering for catalog mode
  const filteredQuestions = essayQuestions.filter(q => {
    const matchesSearch = 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.chapterContext.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesGrade = gradeFilter === 'all' || q.grade === gradeFilter;

    return matchesSearch && matchesGrade;
  });

  return (
    <div className="space-y-6">
      {/* Upper header section */}
      <div className="bg-gradient-to-br from-indigo-950 to-slate-900 border border-indigo-900 p-6 md:p-8 rounded-3xl text-white shadow-lg relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-amber-500 text-amber-950 text-[10px] font-bold px-2.5 py-0.5 rounded-full font-mono uppercase tracking-wider">
                PROGRAM 100 HARI
              </span>
              <span className="bg-indigo-800 text-indigo-100 text-[10px] font-bold px-2.5 py-0.5 rounded-full font-mono uppercase">
                Metode Essay Mandiri
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-black tracking-tight">
              Kuis Harian Essay Retorika
            </h2>
            <p className="text-slate-300 text-xs md:text-sm mt-2 max-w-2xl leading-relaxed">
              Selamat datang di Program Pengasahan Vokal dan Nalar Retorika. Setiap hari, sistem menjadwalkan <strong>satu soal essay mendalam</strong> secara otomatis untuk dikerjakan langsung di <strong>buku tulis fisik masing-masing</strong>. Kupas tuntas materi yang telah dipelajari dengan kejujuran intelektual tinggi.
            </p>
          </div>

          {/* Quick stats board */}
          <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl shrink-0">
            <div className="flex items-center gap-2">
              <div className="bg-amber-500/20 p-2 rounded-xl">
                <Flame size={20} className="text-amber-400 fill-amber-400" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block font-mono">STREAK BELAJAR</span>
                <span className="font-mono text-base font-black text-white">{streakCount} Hari</span>
              </div>
            </div>

            <div className="w-px h-8 bg-white/10" />

            <div>
              <span className="text-[10px] text-slate-400 block font-mono">SELESAI DI BUKU</span>
              <span className="font-mono text-base font-black text-white">
                {completedQuestions.length} <span className="text-xs text-slate-400 font-normal">/ 100</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mode navigation bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white border border-slate-200 p-3 rounded-2xl shadow-2xs">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={() => setViewMode('daily')}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              viewMode === 'daily'
                ? 'bg-indigo-900 text-white'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Calendar size={14} />
            Soal Hari Ini
          </button>

          <button
            onClick={() => {
              setViewMode('ai_generator');
              setShowAnswerGuide(false);
            }}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              viewMode === 'ai_generator'
                ? 'bg-indigo-900 text-white'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Sparkles size={14} className="text-amber-500 animate-pulse fill-amber-500" />
            Pembuat Soal AI (2 Soal)
          </button>
          
          <button
            onClick={() => {
              setViewMode('catalog');
              setShowAnswerGuide(false);
            }}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              viewMode === 'catalog'
                ? 'bg-indigo-900 text-white'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <ListOrdered size={14} />
            Katalog 100 Soal
          </button>
        </div>

        {viewMode === 'daily' && (
          <div className="flex items-center gap-1 text-slate-500 font-medium text-xs w-full sm:w-auto justify-end">
            <Calendar size={14} className="text-indigo-600 shrink-0" />
            <span className="font-mono text-slate-700">{formatIndonesianDate(today)}</span>
          </div>
        )}
      </div>

      {/* Main Grid: split according to selected view mode */}
      {viewMode === 'ai_generator' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Configurator Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="bg-indigo-50 border border-indigo-100 text-indigo-950 text-[10px] font-black px-2.5 py-1 rounded-md font-mono uppercase">
                  ✨ GENERATOR SOAL ESSAY AI
                </span>
                <h3 className="text-lg font-serif font-black text-slate-900 mt-2">
                  Kustomisasi Kuis Kelas 7-9
                </h3>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                  Cari topik, saring materi retorika, lalu instruksikan AI memproduksi tepat <strong>dua (2) pernyataan orasi</strong> berkualitas tinggi.
                </p>
              </div>

              {/* Selector Kelas */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-700 block uppercase font-mono">
                  Pilih Tingkat Kelas:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[7, 8, 9].map(grade => (
                    <button
                      key={grade}
                      type="button"
                      onClick={() => setAiGrade(grade)}
                      className={`py-2.5 px-4 rounded-xl text-xs font-bold border transition-all ${
                        aiGrade === grade
                          ? 'bg-indigo-900 text-white border-indigo-900 shadow-xs'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Kelas {grade}
                    </button>
                  ))}
                </div>
                <p className="text-[10px] text-slate-400 italic">
                  {aiGrade === 7 && "🎯 Kelas 7: Berfokus pada Vokal, Pernapasan, Mentalitas, dan Dasar Keberanian."}
                  {aiGrade === 8 && "🎯 Kelas 8: Berfokus pada Kerangka Orasi, Seni Persuasi, Majas, dan Kerangka Pidato."}
                  {aiGrade === 9 && "🎯 Kelas 9: Berfokus pada Orasi Tokoh Akbar, Debat, Retorika Digital, dan Publik Tinggi."}
                </p>
              </div>

              {/* Topic Search & Input */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-700 block uppercase font-mono">
                  Cari / Masukkan Topik Pembahasan:
                </label>
                <input
                  type="text"
                  value={aiTopicInput}
                  onChange={(e) => setAiTopicInput(e.target.value)}
                  placeholder="Contoh: Seni Persuasi Aristoteles, Debat Aktif, Demam Panggung..."
                  className="w-full bg-slate-50 text-xs border border-slate-200 px-3.5 py-3 rounded-xl focus:border-indigo-600 focus:outline-hidden font-medium text-slate-800"
                />

                {/* Quick select buttons to search/fill common topics */}
                <div className="space-y-1 pt-1">
                  <span className="text-[9px] font-bold text-slate-400 block uppercase font-mono">Rekomendasi Topik Cepat:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'Menaklukkan Kegugupan',
                      'Olah Suara Vokal & Artikulasi',
                      'Teknik Trikolon & Majas',
                      'Seni Menangkis Argumen Lawan',
                      'Metode Monroe’s Motivated Sequence',
                      'Gaya Orasi Bung Karno'
                    ].map(topic => (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => setAiTopicInput(topic)}
                        className="text-[10px] bg-indigo-50/50 hover:bg-indigo-50 border border-indigo-100/50 text-indigo-950 font-medium px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleGenerateAiQuestions}
                disabled={isGenerating}
                className={`w-full py-3.5 px-5 rounded-xl text-xs font-bold text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                  isGenerating 
                    ? 'bg-indigo-900/80 cursor-not-allowed animate-pulse' 
                    : 'bg-gradient-to-r from-indigo-950 via-indigo-900 to-indigo-800 hover:opacity-95'
                }`}
              >
                <Sparkles size={14} className={isGenerating ? 'animate-spin text-amber-400' : 'text-amber-400 fill-amber-400'} />
                {isGenerating ? 'Meramu 2 Soal Kelas Kustom...' : '✨ Buat 2 Pertanyaan AI Sesuai Kelas'}
              </button>

              {generationError && (
                <div className="p-3 bg-red-50 border border-red-100 text-red-800 text-xs rounded-xl flex items-start gap-2 leading-relaxed animate-fade-in">
                  <div className="bg-red-100 p-1 rounded-lg text-red-800 shrink-0 mt-0.5">
                    <HelpCircle size={14} />
                  </div>
                  <span>{generationError}</span>
                </div>
              )}
            </div>

            <div className="bg-amber-50/70 border border-amber-200/50 rounded-2xl p-5 text-xs text-amber-900 leading-relaxed">
              <h4 className="font-bold flex items-center gap-1.5 mb-1 text-amber-950">
                <Notebook size={14} /> Aturan Emas 2 Pernyataan
              </h4>
              <p>
                Sesuai filosofi retorika mendalam Jundi Abdul Syahid, S.Pd, <strong>dua pertanyaan</strong> adalah beban kognitif paling optimal dalam satu pertemuan belajar agar siswa fokus pada penulisan esai yang berbobot dan bermutu tinggi tanpa terburu-buru.
              </p>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-7 space-y-6">
            {aiQuestions.length === 0 ? (
              <div className="bg-white border border-dashed border-slate-300 rounded-3xl p-12 text-center text-slate-500 space-y-4">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-900 rounded-full flex items-center justify-center mx-auto">
                  <Sparkles size={24} className="text-indigo-600 animate-pulse" />
                </div>
                <div className="max-w-md mx-auto space-y-1.5">
                  <h4 className="text-sm font-bold text-slate-800 font-serif">Menunggu Kustomisasi Anda</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Silakan tentukan kelas (7, 8, atau 9) dan topik di sebelah kiri, kemudian jalankan pembuat AI untuk mendapatkan 2 pertanyaan esai harian yang diramu khusus bagi nalar retoris Anda.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex justify-between items-center bg-emerald-50 border border-emerald-100 p-4 rounded-2xl">
                  <div className="flex items-center gap-2 text-emerald-900">
                    <CheckCircle size={18} className="text-emerald-700 shrink-0" />
                    <span className="text-xs font-bold font-serif">Kuis AI Berhasil Diproduksi! (2 Pernyataan Terjadwal)</span>
                  </div>
                  <span className="text-[10px] bg-emerald-200 text-emerald-950 px-2.5 py-0.5 rounded-full font-bold font-mono">
                    KELAS {aiGrade}
                  </span>
                </div>

                {aiQuestions.map((q, idx) => {
                  const isCompleted = completedAiQuestionIdxs.includes(idx);
                  const isGuideOpen = showAiAnswerGuide[idx];

                  return (
                    <div key={idx} className="bg-white border border-slate-200 rounded-3xl shadow-xs overflow-hidden">
                      <div className="h-4 bg-indigo-900 w-full" />
                      
                      <div className="p-6 md:p-8 space-y-6 relative">
                        {/* Notebook binding rings */}
                        <div className="absolute top-8 left-0 flex flex-col gap-4 -translate-x-1.5 pointer-events-none">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="w-3 h-8 bg-slate-300 rounded-full border border-slate-400/40 shadow-inner" />
                          ))}
                        </div>

                        <div className="pl-6 space-y-5">
                          {/* Top row */}
                          <div className="flex flex-wrap items-center gap-2 justify-between">
                            <span className="bg-indigo-50 border border-indigo-100 text-indigo-900 text-[10px] font-black px-2.5 py-1 rounded-md font-mono">
                              PERNYATAAN #{idx + 1} DARI 2
                            </span>

                            {isCompleted ? (
                              <span className="flex items-center gap-1 text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-100 px-2.5 py-1 rounded-md font-bold">
                                <CheckCircle size={12} /> Selesai Ditulis di Buku
                              </span>
                            ) : (
                              <span className="text-[10px] text-amber-600 font-semibold bg-amber-50 border border-amber-100 px-2.5 py-1 rounded-md">
                                Belum Ditulis
                              </span>
                            )}
                          </div>

                          {/* Chapter Context */}
                          <div className="border-l-2 border-indigo-600 pl-3">
                            <span className="text-[10px] text-indigo-900 font-bold block uppercase tracking-wider font-mono">MATERI/KONTEKS:</span>
                            <span className="text-xs font-bold text-slate-700">{q.chapterContext}</span>
                          </div>

                          {/* Topic and Big Question */}
                          <div className="space-y-2">
                            <span className="text-slate-400 text-[10px] font-bold font-mono tracking-wider block uppercase font-mono">TOPIK: {q.topic}</span>
                            <h3 className="text-base md:text-lg font-serif font-black text-slate-900 leading-relaxed">
                              "{q.question}"
                            </h3>
                          </div>

                          {/* Step Guide Info */}
                          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
                            <div className="flex gap-2 text-slate-700">
                              <FileText size={16} className="text-indigo-900 mt-0.5 shrink-0" />
                              <div className="space-y-1">
                                <h4 className="text-xs font-bold text-slate-900 font-serif">Petunjuk Penulisan Esai:</h4>
                                <p className="text-xs text-slate-600 leading-relaxed italic">
                                  {q.writingGuide}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Controls */}
                          <div className="flex flex-col sm:flex-row gap-3 pt-1">
                            <button
                              type="button"
                              onClick={() => {
                                let newCompleted = [...completedAiQuestionIdxs];
                                if (newCompleted.includes(idx)) {
                                  newCompleted = newCompleted.filter(item => item !== idx);
                                } else {
                                  newCompleted.push(idx);
                                }
                                setCompletedAiQuestionIdxs(newCompleted);
                              }}
                              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer ${
                                isCompleted
                                  ? 'bg-emerald-50 text-emerald-900 border border-emerald-300 hover:bg-emerald-100'
                                  : 'bg-indigo-900 text-white hover:bg-indigo-950'
                              }`}
                            >
                              {isCompleted ? (
                                <>
                                  <Check size={14} className="stroke-[3]" />
                                  Batalkan Selesai
                                </>
                              ) : (
                                <>
                                  <CheckCircle size={14} />
                                  Selesai Ditulis di Buku
                                </>
                              )}
                            </button>

                            <button
                              type="button"
                              onClick={() => {
                                const newShow = [...showAiAnswerGuide];
                                newShow[idx] = !newShow[idx];
                                setShowAiAnswerGuide(newShow);
                              }}
                              className={`px-4 py-3 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                                isGuideOpen
                                  ? 'bg-amber-100 text-amber-950 border-amber-300'
                                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                              }`}
                            >
                              {isGuideOpen ? 'Sembunyikan Kunci' : 'Ulasan Kunci Jawaban'}
                            </button>
                          </div>

                          {/* Dynamic key points */}
                          <AnimatePresence>
                            {isGuideOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden border-t border-slate-100 pt-5 space-y-3"
                              >
                                <div className="bg-amber-50/50 border border-amber-200/60 rounded-2xl p-5 space-y-3">
                                  <div className="flex items-center gap-2 text-amber-900">
                                    <HelpCircle size={15} className="text-amber-700 shrink-0" />
                                    <h4 className="text-xs font-bold uppercase tracking-wider font-mono">
                                      Kriteria Penilaian Mandiri:
                                    </h4>
                                  </div>
                                  <ul className="space-y-2">
                                    {q.keyPoints.map((point: string, pIdx: number) => (
                                      <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                                        <span className="bg-amber-200 text-amber-950 w-5 h-5 rounded-full flex items-center justify-center font-mono font-bold text-[10px] shrink-0 mt-0.5">
                                          {pIdx + 1}
                                        </span>
                                        <span className="leading-relaxed font-medium">{point}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left side column: Question details in Daily or Selected mode */}
          <div className={`${viewMode === 'daily' ? 'lg:col-span-12' : 'lg:col-span-8'} space-y-6`}>
            
            {/* Daily prompt notice banner */}
            {viewMode === 'daily' && selectedQuestionId === todayQuestionId && (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
                <div className="bg-amber-100 p-1.5 rounded-lg text-amber-800 shrink-0 mt-0.5">
                  <Award size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-amber-900">Tantangan Harian Aktif!</h4>
                  <p className="text-[11px] text-amber-800 mt-0.5">
                    Soal di bawah ini adalah tantangan yang terjadwal khusus untuk tanggal hari ini. Luangkan waktu 15 menit untuk memikirkan jawaban terbaik Anda lalu tulislah secara mendalam di buku jurnal Anda.
                  </p>
                </div>
              </div>
            )}
  
            {/* Notebook Styled Question Card */}
            <div className="bg-white border border-slate-200 rounded-3xl shadow-xs overflow-hidden">
              {/* Red margin header decoration mimicking lined paper head */}
              <div className="h-4 bg-indigo-900 w-full" />
              
              <div className="p-6 md:p-8 space-y-6 relative">
                {/* Notebook binding rings absolute visual decorations */}
                <div className="absolute top-8 left-0 flex flex-col gap-4 -translate-x-1.5 pointer-events-none">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-3 h-8 bg-slate-300 rounded-full border border-slate-400/40 shadow-inner" />
                  ))}
                </div>
  
                <div className="pl-6 space-y-6">
                  {/* Meta details */}
                  <div className="flex flex-wrap items-center gap-2 justify-between">
                    <div className="flex items-center gap-2">
                      <span className="bg-indigo-50 border border-indigo-100 text-indigo-900 text-[10px] font-black px-2.5 py-1 rounded-md font-mono">
                        SOAL #{currentQuestion.id} / 100
                      </span>
                      <span className="bg-slate-100 text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-md">
                        Kelas {currentQuestion.grade}
                      </span>
                    </div>
  
                    {completedQuestions.includes(currentQuestion.id) ? (
                      <span className="flex items-center gap-1 text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-100 px-2.5 py-1 rounded-md font-bold">
                        <CheckCircle size={12} /> Selesai Ditulis di Buku
                      </span>
                    ) : (
                      <span className="text-[10px] text-amber-600 font-semibold bg-amber-50 border border-amber-100 px-2.5 py-1 rounded-md">
                        Belum Ditulis
                      </span>
                    )}
                  </div>
  
                  {/* Chapter Context path */}
                  <div className="border-l-2 border-indigo-600 pl-3">
                    <span className="text-[10px] text-indigo-900 font-bold block uppercase tracking-wider font-mono">TERKAI BAB MATERI:</span>
                    <span className="text-xs font-bold text-slate-700">{currentQuestion.chapterContext}</span>
                  </div>
  
                  {/* Topic and Big Question */}
                  <div className="space-y-2">
                    <span className="text-slate-400 text-[10px] font-bold font-mono tracking-wider block uppercase">TOPIK ESAY: {currentQuestion.topic}</span>
                    <h3 className="text-lg md:text-xl font-serif font-black text-slate-900 leading-relaxed">
                      "{currentQuestion.question}"
                    </h3>
                  </div>
  
                  {/* Step Guide Info */}
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
                    <div className="flex gap-2 text-slate-700">
                      <FileText size={16} className="text-indigo-900 mt-0.5 shrink-0" />
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold text-slate-900">Petunjuk Menulis:</h4>
                        <p className="text-xs text-slate-600 leading-relaxed italic">
                          {currentQuestion.writingGuide}
                        </p>
                      </div>
                    </div>
                  </div>
  
                  {/* Action controls for writing in notebook */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      onClick={() => handleToggleComplete(currentQuestion.id)}
                      className={`flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer ${
                        completedQuestions.includes(currentQuestion.id)
                          ? 'bg-emerald-50 text-emerald-900 border border-emerald-300 hover:bg-emerald-100'
                          : 'bg-indigo-900 text-white hover:bg-indigo-950 shadow-md'
                      }`}
                    >
                      {completedQuestions.includes(currentQuestion.id) ? (
                        <>
                          <Check size={16} className="stroke-[3]" />
                          Batalkan Status Selesai
                        </>
                      ) : (
                        <>
                          <CheckCircle size={16} />
                          Selesai Menulis di Buku Fisik
                        </>
                      )}
                    </button>
  
                    <button
                      onClick={() => setShowAnswerGuide(!showAnswerGuide)}
                      className={`px-5 py-3.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                        showAnswerGuide
                          ? 'bg-amber-100 text-amber-950 border-amber-300'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {showAnswerGuide ? 'Sembunyikan Panduan Kunci' : 'Buka Panduan/Ulasan Kunci Jawaban'}
                    </button>
                  </div>
  
                  {/* Self-evaluation guide (Revealed on click) */}
                  <AnimatePresence>
                    {showAnswerGuide && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden border-t border-slate-100 pt-6 space-y-4"
                      >
                        <div className="bg-amber-50/50 border border-amber-200/60 rounded-2xl p-5 space-y-3">
                          <div className="flex items-center gap-2 text-amber-900">
                            <HelpCircle size={16} className="text-amber-700 shrink-0" />
                            <h4 className="text-xs font-bold uppercase tracking-wider font-mono">
                              Kriteria & Poin Kunci Jawaban Indikatif:
                            </h4>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            Gunakan poin-poin di bawah ini untuk mengevaluasi secara mandiri apakah tulisan essay Anda sudah mencakup aspek penting berikut:
                          </p>
                          <ul className="space-y-2 mt-1">
                            {currentQuestion.keyPoints.map((point, index) => (
                              <li key={index} className="flex items-start gap-2.5 text-xs text-slate-700">
                                <span className="bg-amber-200 text-amber-950 w-5 h-5 rounded-full flex items-center justify-center font-mono font-bold text-[10px] shrink-0 mt-0.5">
                                  {index + 1}
                                </span>
                                <span className="leading-relaxed font-medium">{point}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="bg-white/60 border border-slate-200/50 rounded-xl p-3 text-[11px] text-slate-500 mt-2 flex items-center gap-2">
                            <Notebook size={14} className="text-slate-400 shrink-0" />
                            <span>
                              Nilailah pekerjaan Anda dengan penuh objektivitas demi kemajuan penalaran retoris Anda sendiri.
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
  
                  {/* Helper navigator at bottom of detail card */}
                  <div className="flex justify-between items-center border-t border-slate-100 pt-6">
                    <button
                      disabled={selectedQuestionId <= 1}
                      onClick={() => {
                        setSelectedQuestionId(prev => Math.max(1, prev - 1));
                        setShowAnswerGuide(false);
                      }}
                      className="flex items-center gap-1.5 text-xs font-bold text-indigo-900 disabled:text-slate-300 disabled:cursor-not-allowed hover:underline"
                    >
                      <ChevronLeft size={16} />
                      Sebelumnya
                    </button>
  
                    <button
                      onClick={handleSelectToday}
                      className="text-[10px] text-indigo-700 font-bold px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full hover:bg-indigo-100 transition-colors"
                    >
                      Kembali ke Soal Hari Ini
                    </button>
  
                    <button
                      disabled={selectedQuestionId >= 100}
                      onClick={() => {
                        setSelectedQuestionId(prev => Math.min(100, prev + 1));
                        setShowAnswerGuide(false);
                      }}
                      className="flex items-center gap-1.5 text-xs font-bold text-indigo-900 disabled:text-slate-300 disabled:cursor-not-allowed hover:underline"
                    >
                      Berikutnya
                      <ChevronRight size={16} />
                    </button>
                  </div>
  
                </div>
              </div>
            </div>
          </div>
  
          {/* Right side catalog column (Only shown in catalog mode) */}
          {viewMode === 'catalog' && (
            <div className="lg:col-span-4 space-y-4">
              
              {/* Search and Filters side panel */}
              <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-4 shadow-2xs">
                <h3 className="text-xs font-serif font-black text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                  Filter & Navigasi Katalog
                </h3>
  
                {/* Search Box */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 block uppercase font-mono">Cari Topik/Kata Kunci:</label>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari materi, bab, dll..."
                    className="w-full bg-slate-50 text-xs border border-slate-200 px-3 py-2 rounded-lg focus:border-indigo-600 focus:outline-hidden"
                  />
                </div>
  
                {/* Grade select filter */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 block uppercase font-mono">Tingkat Kelas:</label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {(['all', 7, 8, 9] as const).map(g => (
                      <button
                        key={g}
                        onClick={() => setGradeFilter(g)}
                        className={`py-1.5 rounded-lg text-[10px] font-bold border transition-colors ${
                          gradeFilter === g
                            ? 'bg-indigo-900 text-white border-indigo-900'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {g === 'all' ? 'Semua' : `Kls ${g}`}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
  
              {/* List scroll container */}
              <div className="bg-white border border-slate-200 rounded-2xl shadow-2xs overflow-hidden">
                <div className="p-3 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-slate-500 font-mono uppercase font-mono">DAFTAR SOAL ({filteredQuestions.length})</span>
                  <span className="text-[9px] bg-slate-200 text-slate-800 px-2 py-0.5 rounded-full font-bold font-mono">
                    1 s.d 100
                  </span>
                </div>
  
                <div className="max-h-[480px] overflow-y-auto divide-y divide-slate-100">
                  {filteredQuestions.length === 0 ? (
                    <div className="p-8 text-center text-xs text-slate-400 italic">
                      Tidak ada soal yang cocok dengan pencarian Anda.
                    </div>
                  ) : (
                    filteredQuestions.map(q => {
                      const isSelected = q.id === selectedQuestionId;
                      const isCompleted = completedQuestions.includes(q.id);
                      return (
                        <button
                          key={q.id}
                          onClick={() => {
                            setSelectedQuestionId(q.id);
                            setShowAnswerGuide(false);
                          }}
                          className={`w-full text-left p-3.5 transition-all flex items-start gap-2.5 ${
                            isSelected 
                              ? 'bg-indigo-50/70 border-l-4 border-indigo-900 pl-2.5' 
                              : 'hover:bg-slate-50/60'
                          }`}
                        >
                          {/* Bullet count with complete check */}
                          <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 font-mono font-bold text-[10px] ${
                            isCompleted
                              ? 'bg-emerald-100 text-emerald-800'
                              : isSelected
                              ? 'bg-indigo-900 text-white'
                              : 'bg-slate-100 text-slate-600'
                          }`}>
                            {isCompleted ? <Check size={11} className="stroke-[3]" /> : q.id}
                          </div>
  
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-1.5">
                              <span className="text-[9px] font-bold text-indigo-900 uppercase font-mono tracking-wide">{q.topic}</span>
                              <span className="text-[8px] text-slate-400 shrink-0 font-mono font-mono">Kls {q.grade}</span>
                            </div>
                            <p className="text-xs font-semibold text-slate-700 truncate mt-0.5">
                              {q.question}
                            </p>
                          </div>
                        </button>
                      );
                    })
                  )}
                </div>
              </div>
              
            </div>
          )}
        </div>
      )}

      {/* Guide explanation box */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs space-y-4">
        <h3 className="text-base font-serif font-bold text-slate-900 flex items-center gap-1.5">
          <BookOpen size={18} className="text-indigo-900 shrink-0" />
          Metode & Panduan Belajar Mandiri
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 leading-relaxed">
          <div className="space-y-1.5">
            <span className="bg-indigo-50 text-indigo-900 font-bold w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-mono mb-1.5">1</span>
            <h4 className="font-bold text-slate-900">Membaca Bab Terkait</h4>
            <p>
              Sebelum menjawab, silakan menuju tab <strong>Materi Pembelajaran</strong> untuk membaca kembali penjelasan teoretis bab terkait demi kedalaman isi argumentasi Anda.
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="bg-indigo-50 text-indigo-900 font-bold w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-mono mb-1.5">2</span>
            <h4 className="font-bold text-slate-900">Menulis dengan Tangan</h4>
            <p>
              Sangat disarankan menulis menggunakan pena di buku tulis fisik Anda. Menulis fisik melatih koneksi motorik-kognitif otak sehingga retorika menjadi bagian permanen dari pemikiran Anda.
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="bg-indigo-50 text-indigo-900 font-bold w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-mono mb-1.5">3</span>
            <h4 className="font-bold text-slate-900">Evaluasi & Refleksi</h4>
            <p>
              Bandingkan poin tulisan Anda dengan <strong>Panduan Kunci Jawaban Indikatif</strong>. Tandai centang selesai untuk mencatat pencapaian harian Anda dalam meraih gelar orator agung!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { initialChapters } from './data/chapters';
import { initialFigures } from './data/figures';
import { Chapter, Figure } from './types';
import Header from './components/Header';
import ChapterCard from './components/ChapterCard';
import FigureCard from './components/FigureCard';
import AiCoachTab from './components/AiCoachTab';
import AiSpeechGenTab from './components/AiSpeechGenTab';
import AiQuizTab from './components/AiQuizTab';
import EditorTab from './components/EditorTab';
import ProfileTab from './components/ProfileTab';

import { BookOpen, Users, Sparkles, Edit3, HelpCircle, Award, Compass, Search, Filter, RefreshCw, ChevronRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'materi' | 'tokoh' | 'coach' | 'writer' | 'kuis' | 'editor' | 'profil'>('materi');

  // Sync Chapters & Figures state to LocalStorage
  const [chapters, setChapters] = useState<Chapter[]>(() => {
    const saved = localStorage.getItem('rhetoric_chapters');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length === initialChapters.length) {
          // Check if it's the old version with short content (e.g. Chapter 1 content length < 500)
          const ch1 = parsed.find((c: any) => c.id === 'ch-7-1');
          if (ch1 && ch1.content && ch1.content.length < 500) {
            return initialChapters;
          }
          return parsed;
        }
      } catch (e) {
        console.error('Error parsing chapters from localStorage:', e);
      }
    }
    return initialChapters;
  });

  const [figures, setFigures] = useState<Figure[]>(() => {
    const saved = localStorage.getItem('rhetoric_figures');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length === initialFigures.length) {
          // Check if it's the old version with short stories (e.g. Demosthenes fig-1 story length < 500)
          const demoFig = parsed.find((f: any) => f.id === 'fig-1');
          if (demoFig && demoFig.story && demoFig.story.length < 500) {
            return initialFigures;
          }
          return parsed;
        }
      } catch (e) {
        console.error('Error parsing figures from localStorage:', e);
      }
    }
    return initialFigures;
  });

  useEffect(() => {
    localStorage.setItem('rhetoric_chapters', JSON.stringify(chapters));
  }, [chapters]);

  useEffect(() => {
    localStorage.setItem('rhetoric_figures', JSON.stringify(figures));
  }, [figures]);

  // Search & Filter state for 120 Figures
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [visibleFiguresCount, setVisibleFiguresCount] = useState(12);

  // Filtered figures list
  const filteredFigures = figures.filter(fig => {
    const matchesSearch =
      fig.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fig.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fig.story.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'Semua' || fig.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Reset pagination on filter change
  useEffect(() => {
    setVisibleFiguresCount(12);
  }, [searchQuery, selectedCategory]);

  // Edit Routing callbacks: when cards click edit, switch to editor tab
  const [prefilledChapter, setPrefilledChapter] = useState<Chapter | null>(null);
  const [prefilledFigure, setPrefilledFigure] = useState<Figure | null>(null);

  const handleEditChapterRoute = (ch: Chapter) => {
    setActiveTab('editor');
    // We let the EditorTab handle this by mounting its state.
    // To pass values simply, we'll let the user see them in the Editor panel.
    alert(`Materi "${ch.title}" dipilih. Silakan klik tab 'Panel Editor Mandiri' untuk mengedit bab tersebut secara langsung!`);
  };

  const handleEditFigureRoute = (fig: Figure) => {
    setActiveTab('editor');
    alert(`Tokoh "${fig.name}" dipilih. Silakan klik tab 'Panel Editor Mandiri' untuk mengedit data tokoh tersebut secara langsung!`);
  };

  // Delete callbacks
  const handleDeleteChapter = (id: string) => {
    if (window.confirm('Hapus bab materi ini?')) {
      setChapters(prev => prev.filter(c => c.id !== id));
    }
  };

  const handleDeleteFigure = (id: string) => {
    if (window.confirm('Hapus tokoh inspiratif ini?')) {
      setFigures(prev => prev.filter(f => f.id !== id));
    }
  };

  const handleUpdateFigure = (updatedFig: Figure) => {
    setFigures(prev => prev.map(f => f.id === updatedFig.id ? updatedFig : f));
  };

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-800 antialiased font-sans pb-16">
      {/* Container wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Header Branding */}
        <Header />

        {/* Tab Navigation buttons */}
        <div className="flex flex-wrap items-center gap-1.5 border-b border-slate-200 pb-3 mb-8">
          <button
            id="tab-materi"
            onClick={() => setActiveTab('materi')}
            className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'materi'
                ? 'bg-indigo-900 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <BookOpen size={15} />
            Materi Berjenjang (45 Bab)
          </button>

          <button
            id="tab-tokoh"
            onClick={() => setActiveTab('tokoh')}
            className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'tokoh'
                ? 'bg-indigo-900 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Users size={15} />
            Kisah 120 Tokoh Agung
          </button>

          <button
            id="tab-coach"
            onClick={() => setActiveTab('coach')}
            className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'coach'
                ? 'bg-indigo-900 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Sparkles size={15} />
            Coach AI Retorika
          </button>

          <button
            id="tab-writer"
            onClick={() => setActiveTab('writer')}
            className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'writer'
                ? 'bg-indigo-900 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Edit3 size={15} />
            Pembuat Pidato AI
          </button>

          <button
            id="tab-kuis"
            onClick={() => setActiveTab('kuis')}
            className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'kuis'
                ? 'bg-indigo-900 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <HelpCircle size={15} />
            Kuis Harian Essay
          </button>

          <button
            id="tab-editor"
            onClick={() => setActiveTab('editor')}
            className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'editor'
                ? 'bg-indigo-900 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Compass size={15} />
            Panel Editor Mandiri
          </button>

          <button
            id="tab-profil"
            onClick={() => setActiveTab('profil')}
            className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'profil'
                ? 'bg-indigo-900 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Award size={15} />
            Profil Penyusun
          </button>
        </div>

        {/* Tab Contents displaying with animated fades */}
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              {/* TAB 1: MATERI PEMBELAJARAN */}
              {activeTab === 'materi' && (
                <div className="space-y-8">
                  {/* Grade sections */}
                  {([7, 8, 9] as const).map(gradeLevel => {
                    const gradeChapters = chapters.filter(c => c.grade === gradeLevel);
                    return (
                      <div key={gradeLevel} className="space-y-4">
                        <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
                          <h2 className="text-xl font-serif font-black text-slate-950">
                            Kelas {gradeLevel}: {
                              gradeLevel === 7
                                ? 'Fondasi Dasar & Ekspresi Diri'
                                : gradeLevel === 8
                                ? 'Persuasi, Narasi & Pengaruh Sosial'
                                : 'Retorika Lanjut & Kepemimpinan'
                            }
                          </h2>
                          <span className="bg-indigo-50 border border-indigo-100 text-indigo-800 text-[10px] font-bold px-2 py-0.5 rounded-full font-mono uppercase">
                            {gradeChapters.length} Bab Terdaftar
                          </span>
                        </div>

                        {gradeChapters.length === 0 ? (
                          <p className="text-slate-500 text-xs italic">Belum ada bab materi terdaftar untuk Tingkat Kelas ini.</p>
                        ) : (
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {gradeChapters.map(ch => (
                              <ChapterCard
                                key={ch.id}
                                chapter={ch}
                                onEdit={handleEditChapterRoute}
                                onDelete={handleDeleteChapter}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* TAB 2: Kisah 120 Tokoh Agung */}
              {activeTab === 'tokoh' && (
                <div className="space-y-6">
                  {/* Description stats panel */}
                  <div className="bg-gradient-to-r from-white via-white to-indigo-50/20 border border-slate-200 p-5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xs">
                    <div>
                      <h3 className="text-base font-serif font-bold text-slate-900 flex items-center gap-1.5">
                        Ensiklopedia Inspiratif 120 Tokoh Agung Retorika
                        <span className="bg-indigo-900 text-white font-sans text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                          ✨ Fitur Baru AI
                        </span>
                      </h3>
                      <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                        Menyajikan rekam jejak orator klasik Yunani-Romawi, mujahid Islam, pahlawan kemerdekaan Indonesia, dan komunikator sains modern. 
                        <strong className="text-indigo-950 block mt-1">💡 Tips: Klik tombol "✨ Perdalam Kisah Lengkap (AI)" pada setiap kartu tokoh untuk memproduksi ulasan biografi, taktik orasi, dan pelajaran terperinci yang sangat memuaskan secara instan!</strong>
                      </p>
                    </div>

                    <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-900 px-4 py-2 rounded-xl text-xs font-semibold shrink-0">
                      Total Terbuka: <span className="font-mono font-black text-indigo-900">{figures.length}</span> Tokoh
                    </div>
                  </div>

                  {/* Search and Filters */}
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-col md:flex-row gap-4">
                    {/* Search bar */}
                    <div className="relative flex-1">
                      <Search size={16} className="absolute left-3 top-3 text-slate-400 pointer-events-none" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Cari tokoh berdasarkan nama, kutipan emas, kisah, dll..."
                        className="w-full bg-white text-xs border border-slate-200 pl-10 pr-4 py-2.5 rounded-lg focus:border-indigo-600 focus:outline-hidden font-medium"
                      />
                    </div>

                    {/* Category quick filters */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      {['Semua', 'Yunani-Romawi Klasik', 'Tokoh Islam Agung', 'Pahlawan Nusantara', 'Pemimpin Dunia', 'Tokoh Modern & Sains'].map(cat => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors border ${
                            selectedCategory === cat
                              ? 'bg-indigo-900 text-white border-indigo-900 shadow-xs'
                              : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-50'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Figures Grid layout */}
                  {filteredFigures.length === 0 ? (
                    <div className="bg-white border border-slate-100 rounded-xl p-12 text-center text-slate-500 italic text-sm">
                      Tidak ditemukan tokoh yang cocok dengan kriteria pencarian Anda.
                    </div>
                  ) : (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredFigures.slice(0, visibleFiguresCount).map(fig => (
                          <FigureCard
                            key={fig.id}
                            figure={fig}
                            onEdit={handleEditFigureRoute}
                            onDelete={handleDeleteFigure}
                            onUpdate={handleUpdateFigure}
                          />
                        ))}
                      </div>

                      {/* Load More Trigger */}
                      {visibleFiguresCount < filteredFigures.length && (
                        <div className="text-center pt-4">
                          <button
                            onClick={() => setVisibleFiguresCount(prev => prev + 12)}
                            className="bg-indigo-900 hover:bg-indigo-950 text-white font-semibold text-xs px-6 py-3 rounded-xl shadow-xs transition-all flex items-center gap-1.5 mx-auto"
                          >
                            Tampilkan 12 Tokoh Lainnya
                            <ChevronRight size={14} />
                          </button>
                          <span className="text-[10px] text-slate-400 block mt-2 font-mono">
                            Menampilkan {Math.min(visibleFiguresCount, filteredFigures.length)} dari {filteredFigures.length} Tokoh
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: COACH AI RETORIKA */}
              {activeTab === 'coach' && <AiCoachTab />}

              {/* TAB 4: PEMBUAT PIDATO AI */}
              {activeTab === 'writer' && <AiSpeechGenTab />}

              {/* TAB 5: KUIS INTERAKTIF AI */}
              {activeTab === 'kuis' && <AiQuizTab />}

              {/* TAB 6: PANEL EDITOR MANDIRI */}
              {activeTab === 'editor' && (
                <EditorTab
                  chapters={chapters}
                  setChapters={setChapters}
                  figures={figures}
                  setFigures={setFigures}
                />
              )}

              {/* TAB 7: PROFIL PENYUSUN */}
              {activeTab === 'profil' && <ProfileTab />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Footer Branding block */}
      <footer className="border-t border-slate-200 mt-20 pt-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4">
          <p className="font-serif font-bold text-slate-700">
            Aplikasi Retorika Berjenjang Kelas 7-9
          </p>
          <p className="text-[11px] text-slate-400 mt-1">
            Dirancang khusus dengan standar kurikulum luhur oleh Jundi Abdul Syahid, S.Pd (Orang Dalam Genetik Jawa).
          </p>
          <p className="text-[10px] text-slate-400/80 mt-3 font-mono">
            Bebas Sandi • Bebas Kunci • Berdaulat Pendidikan Nasional © 2026
          </p>
        </div>
      </footer>
    </div>
  );
}

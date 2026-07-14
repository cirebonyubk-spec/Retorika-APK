import React, { useState } from 'react';
import { Figure } from '../types';
import { Quote, Sparkles, BookOpen, ChevronDown, ChevronUp, Edit3, Trash2, Cpu, RotateCcw, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { initialFigures } from '../data/figures';

interface FigureCardProps {
  key?: string | number;
  figure: Figure;
  onEdit: (figure: Figure) => void;
  onDelete: (id: string) => void;
  onUpdate: (figure: Figure) => void;
}

export default function FigureCard({ figure, onEdit, onDelete, onUpdate }: FigureCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Yunani-Romawi Klasik':
        return 'bg-stone-100 text-stone-800 border-stone-200';
      case 'Tokoh Islam Agung':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'Pahlawan Nusantara':
        return 'bg-red-50 text-red-800 border-red-200';
      case 'Pemimpin Dunia':
        return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'Tokoh Modern & Sains':
      default:
        return 'bg-purple-50 text-purple-800 border-purple-200';
    }
  };

  const handleExpandWithAi = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/ai/figure/expand', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: figure.name,
          era: figure.era,
          category: figure.category,
          quote: figure.quote,
          currentStory: figure.story
        })
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || 'Gagal memperluas kisah dengan AI.');
      }

      const data = await response.json();
      if (data.longStory) {
        onUpdate({
          ...figure,
          story: data.longStory,
          lessons: data.expandedLessons || figure.lessons,
          oratoricalStyle: data.oratoricalStyle,
          isExpandedByAi: true
        });
        setIsOpen(true);
      } else {
        throw new Error('Format balasan AI tidak sesuai.');
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Koneksi terputus atau model AI sedang sibuk.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    const original = initialFigures.find(f => f.id === figure.id);
    if (original) {
      onUpdate({
        ...original,
        isExpandedByAi: false,
        oratoricalStyle: undefined
      });
      setError(null);
    }
  };

  return (
    <div className="bg-white border border-slate-100 rounded-xl shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md hover:border-indigo-500/20 group relative">
      {/* Editorial aesthetic line indicator */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-900 via-indigo-600 to-amber-500"></div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase border ${getCategoryColor(figure.category)}`}>
              {figure.category}
            </span>
            <span className="text-slate-400 font-mono text-[10px] ml-2 font-medium">
              {figure.era}
            </span>
            {figure.isExpandedByAi && (
              <span className="ml-2 inline-flex items-center gap-0.5 bg-indigo-50 border border-indigo-100 text-indigo-700 font-sans text-[9px] font-bold px-1.5 py-0.5 rounded-sm">
                <Sparkles size={8} className="animate-pulse" />
                AI Detail
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 shrink-0">
            {figure.isExpandedByAi && (
              <button
                onClick={handleReset}
                className="p-1.5 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors cursor-pointer"
                title="Kembalikan ke Kisah Ringkas"
              >
                <RotateCcw size={14} />
              </button>
            )}
            <button
              onClick={() => onEdit(figure)}
              className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer"
              title="Edit Tokoh"
            >
              <Edit3 size={14} />
            </button>
            <button
              onClick={() => onDelete(figure.id)}
              className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
              title="Hapus Tokoh"
            >
              <Trash2 size={14} />
            </button>
          </div>
        </div>

        {/* Figure Name */}
        <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-indigo-900 transition-colors">
          {figure.name}
        </h3>

        {/* Pull Quote */}
        <div className="my-4 pl-4 border-l-2 border-amber-400 italic text-slate-700 text-sm relative leading-relaxed font-serif">
          <Quote size={28} className="absolute -top-3 -left-1 opacity-5 text-amber-500 pointer-events-none" />
          "{figure.quote}"
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 mt-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full py-2 text-slate-700 hover:text-indigo-900 text-xs font-semibold flex items-center justify-center gap-1 border border-slate-100 rounded-lg bg-slate-50/50 hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
          >
            <BookOpen size={12} />
            {isOpen ? 'Sembunyikan Kisah Orasi' : 'Pelajari Kisah & Ilmu Orasi'}
            {isOpen ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          </button>

          {!figure.isExpandedByAi && (
            <button
              onClick={handleExpandWithAi}
              disabled={isLoading}
              className={`w-full py-2 text-white text-xs font-bold flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-indigo-900 via-indigo-750 to-indigo-600 hover:from-indigo-950 hover:to-indigo-750 transition-all shadow-xs cursor-pointer ${
                isLoading ? 'opacity-80 cursor-not-allowed animate-pulse' : ''
              }`}
            >
              <Cpu size={12} className={isLoading ? 'animate-spin' : ''} />
              {isLoading ? 'Menganyam Kisah Sejarah...' : '✨ Perdalam Kisah Lengkap (AI)'}
            </button>
          )}
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mt-2.5 p-2 bg-red-50 border border-red-200 text-red-800 text-[11px] rounded-lg flex items-center gap-1.5 leading-snug animate-fade-in">
            <AlertCircle size={12} className="shrink-0 text-red-600" />
            <span>{error}</span>
          </div>
        )}

        {/* Expandable Section */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden mt-4 pt-4 border-t border-slate-100"
            >
              <div className="space-y-4">
                {/* Historical Story */}
                <div>
                  <h4 className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-1.5 flex items-center gap-1">
                    <Sparkles size={10} className="text-amber-500" />
                    Kisah Orasi & Karisma {figure.isExpandedByAi && '(Versi Lengkap AI)'}
                  </h4>
                  <p className="text-slate-800 text-xs leading-relaxed font-sans whitespace-pre-wrap">
                    {figure.story}
                  </p>
                </div>

                {/* Oratorical Style Analysis (if expanded by AI) */}
                {figure.oratoricalStyle && (
                  <div className="border-t border-slate-100 pt-3">
                    <h4 className="text-[10px] font-mono font-bold tracking-widest text-indigo-950 uppercase mb-1 flex items-center gap-1">
                      <Cpu size={10} className="text-indigo-600" />
                      Gaya & Taktik Oratoris:
                    </h4>
                    <p className="text-slate-700 text-xs leading-relaxed font-sans whitespace-pre-wrap">
                      {figure.oratoricalStyle}
                    </p>
                  </div>
                )}

                {/* Practical Lessons */}
                {figure.lessons && figure.lessons.length > 0 && (
                  <div className="bg-amber-50/40 rounded-lg p-3 border border-amber-400/10">
                    <h4 className="text-[10px] font-mono font-bold tracking-widest text-amber-900 uppercase mb-1.5">
                      Pelajaran Inti Retorika:
                    </h4>
                    <ul className="space-y-1.5">
                      {figure.lessons.map((lesson, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-slate-700 text-xs">
                          <span className="w-1 h-1 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                          <span className="font-sans leading-normal">{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

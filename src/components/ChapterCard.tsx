import React, { useState } from 'react';
import { Chapter } from '../types';
import { BookOpen, Award, Edit3, Trash2, CheckCircle, ChevronDown, ChevronUp, PlayCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ChapterCardProps {
  key?: string | number;
  chapter: Chapter;
  onEdit: (chapter: Chapter) => void;
  onDelete: (id: string) => void;
}

export default function ChapterCard({ chapter, onEdit, onDelete }: ChapterCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getGradeColor = (grade: 7 | 8 | 9) => {
    switch (grade) {
      case 7:
        return 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300';
      case 8:
        return 'bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-300';
      case 9:
        return 'bg-purple-50 border-purple-200 text-purple-700 dark:bg-purple-900/20 dark:border-purple-800 dark:text-purple-300';
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden transition-all duration-200 hover:shadow-md hover:border-indigo-600/30">
      {/* Header of Card */}
      <div className="p-5 flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getGradeColor(chapter.grade)}`}>
              <Award size={12} />
              Kelas {chapter.grade}
            </span>
            <span className="bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium">
              Bab {chapter.babNum}
            </span>
          </div>

          <h3 className="text-lg font-serif font-bold text-slate-900 tracking-tight leading-snug">
            {chapter.title}
          </h3>
          <p className="text-slate-600 text-xs mt-1 line-clamp-2">
            {chapter.summary}
          </p>
        </div>

        <div className="flex items-center gap-1 self-start shrink-0">
          <button
            onClick={() => onEdit(chapter)}
            className="p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
            title="Edit Bab"
          >
            <Edit3 size={16} />
          </button>
          <button
            onClick={() => onDelete(chapter.id)}
            className="p-1.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            title="Hapus Bab"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {/* Expand/Collapse Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full border-t border-slate-100 px-5 py-3 text-slate-700 bg-slate-50/50 hover:bg-slate-50 flex items-center justify-between text-xs font-semibold transition-colors"
      >
        <span className="flex items-center gap-1 text-indigo-700">
          <BookOpen size={14} />
          {isOpen ? 'Tutup Materi Pembelajaran' : 'Buka Materi Lengkap & Latihan'}
        </span>
        {isOpen ? <ChevronUp size={16} className="text-slate-500" /> : <ChevronDown size={16} className="text-slate-500" />}
      </button>

      {/* Expanded Material Details */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden bg-white border-t border-slate-100"
          >
            <div className="p-6 space-y-6">
              {/* Core Material Content */}
              <div>
                <h4 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase mb-2">
                  Uraian Materi Pembelajaran
                </h4>
                <p className="text-slate-800 text-sm leading-relaxed font-sans whitespace-pre-wrap">
                  {chapter.content}
                </p>
              </div>

              {/* Key Rhetoric Techniques */}
              {chapter.techniques && chapter.techniques.length > 0 && (
                <div className="bg-indigo-50/60 rounded-xl p-4 border border-indigo-500/10">
                  <h4 className="text-xs font-mono font-bold tracking-wider text-indigo-800 uppercase mb-2.5 flex items-center gap-1.5">
                    <PlayCircle size={14} className="text-indigo-600" />
                    Teknik Retorika Kunci
                  </h4>
                  <ul className="space-y-2">
                    {chapter.techniques.map((tech, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700 text-xs leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></span>
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Exercises / Tantangan Mandiri */}
              {chapter.exercises && chapter.exercises.length > 0 && (
                <div className="bg-amber-50/50 rounded-xl p-4 border border-amber-500/10">
                  <h4 className="text-xs font-mono font-bold tracking-wider text-amber-800 uppercase mb-2.5 flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-amber-600" />
                    Latihan Praktis & Tantangan Mandiri
                  </h4>
                  <ul className="space-y-2">
                    {chapter.exercises.map((ex, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-700 text-xs leading-relaxed">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold font-mono shrink-0">
                          {i + 1}
                        </span>
                        <span>{ex}</span>
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
  );
}

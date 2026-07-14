import React from 'react';
import { Sparkles, Trophy, BookOpen, Award } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative overflow-hidden rounded-2xl border border-indigo-950/40 gradient-java-royal text-white p-6 md:p-8 shadow-xl mb-8">
      {/* Background Decorative elements */}
      <div className="absolute right-0 bottom-0 opacity-10 select-none pointer-events-none">
        <Trophy size={200} className="text-indigo-400 rotate-12" />
      </div>
      <div className="absolute top-4 right-8 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -left-10 -top-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl"></div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 px-3 py-1 rounded-full text-xs font-mono mb-3">
            <Sparkles size={14} className="animate-pulse" />
            Platform Pembelajaran Interaktif AI Modern
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-100 via-amber-200 to-indigo-100">
            Aplikasi Retorika Berjenjang
          </h1>
          <p className="text-indigo-100/90 text-sm md:text-base max-w-2xl font-sans leading-relaxed">
            Kurikulum Terstruktur Seni Orasi & Persuasi Kelas 7, 8, dan 9 dilengkapi 45 Bab Pembelajaran (15 per Tingkat Kelas), Kisah Inspiratif 120 Tokoh Agung, dan Asisten AI Coach Mandiri.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end bg-black/30 border border-indigo-500/20 p-4 rounded-xl backdrop-blur-xs min-w-[240px]">
          <span className="text-xs text-indigo-400 font-mono tracking-widest uppercase">Disusun Oleh:</span>
          <h3 className="text-base font-serif font-bold text-amber-200 mt-1 flex items-center gap-2">
            <Award size={18} className="text-amber-400" />
            Jundi Abdul Syahid, S.Pd
          </h3>
          <span className="text-xs text-slate-300 font-sans italic mt-0.5">
            Orang Dalam Genetik Jawa
          </span>
          <div className="w-full border-t border-indigo-500/20 my-2"></div>
          <span className="text-[10px] text-indigo-300 font-mono flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            Akses Bebas Tanpa Sandi & Kunci
          </span>
        </div>
      </div>
    </header>
  );
}

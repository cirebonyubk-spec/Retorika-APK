import React from 'react';
import { Award, Compass, Star, Heart, CheckCircle2, ChevronRight, Share2, Shield } from 'lucide-react';

export default function ProfileTab() {
  const coreTeachings = [
    {
      title: 'Mangasah Mingising Budi',
      desc: 'Mengasah ketajaman akal budi luhur sebelum menggerakkan lidah untuk berorasi di muka umum.'
    },
    {
      title: 'Ajining Diri Saka Lathi',
      desc: 'Harga diri dan kehormatan moral seseorang dicerminkan sepenuhnya oleh kebenaran dan kesantunan ucapannya.'
    },
    {
      title: 'Sinergi Rasa, Cipta & Karsa',
      desc: 'Retorika sejati tidak boleh kering; ia harus menggabungkan kedalaman rasa (empati), ketajaman cipta (logika), dan kebulatan karsa (tekad aksi).'
    },
    {
      title: 'Bebas Hambatan & Kunci',
      desc: 'Ilmu retorika luhur harus diakses secara merdeka oleh seluruh anak bangsa tanpa sekat-sekat materiil atau sandi rumit.'
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Profile Card */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs relative">
        <div className="h-32 bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-950"></div>
        <div className="px-6 pb-6 relative">
          <div className="absolute -top-12 left-6 w-24 h-24 rounded-full border-4 border-white bg-gradient-to-tr from-amber-400 to-indigo-800 text-white flex items-center justify-center font-serif text-3xl font-bold shadow-md">
            JAS
          </div>

          <div className="pt-16 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-serif font-black text-slate-900 flex items-center gap-2">
                Jundi Abdul Syahid, S.Pd
                <span className="bg-amber-100 text-amber-900 text-[10px] font-bold font-sans uppercase px-2.5 py-0.5 rounded-full border border-amber-200">
                  Penyusun Utama
                </span>
              </h3>
              <p className="text-slate-500 text-xs font-mono tracking-wider mt-0.5">
                Akademis Retorika, Orator Budayawan & Praktis Pendidikan
              </p>
              <p className="text-indigo-800 text-xs font-semibold mt-1 font-sans">
                Orang Dalam Genetik Jawa (Wasis Wicara & Luhur Pekerti)
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1">
                <Shield size={14} />
                Lektor Retorika Berlisensi
              </span>
            </div>
          </div>

          <div className="mt-6 border-t border-slate-100 pt-6">
            <h4 className="text-sm font-serif font-bold text-slate-800 mb-2">
              Kata Pengantar & Visi Pendidikan
            </h4>
            <p className="text-slate-700 text-xs font-sans leading-relaxed whitespace-pre-wrap">
              "Retorika bukan sekadar ilmu untuk memperdaya atau mengelabui pikiran audiens di bawah sorotan panggung. Retorika sejati adalah jembatan moral yang mengalirkan kebenaran dari lubuk hati terdalam ke relung sanubari sesama. 

              Melalui Aplikasi Retorika Berjenjang Kelas 7-9 ini, saya mengintegrasikan nilai kearifan lokal Nusantara—yakni keluhuran budi pekerti adat Jawa—dengan keampuhan teknologi kecerdasan buatan (AI) modern. Dengan begitu, siswa-siswi kita dapat melatih rasa percaya diri, melafalkan retorika yang indah, dan menyusun gagasan persuasif tanpa melupakan tata krama kesantunan adat ketimuran. Semoga kurikulum 15 Bab dan kisah 120 Tokoh Agung ini melahirkan para negarawan dan pemimpin bangsa masa depan yang mumpuni."
            </p>
          </div>
        </div>
      </div>

      {/* Core Teachings Grid */}
      <div className="space-y-4">
        <h4 className="text-base font-serif font-bold text-slate-800 flex items-center gap-2">
          <Compass className="text-indigo-700" />
          Empat Pilar Filosofi Retorika Jundi Abdul Syahid, S.Pd
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {coreTeachings.map((t, i) => (
            <div key={i} className="bg-slate-50/50 border border-slate-200/60 rounded-xl p-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-100/80 text-indigo-800 text-xs font-bold font-mono flex items-center justify-center shrink-0">
                0{i + 1}
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-900 font-sans">{t.title}</h5>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed font-sans">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Curriculum Quality Badge */}
      <div className="bg-indigo-950 border border-indigo-900 text-white rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 justify-between relative overflow-hidden shadow-xl">
        <div className="absolute right-0 top-0 opacity-10 select-none pointer-events-none">
          <Award size={160} />
        </div>

        <div className="space-y-2">
          <span className="text-[10px] font-mono tracking-widest uppercase text-indigo-400">Kurikulum Berkelanjutan</span>
          <h4 className="text-xl font-serif font-bold text-amber-200">
            Jaminan Akses Terbuka Tanpa Sandi
          </h4>
          <p className="text-indigo-100/80 text-xs max-w-xl font-sans leading-relaxed">
            Sesuai komitmen penyusun, platform ini tidak menggunakan sistem login, registrasi, password, ataupun kunci enkripsi apa pun. Seluruh bab dan database tokoh bisa Anda edit, hapus, tambahkan secara merdeka demi kelancaran proses pembelajaran siswa didik seluruh Indonesia.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center shrink-0 bg-white/10 border border-indigo-500/20 rounded-xl p-4 text-center min-w-[150px]">
          <span className="text-xs font-bold text-indigo-300 font-mono">STANDAR MUTU</span>
          <span className="text-2xl font-serif font-black text-amber-400 mt-0.5">S.Pd</span>
          <span className="text-[10px] text-slate-300 font-sans italic mt-0.5">Pendidikan Nasional</span>
        </div>
      </div>
    </div>
  );
}

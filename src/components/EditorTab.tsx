import React, { useState } from 'react';
import { Chapter, Figure } from '../types';
import { Plus, Edit3, Trash2, Check, RefreshCw, BookOpen, Users, AlertTriangle } from 'lucide-react';
import { initialChapters } from '../data/chapters';
import { initialFigures } from '../data/figures';

interface EditorTabProps {
  chapters: Chapter[];
  setChapters: React.Dispatch<React.SetStateAction<Chapter[]>>;
  figures: Figure[];
  setFigures: React.Dispatch<React.SetStateAction<Figure[]>>;
}

export default function EditorTab({ chapters, setChapters, figures, setFigures }: EditorTabProps) {
  const [activeEditorMode, setActiveEditorMode] = useState<'chapters' | 'figures'>('chapters');

  // Chapter form state
  const [editingChapterId, setEditingChapterId] = useState<string | null>(null);
  const [chapterForm, setChapterForm] = useState<Partial<Chapter>>({
    title: '',
    summary: '',
    content: '',
    grade: 7,
    babNum: 1,
    techniques: [],
    exercises: [],
  });

  // Figure form state
  const [editingFigureId, setEditingFigureId] = useState<string | null>(null);
  const [figureForm, setFigureForm] = useState<Partial<Figure>>({
    name: '',
    era: '',
    category: 'Yunani-Romawi Klasik',
    quote: '',
    story: '',
    lessons: [],
  });

  // Alert message state
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'info' } | null>(null);

  const showMessage = (text: string, type: 'success' | 'info' = 'success') => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 4000);
  };

  // --- CHAPTER CRUD ---
  const handleSaveChapter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chapterForm.title || !chapterForm.content) {
      alert('Judul dan Uraian Materi wajib diisi!');
      return;
    }

    if (editingChapterId) {
      // Update existing
      setChapters(prev =>
        prev.map(ch =>
          ch.id === editingChapterId
            ? { ...ch, ...chapterForm, id: editingChapterId } as Chapter
            : ch
        )
      );
      showMessage(`Berhasil memperbarui Bab ${chapterForm.babNum}: ${chapterForm.title}`);
      setEditingChapterId(null);
    } else {
      // Create new
      const newId = `ch-${Date.now()}`;
      const newChapter: Chapter = {
        id: newId,
        babNum: Number(chapterForm.babNum) || chapters.length + 1,
        grade: (Number(chapterForm.grade) || 7) as 7 | 8 | 9,
        title: chapterForm.title || '',
        summary: chapterForm.summary || '',
        content: chapterForm.content || '',
        techniques: chapterForm.techniques || [],
        exercises: chapterForm.exercises || [],
      };
      setChapters(prev => [...prev, newChapter].sort((a, b) => a.grade - b.grade || a.babNum - b.babNum));
      showMessage(`Berhasil menambahkan Bab Baru: ${newChapter.title}`);
    }

    // Reset Form
    setChapterForm({
      title: '',
      summary: '',
      content: '',
      grade: 7,
      babNum: 1,
      techniques: [],
      exercises: [],
    });
  };

  const handleEditChapterClick = (ch: Chapter) => {
    setEditingChapterId(ch.id);
    setChapterForm({ ...ch });
    // Scroll to top of editor panel
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleDeleteChapter = (id: string) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus bab materi ini?')) {
      const ch = chapters.find(c => c.id === id);
      setChapters(prev => prev.filter(c => c.id !== id));
      showMessage(`Berhasil menghapus bab: ${ch?.title}`, 'info');
    }
  };

  // --- FIGURE CRUD ---
  const handleSaveFigure = (e: React.FormEvent) => {
    e.preventDefault();
    if (!figureForm.name || !figureForm.quote || !figureForm.story) {
      alert('Nama Tokoh, Kutipan Emas, dan Kisah Inspiratif wajib diisi!');
      return;
    }

    if (editingFigureId) {
      // Update
      setFigures(prev =>
        prev.map(fig =>
          fig.id === editingFigureId
            ? { ...fig, ...figureForm, id: editingFigureId } as Figure
            : fig
        )
      );
      showMessage(`Berhasil memperbarui Tokoh: ${figureForm.name}`);
      setEditingFigureId(null);
    } else {
      // Create
      const newId = `fig-${Date.now()}`;
      const newFigure: Figure = {
        id: newId,
        name: figureForm.name || '',
        era: figureForm.era || 'Era Modern',
        category: (figureForm.category || 'Tokoh Modern & Sains') as any,
        quote: figureForm.quote || '',
        story: figureForm.story || '',
        lessons: figureForm.lessons || [],
      };
      setFigures(prev => [newFigure, ...prev]);
      showMessage(`Berhasil menambahkan Tokoh Baru: ${newFigure.name}`);
    }

    setFigureForm({
      name: '',
      era: '',
      category: 'Yunani-Romawi Klasik',
      quote: '',
      story: '',
      lessons: [],
    });
  };

  const handleEditFigureClick = (fig: Figure) => {
    setEditingFigureId(fig.id);
    setFigureForm({ ...fig });
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleDeleteFigure = (id: string) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus tokoh inspiratif ini?')) {
      const fig = figures.find(f => f.id === id);
      setFigures(prev => prev.filter(f => f.id !== id));
      showMessage(`Berhasil menghapus tokoh: ${fig?.name}`, 'info');
    }
  };

  // --- RESTORE DEFAULT DATA ---
  const handleResetData = () => {
    if (window.confirm('Peringatan: Tindakan ini akan mengembalikan seluruh 15 bab pembelajaran dan 120 tokoh agung kembali ke kondisi default awal. Semua perubahan buatan Anda akan terhapus. Lanjutkan?')) {
      setChapters(initialChapters);
      setFigures(initialFigures);
      localStorage.removeItem('rhetoric_chapters');
      localStorage.removeItem('rhetoric_figures');
      showMessage('Seluruh database berhasil diset ulang ke setelan pabrik default!', 'info');
    }
  };

  return (
    <div className="space-y-6">
      {/* Alert Alert Messages */}
      {message && (
        <div className={`p-4 rounded-xl border text-sm font-sans flex items-center justify-between shadow-xs ${
          message.type === 'success'
            ? 'bg-green-50 border-green-200 text-green-800'
            : 'bg-blue-50 border-blue-200 text-blue-800'
        }`}>
          <span>{message.text}</span>
          <button onClick={() => setMessage(null)} className="font-bold text-xs hover:opacity-75">Tutup</button>
        </div>
      )}

      {/* Editor Subheaders */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-50 border border-slate-200 p-3 rounded-xl">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setActiveEditorMode('chapters')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              activeEditorMode === 'chapters'
                ? 'bg-indigo-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
            }`}
          >
            <BookOpen size={14} />
            Kelola Bab Materi ({chapters.length})
          </button>
          <button
            onClick={() => setActiveEditorMode('figures')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              activeEditorMode === 'figures'
                ? 'bg-indigo-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
            }`}
          >
            <Users size={14} />
            Kelola 120 Tokoh Agung ({figures.length})
          </button>
        </div>

        <button
          onClick={handleResetData}
          className="text-red-700 hover:bg-red-50 border border-red-200 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ml-auto"
        >
          <RefreshCw size={12} />
          Set Ulang Semua Data Default
        </button>
      </div>

      {activeEditorMode === 'chapters' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Form Chapter */}
          <div className="lg:col-span-5">
            <form onSubmit={handleSaveChapter} className="bg-white border border-slate-200 rounded-xl p-5 space-y-4">
              <h3 className="text-sm font-serif font-bold text-slate-800 border-b border-slate-100 pb-2 flex items-center justify-between">
                <span>{editingChapterId ? 'Ubah Bab Pembelajaran' : 'Tambahkan Bab Baru'}</span>
                {editingChapterId && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingChapterId(null);
                      setChapterForm({ title: '', summary: '', content: '', grade: 7, babNum: 1, techniques: [], exercises: [] });
                    }}
                    className="text-[10px] text-slate-400 hover:text-slate-700 uppercase"
                  >
                    Batal Ubah
                  </button>
                )}
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-mono font-bold uppercase text-slate-400 mb-1">
                    Materi Kelas:
                  </label>
                  <select
                    value={chapterForm.grade}
                    onChange={(e) => setChapterForm({ ...chapterForm, grade: Number(e.target.value) as any })}
                    className="w-full text-xs font-medium border border-slate-200 rounded-lg p-2 focus:border-indigo-500 focus:outline-hidden"
                  >
                    <option value={7}>Kelas 7</option>
                    <option value={8}>Kelas 8</option>
                    <option value={9}>Kelas 9</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-bold uppercase text-slate-400 mb-1">
                    Urutan Bab (1-15):
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={100}
                    value={chapterForm.babNum}
                    onChange={(e) => setChapterForm({ ...chapterForm, babNum: Number(e.target.value) })}
                    className="w-full text-xs border border-slate-200 rounded-lg p-2 focus:border-indigo-500 focus:outline-hidden font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold uppercase text-slate-400 mb-1">
                  Judul Bab Pembelajaran:
                </label>
                <input
                  type="text"
                  required
                  value={chapterForm.title}
                  onChange={(e) => setChapterForm({ ...chapterForm, title: e.target.value })}
                  placeholder="Misal: Seni Berpidato Tanpa Naskah"
                  className="w-full text-xs border border-slate-200 rounded-lg p-2 focus:border-indigo-500 focus:outline-hidden font-sans font-semibold"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold uppercase text-slate-400 mb-1">
                  Ringkasan Singkat Bab:
                </label>
                <input
                  type="text"
                  value={chapterForm.summary}
                  onChange={(e) => setChapterForm({ ...chapterForm, summary: e.target.value })}
                  placeholder="Ringkasan 1 kalimat yang memikat..."
                  className="w-full text-xs border border-slate-200 rounded-lg p-2 focus:border-indigo-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold uppercase text-slate-400 mb-1">
                  Uraian Isi Lengkap Materi:
                </label>
                <textarea
                  required
                  rows={8}
                  value={chapterForm.content}
                  onChange={(e) => setChapterForm({ ...chapterForm, content: e.target.value })}
                  placeholder="Tuliskan penjelasan materi pedagogi yang mendalam..."
                  className="w-full text-xs border border-slate-200 rounded-lg p-2.5 focus:border-indigo-500 focus:outline-hidden leading-relaxed font-sans"
                ></textarea>
              </div>

              {/* Input for list arrays */}
              <div>
                <label className="block text-[10px] font-mono font-bold uppercase text-slate-400 mb-1">
                  Teknik Kunci (Satu per baris):
                </label>
                <textarea
                  rows={2}
                  value={chapterForm.techniques?.join('\n')}
                  onChange={(e) => setChapterForm({ ...chapterForm, techniques: e.target.value.split('\n').filter(Boolean) })}
                  placeholder="Misal: Metode PREP: Point, Reason, Example, Point"
                  className="w-full text-xs border border-slate-200 rounded-lg p-2 focus:border-indigo-500 focus:outline-hidden font-sans"
                ></textarea>
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold uppercase text-slate-400 mb-1">
                  Latihan Praktis (Satu per baris):
                </label>
                <textarea
                  rows={2}
                  value={chapterForm.exercises?.join('\n')}
                  onChange={(e) => setChapterForm({ ...chapterForm, exercises: e.target.value.split('\n').filter(Boolean) })}
                  placeholder="Misal: Latihlah mosi debat 'Teknologi Merusak Budaya' dalam 2 menit"
                  className="w-full text-xs border border-slate-200 rounded-lg p-2 focus:border-indigo-500 focus:outline-hidden font-sans"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-900 hover:bg-indigo-950 text-white font-semibold text-xs py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Plus size={14} />
                {editingChapterId ? 'Simpan Perubahan Bab' : 'Simpan Bab Baru'}
              </button>
            </form>
          </div>

          {/* Chapters Table List */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-5">
            <h3 className="text-sm font-serif font-bold text-slate-800 border-b border-slate-100 pb-2 mb-4">
              Daftar Seluruh Bab Terdaftar
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400 font-mono text-[10px] uppercase">
                    <th className="py-2.5 font-bold">Urut</th>
                    <th className="py-2.5 font-bold">Kelas</th>
                    <th className="py-2.5 font-bold">Judul Bab</th>
                    <th className="py-2.5 font-bold text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {chapters.map(ch => (
                    <tr key={ch.id} className="hover:bg-slate-50">
                      <td className="py-3 font-mono font-semibold text-slate-600">Bab {ch.babNum}</td>
                      <td className="py-3">
                        <span className="bg-slate-100 text-slate-700 border border-slate-200 px-2 py-0.5 rounded-md text-[10px] font-bold">
                          Kelas {ch.grade}
                        </span>
                      </td>
                      <td className="py-3 font-medium text-slate-900 pr-4 truncate max-w-[200px]">{ch.title}</td>
                      <td className="py-3 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => handleEditChapterClick(ch)}
                            className="p-1 text-slate-400 hover:text-indigo-700 hover:bg-indigo-50 rounded-md transition-colors"
                          >
                            <Edit3 size={14} />
                          </button>
                          <button
                            onClick={() => handleDeleteChapter(ch.id)}
                            className="p-1 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Form Figure */}
          <div className="lg:col-span-5">
            <form onSubmit={handleSaveFigure} className="bg-white border border-slate-200 rounded-xl p-5 space-y-4">
              <h3 className="text-sm font-serif font-bold text-slate-800 border-b border-slate-100 pb-2 flex items-center justify-between">
                <span>{editingFigureId ? 'Ubah Tokoh Agung' : 'Tambahkan Tokoh Baru'}</span>
                {editingFigureId && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingFigureId(null);
                      setFigureForm({ name: '', era: '', category: 'Yunani-Romawi Klasik', quote: '', story: '', lessons: [] });
                    }}
                    className="text-[10px] text-slate-400 hover:text-slate-700 uppercase"
                  >
                    Batal
                  </button>
                )}
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-mono font-bold uppercase text-slate-400 mb-1">
                    Nama Tokoh:
                  </label>
                  <input
                    type="text"
                    required
                    value={figureForm.name}
                    onChange={(e) => setFigureForm({ ...figureForm, name: e.target.value })}
                    placeholder="Misal: Abraham Lincoln"
                    className="w-full text-xs border border-slate-200 rounded-lg p-2 focus:border-indigo-500 focus:outline-hidden font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-bold uppercase text-slate-400 mb-1">
                    Masa Hidup / Era:
                  </label>
                  <input
                    type="text"
                    value={figureForm.era}
                    onChange={(e) => setFigureForm({ ...figureForm, era: e.target.value })}
                    placeholder="Misal: 1809 SM - 1865 SM"
                    className="w-full text-xs border border-slate-200 rounded-lg p-2 focus:border-indigo-500 focus:outline-hidden font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold uppercase text-slate-400 mb-1">
                  Kategori Tokoh Agung:
                </label>
                <select
                  value={figureForm.category}
                  onChange={(e) => setFigureForm({ ...figureForm, category: e.target.value as any })}
                  className="w-full text-xs font-medium border border-slate-200 bg-white rounded-lg p-2 focus:border-indigo-500 focus:outline-hidden"
                >
                  <option value="Yunani-Romawi Klasik">Yunani-Romawi Klasik</option>
                  <option value="Tokoh Islam Agung">Tokoh Islam Agung</option>
                  <option value="Pahlawan Nusantara">Pahlawan Nusantara</option>
                  <option value="Pemimpin Dunia">Pemimpin Dunia</option>
                  <option value="Tokoh Modern & Sains">Tokoh Modern & Sains</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold uppercase text-slate-400 mb-1">
                  Kutipan Emas (Quote):
                </label>
                <textarea
                  required
                  rows={2}
                  value={figureForm.quote}
                  onChange={(e) => setFigureForm({ ...figureForm, quote: e.target.value })}
                  placeholder="Kutipan orasi yang memotivasi..."
                  className="w-full text-xs border border-slate-200 rounded-lg p-2 focus:border-indigo-500 focus:outline-hidden italic font-serif"
                ></textarea>
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold uppercase text-slate-400 mb-1">
                  Kisah Inspiratif Singkat:
                </label>
                <textarea
                  required
                  rows={6}
                  value={figureForm.story}
                  onChange={(e) => setFigureForm({ ...figureForm, story: e.target.value })}
                  placeholder="Sampaikan biografi dan karisma pidatonya..."
                  className="w-full text-xs border border-slate-200 rounded-lg p-2 focus:border-indigo-500 focus:outline-hidden leading-relaxed font-sans"
                ></textarea>
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold uppercase text-slate-400 mb-1">
                  Pelajaran Inti Retorika (Satu per baris):
                </label>
                <textarea
                  rows={3}
                  value={figureForm.lessons?.join('\n')}
                  onChange={(e) => setFigureForm({ ...figureForm, lessons: e.target.value.split('\n').filter(Boolean) })}
                  placeholder="Sebutkan hikmah pidatonya..."
                  className="w-full text-xs border border-slate-200 rounded-lg p-2 focus:border-indigo-500 focus:outline-hidden font-sans"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-900 hover:bg-indigo-950 text-white font-semibold text-xs py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Plus size={14} />
                {editingFigureId ? 'Simpan Perubahan Tokoh' : 'Simpan Tokoh Baru'}
              </button>
            </form>
          </div>

          {/* Figures Table List */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-5">
            <h3 className="text-sm font-serif font-bold text-slate-800 border-b border-slate-100 pb-2 mb-4">
              Daftar Tokoh Terdaftar ({figures.length} Tokoh)
            </h3>

            <div className="overflow-y-auto max-h-[640px]">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400 font-mono text-[10px] uppercase sticky top-0 bg-white z-10">
                    <th className="py-2.5 font-bold">Nama Tokoh</th>
                    <th className="py-2.5 font-bold">Kategori</th>
                    <th className="py-2.5 font-bold text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {figures.map(fig => (
                    <tr key={fig.id} className="hover:bg-slate-50">
                      <td className="py-3 font-medium text-slate-900 pr-4 truncate max-w-[150px]">{fig.name}</td>
                      <td className="py-3">
                        <span className="bg-slate-50 border border-slate-200 text-slate-600 text-[9px] px-2 py-0.5 rounded-md font-semibold">
                          {fig.category}
                        </span>
                      </td>
                      <td className="py-3 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => handleEditFigureClick(fig)}
                            className="p-1 text-slate-400 hover:text-indigo-700 hover:bg-indigo-50 rounded-md transition-colors"
                          >
                            <Edit3 size={14} />
                          </button>
                          <button
                            onClick={() => handleDeleteFigure(fig.id)}
                            className="p-1 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

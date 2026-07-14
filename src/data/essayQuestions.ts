export interface EssayQuestion {
  id: number;
  grade: number;
  topic: string;
  chapterContext: string;
  question: string;
  writingGuide: string;
  keyPoints: string[];
}

export const essayQuestions: EssayQuestion[] = [
  // KELAS 7 (1 - 33): Dasar Retorika, Mentalitas, Vokal, & Gestur
  {
    id: 1,
    grade: 7,
    topic: "Mentalitas Orator Muda",
    chapterContext: "Bab 1: Menaklukkan Demam Panggung",
    question: "Mengapa demam panggung (glossophobia) dinilai sebagai reaksi psikologis yang wajar, dan bagaimana seorang orator pemula dapat mengubah ketakutan tersebut menjadi energi positif saat berbicara?",
    writingGuide: "Tuliskan jawaban Anda dengan menganalisis aspek fisiologis (seperti jantung berdebar) dan strategi kognitif untuk memetakan ulang ketakutan menjadi antusiasme.",
    keyPoints: [
      "Mengakui demam panggung sebagai respons alami tubuh (adrenaline rush).",
      "Teknik re-framing kognitif (mengubah persepsi 'takut' menjadi 'bersemangat').",
      "Pentingnya visualisasi sukses sebelum melangkah ke mimbar."
    ]
  },
  {
    id: 2,
    grade: 7,
    topic: "Olah Pernapasan Diafragma",
    chapterContext: "Bab 2: Fondasi Napas Diafragma",
    question: "Jelaskan mekanisme kerja pernapasan diafragma dibandingkan pernapasan dada, dan mengapa pernapasan diafragma menjadi modal utama untuk menghasilkan suara oratoris yang bulat dan bertenaga!",
    writingGuide: "Gambarkan proses penarikan napas, ekspansi rongga perut, serta aliran udara yang stabil untuk menyokong pita suara tanpa ketegangan leher.",
    keyPoints: [
      "Perbedaan mekanis (penurunan otot diafragma vs pengangkatan bahu/dada).",
      "Resonansi suara yang dihasilkan lebih bulat, dalam, dan tidak cempreng.",
      "Mencegah kelelahan pita suara (vocal fatigue) selama berpidato durasi panjang."
    ]
  },
  {
    id: 3,
    grade: 7,
    topic: "Kekuatan Vokal & Artikulasi",
    chapterContext: "Bab 3: Kejelasan Lafal (Artikulasi)",
    question: "Bagaimana latihan vokal dasar (seperti melafalkan huruf vokal A-I-U-E-O dengan bentuk mulut maksimal) mempengaruhi tingkat pemahaman audiens dalam ruangan besar?",
    writingGuide: "Hubungkan kelenturan otot artikulator (bibir, lidah, rahang) dengan kejelasan pesan yang ditangkap oleh pendengar di baris paling belakang.",
    keyPoints: [
      "Kelenturan organ artikulasi (bibir, gigi, langit-langit, lidah).",
      "Pencegahan 'mumbling' atau suara bergumam yang mengaburkan makna kata.",
      "Hubungan langsung antara kejelasan artikulasi dan kredibilitas orator di mata audiens."
    ]
  },
  {
    id: 4,
    grade: 7,
    topic: "Tempo & Kecepatan Bicara",
    chapterContext: "Bab 4: Mengatur Tempo Orasi",
    question: "Mengapa berbicara terlalu cepat sering kali merusak efektivitas pesan pidato, dan bagaimana cara melatih ritme bicara yang ideal bagi siswa Kelas 7?",
    writingGuide: "Uraikan dampak tempo cepat pada proses kognitif audiens dalam menyerap informasi, dan berikan tips praktis latihan metronom vokal.",
    keyPoints: [
      "Audiens membutuhkan waktu jeda beberapa milidetik untuk mencerna gagasan berat.",
      "Tempo cepat mencerminkan kecemasan atau ketidaksiapan mental orator.",
      "Latihan membaca teks dengan jeda sengaja pada setiap tanda koma dan titik."
    ]
  },
  {
    id: 5,
    grade: 7,
    topic: "Seni Mengambil Jeda (The Power of Pause)",
    chapterContext: "Bab 5: Jeda Dramatis",
    question: "Uraikan peran penting 'jeda dramatis' (dramatic pause) sebelum dan sesudah menyampaikan poin utama (punchline) dalam pidato persuasif!",
    writingGuide: "Analisis bagaimana keheningan sesaat dapat membangun ketegangan, menarik perhatian kembali audiens, serta menekankan urgensi informasi.",
    keyPoints: [
      "Jeda sebelum poin utama: memicu rasa penasaran (antisipasi).",
      "Jeda setelah poin utama: memberi waktu bagi audiens untuk merenungkan kebenaran argumen.",
      "Menghindari pengisi suara tak bermakna (filler words seperti 'eee', 'mmm', 'apa')."
    ]
  },
  {
    id: 6,
    grade: 7,
    topic: "Kontak Mata (Eye Contact)",
    chapterContext: "Bab 6: Tatapan Mata yang Menghubungkan",
    question: "Dalam etika retorika, mengapa menyapu pandangan ke seluruh ruangan (teknik segitiga atau kuadran) lebih efektif dibandingkan menatap satu titik mati di dinding belakang?",
    writingGuide: "Jelaskan aspek psikologis dari kontak mata yang tulus dan bagaimana hal itu membangun jembatan emosional (koneksi) antara pembicara dan pendengar.",
    keyPoints: [
      "Kontak mata melambangkan penghargaan pembicara kepada kehadiran fisik audiens.",
      "Teknik kuadran/segitiga: membagi area pandang agar seluruh audiens merasa disapa secara personal.",
      "Menghindari kesan bahwa orator sedang menghafal teks dengan menatap langit-langit."
    ]
  },
  {
    id: 7,
    grade: 7,
    topic: "Bahasa Tubuh & Postur",
    chapterContext: "Bab 7: Sikap Berdiri (Postur) Tegap",
    question: "Bagaimana postur berdiri yang tegap namun relaks (grounded stance) dapat memancarkan aura otoritas dan rasa percaya diri bahkan sebelum Anda mengucapkan kata pertama?",
    writingGuide: "Analisis bahasa tubuh non-verbal dari posisi kaki selebar bahu dan distribusi berat badan yang seimbang.",
    keyPoints: [
      "Postur tubuh memengaruhi produksi hormon testosteron (percaya diri) dan kortisol (stres).",
      "Menghindari gestur defensif (menyilangkan tangan, menyembunyikan tangan di saku).",
      "Sikap grounded meminimalkan goyangan tubuh yang mengalihkan perhatian audiens."
    ]
  },
  {
    id: 8,
    grade: 7,
    topic: "Gestur Tangan Oratoris",
    chapterContext: "Bab 8: Bahasa Tangan yang Berbicara",
    question: "Jelaskan fungsi gestur tangan terbuka (open-palm gestures) dalam komunikasi persuasif dan kapan waktu terbaik untuk menggunakannya!",
    writingGuide: "Bandingkan antara gestur tangan terbuka menghadap ke atas, ke bawah, dan posisi tangan terkepal secara oratoris.",
    keyPoints: [
      "Tangan terbuka ke atas: melambangkan kejujuran, kerendahan hati, dan undangan kerja sama.",
      "Tangan menghadap ke bawah: melambangkan ketegasan, arahan, dan penekanan otoritas.",
      "Pentingnya sinkronisasi antara kata verbal yang diucapkan dengan ayunan tangan."
    ]
  },
  {
    id: 9,
    grade: 7,
    topic: "Ekspresi Wajah (Mimik)",
    chapterContext: "Bab 9: Penjiwaan Lewat Ekspresi Wajah",
    question: "Mengapa ekspresi wajah (mimik) seorang orator harus selaras dengan emosi dari materi yang dibawakannya? Berikan contoh ketidakselarasan yang fatal!",
    writingGuide: "Tuliskan analisis tentang transmisi emosi lewat wajah dan dampaknya pada hilangnya kepercayaan audiens jika wajah terlihat datar atau senyum tidak tulus.",
    keyPoints: [
      "Wajah adalah layar emosi utama; audiens membaca mikroekspresi secara tidak sadar.",
      "Contoh fatal: Membicarakan bencana kelaparan atau kesedihan dengan wajah tersenyum atau datar tanpa empati.",
      "Keselarasan mimik mendukung dimensi keaslian (authenticity) karakter pembicara."
    ]
  },
  {
    id: 10,
    grade: 7,
    topic: "Mengatasi Lupa Teks",
    chapterContext: "Bab 10: Teknik Improvisasi Kilat",
    question: "Jika di tengah-tengah orasi Anda tiba-tiba lupa kalimat berikutnya, langkah taktis apa yang sebaiknya diambil tanpa memperlihatkan kepanikan kepada audiens?",
    writingGuide: "Berikan rincian strategi darurat seperti menggunakan teknik repetisi kalimat terakhir, mengajukan pertanyaan retoris, atau berpindah tempat.",
    keyPoints: [
      "Tetap tenang, ambil napas dalam, dan gunakan jeda diam seolah itu direncanakan.",
      "Teknik paraphrasing: mengulang gagasan sebelumnya dengan susunan kalimat berbeda.",
      "Mengajukan pertanyaan reflektif kepada audiens untuk mengulur waktu berpikir sehat."
    ]
  },
  {
    id: 11,
    grade: 7,
    topic: "Vocal Variety (Variasi Vokal)",
    chapterContext: "Bab 11: Dinamika Nada Bicara",
    question: "Apa yang dimaksud dengan suara monoton, dan bagaimana variasi vokal (tinggi-rendah nada, keras-lembut volume) menjaga fokus audiens agar tidak mengantuk?",
    writingGuide: "Gambarkan pidato bagaikan sebuah simfoni musik yang membutuhkan naik-turunnya melodi vokal untuk menciptakan dinamika rasa.",
    keyPoints: [
      "Suara monoton merangsang otak audiens untuk masuk ke fase istirahat/bosan.",
      "Pitch tinggi untuk kegembiraan/urgensi; pitch rendah untuk ketenangan/kesungguhan.",
      "Volume keras (forte) untuk penekanan visi; volume lembut (piano) untuk keintiman emosi."
    ]
  },
  {
    id: 12,
    grade: 7,
    topic: "Pentingnya Persiapan Diri",
    chapterContext: "Bab 12: Ritual Pemanasan Fisik & Suara",
    question: "Mengapa pemanasan fisik ringan dan latihan humming (bergumam) sebelum naik ke panggung sangat dianjurkan oleh praktisi retorika?",
    writingGuide: "Jelaskan manfaat fisiologis dari peregangan otot leher/rahang dan getaran pita suara untuk melancarkan artikulasi.",
    keyPoints: [
      "Mengurangi ketegangan otot-otot artikulator di sekitar rahang dan leher.",
      "Membuka resonansi rongga kepala dan dada lewat teknik humming.",
      "Membantu menstabilkan denyut jantung melalui kontrol napas teratur saat pemanasan."
    ]
  },
  {
    id: 13,
    grade: 7,
    topic: "Mengenal Karakter Audiens",
    chapterContext: "Bab 13: Membaca Situasi Ruangan",
    question: "Bagaimana seorang orator Kelas 7 menyesuaikan pilihan kata dan gaya bahasanya ketika berbicara di hadapan teman sebaya dibandingkan di hadapan dewan guru?",
    writingGuide: "Bandingkan pendekatan diksi, sapaan hormat, tingkat formalitas, serta ilustrasi contoh yang relevan untuk kedua kelompok audiens tersebut.",
    keyPoints: [
      "Audiens teman sebaya: diksi kasual, enerjik, contoh keseharian remaja.",
      "Audiens dewan guru: bahasa baku/formal, penuh takzim, referensi akademis.",
      "Prinsip adaptasi audiens demi efisiensi transfer pesan (komunikatif)."
    ]
  },
  {
    id: 14,
    grade: 7,
    topic: "Struktur Pidato Sederhana",
    chapterContext: "Bab 14: Pola Pembuka, Isi, dan Penutup",
    question: "Jelaskan fungsi logis dari struktur pidato tiga bagian (Pendahuluan, Isi, Penutup), dan mengapa bagian pendahuluan harus memiliki daya pikat kuat (hook)?",
    writingGuide: "Uraikan pentingnya 30 detik pertama untuk merebut perhatian pendengar dan fungsi penutup untuk meninggalkan kesan abadi (memorable).",
    keyPoints: [
      "Pendahuluan: merebut perhatian (hook) dan menyatakan arah pidato.",
      "Isi: menyampaikan argumen utama yang didukung bukti konkret.",
      "Penutup: merangkum esensi dan memberikan seruan aksi (call to action)."
    ]
  },
  {
    id: 15,
    grade: 7,
    topic: "Mikrofon & Tata Suara",
    chapterContext: "Bab 15: Menguasai Alat Pengeras Suara",
    question: "Bagaimana jarak ideal antara mulut dan mikrofon memengaruhi kualitas audio pidato Anda, dan apa bahayanya jika Anda terlalu dekat atau terlalu jauh?",
    writingGuide: "Tuliskan panduan penggunaan mikrofon genggam maupun mikrofon podium dari sudut pandang kejernihan vokal dan kenyamanan pendengar.",
    keyPoints: [
      "Jarak ideal sekitar 2-3 jari dari bibir untuk menghindari letupan suara (plosive sounds).",
      "Terlalu dekat memicu distorsi 'pop' dan dengung (feedback loop).",
      "Terlalu jauh membuat suara sayup dan kehilangan kehangatan frekuensi rendah."
    ]
  },
  {
    id: 16,
    grade: 7,
    topic: "Kejujuran Oratoris (Sincerity)",
    chapterContext: "Bab 1: Menaklukkan Demam Panggung",
    question: "Mengapa kejujuran dan ketulusan niat (sincerity) pembicara dapat dirasakan langsung oleh pendengar, bahkan melampaui teknik vokal yang rumit sekalipun?",
    writingGuide: "Hubungkan keselarasan hati nurani dengan stabilitas vokal dan pancaran mata yang tulus.",
    keyPoints: [
      "Kejujuran memancarkan ketenangan alami yang menurunkan kecemasan.",
      "Koneksi batin terbangun saat audiens merasakan pembicara peduli pada nasib mereka.",
      "Teknik tanpa ketulusan hanya menghasilkan kepalsuan retorika kosmetik."
    ]
  },
  {
    id: 17,
    grade: 7,
    topic: "Latihan Membaca Nyaring",
    chapterContext: "Bab 3: Kejelasan Lafal (Artikulasi)",
    question: "Bagaimana metode membaca nyaring (reading aloud) secara konsisten setiap hari dapat memperluas jangkauan vokal dan memperhalus transisi nada bicara Anda?",
    writingGuide: "Uraikan latihan ini dalam memperkuat memori otot wajah serta membiasakan pendengaran Anda terhadap warna suara sendiri.",
    keyPoints: [
      "Membangun stamina pita suara agar tidak mudah serak.",
      "Melatih koordinasi antara mata membaca, otak mengolah, dan mulut melafalkan.",
      "Menemukan jeda napas yang paling nyaman secara organis."
    ]
  },
  {
    id: 18,
    grade: 7,
    topic: "Bahasa Tubuh Defensif vs Terbuka",
    chapterContext: "Bab 8: Bahasa Tangan yang Berbicara",
    question: "Bandingkan dampak psikologis dari posisi tangan menyilang di dada (crossed arms) dengan posisi tangan yang terbuka lebar di hadapan publik!",
    writingGuide: "Analisis dari kacamata persepsi audiens tentang keterbukaan, penerimaan opini, serta rasa aman pembicara.",
    keyPoints: [
      "Tangan menyilang melambangkan penolakan, barikade diri, atau rasa tidak aman.",
      "Tangan terbuka melambangkan kejujuran, kesiapan berdialog, dan kehangatan emosi.",
      "Membiasakan postur terbuka memancing reaksi positif dan penerimaan dari pendengar."
    ]
  },
  {
    id: 19,
    grade: 7,
    topic: "Membina Rasa Percaya Diri",
    chapterContext: "Bab 1: Menaklukkan Demam Panggung",
    question: "Jelaskan konsep 'Power Posing' sebelum tampil berpidato dan bagaimana latihan fisik sederhana ini memengaruhi hormon dalam tubuh manusia!",
    writingGuide: "Ulas penelitian ilmiah tentang bagaimana pose tegap berkacak pinggang selama 2 menit dapat menstimulasi rasa percaya diri.",
    keyPoints: [
      "Power posing menurunkan kadar hormon kortisol (pemicu stres).",
      "Meningkatkan rasa keberdayaan diri sebelum melangkah ke arena orasi.",
      "Dapat dilakukan secara tertutup di ruang persiapan (ruang tunggu)."
    ]
  },
  {
    id: 20,
    grade: 7,
    topic: "Mencegah Suara Serak",
    chapterContext: "Bab 2: Fondasi Napas Diafragma",
    question: "Mengapa seorang orator dilarang keras memaksakan suara dari tenggorokan saat ingin berbicara lantang, dan bagaimana diafragma mengambil alih beban vokal tersebut?",
    writingGuide: "Diskusikan bahaya cedera pita suara (vocal nodules) akibat memaksakan teriak tanpa penyokong napas perut yang kuat.",
    keyPoints: [
      "Suara tenggorokan memberi tekanan mekanis berlebih pada pita suara halus.",
      "Otot perut diafragma bertindak sebagai kompresor alami yang mendorong udara stabil.",
      "Tekanan udara yang stabil menghasilkan proyeksi suara nyaring tanpa menyiksa leher."
    ]
  },
  {
    id: 21,
    grade: 7,
    topic: "Seni Menghormati Audiens",
    chapterContext: "Bab 13: Membaca Situasi Ruangan",
    question: "Dalam pidato adat maupun formal Indonesia, mengapa penyebutan gelar kehormatan audiens di awal pidato dinilai sangat krusial bagi keberhasilan komunikasi?",
    writingGuide: "Kaitkan dengan konsep sopan santun ketimuran dan pentingnya meletakkan rasa hormat setinggi-tingginya kepada pendengar.",
    keyPoints: [
      "Membangun jembatan etika (Ethos) bahwa pembicara menghargai hierarki sosial.",
      "Membuat audiens merasa diakui keberadaannya secara terhormat.",
      "Kesalahan menyebutkan nama/gelar tokoh penting dapat merusak suasana hati pendengar."
    ]
  },
  {
    id: 22,
    grade: 7,
    topic: "Visualisasi Mental (Mental Imagery)",
    chapterContext: "Bab 1: Menaklukkan Demam Panggung",
    question: "Gambarkan proses visualisasi positif yang harus dilakukan seorang orator Kelas 7 pada malam hari sebelum hari perlombaan pidato tiba!",
    writingGuide: "Uraikan detail visual dari naik panggung, tatapan mata penonton yang tersenyum, hingga akhir orasi yang disambut tepuk tangan hangat.",
    keyPoints: [
      "Melatih otak untuk akrab dengan skenario kesuksesan.",
      "Mengurangi kecemasan bawah sadar terhadap hal-hal tak terduga.",
      "Membiasakan diri dengan rasa tenang saat berada di tengah perhatian publik."
    ]
  },
  {
    id: 23,
    grade: 7,
    topic: "Melatih Ketepatan Berbicara",
    chapterContext: "Bab 4: Mengatur Tempo Orasi",
    question: "Mengapa penggunaan metronom (alat pengukur tempo musik) dapat dimanfaatkan untuk menyembuhkan kebiasaan berbicara terlalu cepat (kemrungsung)?",
    writingGuide: "Uraikan langkah praktis berlatih satu kata per ketukan metronom lambat hingga terbentuk ritme internal yang tenang.",
    keyPoints: [
      "Membantu melatih kesadaran motorik terhadap laju kata-kata.",
      "Menyediakan panduan ketukan fisik yang konkrit bagi pelafalan kalimat.",
      "Ritme internal yang stabil melahirkan gaya bicara yang berwibawa."
    ]
  },
  {
    id: 24,
    grade: 7,
    topic: "Menguasai Panggung Fisik",
    chapterContext: "Bab 7: Sikap Berdiri (Postur) Tegap",
    question: "Kapan waktu yang tepat bagi seorang orator untuk berjalan atau berpindah posisi di atas panggung, dan kapan ia harus berdiri diam membeku?",
    writingGuide: "Uraikan etika perpindahan panggung (stage blocking) agar gerakan fisik tidak terlihat seperti orang gelisah yang mondar-mandir.",
    keyPoints: [
      "Berpindah tempat saat terjadi transisi poin materi pidato (babak baru).",
      "Berdiri tegak lurus saat menyampaikan argumen inti/klimaks emosional.",
      "Gerakan kaki harus tegas, bertujuan, dan tidak menyeret langkah."
    ]
  },
  {
    id: 25,
    grade: 7,
    topic: "Kebersihan Diksi",
    chapterContext: "Bab 10: Teknik Improvisasi Kilat",
    question: "Mengapa kebiasaan mengucapkan pengisi jeda verbal seperti 'okey', 'so', atau 'gitu ya' secara berulang dapat menurunkan tingkat kepercayaan pemirsa secara drastis?",
    writingGuide: "Analisis dampak 'verbal ticks' ini dalam mengaburkan fokus pesan utama dan mengesankan pembicara kurang matang bersiap.",
    keyPoints: [
      "Menandakan ketidaksiapan mental atau miskinnya perbendaharaan kata.",
      "Mengalihkan perhatian audiens yang mulai menghitung jumlah ticks verbal.",
      "Solusi terbaik: mengganti filler words dengan keheningan diam (jeda sunyi)."
    ]
  },
  {
    id: 26,
    grade: 7,
    topic: "Kekuatan Senyuman (Power of Smile)",
    chapterContext: "Bab 9: Penjiwaan Lewat Ekspresi Wajah",
    question: "Bagaimana seulas senyuman tulus di awal pidato mampu mencairkan ketegangan dalam ruangan dan merebut simpati audiens seketika?",
    writingGuide: "Gunakan pendekatan neurosains sederhana tentang penularan emosi (mirror neurons) dari pembicara ke pendengar.",
    keyPoints: [
      "Senyuman memicu respons bawah sadar bahwa pembicara bersahabat dan aman.",
      "Membantu merelaksasi otot-otot wajah orator yang tegang.",
      "Menciptakan kesan pertama yang ramah, hangat, dan mudah didekati."
    ]
  },
  {
    id: 27,
    grade: 7,
    topic: "Pengaruh Pakaian Orator",
    chapterContext: "Bab 13: Membaca Situasi Ruangan",
    question: "Mengapa kerapihan dan keselarasan busana (pakaian) seorang orator di atas panggung dikategorikan sebagai bentuk penghormatan tertinggi kepada audiens?",
    writingGuide: "Diskusikan pepatah jawa 'Ajining raga ana ing busana' kaitannya dengan pembentukan kredibilitas pertama pembicara.",
    keyPoints: [
      "Busana yang rapi memancarkan keseriusan dan persiapan matang orator.",
      "Menghindari pakaian yang terlalu mencolok atau mengalihkan perhatian dari esensi pidato.",
      "Kesesuaian tema busana dengan norma sosial adat tempat acara berlangsung."
    ]
  },
  {
    id: 28,
    grade: 7,
    topic: "Melatih Ketahanan Suara",
    chapterContext: "Bab 11: Dinamika Nada Bicara",
    question: "Sebutkan beberapa pantangan makanan atau minuman yang harus dihindari seorang orator menjelang naik mimbar, dan berikan penjelasan ilmiahnya!",
    writingGuide: "Jelaskan efek air es, makanan berminyak, atau minuman manis terhadap kekentalan lendir (mukus) di pita suara.",
    keyPoints: [
      "Air es menyebabkan pengerutan otot tenggorokan (vasokontriksi).",
      "Gorengan/minyak merangsang iritasi serta produksi lendir berlebih di pita suara.",
      "Air putih hangat adalah pelumas terbaik untuk menjaga elastisitas vokal."
    ]
  },
  {
    id: 29,
    grade: 7,
    topic: "Membuka Pidato dengan Kisah",
    chapterContext: "Bab 14: Pola Pembuka, Isi, dan Penutup",
    question: "Mengapa teknik membuka pidato dengan menceritakan sebuah kisah pribadi yang singkat (anecdote) jauh lebih membekas dibanding sekadar ucapan salam formal?",
    writingGuide: "Analisis ketertarikan psikologis manusia terhadap struktur cerita (storytelling) dibandingkan deretan data dingin.",
    keyPoints: [
      "Struktur cerita memicu pelepasan hormon oksitosin yang membangun empati.",
      "Memicu imajinasi audiens untuk ikut masuk ke dalam dunia pembicara.",
      "Kisah pribadi yang relevan langsung menegakkan keaslian karakter pembicara."
    ]
  },
  {
    id: 30,
    grade: 7,
    topic: "Seni Mengakhiri Pidato",
    chapterContext: "Bab 14: Pola Pembuka, Isi, dan Penutup",
    question: "Jelaskan bahaya pembuka pidato yang luar biasa namun diakhiri dengan penutup yang tergesa-gesa atau antiklimaks seperti 'mungkin itu saja dari saya'!",
    writingGuide: "Analisis hukum ingatan psikologis manusia (recency effect) yang cenderung mengingat dengan kuat kalimat terakhir yang didengarnya.",
    keyPoints: [
      "Kalimat terakhir menentukan kesan abadi yang dibawa pulang oleh audiens.",
      "Frasa 'mungkin itu saja' mencerminkan rasa tidak percaya diri atau ingin cepat selesai.",
      "Penutup ideal harus gagah, penuh harapan, dan menyisakan ulasan mendalam."
    ]
  },
  {
    id: 31,
    grade: 7,
    topic: "Gestur Kepala & Leher",
    chapterContext: "Bab 7: Sikap Berdiri (Postur) Tegap",
    question: "Bagaimana posisi kepala yang tegak namun luwes (tidak mendongak sombong, tidak menunduk lesu) memengaruhi persepsi audiens tentang wibawa Anda?",
    writingGuide: "Bahas hubungan posisi dagu sejajar lantai dengan proyeksi suara lurus ke arah audiens.",
    keyPoints: [
      "Dagu sejajar lantai menjaga saluran pernapasan tetap lurus tanpa hambatan.",
      "Mencegah kesan arogan (mendongak berlebih) atau kesan rendah diri (menunduk).",
      "Memungkinkan kontak mata terjalin optimal ke seluruh penjuru ruangan."
    ]
  },
  {
    id: 32,
    grade: 7,
    topic: "Etika Menggunakan Catatan",
    chapterContext: "Bab 15: Menguasai Alat Pengeras Suara",
    question: "Jika Anda berpidato menggunakan bantuan catatan kecil (cue card), bagaimana etika membacanya agar interaksi mata dengan audiens tidak terputus lama?",
    writingGuide: "Tuliskan teknik melirik cepat (scanning) dan menjaga posisi cue card agar tidak menutupi wajah pembicara.",
    keyPoints: [
      "Cue card hanya berisi kata kunci (bullet points), bukan teks lengkap paragraf.",
      "Membaca catatan saat melakukan jeda bicara, lalu tatap mata audiens saat melafalkannya.",
      "Posisikan cue card setinggi dada, tidak terlalu tinggi menghalangi mimik wajah."
    ]
  },
  {
    id: 33,
    grade: 7,
    topic: "Olah Rasa Dan Penjiwaan",
    chapterContext: "Bab 9: Penjiwaan Lewat Ekspresi Wajah",
    question: "Bagaimana proses menginternalisasi (merasakan sungguh-sungguh) pesan dalam teks pidato dapat mencegah pembawaan orasi yang terkesan dibuat-buat (artifisial)?",
    writingGuide: "Diskusikan pentingnya pemahaman makna di balik setiap kalimat sebelum menghafalkan susunan bahasanya.",
    keyPoints: [
      "Penjiwaan lahir dari empati mendalam terhadap penderitaan atau visi materi.",
      "Mencegah gaya orasi teatrikal kosong yang tidak menyentuh nurani.",
      "Pesan yang dirasakan dengan tulus otomatis menuntun denyut vokal dan ekspresi wajah yang natural."
    ]
  },

  // KELAS 8 (34 - 66): Persuasi, Tiga Pilar Aristoteles, Tokoh Retorika Nasional, & Penulisan Teks
  {
    id: 34,
    grade: 8,
    topic: "Pilar Ethos (Kredibilitas)",
    chapterContext: "Bab 1: Menegakkan Ethos (Kredibilitas)",
    question: "Mengapa pilar Ethos (kredibilitas diri orator) diletakkan sebagai fondasi pertama dalam trilogi retorika Aristoteles, dan bagaimana seorang siswa dapat menunjukkannya di awal pidato?",
    writingGuide: "Uraikan definisi Ethos sebagai karakter moral pembicara serta cara melukiskan kompetensi dan integritas tanpa terkesan menyombongkan diri.",
    keyPoints: [
      "Ethos menentukan apakah audiens bersedia membuka telinga untuk mendengar pidato.",
      "Ditegakkan lewat penyajian data ilmiah yang akurat dan sikap santun yang tulus.",
      "Kesesuaian antara rekam jejak tindakan nyata dengan materi pidato yang disuarakan."
    ]
  },
  {
    id: 35,
    grade: 8,
    topic: "Pilar Pathos (Sentuhan Emosi)",
    chapterContext: "Bab 2: Menyentuh Pathos (Emosi Pendengar)",
    question: "Bagaimana seorang orator memanfaatkan kekuatan pilar Pathos untuk menggerakkan hati audiens yang awalnya bersikap apatis (tidak peduli) menjadi sangat bersemangat mendukung sebuah gerakan sosial?",
    writingGuide: "Tuliskan teknik menyusun perumpamaan (metafora) yang mengaduk empati, rasa iba, rasa bangga, maupun kemarahan mulia demi keadilan.",
    keyPoints: [
      "Pathos menjembatani pemikiran rasional ke dalam aksi nyata lewat dorongan perasaan.",
      "Penggunaan deskripsi narasi yang hidup (vivid descriptions) mengenai realitas sosial.",
      "Pentingnya mengontrol batas emosi orator sendiri agar tidak larut menangis berlebih di mimbar."
    ]
  },
  {
    id: 36,
    grade: 8,
    topic: "Pilar Logos (Argumentasi Logis)",
    chapterContext: "Bab 3: Memperkuat Logos (Nalar dan Argumen)",
    question: "Mengapa pidato yang kaya akan sentuhan emosi (Pathos) namun sangat miskin argumen logis (Logos) dinilai berbahaya dan rentan dikategorikan sebagai hasutan demagog (manipulatif)?",
    writingGuide: "Jelaskan pentingnya menyajikan data statistik, bukti empiris, struktur silogisme, serta hubungan sebab-akibat yang sehat untuk menopang kebenaran gagasan.",
    keyPoints: [
      "Logos menyediakan jangkar kebenaran objektif yang melindungi audiens dari manipulasi.",
      "Logos membangun argumen yang kokoh dari sanggahan logis pihak oposisi.",
      "Kombinasi sehat antara fakta tak terbantahkan dengan penyajian yang humanis."
    ]
  },
  {
    id: 37,
    grade: 8,
    topic: "Retorika Pembebasan Bung Karno",
    chapterContext: "Bab 4: Belajar dari Orasi Bung Karno",
    question: "Analisis ciri khas retorika pembebasan Ir. Soekarno (Bung Karno) yang mampu menyatukan jutaan rakyat dari berbagai latar belakang suku dan agama pada masa perjuangan kemerdekaan!",
    writingGuide: "Ulas gaya bahasanya yang penuh majas repetisi, penggunaan analogi sejarah kejayaan bangsa, serta intonasi berapi-api yang membakar nasionalisme.",
    keyPoints: [
      "Gaya orasi bernada baritonal, berwibawa, penuh penekanan ritmis (staccato).",
      "Kerap menyisipkan kutipan filsafat dunia dipadukan bahasa marhaen sederhana.",
      "Kemampuan menyalurkan 'jiwa sejarah' (Zeitgeist) ke dalam kalimat-kalimat pemicu perjuangan."
    ]
  },
  {
    id: 38,
    grade: 8,
    topic: "Dapur Retorika Tjokroaminoto",
    chapterContext: "Bab 5: Dapur Retorika Tjokroaminoto",
    question: "H.O.S. Tjokroaminoto dikenal sebagai 'Guru Bangsa' yang melahirkan tokoh-tokoh besar. Mengapa prinsip retorika beliau 'Setinggi-tinggi ilmu, semurni-murni tauhid, sepintar-pintar siasat' sangat membekas pada murid-muridnya?",
    writingGuide: "Analisis hubungan antara kedalaman pengetahuan agama, ketajaman analisis politik, dan kepiawaian berpidato dalam merintis kesadaran kemerdekaan.",
    keyPoints: [
      "Pentingnya integritas spiritual (tauhid) sebagai penuntun moral berorasi.",
      "Ketajaman siasat (strategi komunikasi) untuk menembus sensor kolonial Belanda.",
      "Pemberdayaan kata-kata sebagai senjata perjuangan massa akar rumput."
    ]
  },
  {
    id: 39,
    grade: 8,
    topic: "Menyusun Kalimat Pembuka (Hook)",
    chapterContext: "Bab 6: Teknik Memikat Sejak Detik Pertama",
    question: "Bandingkan efektivitas kalimat pembuka pidato yang menggunakan 'fakta mengejutkan' (shocking statistic) dengan pembuka yang menggunakan 'pertanyaan retoris kritis'!",
    writingGuide: "Buatlah dua contoh kalimat pembuka orasi bertema 'Bahaya Kecanduan Gadget pada Remaja' menggunakan masing-masing teknik tersebut.",
    keyPoints: [
      "Shocking statistic langsung membangun urgensi dan kelayakan topik (Logos).",
      "Pertanyaan retoris memicu keterlibatan aktif kognisi audiens tanpa memaksa menjawab.",
      "Kedua teknik bertujuan memecah kebosanan audiens di awal sesi (pattern interrupt)."
    ]
  },
  {
    id: 40,
    grade: 8,
    topic: "Pola Urutan Motivasi Monroe",
    chapterContext: "Bab 7: Formula Urutan Motivasi Monroe",
    question: "Jelaskan lima tahapan sistematis dalam Formula Urutan Motivasi Monroe (Monroe's Motivated Sequence) untuk memengaruhi audiens agar melakukan aksi nyata!",
    writingGuide: "Uraikan langkah-langkah: Attention (Perhatian), Need (Kebutuhan), Satisfaction (Solusi), Visualization (Visualisasi), dan Action (Tindakan) secara urut.",
    keyPoints: [
      "Attention: Rebut perhatian pendengar lewat gambaran dramatis.",
      "Need: Buktikan adanya masalah mendalam yang harus segera diselesaikan.",
      "Satisfaction & Visualization: Berikan solusi taktis dan gambarkan masa depan jika solusi dijalankan.",
      "Action: Seruan tindakan spesifik yang mudah dieksekusi audiens."
    ]
  },
  {
    id: 41,
    grade: 8,
    topic: "Menulis Draf Teks Pidato",
    chapterContext: "Bab 8: Menulis Teks Orasi yang Mengalir",
    question: "Mengapa sebuah teks pidato yang baik harus ditulis menggunakan bahasa tutur (spoken language) bukan bahasa buku/tulisan ilmiah formal?",
    writingGuide: "Tunjukkan perbedaan struktur kalimat pasif yang panjang khas buku ilmiah dengan kalimat aktif pendek yang nyaman dilafalkan dan mudah didengar.",
    keyPoints: [
      "Telinga tidak memiliki tombol 'rewind' untuk membaca ulang kalimat berbelit.",
      "Bahasa tutur kaya akan kalimat aktif, kata ganti personal (kita, kami, Anda).",
      "Kalimat pendek meminimalkan risiko orator kehabisan napas di tengah orasi."
    ]
  },
  {
    id: 42,
    grade: 8,
    topic: "Majas Repetisi Oratoris",
    chapterContext: "Bab 9: Kekuatan Majas Repetisi",
    question: "Jelaskan makna gaya bahasa 'Anaphora' (pengulangan kata di awal kalimat berurutan) dan buatlah paragraf pendek orasi orisinal yang menerapkannya!",
    writingGuide: "Analisis bagaimana pengulangan kata tersebut membangun ritme musikalitas luhur dan memperkuat penegasan visi perjuangan.",
    keyPoints: [
      "Anaphora menciptakan ketukan ritmis yang memukau sistem pendengaran manusia.",
      "Contoh: 'Kita butuh pemuda yang berani. Kita butuh pemuda yang peduli. Kita butuh pemuda yang beraksi!'",
      "Berfungsi menancapkan kata kunci utama ke dalam memori jangka panjang audiens."
    ]
  },
  {
    id: 43,
    grade: 8,
    topic: "Teknik Trikolon (Rule of Three)",
    chapterContext: "Bab 10: Seni Trikolon (Rule of Three)",
    question: "Mengapa pengelompokan gagasan dalam struktur tiga kata atau frasa (Trikolon / Rule of Three) dirasa sangat memuaskan bagi otak manusia? Berikan contohnya!",
    writingGuide: "Kaji dari sudut pandang psikologi kognitif mengenai pola minimal terkecil untuk menciptakan harmoni kelengkapan informasi.",
    keyPoints: [
      "Otak manusia sangat menyukai pola kelipatan tiga karena terasa lengkap dan seimbang.",
      "Contoh legendaris: 'Veni, Vidi, Vici' atau 'Datang, Serang, Menang!'.",
      "Trikolon memudahkan audiens mengingat slogan atau poin-poin visi inti pidato."
    ]
  },
  {
    id: 44,
    grade: 8,
    topic: "Metode Pidato Ekstemporan",
    chapterContext: "Bab 11: Metode Penyampaian Pidato",
    question: "Bandingkan kelebihan dan kelemahan metode pidato Ekstemporan (menggunakan outline konsep) dengan metode Manuskrip (membaca teks utuh kata demi kata)!",
    writingGuide: "Fokuskan analisis pada aspek fleksibilitas interaksi mata dengan audiens serta keakuratan data yang disampaikan.",
    keyPoints: [
      "Manuskrip: Data sangat presisi, namun interaksi kaku dan minim kontak mata tulus.",
      "Ekstemporan: Interaksi hidup, fleksibel terhadap reaksi audiens, terlihat sangat menguasai materi.",
      "Ekstemporan menuntut latihan pemahaman konsep yang lebih mendalam dibanding sekadar menghafal."
    ]
  },
  {
    id: 45,
    grade: 8,
    topic: "Analogi dan Metafora",
    chapterContext: "Bab 12: Metafora dan Analogi Tajam",
    question: "Bagaimana penggunaan analogi yang sederhana dan dekat dengan kehidupan audiens dapat menyederhanakan konsep ilmiah yang sangat rumit dalam sekejap?",
    writingGuide: "Berikan contoh analogi kreatif untuk menjelaskan konsep 'kerusakan lingkungan' atau 'efek domino ketidakdisiplinan'.",
    keyPoints: [
      "Mengaitkan hal abstrak dengan objek konkret yang sudah akrab di memori audiens.",
      "Mengaktifkan visualisasi mental pendengar secara instan.",
      "Mengurangi beban kognitif audiens dalam memahami argumen rumit."
    ]
  },
  {
    id: 46,
    grade: 8,
    topic: "Mengatasi Argumen Penentang",
    chapterContext: "Bab 13: Menghalau Keraguan Audiens",
    question: "Sebelum audiens sempat menyanggah isi pidato Anda, bagaimana teknik 'Inokulasi Argumen' (antidote) dapat Anda gunakan untuk meruntuhkan keraguan mereka terlebih dahulu?",
    writingGuide: "Tuliskan simulasi kalimat pidato yang menyebutkan potensi keberatan publik lalu langsung mematahkannya dengan fakta logis.",
    keyPoints: [
      "Menyebutkan argumen kontra secara jujur, lalu membuktikan kelemahannya secara ilmiah.",
      "Membangun impresi bahwa pembicara berpikiran luas, adil, dan objektif.",
      "Menurunkan resistensi psikologis penonton yang berseberangan opini."
    ]
  },
  {
    id: 47,
    grade: 8,
    topic: "Etika Mengutip Data",
    chapterContext: "Bab 14: Etika Mengutip Tokoh & Data",
    question: "Mengapa menyebutkan sumber rujukan data ilmiah atau nama tokoh yang dikutip secara jujur (anti-plagiarisme) justru menaikkan pilar Ethos (kredibilitas) Anda?",
    writingGuide: "Hubungkan kejujuran akademis dengan pembentukan reputasi jangka panjang seorang pembicara luhur.",
    keyPoints: [
      "Menunjukkan bahwa pidato disokong oleh riset mendalam yang bertanggung jawab.",
      "Mencegah tuntutan hukum atau hilangnya kepercayaan publik akibat hoax.",
      "Menunjukkan rasa hormat kepada orisinalitas buah pikir intelektual lain."
    ]
  },
  {
    id: 48,
    grade: 8,
    topic: "Pentingnya Seruan Aksi (Call to Action)",
    chapterContext: "Bab 15: Penutup Pidato yang Menggerakkan",
    question: "Gambarkan bagaimana sebuah 'Seruan Aksi' (Call to Action) yang spesifik, realistis, dan mendesak ditulis di bagian penutupan teks pidato persuasif!",
    writingGuide: "Berikan contoh seruan aksi bertema gerakan 'Bebas Sampah Plastik di Sekolah' yang mengundang partisipasi aktif pendengar hari itu juga.",
    keyPoints: [
      "Aksi harus bersifat mikro (mudah dilakukan segera tanpa menunda).",
      "Menggunakan kata kerja aktif persuasif kolektif (mari kita, mulailah detik ini).",
      "Menanamkan konsekuensi logis jika aksi tidak segera dilakukan."
    ]
  },
  {
    id: 49,
    grade: 8,
    topic: "Penerapan Trilogi Aristoteles",
    chapterContext: "Bab 3: Memperkuat Logos (Nalar dan Argumen)",
    question: "Buatlah analisis singkat bagaimana sebuah draf pidato kampanye pemilihan Ketua OSIS dapat memadukan pilar Ethos, Pathos, dan Logos secara berimbang!",
    writingGuide: "Tuliskan sketsa kalimat ringkas untuk masing-masing pilar dalam konteks meyakinkan pemilih remaja.",
    keyPoints: [
      "Ethos: Menyebutkan visi kepemimpinan dan dedikasi organisasi selama ini.",
      "Pathos: Menyentuh rasa kepemilikan dan kebanggaan siswa terhadap nama baik sekolah.",
      "Logos: Menyajikan program kerja konkret dengan anggaran dan jadwal transparan."
    ]
  },
  {
    id: 50,
    grade: 8,
    topic: "Daya Magis Diksi Indonesia",
    chapterContext: "Bab 9: Kekuatan Majas Repetisi",
    question: "Diksi bahasa Indonesia memiliki kosakata luhur (seperti 'nirmala', 'angkasa', 'karsa'). Bagaimana pemilihan diksi luhur ini menaikkan derajat estetika teks orasi?",
    writingGuide: "Bandingkan rasa bahasa dari kalimat yang menggunakan kata biasa dengan kalimat yang menggunakan kata berdaya magis puitis.",
    keyPoints: [
      "Menimbulkan efek kagum dan khidmat dalam suasana ruang orasi.",
      "Memperkaya khazanah sastra penulisan naskah pidato kenegaraan.",
      "Pemilihan kata yang matang mencerminkan kedalaman rasa literasi orator."
    ]
  },
  {
    id: 51,
    grade: 8,
    topic: "Mencegah Fallacy (Kesesatan Berpikir)",
    chapterContext: "Bab 3: Memperkuat Logos (Nalar dan Argumen)",
    question: "Apa bahaya kesesatan berpikir 'Ad Hominem' (menyerang pribadi orang, bukan argumennya) dalam penyampaian pidato publik, dan bagaimana cara menghindarinya?",
    writingGuide: "Berikan contoh konkret perdebatan sehat yang berfokus penuh pada esensi masalah ilmiah tanpa mencela latar belakang personal oposisi.",
    keyPoints: [
      "Ad Hominem merusak kualitas dialog publik menjadi arena pertikaian personal.",
      "Menunjukkan kelemahan logika orator yang tidak mampu menyanggah data lawan.",
      "Fokus pada data empiris, solusi sistemis, dan kaidah keilmuan objektif."
    ]
  },
  {
    id: 52,
    grade: 8,
    topic: "Seni Menulis Narasi Deskriptif",
    chapterContext: "Bab 2: Menyentuh Pathos (Emosi Pendengar)",
    question: "Bagaimana cara menyusun gambaran deskriptif 'penderitaan seorang petani' agar mampu meluluhkan keangkuhan hati audiens perkotaan?",
    writingGuide: "Gunakan detail pancaindra (visual, audio, rasa) untuk melukiskan keringat, retakan tanah, dan harapan tipis keluarga petani.",
    keyPoints: [
      "Menghindari angka statistik dingin, beralih ke potret kemanusiaan personal yang nyata.",
      "Melibatkan deskripsi sensoris (bau tanah kering, peluh di pelipis dagu).",
      "Membangun rasa bersalah yang positif untuk memicu aksi solidaritas kemanusiaan."
    ]
  },
  {
    id: 53,
    grade: 8,
    topic: "Retorika Santun Nusantara",
    chapterContext: "Bab 5: Dapur Retorika Tjokroaminoto",
    question: "Kaji bagaimana kearifan lokal kesantunan berbicara masyarakat Nusantara dapat memperkaya etika retorika modern yang sering kali terkesan agresif kebarat-baratan!",
    writingGuide: "Diskusikan prinsip 'ngajeni' (menghormati), andhap asor (rendah hati), dan 'tepa salira' (tenggang rasa) dalam berorasi.",
    keyPoints: [
      "Penyampaian kritik tajam secara elegan menggunakan kiasan santun tanpa mencaci.",
      "Mendengarkan terlebih dahulu sebelum menyanggah argumen oposisi.",
      "Mengutamakan kemaslahatan bersama (harmoni sosial) di atas ego kemenangan pribadi."
    ]
  },
  {
    id: 54,
    grade: 8,
    topic: "Kekuatan Kontras (Antitesis)",
    chapterContext: "Bab 12: Metafora dan Analogi Tajam",
    question: "Jelaskan struktur majas 'Antitesis' (menyandingkan dua gagasan yang sangat bertolak belakang) dan mengapa kontras ini sangat efektif mencuri perhatian!",
    writingGuide: "Buatlah kalimat orasi bertema kesenjangan sosial menggunakan majas antitesis orisinal buatan Anda.",
    keyPoints: [
      "Membenturkan dua realitas ekstrem untuk melahirkan kesadaran kritis.",
      "Contoh: 'Di kala segelintir orang berpesta pora di gedung pencakar langit, jutaan lainnya merayap kelaparan di gang-gang sempit.'",
      "Meningkatkan dramatisasi pesan pidato secara estetis."
    ]
  },
  {
    id: 55,
    grade: 8,
    topic: "Melatih Ketajaman Riset Pidato",
    chapterContext: "Bab 14: Etika Mengutip Tokoh & Data",
    question: "Sebelum mulai menulis kalimat pertama teks pidato, mengapa tahap riset data (fact-finding) harus menyita 70% waktu persiapan Anda?",
    writingGuide: "Tuliskan langkah pencarian data dari jurnal tepercaya, laporan statistik nasional, dan wawancara lapangan.",
    keyPoints: [
      "Mencegah kesalahan penyajian data yang dapat menghancurkan Ethos orator seketika.",
      "Memberikan kedalaman pemahaman materi sehingga improvisasi panggung berjalan lancar.",
      "Argumen yang bertumpu pada riset mendalam akan berdiri kokoh menghadapi kritik."
    ]
  },
  {
    id: 56,
    grade: 8,
    topic: "Transisi Paragraf yang Mulus",
    chapterContext: "Bab 8: Menulis Teks Orasi yang Mengalir",
    question: "Apa fungsi dari kata-kata transisi (seperti 'namun di sisi lain', 'oleh karena itu', 'sebagai konsekuensinya') dalam menjaga alur pikir pendengar tetap utuh?",
    writingGuide: "Bandingkan draf pidato tanpa transisi (terasa patah-patah) dengan draf yang memiliki transisi logis nan mengalir.",
    keyPoints: [
      "Transisi bertindak sebagai rambu penunjuk jalan arah logika berpikir orator.",
      "Membantu pendengar memetakan hubungan sebab-akibat antar-gagasan.",
      "Membina kelancaran (fluency) pembacaan naskah di panggung."
    ]
  },
  {
    id: 57,
    grade: 8,
    topic: "Membangun Kredibilitas Karakter",
    chapterContext: "Bab 1: Menegakkan Ethos (Kredibilitas)",
    question: "Bagaimana cara terbaik menceritakan kegagalan masa lalu Anda sendiri di atas panggung untuk meningkatkan pilar Ethos dan memikat hati audiens?",
    writingGuide: "Diskusikan kerendahan hati (vulnerability) sebagai magnet kepemimpinan yang membuat pembicara terasa dekat, nyata, dan jujur.",
    keyPoints: [
      "Mengaku bersalah atau gagal melambangkan kekuatan moral yang tinggi.",
      "Kegagalan harus diikuti oleh pelajaran hidup konkret dan solusi bangkit.",
      "Membuat audiens merasa tidak dihakimi atau digurui dari atas 'menara gading'."
    ]
  },
  {
    id: 58,
    grade: 8,
    topic: "Retorika Persatuan Bangsa",
    chapterContext: "Bab 4: Belajar dari Orasi Bung Karno",
    question: "Mengapa orasi bertema kebangsaan di Indonesia wajib mengedepankan nilai Bhinneka Tunggal Ika, dan bagaimana cara menghindari diksi yang memecah belah SARA?",
    writingGuide: "Berikan rancangan naskah singkat pembuka pidato yang menyapa seluruh golongan dengan penuh rasa persaudaraan nasional.",
    keyPoints: [
      "Retorika kebangsaan harus merangkul semua identitas tanpa marjinalisasi.",
      "Menggunakan nilai-beda sebagai kekayaan bangsa, bukan pemicu konflik.",
      "Fokus pada kesamaan cita-cita luhur kemerdekaan dan keadilan sosial."
    ]
  },
  {
    id: 59,
    grade: 8,
    topic: "Konsep Pidato Persuasif",
    chapterContext: "Bab 6: Teknik Memikat Sejak Detik Pertama",
    question: "Jelaskan perbedaan mendasar antara pidato informatif (menjelaskan cara kerja sesuatu) dengan pidato persuasif (mengubah keyakinan atau tindakan pendengar)!",
    writingGuide: "Uraikan indikator keberhasilan dari kedua jenis pidato tersebut di akhir sesi presentasi publik.",
    keyPoints: [
      "Informatif: Sukses jika audiens paham/tahu informasi baru (transfer of knowledge).",
      "Persuasif: Sukses jika ada pergeseran paradigma, emosi, atau lahir tindakan nyata (transformation).",
      "Persuasif menuntut keterlibatan emosional dan argumentasi pembuktian nilai jauh lebih tinggi."
    ]
  },
  {
    id: 60,
    grade: 8,
    topic: "Pentingnya Slogan (Catchphrase)",
    chapterContext: "Bab 15: Penutup Pidato yang Menggerakkan",
    question: "Mengapa menciptakan slogan singkat (catchphrase) yang berulang-ulang sangat disarankan dalam pidato kampanye, dan bagaimana kriteria slogan yang baik?",
    writingGuide: "Ulas contoh slogan terkenal dunia (e.g. 'Yes We Can', 'Sekali Merdeka Tetap Merdeka') dari aspek rima dan kemudahan diingat.",
    keyPoints: [
      "Slogan mereduksi gagasan kompleks menjadi satu frasa berdaya ingat tinggi.",
      "Kriteria slogan ideal: pendek (3-5 kata), berirama, bermakna tegas, memicu optimisme.",
      "Berfungsi sebagai jangkar memori kolektif audiens pasca-acara selesai."
    ]
  },
  {
    id: 61,
    grade: 8,
    topic: "Kekuatan Contoh Konkret",
    chapterContext: "Bab 12: Metafora dan Analogi Tajam",
    question: "Mengapa deretan teori mulia dalam pidato akan menguap sia-sia tanpa adanya satu contoh studi kasus (kisah nyata) di lapangan?",
    writingGuide: "Analisis dari sisi pembuktian logis bahwa teori Anda memang bekerja nyata di dunia empiris.",
    keyPoints: [
      "Studi kasus konkret memberikan bukti tak terbantahkan (Logos).",
      "Membantu audiens memvisualisasikan bagaimana teori diterapkan dalam praktik.",
      "Meningkatkan tingkat kepraktisan dari usulan solusi pidato Anda."
    ]
  },
  {
    id: 62,
    grade: 8,
    topic: "Majas Aliterasi (Rima Konsonan)",
    chapterContext: "Bab 9: Kekuatan Majas Repetisi",
    question: "Apa yang dimaksud dengan majas 'Aliterasi' (pengulangan bunyi konsonan awal yang sama) dan bagaimana keindahan bunyinya jika dilafalkan di atas mimbar?",
    writingGuide: "Buatlah satu kalimat orasi singkat yang menerapkan teknik aliterasi konsonan 'B' atau 'P' secara harmonis.",
    keyPoints: [
      "Aliterasi memberikan ketukan puitis alami yang memperindah pendengaran.",
      "Contoh: 'Pemuda pelopor, pembawa panji perubahan, penegak keadilan.'",
      "Menambah bobot wibawa estetik dalam penulisan draf naskah."
    ]
  },
  {
    id: 63,
    grade: 8,
    topic: "Seni Menolak Dengan Sopan",
    chapterContext: "Bab 13: Menghalau Keraguan Audiens",
    question: "Bagaimana cara menyanggah opini salah yang beredar luas di tengah audiens tanpa membuat mereka merasa dipermalukan atau diserang kecerdasannya?",
    writingGuide: "Ulas teknik 'Agree to Disagree' yang dibungkus dengan kalimat takzim dan penyajian data tandingan secara netral.",
    keyPoints: [
      "Mengakui niat baik di balik opini mereka sebelum mengoreksi kekeliruan datanya.",
      "Gunakan bahasa impersonal (data menunjukkan, hasil riset membuktikan) alih-alih menyerang personal.",
      "Menjaga martabat audiens agar ego mereka tidak menolak kebenaran baru."
    ]
  },
  {
    id: 64,
    grade: 8,
    topic: "Membedah Gaya Bahasa Tjokroaminoto",
    chapterContext: "Bab 5: Dapur Retorika Tjokroaminoto",
    question: "H.O.S Tjokroaminoto mengajarkan teknik orasi di depan cermin lilin malam. Nilai disiplin apa yang bisa dipetik dari metode latihan fisik beliau tersebut?",
    writingGuide: "Analisis manfaat latihan mandiri memproyeksikan suara di keheningan malam demi mengasah konsentrasi jiwa.",
    keyPoints: [
      "Melatih kontrol fokus mata menatap diri sendiri di tengah bayang-bayang kegelapan.",
      "Mematangkan penjiwaan kata tanpa teralihkan hiruk-pikuk luar.",
      "Membentuk karakter orator yang mandiri, kontemplatif, dan berakar spiritual kuat."
    ]
  },
  {
    id: 65,
    grade: 8,
    topic: "Retorika Sebagai Seni Penyembuh",
    chapterContext: "Bab 2: Menyentuh Pathos (Emosi Pendengar)",
    question: "Bagaimana pidato publik dapat berfungsi sebagai media 'penyembuh trauma sosial' pasca-bencana alam atau konflik sosial? Analisis dari sisi pilar Pathos!",
    writingGuide: "Uraikan penyusunan kalimat penuh harapan (hope), belas kasih (compassion), serta rekonstruksi semangat persatuan nasional.",
    keyPoints: [
      "Orator bertindak sebagai pembawa kedamaian yang mengobati luka psikologis massa.",
      "Diksi yang meredakan amarah dan mengalirkan ketenangan batin kolektif.",
      "Membangkitkan asa (optimisme) dari puing-puing keputusasaan."
    ]
  },
  {
    id: 66,
    grade: 8,
    topic: "Evaluasi Mandiri Naskah Pidato",
    chapterContext: "Bab 8: Menulis Teks Orasi yang Mengalir",
    question: "Sebutkan daftar periksa (checklist) wajib saat Anda membaca ulang draf naskah pidato Anda sebelum dilatihkan secara vokal!",
    writingGuide: "Tuliskan poin-poin evaluasi kejelasan gagasan, kepatutan durasi waktu, kemudahan bernapas, serta kesantunan diksi.",
    keyPoints: [
      "Apakah ada kalimat yang terlalu panjang sehingga berisiko kehabisan napas?",
      "Apakah struktur logika pembuka, isi, penutup sudah terhubung erat?",
      "Apakah seluruh data rujukan ilmiah sudah divalidasi kebenaran faktanya?"
    ]
  },

  // KELAS 9 (67 - 100): Retorika Lanjut, Debat Cerdas, Kepemimpinan, Majas Oratoris, & Etika
  {
    id: 67,
    grade: 9,
    topic: "Retorika Visioner Pemimpin",
    chapterContext: "Bab 1: Retorika Kepemimpinan Visioner",
    question: "Bagaimana karakteristik utama dari gaya retorika kepemimpinan yang 'visioner' (visionary leadership rhetoric), dan mengapa ia harus mampu melampaui batas realitas masa kini?",
    writingGuide: "Uraikan kemampuan melukiskan masa depan (blueprint) yang ideal dengan penuh optimisme tinggi serta merumuskan jalan taktis mencapainya.",
    keyPoints: [
      "Mampu menerjemahkan visi abstrak masa depan menjadi misi konkret hari ini.",
      "Menggunakan diksi bermuatan harapan, transformasi, inovasi, dan keberanian sejarah.",
      "Menyediakan alasan kuat (the big 'Why') mengapa perubahan tersebut wajib diperjuangkan bersama."
    ]
  },
  {
    id: 68,
    grade: 9,
    topic: "Etika Komunikasi Publik",
    chapterContext: "Bab 2: Etika Berbicara di Era Informasi",
    question: "Di era digital yang penuh sebaran informasi palsu (hoax), tanggung jawab etis apa saja yang dipikul oleh seorang orator ketika berbicara di panggung terbuka?",
    writingGuide: "Analisis dampak merusak dari fitnah, manipulasi emosi massa demi kepentingan pribadi (demagog), serta pentingnya tabayyun (verifikasi data).",
    keyPoints: [
      "Wajib menyaring kebenaran informasi sebelum menyuarakannya kepada publik.",
      "Menolak menyembunyikan atau memutarbalikkan fakta demi keuntungan ego sektoral.",
      "Menyadari bahwa setiap kalimat yang terucap memiliki konsekuensi sosial moral jangka panjang."
    ]
  },
  {
    id: 69,
    grade: 9,
    topic: "Retorika Debat Formal",
    chapterContext: "Bab 3: Konstruksi Argumen Debat",
    question: "Dalam debat formal berstandar internasional, jelaskan struktur penyusunan argumen menggunakan metode A-R-E-L (Assertion, Reasoning, Evidence, Linkback)!",
    writingGuide: "Terapkan formula A-R-E-L ini untuk membangun argumen yang kokoh guna menyokong mosi debat: 'Penggunaan kecerdasan buatan (AI) di sekolah wajib dibatasi'.",
    keyPoints: [
      "Assertion: Pernyataan klaim argumen utama secara lugas.",
      "Reasoning: Analisis logis mendalam mengapa klaim tersebut bernilai benar.",
      "Evidence: Penyajian data empiris, statistik, studi kasus ilmiah sebagai pembuktian.",
      "Linkback: Penarikan benang merah kembali yang mengunci kebenaran mosi debat."
    ]
  },
  {
    id: 70,
    grade: 9,
    topic: "Seni Menyanggah (Rebuttal)",
    chapterContext: "Bab 4: Seni Menyanggah (Rebuttal) Elegan",
    question: "Bagaimana cara menyusun bidasan/sanggahan (rebuttal) yang mematikan logika lawan dalam debat tanpa perlu meninggikan nada suara atau menggunakan kata-kata kasar?",
    writingGuide: "Fokuskan analisis pada pembongkaran asumsi dasar lawan yang keliru (fallacy detection) serta penyajian kontradiksi data mereka secara elegan.",
    keyPoints: [
      "Membongkar cacat logika (logical fallacy) dalam argumen lawan secara objektif.",
      "Menunjukkan inkonsistensi data atau kesimpulan ekstrem yang mereka buat.",
      "Tetap tenang, tersenyum, menjaga intonasi rendah, melambangkan kematangan psikologis."
    ]
  },
  {
    id: 71,
    grade: 9,
    topic: "Krisis Komunikasi (Crisis Management)",
    chapterContext: "Bab 5: Retorika Menghadapi Krisis",
    question: "Ketika terjadi kesalahan fatal dalam kepengurusan organisasi Anda, bagaimana struktur pidato klarifikasi (apology speech) yang tulus untuk memulihkan kepercayaan publik?",
    writingGuide: "Analisis mengapa penolakan bersalah (defensif) justru memperburuk citra, dan bagaimana memformulasikan permohonan maaf serta rencana aksi perbaikan konkret.",
    keyPoints: [
      "Mengakui kesalahan secara jantan tanpa mencari-cari alasan pembenaran.",
      "Menunjukkan empati mendalam kepada pihak yang dirugikan oleh kesalahan.",
      "Menyajikan solusi konkret, transparan, dan terukur agar kesalahan tidak terulang."
    ]
  },
  {
    id: 72,
    grade: 9,
    topic: "Pidato Kenegaraan Bersejarah",
    chapterContext: "Bab 6: Bedah Pidato Kenegaraan",
    question: "Pilihlah salah satu pidato kenegaraan bersejarah di dunia (misal: 'I Have a Dream' Martin Luther King atau pidato Proklamasi Bung Karno) lalu analisis kekuatan retorika spiritual yang terkandung di dalamnya!",
    writingGuide: "Ulas keselarasan antara waktu pembawaan (momentum sejarah), pilihan diksi luhur, penjiwaan rasa, serta dampaknya pada perubahan tatanan dunia.",
    keyPoints: [
      "Martin Luther King: Penggunaan metafora alkitabiah, pengulangan frasa (Anaphora), kekuatan rima.",
      "Bung Karno: Pembacaan penuh tekad baja, suara serak berwibawa melambangkan beban penderitaan rakyat.",
      "Keduanya berdiri di atas landasan nilai keadilan universal yang tak lekang oleh waktu."
    ]
  },
  {
    id: 73,
    grade: 9,
    topic: "Retorika Tanpa Teks (Impromptu)",
    chapterContext: "Bab 7: Menguasai Pidato Impromptu",
    question: "Jika Anda ditunjuk secara mendadak oleh dewan sekolah untuk berpidato mewakili seluruh siswa Kelas 9 dalam waktu 1 menit ke depan, kerangka berpikir cepat apa yang akan Anda gunakan?",
    writingGuide: "Gunakan struktur formula 'PREP' (Point, Reason, Example, Point) untuk memetakan alur bicara Anda agar tidak meracau tanpa arah.",
    keyPoints: [
      "Point: Nyatakan gagasan/pesan utama Anda secara instan di awal.",
      "Reason: Berikan alasan mendalam mengapa gagasan tersebut penting.",
      "Example: Tarik satu contoh konkret/studi kasus nyata di keseharian.",
      "Point: Tegaskan kembali pesan utama Anda sebagai kesimpulan kokoh."
    ]
  },
  {
    id: 74,
    grade: 9,
    topic: "Retorika Komparatif Global",
    chapterContext: "Bab 8: Retorika Lintas Budaya",
    question: "Bagaimana perbedaan latar belakang budaya (budaya konteks tinggi khas Timur vs konteks rendah khas Barat) memengaruhi strategi retorika seorang orator internasional?",
    writingGuide: "Analisis dari sudut pandang keterusterangan argumen (directness), penggunaan simbolisme/perumpamaan, serta etika penyampaian pesan.",
    keyPoints: [
      "Barat (Konteks Rendah): Lebih to-the-point, mengandalkan fakta keras, argumentasi linier tajam.",
      "Timur (Konteks Tinggi): Menggunakan bahasa berputar santun (indirection), kaya perumpamaan sejarah, mengutamakan keharmonisan rasa.",
      "Diplomasi retorika ulung harus mampu menyelaraskan kedua pendekatan ini secara cerdas."
    ]
  },
  {
    id: 75,
    grade: 9,
    topic: "Seni Diplomasi Retorika",
    chapterContext: "Bab 9: Negosiasi dan Diplomasi Oratoris",
    question: "Bagaimana peran retorika taktis dalam meja negosiasi konflik internasional untuk menemukan solusi menang-menang (win-win solution) bagi kedua belah pihak?",
    writingGuide: "Diskusikan diksi netral yang meredam ego masing-masing kubu, serta fokus pencapaian kepentingan bersama di atas perbedaan kepentingan sektoral.",
    keyPoints: [
      "Menghindari diksi ultimatum yang menutup ruang kompromi sehat.",
      "Menciptakan kesamaan landasan moral (common ground) di awal negosiasi.",
      "Membungkus konsesi politik dengan istilah yang menjaga harga diri kedua negara."
    ]
  },
  {
    id: 76,
    grade: 9,
    topic: "Bahaya Demagogi",
    chapterContext: "Bab 10: Menangkal Hasutan Demagog",
    question: "Apa perbedaan hakiki antara seorang 'Orator Luhur' yang mencerahkan peradaban dengan seorang 'Demagog' (orator hasut) yang memecah belah bangsa?",
    writingGuide: "Tinjau aspek motivasi spiritual batiniah, manipulasi logika emosi massa (Pathos liar), serta keluhuran tujuan akhir yang dicapai.",
    keyPoints: [
      "Orator Luhur: Bertujuan mempersatukan, mendidik akal sehat, berakar etika kebenaran.",
      "Demagog: Memanfaatkan rasa takut/prasangka rasial audiens, memicu polarisasi destruktif demi kekuasaan.",
      "Demagog kerap melanggar Logos dengan memutarbalikkan data statistik secara jahat."
    ]
  },
  {
    id: 77,
    grade: 9,
    topic: "Retorika Media Digital",
    chapterContext: "Bab 11: Orasi di Depan Kamera (Video)",
    question: "Bagaimana cara menyesuaikan volume vokal, proyeksi suara, serta gerakan gestur tubuh ketika Anda berorasi di hadapan kamera video (jarak dekat) dibandingkan di atas panggung terbuka besar?",
    writingGuide: "Analisis dari sudut pandang pembatasan ruang lensa kamera (framing) serta sensitivitas penangkapan audio oleh mikrofon kondensor.",
    keyPoints: [
      "Gestur panggung besar harus lebar; gestur kamera harus diperkecil/halus agar tidak terpotong bingkai.",
      "Kontak mata beralih dari menyapu ruangan menjadi menatap lensa kamera secara tajam tanpa berkedip sering.",
      "Intonasi suara lebih bercorak percakapan intim (conversational) dibanding teriakan oratoris."
    ]
  },
  {
    id: 78,
    grade: 9,
    topic: "Retorika Pembelaan Hukum",
    chapterContext: "Bab 12: Retorika Hukum dan Pembelaan",
    question: "Dalam sejarah hukum, mengapa naskah pembelaan pribadi (pledoi) seperti pledoi Bung Karno 'Indonesia Menggugat' dinilai sebagai mahakarya retorika politik tingkat tinggi?",
    writingGuide: "Analisis bagaimana Bung Karno mengubah ruang sidang kolonial yang sempit menjadi mimbar penuntutan balik terhadap kejahatan imperialisme.",
    keyPoints: [
      "Menggeser posisi terdakwa pasif menjadi jaksa penuntut balik atas sistem hukum kolonial yang cacat.",
      "Menggunakan referensi data ekonomi global untuk menopang ketidakadilan imperialisme (Logos).",
      "Pledoi ditulis dengan gaya bahasa puitis yang membakar semangat pembaca di luar ruang sidang."
    ]
  },
  {
    id: 79,
    grade: 9,
    topic: "Socrates vs Kaum Sofis",
    chapterContext: "Bab 13: Filsafat Retorika Klasik",
    question: "Kaji perdebatan filsafat klasik antara Socrates (yang mengutamakan retorika demi mencari kebenaran mutlak) dengan Kaum Sofis (yang mengajarkan retorika demi memenangkan argumen semata)!",
    writingGuide: "Bagaimana relevansi pertarungan gagasan ini dengan fenomena debat politik dan peradilan hukum di masa modern sekarang?",
    keyPoints: [
      "Socrates/Plato: Retorika harus mengabdi pada kebenaran sejati (Dialektika) dan moral luhur.",
      "Sofis: Retorika adalah alat persuasi pragmatis untuk mencapai kekuasaan dan kemenangan opini (relativisme).",
      "Relevansi modern: Bahaya industri spin-doctor (rekayasa opini) yang mengaburkan kebenaran fakta."
    ]
  },
  {
    id: 80,
    grade: 9,
    topic: "Membangun Kharisma Orator",
    chapterContext: "Bab 14: Memupuk Kharisma Kepemimpinan",
    question: "Kharisma sering kali dianggap sebagai bakat lahiriah misterius. Namun, bagaimana latihan retorika yang disiplin dapat secara bertahap menumbuhkan daya tarik kharismatik seorang pembicara?",
    writingGuide: "Hubungkan kharisma dengan konsistensi nilai hidup, keaslian bahasa tubuh, kedalaman ilmu, serta ketenangan emosional saat tertekan.",
    keyPoints: [
      "Kharisma tumbuh dari rasa percaya diri yang berakar pada kesiapan kompetensi ilmiah.",
      "Ketepatan penggunaan variasi vokal dan tatapan mata yang dalam menyampaikan visi luhur.",
      "Kesejajaran antara karakter moral moralitas (Ethos) dengan kata-kata di panggung."
    ]
  },
  {
    id: 81,
    grade: 9,
    topic: "Etika Menyampaikan Kritik",
    chapterContext: "Bab 2: Etika Berbicara di Era Informasi",
    question: "Bagaimana cara menyusun pidato kritik tajam terhadap kebijakan sekolah yang dirasa merugikan siswa, tanpa perlu merusak hubungan baik dengan kepala sekolah?",
    writingGuide: "Terapkan prinsip kritik berbasis solusi (constructive feedback) dengan meletakkan rasa hormat tertinggi pada iktikad baik para pendidik.",
    keyPoints: [
      "Menyajikan data empiris kerugian kebijakan secara logis (Logos), menghindari asumsi.",
      "Menawarkan opsi solusi alternatif konkret yang saling menguntungkan (win-win).",
      "Menggunakan bahasa takzim yang menegaskan bahwa kritik lahir dari rasa cinta pada sekolah."
    ]
  },
  {
    id: 82,
    grade: 9,
    topic: "Retorika Lingkungan (Eco-Rhetoric)",
    chapterContext: "Bab 1: Retorika Kepemimpinan Visioner",
    question: "Krisis iklim global menuntut aksi cepat. Bagaimana strategi Eco-Rhetoric (retorika lingkungan) yang tepat untuk mengetuk hati para remaja agar mau merawat bumi?",
    writingGuide: "Analisis penggunaan metafora 'Bumi sebagai rumah bersama kita yang sedang terbakar' untuk memicu rasa tanggung jawab generasi.",
    keyPoints: [
      "Mengaitkan dampak kerusakan iklim dengan masa depan pribadi remaja itu sendiri.",
      "Mengganti data statistik suhu yang membosankan dengan visualisasi nyata hilangnya keanekaragaman hayati.",
      "Menyediakan aksi ramah lingkungan harian sederhana sebagai bagian dari gaya hidup modern."
    ]
  },
  {
    id: 83,
    grade: 9,
    topic: "Pidato Perpisahan Kelas 9",
    chapterContext: "Bab 15: Tugas Akhir Orasi Kelulusan",
    question: "Rancanglah draf pembuka dan penutup pidato kelulusan Kelas 9 yang sarat akan rasa haru terima kasih kepada guru serta kobaran semangat perjuangan menempuh SMA!",
    writingGuide: "Gunakan pilar Pathos untuk menyentuh kenangan indah selama tiga tahun bersekolah dan pilar Ethos untuk berjanji menjaga nama baik almamater.",
    keyPoints: [
      "Mengulas kilas balik perjuangan belajar bersama dari masa orientasi hingga ujian akhir.",
      "Mengucapkan permohonan maaf tulus atas segala khilaf kenakalan remaja.",
      "Mengakhiri dengan janji luhur pemuda untuk terus belajar membangun negeri."
    ]
  },
  {
    id: 84,
    grade: 9,
    topic: "Menguasai Tanya Jawab Kritis",
    chapterContext: "Bab 4: Seni Menyanggah (Rebuttal) Elegan",
    question: "Setelah selesai berpidato, Anda dihadapkan pada sesi tanya jawab yang sengit dengan audiens yang sengaja memojokkan argumen Anda. Bagaimana etika meresponsnya?",
    writingGuide: "Uraikan pentingnya tetap tenang, mencatat poin pertanyaan mereka secara saksama, dan menjawab menggunakan data ilmiah tanpa terpancing emosi.",
    keyPoints: [
      "Tetap menunjukkan apresiasi kepada penanya atas pertanyaan kritis yang diajukan.",
      "Menghindari sikap defensif defensif; akui batasan data jika memang ada kelemahan riset.",
      "Kembalikan fokus jawaban ke argumen inti pidato Anda secara kokoh."
    ]
  },
  {
    id: 85,
    grade: 9,
    topic: "Retorika Anti-Rasisme & Toleransi",
    chapterContext: "Bab 2: Etika Berbicara di Era Informasi",
    question: "Mengapa orasi yang mengampanyekan nilai-nilai toleransi dan anti-perundungan (bullying) di sekolah harus menyentuh hati terdalam pelaku, bukan sekadar menghakimi mereka?",
    writingGuide: "Bahas metode persuasif kemanusiaan yang membongkar alasan psikologis di balik perilaku merundung demi melahirkan kesadaran tobat.",
    keyPoints: [
      "Penghakiman berlebih cenderung memicu perlawanan mental pelaku yang semakin keras.",
      "Mengajak pelaku memahami rasa sakit korban lewat penjiwaan empati (Pathos).",
      "Menawarkan jalan reintegrasi sosial yang adil bagi pelaku untuk berbenah diri."
    ]
  },
  {
    id: 86,
    grade: 9,
    topic: "Analisis Pidato Bung Tomo",
    chapterContext: "Bab 6: Bedah Pidato Kenegaraan",
    question: "Pidato Bung Tomo pada 10 November 1945 di Surabaya menggunakan teriakan takbir 'Allahu Akbar' dan pekik 'Merdeka'. Analisis mengapa pekikan religius patriotik tersebut sangat sakti membakar keberanian arek-arek Suroboyo!",
    writingGuide: "Tinjau dari aspek penyatuan identitas perjuangan spiritual dengan tekad mempertahankan kemerdekaan nasional menghadapi senjata modern Sekutu.",
    keyPoints: [
      "Takbir dan Pekik Merdeka menyentuh dimensi keyakinan spiritual terdalam (iman).",
      "Pekikan tersebut meruntuhkan rasa takut mati di medan pertempuran fisik.",
      "Gaya orasi Bung Tomo sangat spontan, menggelegar, dan jujur tanpa kepalsuan."
    ]
  },
  {
    id: 87,
    grade: 9,
    topic: "Etika Mempersiapkan Debat",
    chapterContext: "Bab 3: Konstruksi Argumen Debat",
    question: "Mengapa sebelum debat dimulai, tim Anda diwajibkan untuk meneliti dan menyusun argumen dari sudut pandang kubu lawan (pro dan kontra sekaligus)?",
    writingGuide: "Jelaskan konsep 'Steel-manning' (memperkuat argumen terbaik lawan sebelum meruntuhkannya) untuk membangun ketajaman analisis strategis.",
    keyPoints: [
      "Memungkinkan tim mengantisipasi bidasan lawan secara presisi.",
      "Mencegah bias konfirmasi kognitif yang memandang sebelah mata kekuatan oposisi.",
      "Membina fleksibilitas berpikir logis dan pemahaman komprehensif atas masalah."
    ]
  },
  {
    id: 88,
    grade: 9,
    topic: "Retorika Advokasi Hak Anak",
    chapterContext: "Bab 1: Retorika Kepemimpinan Visioner",
    question: "Jika ditunjuk sebagai Duta Anak Daerah, bagaimana Anda memformulasikan pidato advokasi di hadapan Dewan Perwakilan Rakyat Daerah (DPRD) untuk menuntut ruang terbuka bermain ramah anak?",
    writingGuide: "Padukan data statistik kecelakaan anak di jalan raya (Logos) dengan kepedihan hati orang tua yang kehilangan buah hatinya (Pathos).",
    keyPoints: [
      "Menyajikan fakta minimnya ruang hijau di kota sebagai hak konstitusional anak.",
      "Menghadirkan sudut pandang anak-anak yang terpaksa bermain di bantaran rel kereta.",
      "Mengusulkan regulasi taktis perlindungan anak yang ramah anggaran."
    ]
  },
  {
    id: 89,
    grade: 9,
    topic: "Seni Mendengarkan Aktif (Active Listening)",
    chapterContext: "Bab 4: Seni Menyanggah (Rebuttal) Elegan",
    question: "Mengapa kemampuan 'mendengarkan aktif' (active listening) dicap sebagai 50% kekuatan dari seorang orator ulung ketika terlibat dalam debat atau diskusi panel?",
    writingGuide: "Analisis proses kognitif menyaring esensi perkataan lawan demi merangkai argumen jawaban yang relevan dan tepat sasaran.",
    keyPoints: [
      "Mencegah kesalahpahaman asumsi terhadap poin sanggahan yang diajukan lawan.",
      "Menunjukkan etika penghormatan intelektual yang matang kepada mitra wicara.",
      "Memungkinkan orator menangkap celah inkonsistensi terkecil dari paparan oposisi."
    ]
  },
  {
    id: 90,
    grade: 9,
    topic: "Retorika Kewirausahaan Sosial",
    chapterContext: "Bab 1: Retorika Kepemimpinan Visioner",
    question: "Bagaimana cara menyusun draf proposal pidato singkat (pitching) untuk meyakinkan investor sosial agar bersedia mendanai proyek pengelolaan limbah sampah plastik di desa Anda?",
    writingGuide: "Gunakan pilar Logos untuk memaparkan kelayakan ekonomi jangka panjang dan kelestarian ekologi desa.",
    keyPoints: [
      "Menyajikan potensi kerugian finansial jangka panjang akibat penumpukan limbah desa.",
      "Menjelaskan alur teknologi daur ulang yang murah, padat karya, dan menghasilkan devisa.",
      "Menyediakan model bisnis sirkular yang transparan dan dapat direplikasi di desa lain."
    ]
  },
  {
    id: 91,
    grade: 9,
    topic: "Seni Mengendalikan Emosi Massa",
    chapterContext: "Bab 10: Menangkal Hasutan Demagog",
    question: "Ketika suasana demonstrasi atau rapat akbar mulai memanas dan menjurus ke arah kekerasan, langkah retorika apa yang harus diambil orator untuk menenangkan emosi massa?",
    writingGuide: "Ulas perubahan tempo bicara menjadi lambat, penurunan nada vokal, serta penggunaan diksi persaudaraan luhur.",
    keyPoints: [
      "Orator harus menjadi oase ketenangan di tengah gelombang emosi massa yang bergejolak.",
      "Mengingatkan massa akan tujuan mulia perjuangan damai yang tidak boleh dinodai darah.",
      "Mengajak massa melakukan jeda napas bersama atau menyanyikan lagu kebangsaan secara khidmat."
    ]
  },
  {
    id: 92,
    grade: 9,
    topic: "Retorika Anti-Korupsi Sejak Dini",
    chapterContext: "Bab 2: Etika Berbicara di Era Informasi",
    question: "Bagaimana memformulasikan pidato bertema integritas anti-korupsi di sekolah agar nilai kejujuran dirasa keren bagi kalangan remaja Kelas 9?",
    writingGuide: "Hindari ceramah moral yang membosankan; hubungkan integritas dengan kemandirian jiwa, keberanian ksatria, dan kepemimpinan masa depan.",
    keyPoints: [
      "Membongkar mitos bahwa korupsi hanya masalah mencuri uang negara (hubungkan dengan menyontek atau titip absen).",
      "Menggambarkan integritas sebagai identitas pribadi ksatria tangguh yang berdaulat.",
      "Menyediakan apresiasi sosial di sekolah bagi siswa-siswa yang berani jujur."
    ]
  },
  {
    id: 93,
    grade: 9,
    topic: "Filsafat Retorika Cicero",
    chapterContext: "Bab 13: Filsafat Retorika Klasik",
    question: "Cicero, orator agung Kekaisaran Romawi, menyatakan bahwa seorang pembicara harus memiliki 'kedalaman ilmu sastra, filsafat, hukum, dan sejarah'. Mengapa syarat ini dinilai mutlak?",
    writingGuide: "Analisis bahaya jika seorang orator mahir berpidato secara teknis namun otaknya kosong akan pengetahuan sejarah kemanusiaan.",
    keyPoints: [
      "Kedalaman ilmu menyelamatkan orator dari menyampaikan pidato kosmetik tanpa isi.",
      "Filsafat menyediakan landasan moral etika; hukum dan sejarah menyediakan persediaan bukti konkret (Logos).",
      "Orator berilmu luas memiliki perbendaharaan diksi luhur yang tidak terbatas."
    ]
  },
  {
    id: 94,
    grade: 9,
    topic: "Etika Menutup Debat",
    chapterContext: "Bab 3: Konstruksi Argumen Debat",
    question: "Jelaskan fungsi penting dari pidato penutup (reply speech) dalam debat, dan mengapa Anda dilarang keras membawa argumen atau bukti baru pada sesi tersebut!",
    writingGuide: "Uraikan peran reply speech sebagai ulasan perbandingan komprehensif (comparison sheet) antara keunggulan argumen tim Anda dengan kelemahan oposisi.",
    keyPoints: [
      "Reply speech bertujuan memberikan peta perbandingan objektif jalannya perdebatan bagi dewan juri.",
      "Aturan debat melarang bukti baru di sesi penutup demi keadilan pertarungan logika.",
      "Menegaskan kembali poin-poin krusial mengapa mosi tim Anda berdiri tegak tak tergoyahkan."
    ]
  },
  {
    id: 95,
    grade: 9,
    topic: "Retorika Pengambilan Keputusan",
    chapterContext: "Bab 1: Retorika Kepemimpinan Visioner",
    question: "Dalam musyawarah OSIS yang buntu (deadlock), bagaimana seorang pemimpin Kelas 9 menggunakan retorika pemersatu untuk menjembatani perbedaan pendapat dan mencapai mufakat?",
    writingGuide: "Rancang pidato singkat yang merangkum esensi dari kedua pendapat yang bertikai lalu tawarkan sintesis solusi yang adil.",
    keyPoints: [
      "Menghargai kelebihan masing-masing opsi opini yang berdebat.",
      "Mengangkat musyawarah kembali ke tujuan awal keberadaan organisasi.",
      "Membimbing forum untuk mengambil jalan tengah mufakat dengan kebesaran jiwa ksatria."
    ]
  },
  {
    id: 96,
    grade: 9,
    topic: "Teknik Mengolah Data Statistik",
    chapterContext: "Bab 8: Retorika Lintas Budaya",
    question: "Bagaimana cara membawakan data statistik kuantitatif yang membosankan dalam pidato agar terasa sangat dramatis dan menyentuh emosi kemanusiaan pendengar?",
    writingGuide: "Bandingkan pelafalan data persentase dingin dengan teknik membandingkan angka tersebut dengan kapasitas stadion sepak bola atau luas wilayah nyata.",
    keyPoints: [
      "Menerjemahkan angka abstrak ke dalam visualisasi fisik yang akrab di benak audiens.",
      "Contoh: 'Angka kelaparan ini setara dengan melenyapkan seluruh populasi kota kita dalam setahun.'",
      "Menghubungkan angka dingin dengan nasib jiwa manusia yang bernapas di balik data tersebut."
    ]
  },
  {
    id: 97,
    grade: 9,
    topic: "Retorika Berbasis Karakter Spiritual",
    chapterContext: "Bab 14: Memupuk Kharisma Kepemimpinan",
    question: "Mengapa kedalaman spiritual (kesalehan batin pembicara) dipercaya mampu memancarkan wibawa alami yang membuat kata-katanya ditaati tanpa perlu memaksa?",
    writingGuide: "Kaji dari perspektif Ethos spiritual di mana karakter pembicara telah selesai dengan ego kepentingan dirinya sendiri.",
    keyPoints: [
      "Melahirkan ketenangan batin sejati yang terpancar lewat sorot mata teduh.",
      "Kata-kata yang diucapkan bertenaga karena selaras dengan kesucian tindakan sehari-hari.",
      "Membuat pendengar menaruh rasa hormat tulus yang melampaui sekat kekuasaan fisik."
    ]
  },
  {
    id: 98,
    grade: 9,
    topic: "Teknik Menulis Pidato Monolog",
    chapterContext: "Bab 15: Tugas Akhir Orasi Kelulusan",
    question: "Rancanglah naskah pidato monolog teatrikal berdurasi 2 menit bertema 'Surat dari Masa Depan untuk Pemuda Hari Ini' yang mengecam kemalasan literasi!",
    writingGuide: "Gunakan majas personifikasi dan personifikasi waktu untuk menggugah kesadaran kritis siswa agar giat membaca buku kembali.",
    keyPoints: [
      "Penggunaan alur fiksi ilmiah imajinatif yang menembus batas waktu linier.",
      "Menggambarkan penyesalan masa depan akibat matinya budaya membaca di masa remaja.",
      "Mengakhiri monolog dengan klimaks seruan aksi merebut kembali kedaulatan ilmu."
    ]
  },
  {
    id: 99,
    grade: 9,
    topic: "Kedaulatan Bahasa Indonesia",
    chapterContext: "Bab 2: Etika Berbicara di Era Informasi",
    question: "Mengapa penguasaan bahasa Indonesia yang baik, benar, dan estetis dalam forum resmi merupakan wujud nyata kedaulatan pendidikan dan kebanggaan nasional?",
    writingGuide: "Analisis sejarah Sumpah Pemuda dalam melahirkan bahasa persatuan dan bahaya jika bahasa asing mendominasi ruang komunikasi formal kita.",
    keyPoints: [
      "Bahasa adalah wadah peradaban; matinya tata bahasa menandakan runtuhnya kedaulatan berpikir.",
      "Bahasa Indonesia memiliki kapasitas keilmuan yang setara dengan bahasa dunia lainnya.",
      "Menggunakan bahasa Indonesia dengan bangga dan tertib melambangkan martabat orasi bangsa."
    ]
  },
  {
    id: 100,
    grade: 9,
    topic: "Trilogi Pendidikan Ki Hajar Dewantara",
    chapterContext: "Bab 15: Tugas Akhir Orasi Kelulusan",
    question: "Bagaimana seorang orator pendidikan memformulasikan gagasan Ki Hajar Dewantara 'Ing Ngarsa Sung Tulada, Ing Madya Mangun Karsa, Tut Wuri Handayani' ke dalam orasi kepemimpinan siswa?",
    writingGuide: "Uraikan penerapan masing-masing dari tiga pilar pendidikan luhur tersebut dalam tindakan kepemimpinan nyata di sekolah.",
    keyPoints: [
      "Ing Ngarsa Sung Tulada: Di depan memberikan teladan kejujuran dan disiplin.",
      "Ing Madya Mangun Karsa: Di tengah membangun semangat kerja sama gotong royong.",
      "Tut Wuri Handayani: Di belakang memberikan dorongan kekuatan moral kepada adik kelas."
    ]
  }
];

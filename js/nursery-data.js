/**
 * PALMANURSERY PRO - AGRICULTURAL TECH KNOWLEDGE REPOSITORY
 * Berisi literatur ilmiah, SOP BSIP Sumbar 2025, Jurnal Agriprima Polije,
 * Jurnal Agritrop Unmuh Jember, Jurnal JIPK Unmura, parameter kalkulasi,
 * galeri dokumentasi riil lapangan, diagram teknis agronomi, dan dataset operasional.
 */

const DEFAULT_DASHBOARD_STATS = {
  totalLokasi: {
    value: "3 Blok",
    subtext: "+1 blok baru",
    desc: "Blok Sentral, Blok Timur, dan Blok Cadangan"
  },
  totalBibit: {
    value: "128.500 Pokok",
    subtext: "PN: 48.500 | MN: 80.000",
    desc: "Rincian PN & MN aktif (Kapasitas 86.5%)"
  },
  proyekAktif: {
    value: "18 Batch",
    subtext: "Status on-track",
    desc: "12 Berjalan, 6 Tahap Persiapan"
  },
  tingkatKonversi: {
    value: "96.42%",
    subtext: "+1.8% viabilitas",
    desc: "Tingkat keberhasilan tumbuh tinggi (> 95%)"
  },
  activities: [
    { id: 1, text: "Penyiraman otomatis Blok PN-A selesai", time: "2 jam lalu", color: "emerald", detail: "Sistem Sumisansui zona barat beroperasi 45 menit, volume 250 ml/bag terpenuhi." },
    { id: 2, text: "Transplanting 1.500 bibit ke Main Nursery MN-B", time: "4 jam lalu", color: "blue", detail: "Pemindahan bibit umur 3.5 bulan ke large bag 10kg Blok B-02." },
    { id: 3, text: "Seleksi culling/bibit abnormal batch #12", time: "1 hari lalu", color: "amber", detail: "Eliminasi 38 pokok abnormal (stunted & twisted), tingkat afkir terkontrol 1.9%." },
    { id: 4, text: "Pemupukan rutin NPKMg di Main Nursery", time: "1 hari lalu", color: "purple", detail: "Aplikasi pupuk NPK 15-15-15 + Kieserit dosis 10g/polybag pada 26.800 pokok." },
    { id: 5, text: "Inspeksi jaringan irigasi sprinkler selesai", time: "2 hari lalu", color: "emerald", detail: "Tekanan pipa stabil 2.0 bar, nozzle bersih dari endapan pasir." }
  ]
};

const SOP_REFERENCES_LIST = [
  {
    id: "sop-bsip-sumbar",
    title: "SOP Resmi BSIP Sumbar (Kementan RI 2025)",
    subtitle: "Standar Operasional Prosedur Pembibitan Kelapa Sawit (Pre Nursery & Main Nursery)",
    author: "Balai Penerapan Standar Instrumen Pertanian (BRMP / BSIP Sumbar)",
    badge: "Regulasi & Standar Mutu",
    badgeColor: "emerald",
    url: "https://sumbar.brmp.pertanian.go.id/informasi-publik/standar-operasional-prosedur",
    points: [
      "Pemilihan benih sawit bersertifikat legal (SKAB resmi PPKS, Socfindo, Lonsum, dll.).",
      "Penentuan lokasi datar (< 3% slope), bebas banjir 10 tahunan, dan dekat sumber air kontinu (10 L/bibit/hari).",
      "Aklimatisasi naungan bertingkat di PN (100% -> 50% -> 0% pada bulan ke-3).",
      "Prosedur transplanting menggunakan coring tube tanpa memecahkan bola tanah perakaran.",
      "Seleksi afkir ketat 4 tahap (umur 4, 6, 9 bulan dan saat muat) dengan toleransi kumulatif < 10-15%."
    ]
  },
  {
    id: "jurnal-agriprima",
    title: "Jurnal Agriprima (Politeknik Negeri Jember 2022)",
    subtitle: "Pengaruh Dosis Pupuk KCl dan Berbagai Level Penyiraman terhadap Pertumbuhan Bibit Kelapa Sawit di Pre-Nursery",
    author: "Moh. Syahrul Munir, Sholeh Avivi, & Sigit Soeparjono (Agriprima Vol. 6 No. 1)",
    badge: "Kebutuhan Air & Pupuk KCl",
    badgeColor: "blue",
    url: "https://agriprima.polije.ac.id/index.php/journal/article/view/v6i1-g/pdf",
    points: [
      "Level penyiraman kapasitas lapang 100% (200-300 ml/bag/hari) menghasilkan bukaan stomata dan fotosintesis tertinggi.",
      "Defisit air (50% kapasitas lapang) menurunkan biomassa kering tanaman hingga 34.8%.",
      "Dosis pupuk KCl 0.4 - 0.6 g/bibit di Pre Nursery meningkatkan turgor sel, efisiensi air, dan ketahanan terhadap penyakit bercak daun Curvularia."
    ]
  },
  {
    id: "jurnal-agritrop",
    title: "Jurnal AGRITROP (Universitas Muhammadiyah Jember 2022)",
    subtitle: "Respon Pertumbuhan Bibit Kelapa Sawit di Pre-nursery Terhadap Komposisi Media Tanam",
    author: "Bilman W. Simanihuruk, Herry Gusmara, & Siska Ruby P. Silitonga (AGRITROP Vol. 20 No. 1)",
    badge: "Media Tanam & Porositas Akar",
    badgeColor: "amber",
    url: "https://jurnal.unmuhjember.ac.id/index.php/AGRITROP/article/view/7337/3973",
    points: [
      "Kombinasi media tanah mineral (topsoil) : pupuk organik kompos : arang sekam padi dengan rasio 2:1:1 menurunkan bulk density tanah.",
      "Menghasilkan pertumbuhan perakaran serabut yang lebih padat dan jumlah daun lebih banyak dibandingkan topsoil murni.",
      "Mencegah pemadatan semen tanah baby bag saat disiram intensif."
    ]
  },
  {
    id: "jurnal-jipk",
    title: "Jurnal Ilmu Pertanian Kelingi / JIPK (Universitas Musi Rawas 2022)",
    subtitle: "Pertumbuhan Bibit Kelapa Sawit pada Berbagai Volume Media dan Aplikasi Dosis Pupuk NPK di Pembibitan",
    author: "Nely Murniati, Hermanto, & John Bimasri (JIPK Vol. 1 No. 2)",
    badge: "Volume Polybag & Dosis NPK",
    badgeColor: "purple",
    url: "https://ejurnal.unmura.org/index.php/jipk/article/view/29/103",
    points: [
      "Volume media large bag 10 kg (ukuran 50 x 40 cm tebal 0.15 mm) memberikan ruang tumbuh akar optimal.",
      "Aplikasi dosis pupuk NPK majemuk 4 gram/polybag pada fase awal pasca transplanting yang ditingkatkan bertahap memacu diameter lingkar batang secara nyata.",
      "Mencegah terhambatnya pembentukan jaringan kayu bonggol bibit sawit."
    ]
  }
];

const NURSERY_MODULES = {
  // ==========================================
  // PEMILIHAN BIBIT & PENENTUAN LOKASI (ABEL RAMADHAN)
  // ==========================================
  "bibit-varietas-unggul": {
    id: "bibit-varietas-unggul",
    category: "Pemilihan Bibit & Penentuan Lokasi",
    author: "Abel Ramadhan (24241012 / SMPKS BPDPKS)",
    title: "Pemilihan Benih Unggul Bersertifikat",
    subtitle: "Kriteria Mutu Benih DxP Unggul (PPKS, Socfindo, Dami Mas, Topaz), Verifikasi Legalitas SPK, dan Potensi Rendemen CPO",
    references: [
      { name: "SOP BSIP Sumbar 2025", desc: "Standar Sertifikasi Benih & Verifikasi Keaslian Dokumen SPK" },
      { name: "Pedoman PPKS Medan (2024)", desc: "Karakteristik Varietas DxP Unggul & Pencegahan Benih Ilegitim" }
    ],
    visuals: [
      {
        type: "photo",
        badge: "Foto Benih Resmi",
        title: "Lot Benih Kecambah Bersertifikat Resmi dari Produsen Terakreditasi",
        src: "images/pn-kecambah-benih.jpg",
        caption: "Biji kecambah kelapa sawit bersertifikat resmi Kementerian Pertanian dalam kemasan bersegel timbal, dilengkapi dokumen Surat Penyaluran Benih Kelapa Sawit (SPB-KS).",
        source: "Dokumentasi Benih Sawit (Almanak Pertanian / PPKS)"
      },
      {
        type: "diagram",
        badge: "Ilustrasi Genetika Sawit",
        title: "Morfologi Persilangan DxP (Dura x Pisifera = Tenera)",
        svg: `<svg viewBox="0 0 500 220" class="w-full h-auto drop-shadow-xs" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="220" rx="14" fill="#f8fafc" stroke="#e2e8f0"/>
          <!-- Dura (Induk Betina) -->
          <rect x="25" y="25" width="130" height="170" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
          <text x="90" y="48" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">Induk Dura (♀)</text>
          <circle cx="90" cy="85" r="28" fill="#78350f" stroke="#451a03" stroke-width="2"/>
          <circle cx="90" cy="85" r="20" fill="#fde68a" stroke="#d97706" stroke-width="5"/>
          <text x="90" y="89" text-anchor="middle" font-size="8" font-weight="bold" fill="#78350f">Cangkang Tebal</text>
          <text x="90" y="132" text-anchor="middle" font-size="8.5" fill="#475569">Cangkang: 2-8 mm</text>
          <text x="90" y="146" text-anchor="middle" font-size="8.5" fill="#475569">Mesokarp: 20-65%</text>
          <text x="90" y="160" text-anchor="middle" font-size="8.5" fill="#dc2626">Rendemen: 16-18%</text>
          <rect x="45" y="170" width="90" height="18" rx="4" fill="#fee2e2"/>
          <text x="90" y="183" text-anchor="middle" font-size="8" font-weight="bold" fill="#b91c1c">TIDAK UNTUK KEBUN</text>
          <!-- Cross Symbol -->
          <text x="175" y="115" text-anchor="middle" font-size="20" font-weight="extrabold" fill="#10b981">×</text>
          <!-- Pisifera (Induk Jantan) -->
          <rect x="195" y="25" width="110" height="170" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
          <text x="250" y="48" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">Pisifera (♂)</text>
          <circle cx="250" cy="85" r="24" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
          <text x="250" y="89" text-anchor="middle" font-size="8" font-weight="bold" fill="#b45309">Tanpa Cangkang</text>
          <text x="250" y="132" text-anchor="middle" font-size="8.5" fill="#475569">Cangkang: 0 mm</text>
          <text x="250" y="146" text-anchor="middle" font-size="8.5" fill="#475569">Bunga betina steril</text>
          <rect x="205" y="170" width="90" height="18" rx="4" fill="#f1f5f9"/>
          <text x="250" y="183" text-anchor="middle" font-size="8" font-weight="bold" fill="#64748b">POLLEN JANTAN</text>
          <!-- Equal Symbol -->
          <text x="325" y="115" text-anchor="middle" font-size="20" font-weight="extrabold" fill="#10b981">=</text>
          <!-- Tenera (DxP Unggul) -->
          <rect x="345" y="25" width="135" height="170" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
          <text x="412" y="48" text-anchor="middle" font-size="12" font-weight="extrabold" fill="#065f46">DxP Tenera Unggul</text>
          <circle cx="412" cy="85" r="28" fill="#15803d" stroke="#166534" stroke-width="2"/>
          <circle cx="412" cy="85" r="16" fill="#78350f" stroke="#451a03" stroke-width="1.5"/>
          <text x="412" y="89" text-anchor="middle" font-size="8" font-weight="bold" fill="#fef3c7">Cangkang 1-2mm</text>
          <text x="412" y="132" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#065f46">Mesokarp: 60-90%</text>
          <text x="412" y="146" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#047857">Rendemen: 26-30%</text>
          <rect x="355" y="170" width="115" height="18" rx="4" fill="#dcfce7"/>
          <text x="412" y="183" text-anchor="middle" font-size="8" font-weight="bold" fill="#166534">✓ STANDAR PRODUKSI</text>
        </svg>`,
        caption: "Persilangan Dura x Pisifera menghasilkan varietas Tenera unggul dengan cangkang tipis (ring serat tebal), mesokarp melimpah, dan rendemen CPO tinggi > 26%.",
        source: "Pusat Penelitian Kelapa Sawit (PPKS)"
      },
      {
        type: "diagram",
        badge: "Panduan Verifikasi Legalitas",
        title: "5 Indikator Keaslian Benih Resmi Kementerian Pertanian",
        svg: `<svg viewBox="0 0 500 220" class="w-full h-auto drop-shadow-xs" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="220" rx="14" fill="#f8fafc" stroke="#e2e8f0"/>
          <!-- Box 1 -->
          <rect x="20" y="30" width="85" height="160" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
          <text x="62" y="52" text-anchor="middle" font-size="9" font-weight="bold" fill="#0f172a">1. Dokumen SPK</text>
          <circle cx="62" cy="85" r="14" fill="#eff6ff" stroke="#3b82f6"/>
          <text x="62" y="90" text-anchor="middle" font-size="12" fill="#1d4ed8">📄</text>
          <text x="62" y="125" text-anchor="middle" font-size="7.5" fill="#64748b">Surat Penyaluran</text>
          <text x="62" y="138" text-anchor="middle" font-size="7.5" fill="#64748b">Benih resmi</text>
          <text x="62" y="151" text-anchor="middle" font-size="7.5" fill="#64748b">Ditjenbun</text>
          <!-- Box 2 -->
          <rect x="115" y="30" width="85" height="160" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
          <text x="157" y="52" text-anchor="middle" font-size="9" font-weight="bold" fill="#0f172a">2. Segel Timbal</text>
          <circle cx="157" cy="85" r="14" fill="#ecfdf5" stroke="#10b981"/>
          <text x="157" y="90" text-anchor="middle" font-size="12" fill="#047857">🔒</text>
          <text x="157" y="125" text-anchor="middle" font-size="7.5" fill="#64748b">Segel kantong</text>
          <text x="157" y="138" text-anchor="middle" font-size="7.5" fill="#64748b">plastik utuh</text>
          <text x="157" y="151" text-anchor="middle" font-size="7.5" fill="#64748b">berlogo resmi</text>
          <!-- Box 3 -->
          <rect x="210" y="30" width="85" height="160" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
          <text x="252" y="52" text-anchor="middle" font-size="9" font-weight="bold" fill="#0f172a">3. Kemurnian</text>
          <circle cx="252" cy="85" r="14" fill="#fef3c7" stroke="#f59e0b"/>
          <text x="252" y="90" text-anchor="middle" font-size="12" fill="#d97706">🧬</text>
          <text x="252" y="125" text-anchor="middle" font-size="7.5" fill="#64748b">Tenera &gt; 99%</text>
          <text x="252" y="138" text-anchor="middle" font-size="7.5" fill="#64748b">Kontaminasi</text>
          <text x="252" y="151" text-anchor="middle" font-size="7.5" fill="#64748b">Dura &lt; 1%</text>
          <!-- Box 4 -->
          <rect x="305" y="30" width="85" height="160" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
          <text x="347" y="52" text-anchor="middle" font-size="9" font-weight="bold" fill="#0f172a">4. Barcode Box</text>
          <circle cx="347" cy="85" r="14" fill="#f3e8ff" stroke="#a855f7"/>
          <text x="347" y="90" text-anchor="middle" font-size="12" fill="#7e22ce">🏷️</text>
          <text x="347" y="125" text-anchor="middle" font-size="7.5" fill="#64748b">Nomor seri kotak</text>
          <text x="347" y="138" text-anchor="middle" font-size="7.5" fill="#64748b">dapat dilacak</text>
          <text x="347" y="151" text-anchor="middle" font-size="7.5" fill="#64748b">di produsen</text>
          <!-- Box 5 -->
          <rect x="400" y="30" width="85" height="160" rx="8" fill="#ecfdf5" stroke="#10b981"/>
          <text x="442" y="52" text-anchor="middle" font-size="9" font-weight="bold" fill="#065f46">5. Sertifikasi</text>
          <circle cx="442" cy="85" r="14" fill="#dcfce7" stroke="#16a34a"/>
          <text x="442" y="90" text-anchor="middle" font-size="12" fill="#15803d">✓</text>
          <text x="442" y="125" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#047857">Label Biru SNI</text>
          <text x="442" y="138" text-anchor="middle" font-size="7.5" fill="#047857">Balai Pengawasan</text>
          <text x="442" y="151" text-anchor="middle" font-size="7.5" fill="#047857">Mutu Benih</text>
        </svg>`,
        caption: "Verifikasi lima pilar keaslian benih wajib dilakukan sebelum kotak dibuka untuk mencegah kerugian investasi kebun selama siklus ekonomis 25 tahun.",
        source: "Direktorat Jenderal Perkebunan & SOP BSIP 2025"
      }
    ],
    literature: `
      <h4>1. Bahaya Benih Ilegitim (Palsu/Marihat Liar)</h4>
      <p>Kelapa sawit adalah investasi jangka panjang dengan masa hidup ekonomis 25 hingga 30 tahun. Menggunakan benih ilegitim (palsu/tanpa sertifikat) menyebabkan kerugian fatal: produksi Tandan Buah Segar (TBS) anjlok hingga 50%, cangkang tebal (tipe Dura), rendemen CPO hanya 14-17% (dibandingkan DxP Tenera unggul 26-30%), serta persentase pohon jantan tanpa buah (steril) mencapai 20-30%.</p>

      <h4>2. Sumber Produsen Benih Resmi di Indonesia</h4>
      <p>Kecambah sawit hanya boleh dipesan langsung dari sumber benih yang diakui resmi oleh Kementerian Pertanian RI, antara lain:</p>
      <ul>
        <li><strong>PPKS Medan:</strong> Varietas DxP PPKS 540, DxP Yangambi, DxP Avros, DxP Simalungun. Keunggulan: adaptasi luas, rendemen minyak 26-28%, produksi TBS 28-32 ton/ha/thn.</li>
        <li><strong>PT Socfin Indonesia (Socfindo):</strong> Varietas DxP Socfindo Lame dan Yangambi. Keunggulan: pertambahan tinggi lambat, pelepah kompak, rendemen CPO tinggi.</li>
        <li><strong>PT Dami Mas Sejahtera (Sinarmas):</strong> Varietas DxP Dami Mas. Keunggulan: rasio mesokarp tinggi, ekstraksi CPO mencapai 29-30%.</li>
        <li><strong>Asian Agri (PT Nusa Pusaka Kencana):</strong> Varietas DxP Topaz 1, 2, dan 3. Keunggulan: tahan terhadap penyakit Ganoderma dan toleran kekeringan.</li>
      </ul>

      <h4>3. Prosedur Pemesanan Resmi & Verifikasi Dokumen SPK (SOP BSIP Sumbar 2025)</h4>
      <ul>
        <li><strong>Surat Izin Penerbitan Benih:</strong> Pekebun/perusahaan mengajukan Surat Persetujuan Penyaluran Benih Kelapa Sawit (SP2BKS) melalui Dinas Perkebunan setempat.</li>
        <li><strong>Verifikasi Kemasan Saat Tiba:</strong> Memeriksa segel timbal kotak kayu/kardus berlogo produsen, nomor batch lot benih, serta mencocokkan jumlah butir kecambah di sertifikat resmi Balai Pengawasan dan Sertifikasi Benih (BPSB).</li>
      </ul>
    `,
    parameters: [
      { key: "targetKebunHa", label: "Rencana Luas Areal Kebun (ha)", value: 100, type: "number", unit: "ha" },
      { key: "sphRencana", label: "Kerapatan Populasi Tanaman (SPH)", value: 143, type: "number", unit: "pokok/ha" },
      { key: "potensiTBS", label: "Estimasi Potensi TBS TM Puncak (ton/ha/thn)", value: 30.0, type: "number", unit: "ton/ha/thn" },
      { key: "ekstraksiMinyak", label: "Rendemen Ekstraksi Minyak / OER (%)", value: 26.5, type: "number", unit: "%" }
    ],
    calculate: (params) => {
      const totalPokok = params.targetKebunHa * params.sphRencana;
      const totalTBSKebun = params.targetKebunHa * params.potensiTBS;
      const totalCPOTon = (totalTBSKebun * (params.ekstraksiMinyak / 100)).toFixed(1);
      const cpoPerHa = (params.potensiTBS * (params.ekstraksiMinyak / 100)).toFixed(2);

      return [
        { label: "Total Populasi Lapang", value: totalPokok.toLocaleString("id-ID") + " pokok", highlight: "blue" },
        { label: "Potensi CPO per Hektar", value: cpoPerHa + " ton CPO / ha / tahun", highlight: "emerald" },
        { label: "Total Proyeksi CPO Kebun", value: parseFloat(totalCPOTon).toLocaleString("id-ID") + " ton CPO / tahun", highlight: "amber" },
        { label: "Status Kelayakan Benih", value: params.ekstraksiMinyak >= 25 ? "DxP Unggul Bersertifikat (Valid)" : "Di Bawah Standar", highlight: "purple" }
      ];
    },
    records: [
      { id: 1, spk: "SPK-2025/PPKS-01", produsen: "PPKS Medan", varietas: "DxP Yangambi", pesanan: 20000, sertifikatBPSB: "BPSB-SU/2025/4412", rendemenEst: "27.5%", status: "Tersertifikasi Resmi" },
      { id: 2, spk: "SPK-2025/SOC-02", produsen: "PT Socfindo", varietas: "DxP Socfindo Lame", pesanan: 15000, sertifikatBPSB: "BPSB-SU/2025/5190", rendemenEst: "28.0%", status: "Tersertifikasi Resmi" },
      { id: 3, spk: "SPK-2025/DAMI-01", produsen: "PT Dami Mas", varietas: "DxP Dami Mas", pesanan: 15000, sertifikatBPSB: "BPSB-RIAU/2025/1108", rendemenEst: "29.2%", status: "Tersertifikasi Resmi" }
    ]
  },

  "lokasi-topografi-lahan": {
    id: "lokasi-topografi-lahan",
    category: "Pemilihan Bibit & Penentuan Lokasi",
    author: "Abel Ramadhan (24241012 / SMPKS BPDPKS)",
    title: "Penentuan Lokasi & Topografi Lahan Pembibitan",
    subtitle: "5 Kriteria Mutlak Site Nursery: Topografi Datar (0-2%), Sumber Air Kontinu, Akses Jalan Poros Sentral, Bebas Genangan Banjir, dan Keamanan",
    references: [
      { name: "SOP BSIP Sumbar 2025", desc: "Standar Pemilihan Lokasi & Aksesibilitas Pembibitan Kelapa Sawit" },
      { name: "Pedoman Teknis Dirjenbun", desc: "Persyaratan Kelayakan Agronomi dan Tata Letak Nursery" }
    ],
    visuals: [
      {
        type: "photo",
        badge: "Foto Real Lapangan",
        title: "Hamparan Lokasi Pembibitan Datar Sempurna dengan Akses Terintegrasi",
        src: "images/main-nursery-hamparan.jpg",
        caption: "Topografi lahan datar berkontur 0-2% memberikan kestabilan tegak bagi ribuan polybag, memudahkan distribusi sprinkler merata, dan memiliki akses armada angkut.",
        source: "Dokumentasi Kebun PalmaNursery"
      },
      {
        type: "diagram",
        badge: "Ilustrasi Kriteria Teknis",
        title: "Matriks 5 Pilar Penentuan Site Nursery Ideal (SOP BSIP 2025)",
        svg: `<svg viewBox="0 0 500 220" class="w-full h-auto drop-shadow-xs" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="220" rx="14" fill="#f8fafc" stroke="#e2e8f0"/>
          <!-- Pilar 1 -->
          <rect x="20" y="30" width="85" height="160" rx="10" fill="#ecfdf5" stroke="#10b981"/>
          <text x="62" y="52" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#065f46">1. Topografi</text>
          <text x="62" y="80" text-anchor="middle" font-size="18">📐</text>
          <text x="62" y="115" text-anchor="middle" font-size="11" font-weight="extrabold" fill="#047857">0 - 2%</text>
          <text x="62" y="132" text-anchor="middle" font-size="7.5" fill="#475569">Datar sempurna,</text>
          <text x="62" y="145" text-anchor="middle" font-size="7.5" fill="#475569">polybag tegak,</text>
          <text x="62" y="158" text-anchor="middle" font-size="7.5" fill="#475569">anti erosi tanah</text>
          <!-- Pilar 2 -->
          <rect x="115" y="30" width="85" height="160" rx="10" fill="#eff6ff" stroke="#3b82f6"/>
          <text x="157" y="52" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1e40af">2. Sumber Air</text>
          <text x="157" y="80" text-anchor="middle" font-size="18">💧</text>
          <text x="157" y="115" text-anchor="middle" font-size="11" font-weight="extrabold" fill="#2563eb">&lt; 200 m</text>
          <text x="157" y="132" text-anchor="middle" font-size="7.5" fill="#475569">Debit kontinu,</text>
          <text x="157" y="145" text-anchor="middle" font-size="7.5" fill="#475569">pH 5.5 - 7.0,</text>
          <text x="157" y="158" text-anchor="middle" font-size="7.5" fill="#475569">bebas polutan</text>
          <!-- Pilar 3 -->
          <rect x="210" y="30" width="85" height="160" rx="10" fill="#fef3c7" stroke="#f59e0b"/>
          <text x="252" y="52" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#92400e">3. Akses Truk</text>
          <text x="252" y="80" text-anchor="middle" font-size="18">🚛</text>
          <text x="252" y="115" text-anchor="middle" font-size="11" font-weight="extrabold" fill="#d97706">Lebar &gt; 6 m</text>
          <text x="252" y="132" text-anchor="middle" font-size="7.5" fill="#475569">Jalan poros,</text>
          <text x="252" y="145" text-anchor="middle" font-size="7.5" fill="#475569">truk roda enam,</text>
          <text x="252" y="158" text-anchor="middle" font-size="7.5" fill="#475569">bisa papasan</text>
          <!-- Pilar 4 -->
          <rect x="305" y="30" width="85" height="160" rx="10" fill="#fdf4ff" stroke="#d946ef"/>
          <text x="347" y="52" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#86198f">4. Sentralitas</text>
          <text x="347" y="80" text-anchor="middle" font-size="18">📍</text>
          <text x="347" y="115" text-anchor="middle" font-size="11" font-weight="extrabold" fill="#a21caf">&lt; 5 km</text>
          <text x="347" y="132" text-anchor="middle" font-size="7.5" fill="#475569">Dekat afdeling,</text>
          <text x="347" y="145" text-anchor="middle" font-size="7.5" fill="#475569">hauling murah,</text>
          <text x="347" y="158" text-anchor="middle" font-size="7.5" fill="#475569">minim goncangan</text>
          <!-- Pilar 5 -->
          <rect x="400" y="30" width="85" height="160" rx="10" fill="#ecfdf5" stroke="#10b981"/>
          <text x="442" y="52" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#065f46">5. Keamanan</text>
          <text x="442" y="80" text-anchor="middle" font-size="18">🛡️</text>
          <text x="442" y="115" text-anchor="middle" font-size="11" font-weight="extrabold" fill="#047857">Bebas Banjir</text>
          <text x="442" y="132" text-anchor="middle" font-size="7.5" fill="#475569">Pagar kawat keliling,</text>
          <text x="442" y="145" text-anchor="middle" font-size="7.5" fill="#475569">aman hama babi,</text>
          <text x="442" y="158" text-anchor="middle" font-size="7.5" fill="#475569">pos satpam 24 jam</text>
        </svg>`,
        caption: "Evaluasi 5 pilar kelayakan menjamin lokasi pembibitan sawit dapat beroperasi optimal tanpa risiko gagal fertigasi atau kesulitan logistik.",
        source: "Standar Operasional Prosedur BSIP Sumbar 2025"
      }
    ],
    literature: `
      <h4>1. Kriteria Mutlak Pemilihan Lokasi Pembibitan (Site Selection)</h4>
      <p>Penentuan lokasi pembibitan kelapa sawit adalah keputusan strategis yang menentukan keberhasilan penyediaan bibit berkualitas. Kesalahan penentuan lokasi dapat mengakibatkan kerugian biaya pompa, kekeringan saat kemarau, tanaman rebah, atau kerusakan bibit akibat goncangan jalan rusak saat pengangkutan.</p>

      <h4>2. Rincian 5 Parameter Utama Penentuan Lokasi (SOP BSIP Sumbar 2025)</h4>
      <ul>
        <li><strong>Topografi dan Drainase:</strong> Lahan harus datar sempurna dengan kemiringan lereng <strong>0 s/d 2% (maksimal 3%)</strong>. Pada lereng miring, air siraman dan polybag akan mudah terguling atau miring sehingga arah tumbuh tajuk menjadi bengkok. Lahan wajib bebas dari risiko banjir berkala.</li>
        <li><strong>Ketersediaan Sumber Air Kontinu:</strong> Air adalah faktor pembatas utama. Diperlukan sumber air permanen (sungai besar, embung tadah hujan berkapasitas besar, atau sumur bor dalam) yang tidak kering pada puncak musim kemarau. Kebutuhan air rata-rata adalah <strong>10 hingga 15 m³ per hektar per hari</strong>. Air harus memiliki pH 5.5 s/d 7.0 dan bebas cemaran limbah pabrik kelapa sawit (PKS) atau salinitas tinggi.</li>
        <li><strong>Aksesibilitas dan Kondisi Jalan Transportasi:</strong> Lokasi harus dilalui jalan poros utama (lebar minimal 6-8 meter) yang dapat dilalui truk roda enam dan alat berat di segala cuaca (all-weather road).</li>
        <li><strong>Sentralitas terhadap Areal Tanam Kebun:</strong> Lokasi ideal berada di titik tengah (sentral) wilayah kebun/afdeling yang akan ditanami untuk meminimalkan jarak angkut (hauling distance), menekan biaya bahan bakar, dan mencegah bibit stres/daun patah.</li>
        <li><strong>Keamanan & Isolasi:</strong> Berada dekat pemukiman/kantor divisi agar mudah diawasi, dipasangi pagar keliling setinggi 1,8 meter untuk mencegah masuknya hewan ternak, babi hutan, serta hewan pengerat.</li>
      </ul>
    `,
    parameters: [
      { key: "jarakSumberAir", label: "Jarak ke Sumber Air Baku (meter)", value: 120, type: "number", unit: "meter" },
      { key: "debitAirM3", label: "Kapasitas Debit Air Tersedia (m³/hari)", value: 350, type: "number", unit: "m³/hari" },
      { key: "kemiringanLereng", label: "Kemiringan Lereng Topografi (%)", value: 1.5, type: "number", unit: "%" },
      { key: "jarakKeAfdeling", label: "Rata-rata Jarak Hauling ke Kebun (km)", value: 4.2, type: "number", unit: "km" }
    ],
    calculate: (params) => {
      let skor = 100;
      if (params.jarakSumberAir > 200) skor -= 15;
      if (params.kemiringanLereng > 2.0) skor -= 20;
      if (params.debitAirM3 < 200) skor -= 25;
      if (params.jarakKeAfdeling > 10) skor -= 15;

      const statusKelayakan = skor >= 85 ? "SANGAT DIREKOMENDASIKAN (Grade A)" : (skor >= 70 ? "LAYAK DENGAN REKAYASA (Grade B)" : "TIDAK DIREKOMENDASIKAN");
      const kapasitasBibitDidukung = Math.floor((params.debitAirM3 * 1000) / 3.0);

      return [
        { label: "Skor Indeks Kelayakan Site", value: skor + " / 100 poin", highlight: skor >= 85 ? "emerald" : "amber" },
        { label: "Status Evaluasi Lokasi", value: statusKelayakan, highlight: skor >= 85 ? "blue" : "rose" },
        { label: "Dukungan Kapasitas Air", value: kapasitasBibitDidukung.toLocaleString("id-ID") + " polybag MN", highlight: "purple" },
        { label: "Efisiensi Logistik Hauling", value: params.jarakKeAfdeling <= 5 ? "Sangat Efisien (<5 km)" : "Perlu Buffer Point", highlight: "emerald" }
      ];
    },
    records: [
      { id: 1, lokasi: "Site Blok Sentral Afdeling II", topografi: "Datar (1.2%)", jarakAir: "120 m (Sungai)", debitKontinu: "350 m³/hari", skorKelayakan: "95 / 100", status: "Sangat Direkomendasikan" },
      { id: 2, lokasi: "Site Blok Barat Dekat Danau", topografi: "Datar (1.8%)", jarakAir: "180 m (Embung)", debitKontinu: "280 m³/hari", skorKelayakan: "88 / 100", status: "Direkomendasikan" },
      { id: 3, lokasi: "Site Blok Bukit Afdeling IV", topografi: "Bergelombang (4.5%)", jarakAir: "450 m (Sumur)", debitKontinu: "120 m³/hari", skorKelayakan: "55 / 100", status: "Tidak Layak (Ditolak)" }
    ]
  },

  // ==========================================
  // PRE-NURSERY (PN - TAHAP AWAL)
  // ==========================================
  "pn-perhitungan-lahan": {
    id: "pn-perhitungan-lahan",
    category: "Pre Nursery (PN)",
    author: "Rohimin (24242032 / STIK BPDPKS)",
    title: "Perhitungan Luas Lahan PN",
    subtitle: "Kalkulasi Kebutuhan Luas Bedengan, Kerapatan Baby Bag, dan Alokasi Jalan Kontrol (SOP BSIP 2025)",
    references: [
      { name: "SOP BSIP Sumbar 2025", desc: "Standar Dimensi Bedengan & Rasio Efisiensi Lahan PN 60:40" },
      { name: "Jurnal Agritrop (2022)", desc: "Simanihuruk et al. - Karakteristik Spacing Baby Bag" }
    ],
    visuals: [
      {
        type: "photo",
        badge: "Foto Real Lapangan",
        title: "Penataan Bedengan Baby Bag Pre-Nursery Intensif",
        src: "images/pre-nursery-bedengan.jpg",
        caption: "Deretan baby bag (15 x 20 cm) ditata rapat di atas bedengan selebar 1,2 meter dengan saluran drainase dan lorong kontrol 0,8 meter antar bedengan.",
        source: "Dokumentasi Kebun PalmaNursery"
      },
      {
        type: "photo",
        badge: "Foto Real Riset Internet",
        title: "Hamparan Bedengan Pre-Nursery dengan Saluran Drainase",
        src: "images/pn-bedengan-intensif.jpg",
        caption: "Dokumentasi pembibitan kelapa sawit skala komersial memperlihatkan bedengan datar berpasir dengan naungan dan parit buangan air.",
        source: "Dokumentasi Pembibitan Sawit (Wagino, Wikimedia Commons)"
      },
      {
        type: "diagram",
        badge: "Ilustrasi Skema Agronomi",
        title: "Skema Tata Ruang Bedengan & Jalan Kontrol (SOP BSIP 2025)",
        svg: `<svg viewBox="0 0 500 220" class="w-full h-auto drop-shadow-xs" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="220" rx="14" fill="#f8fafc" stroke="#e2e8f0"/>
          <!-- Bedengan 1 -->
          <rect x="30" y="30" width="185" height="72" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
          <text x="122" y="58" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">Bedengan PN-01 (1,2 m)</text>
          <text x="122" y="76" text-anchor="middle" font-size="10" fill="#047857">10-12 Baris Baby Bag Rapat</text>
          <text x="122" y="90" text-anchor="middle" font-size="9" fill="#059669">Panjang 10 - 20 Meter</text>
          <!-- Jalan Kontrol -->
          <rect x="225" y="24" width="50" height="172" rx="6" fill="#f1f5f9" stroke="#94a3b8" stroke-dasharray="3,3"/>
          <text x="250" y="105" text-anchor="middle" font-size="10" font-weight="bold" fill="#475569" transform="rotate(-90 250 105)">Jalan Kontrol (0,8 - 1,0 m)</text>
          <!-- Bedengan 2 -->
          <rect x="285" y="30" width="185" height="72" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
          <text x="377" y="58" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">Bedengan PN-02 (1,2 m)</text>
          <text x="377" y="76" text-anchor="middle" font-size="10" fill="#047857">10-12 Baris Baby Bag Rapat</text>
          <text x="377" y="90" text-anchor="middle" font-size="9" fill="#059669">Panjang 10 - 20 Meter</text>
          <!-- Parit Drainase -->
          <rect x="30" y="115" width="440" height="26" rx="6" fill="#eff6ff" stroke="#3b82f6"/>
          <text x="250" y="132" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8">Saluran Drainase Pembuang Air (Lebar 0,5 m x Dalam 0,4 m)</text>
          <!-- Dimensi & Info Footer -->
          <rect x="30" y="152" width="440" height="48" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
          <text x="45" y="172" font-size="10" font-weight="bold" fill="#0f172a">📐 Standar SOP BSIP: Kerapatan Bersih ~90-100 bibit/m² Bedeng</text>
          <text x="45" y="188" font-size="9.5" fill="#64748b">Alokasi Lahan: 60% Bedengan Netto : 40% Jalan Kontrol, Naungan & Saluran Air</text>
        </svg>`,
        caption: "Rasio efisiensi lahan 60% bedengan : 40% jalan kontrol & drainase. Lebar 1,2 meter memudahkan jangkauan tangan kedua sisi tanpa menginjak bibit.",
        source: "Standar Operasional Prosedur BSIP Sumbar 2025"
      }
    ],
    literature: `
      <h4>1. Prinsip Agronomi Tata Lahan Pre-Nursery</h4>
      <p>Pada tahap Pre-Nursery (0 s/d 3 bulan), kecambah kelapa sawit ditanam di dalam kantong plastik kecil (<em>baby bag</em>) berukuran 15 cm x 20 cm dengan ketebalan 0,07-0,08 mm yang memuat media seberat 1,5-2,0 kg. Polibag ditata rapat di atas bedengan datar bersaluran drainase untuk mempermudah pemeliharaan intensif dan efisiensi fertigasi.</p>
      
      <h4>2. Standar Dimensi Bedengan dan Jalan Kontrol (SOP BSIP Sumbar 2025)</h4>
      <ul>
        <li><strong>Lebar Bedengan:</strong> 1,0 s/d 1,2 meter (memuat 10-12 baris polibag rapat). Lebar ini dirancang sesuai jangkauan tangan tenaga kerja saat penyiangan gulma dan seleksi kecambah tanpa menginjak polibag.</li>
        <li><strong>Panjang Bedengan:</strong> 10 s/d 20 meter disesuaikan dengan kontur lahan dan bentangan pipa irigasi <em>sumisansui</em>.</li>
        <li><strong>Jarak Antar Bedengan (Jalan Kontrol):</strong> 0,8 s/d 1,0 meter untuk jalan angkut bibit, pengamatan hama/penyakit, dan operasional pekerja.</li>
        <li><strong>Rasio Efisiensi Penggunaan Lahan:</strong> Rata-rata 60% luas lahan dialokasikan untuk polibag bibit (luas netto), sedangkan 40% dialokasikan untuk infrastruktur jalan, saluran drainase, naungan, dan tendon instalasi air.</li>
      </ul>

      <h4>3. Rumus Perhitungan Kebutuhan Lahan</h4>
      <p>Kerapatan penataan baby bag di atas bedengan berkisar antara <strong>60 s/d 70 bibit per m²</strong> luas lahan total (bruto). Formula perhitungan matematis:</p>
      <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 font-mono text-xs text-slate-800 my-2">
        Luas Bersih Bedengan (m²) = Target Bibit / Kerapatan Bersih (~80-100 bibit/m²)<br>
        Luas Lahan Bruto Dibutuhkan (m²) = Luas Bersih Bedengan / 0.60
      </div>
    `,
    parameters: [
      { key: "targetBibit", label: "Target Jumlah Bibit PN (pokok)", value: 50000, type: "number", unit: "pokok" },
      { key: "lebarBedeng", label: "Lebar Bedengan (m)", value: 1.2, type: "number", unit: "meter" },
      { key: "panjangBedeng", label: "Panjang Bedengan (m)", value: 15.0, type: "number", unit: "meter" },
      { key: "rasioJalan", label: "Alokasi Jalan & Drainase (%)", value: 40, type: "number", unit: "%" },
      { key: "kerapatanPerM2", label: "Kerapatan Polibag Bersih (bibit/m²)", value: 90, type: "number", unit: "bibit/m²" }
    ],
    calculate: (params) => {
      const netArea = Math.ceil(params.targetBibit / params.kerapatanPerM2);
      const grossArea = Math.ceil(netArea / ((100 - params.rasioJalan) / 100));
      const bedengArea = params.lebarBedeng * params.panjangBedeng;
      const totalBedeng = Math.ceil(netArea / bedengArea);
      const bibitPerBedeng = Math.ceil(params.targetBibit / totalBedeng);

      return [
        { label: "Luas Bersih Bedengan (Net Area)", value: netArea.toLocaleString("id-ID") + " m²", highlight: "emerald" },
        { label: "Luas Total Lahan PN (Gross Area)", value: (grossArea / 10000).toFixed(2) + " ha (" + grossArea.toLocaleString("id-ID") + " m²)", highlight: "blue" },
        { label: "Total Kebutuhan Bedengan", value: totalBedeng + " unit bedeng", highlight: "amber" },
        { label: "Kapasitas Rata-rata per Bedeng", value: bibitPerBedeng.toLocaleString("id-ID") + " baby bag", highlight: "purple" }
      ];
    },
    records: [
      { id: 1, petak: "Petak PN-A1", varietas: "DxP Yangambi", kapasitas: 15000, realisasi: 14850, status: "Aktif Penuh", tgl: "2025-08-10" },
      { id: 2, petak: "Petak PN-A2", varietas: "DxP PPKS 540", kapasitas: 20000, realisasi: 19600, status: "Aktif Penuh", tgl: "2025-08-15" },
      { id: 3, petak: "Petak PN-B1", varietas: "DxP Socfindo", kapasitas: 15000, realisasi: 14050, status: "Tahap Tanam", tgl: "2025-09-01" }
    ]
  },

  "pn-kebutuhan-kecambah": {
    id: "pn-kebutuhan-kecambah",
    category: "Pre Nursery (PN)",
    author: "Rohimin (24242032 / STIK BPDPKS)",
    title: "Kebutuhan Kecambah & Seleksi Culling Awal",
    subtitle: "Perhitungan Kebutuhan Benih Bersertifikat, Sortasi Tiba, dan Eliminasi Kecambah Cacat",
    references: [
      { name: "SOP BSIP Sumbar 2025", desc: "Standar Sertifikasi Benih & Sortasi Fisik Kecambah Tiba" },
      { name: "Pedoman PPKS Medan", desc: "Pusat Penelitian Kelapa Sawit - Seleksi Mutu Kecambah" }
    ],
    visuals: [
      {
        type: "photo",
        badge: "Foto Benih Resmi",
        title: "Lot Benih Kecambah Kelapa Sawit Bersertifikat & Sortasi Fisik",
        src: "images/pn-kecambah-benih.jpg",
        caption: "Biji kecambah kelapa sawit bersertifikat resmi sebelum proses sortasi fisik, perendaman fungisida protektif, dan penanaman.",
        source: "Dokumentasi Benih Sawit (Almanak Pertanian, Wikimedia Commons)"
      },
      {
        type: "diagram",
        badge: "Ilustrasi Anatomi Kecambah",
        title: "Morfologi Kecambah Normal & Orientasi Geotropisme",
        svg: `<svg viewBox="0 0 500 220" class="w-full h-auto drop-shadow-xs" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="220" rx="14" fill="#f8fafc" stroke="#e2e8f0"/>
          <!-- Plumula (Ke Atas) -->
          <path d="M 180 85 C 175 55 185 30 190 20 C 195 30 205 55 200 85 Z" fill="#86efac" stroke="#16a34a" stroke-width="2"/>
          <line x1="205" y1="40" x2="270" y2="40" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="2,2"/>
          <text x="280" y="44" font-size="11" font-weight="bold" fill="#15803d">Plumula (Calon Daun / Pucuk)</text>
          <text x="280" y="58" font-size="9.5" fill="#475569">Ujung runcing, keputihan/hijau muda (Menghadap KE ATAS)</text>
          <!-- Seed Kernel / Biji Nut -->
          <circle cx="190" cy="110" r="28" fill="#78350f" stroke="#451a03" stroke-width="2"/>
          <text x="190" y="114" text-anchor="middle" font-size="9" font-weight="bold" fill="#fef3c7">Biji (Nut)</text>
          <!-- Radikula (Ke Bawah) -->
          <path d="M 182 135 C 180 160 185 185 190 200 C 195 185 200 160 198 135 Z" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
          <line x1="205" y1="175" x2="270" y2="175" stroke="#d97706" stroke-width="1.5" stroke-dasharray="2,2"/>
          <text x="280" y="172" font-size="11" font-weight="bold" fill="#b45309">Radikula (Calon Akar Utama)</text>
          <text x="280" y="186" font-size="9.5" fill="#475569">Ujung tumpul, kekuningan/cokelat (Menghadap KE BAWAH)</text>
          <!-- Status Badge -->
          <rect x="25" y="20" width="130" height="24" rx="6" fill="#dcfce7" stroke="#86efac"/>
          <text x="90" y="36" text-anchor="middle" font-size="10" font-weight="bold" fill="#166534">✓ KECAMBAH NORMAL</text>
        </svg>`,
        caption: "Kecambah normal memiliki radikula dan plumula yang berlawanan arah, tidak terpelintir, dan bebas dari infeksi jamur cokelat.",
        source: "Standar Mutu Benih Kelapa Sawit PPKS"
      },
      {
        type: "diagram",
        badge: "Panduan Culling Afkir",
        title: "4 Kategori Bibit Cacat Saat Tiba (Sortasi BSIP)",
        svg: `<svg viewBox="0 0 500 220" class="w-full h-auto drop-shadow-xs" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="220" rx="14" fill="#f8fafc" stroke="#e2e8f0"/>
          <!-- Box 1: Patah -->
          <rect x="20" y="25" width="105" height="170" rx="10" fill="#ffffff" stroke="#fecdd3"/>
          <text x="72" y="48" text-anchor="middle" font-size="10" font-weight="bold" fill="#be123c">1. Patah / Putus</text>
          <line x1="68" y1="75" x2="76" y2="105" stroke="#e11d48" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="58" y1="95" x2="86" y2="88" stroke="#e11d48" stroke-width="2"/>
          <text x="72" y="142" text-anchor="middle" font-size="8.5" fill="#64748b">Radikula/plumula</text>
          <text x="72" y="155" text-anchor="middle" font-size="8.5" fill="#64748b">patah guncangan</text>
          <rect x="35" y="166" width="75" height="18" rx="4" fill="#ffe4e6"/>
          <text x="72" y="179" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#e11d48">AFKIR (0%)</text>
          <!-- Box 2: Brown Germ / Busuk Jamur -->
          <rect x="135" y="25" width="105" height="170" rx="10" fill="#ffffff" stroke="#fecdd3"/>
          <text x="187" y="48" text-anchor="middle" font-size="10" font-weight="bold" fill="#be123c">2. Busuk Jamur</text>
          <circle cx="187" cy="90" r="16" fill="#7f1d1d" opacity="0.8"/>
          <text x="187" y="142" text-anchor="middle" font-size="8.5" fill="#64748b">Brown germ berair,</text>
          <text x="187" y="155" text-anchor="middle" font-size="8.5" fill="#64748b">lendir kehitaman</text>
          <rect x="150" y="166" width="75" height="18" rx="4" fill="#ffe4e6"/>
          <text x="187" y="179" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#e11d48">AFKIR (0%)</text>
          <!-- Box 3: Twisted / Melintir -->
          <rect x="250" y="25" width="105" height="170" rx="10" fill="#ffffff" stroke="#fecdd3"/>
          <text x="302" y="48" text-anchor="middle" font-size="10" font-weight="bold" fill="#be123c">3. Twisted / Spiral</text>
          <path d="M 292 75 C 315 80 285 100 312 110" stroke="#f59e0b" stroke-width="2.5" fill="none"/>
          <text x="302" y="142" text-anchor="middle" font-size="8.5" fill="#64748b">Tunas memuntir,</text>
          <text x="302" y="155" text-anchor="middle" font-size="8.5" fill="#64748b">arah tumbuh acak</text>
          <rect x="265" y="166" width="75" height="18" rx="4" fill="#fef3c7"/>
          <text x="302" y="179" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#b45309">AFKIR (0%)</text>
          <!-- Box 4: Kerdil / Double Dwarf -->
          <rect x="365" y="25" width="115" height="170" rx="10" fill="#ffffff" stroke="#fecdd3"/>
          <text x="422" y="48" text-anchor="middle" font-size="10" font-weight="bold" fill="#be123c">4. Kembar Kerdil</text>
          <line x1="415" y1="82" x2="415" y2="102" stroke="#94a3b8" stroke-width="2"/>
          <line x1="428" y1="87" x2="428" y2="102" stroke="#94a3b8" stroke-width="1.5"/>
          <text x="422" y="142" text-anchor="middle" font-size="8.5" fill="#64748b">Dua tunas kerdil</text>
          <text x="422" y="155" text-anchor="middle" font-size="8.5" fill="#64748b">tanpa vigor tumbuh</text>
          <rect x="385" y="166" width="75" height="18" rx="4" fill="#ffe4e6"/>
          <text x="422" y="179" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#e11d48">AFKIR (0%)</text>
        </svg>`,
        caption: "Sortasi kotak kecambah wajib dilakukan maksimal 24 jam setelah tiba. Bibit cacat langsung dipisahkan untuk menjaga persentase tumbuh > 95%.",
        source: "SOP BSIP Sumbar 2025"
      }
    ],
    literature: `
      <h4>1. Perhitungan Kebutuhan Benih Sawit Bersertifikat</h4>
      <p>Kecambah sawit wajib dipesan dari produsen resmi berizin Kementerian Pertanian (PPKS, Socfindo, Lonsum, Dami Mas, Topaz, dll.). Perhitungan kebutuhan kecambah wajib memperhitungkan seleksi culling kumulatif di PN (10-15%), MN (10-15%), serta cadangan sulaman kebun (5%). Standar faktor pengali berkisar <strong>135% s/d 140%</strong> dari target pokok lapang.</p>

      <h4>2. Prosedur Sortasi Saat Kotak Tiba & Culling Awal</h4>
      <ul>
        <li><strong>Verifikasi Dokumen:</strong> Cek keaslian label sertifikat benih, nomor SPK, kemurnian varietas (> 99%), dan segel plastik.</li>
        <li><strong>Sterilisasi Protektif:</strong> Celupkan kecambah selama 1-2 menit ke dalam larutan fungisida kontak (Thiram/Mankozeb 0,1%) untuk membunuh spora jamur bawaan pengiriman.</li>
        <li><strong>Kriteria Culling Afkir Tiba:</strong>
          <ul>
            <li>Radikula atau plumula patah/putus akibat guncangan.</li>
            <li>Busuk kecambah (<em>brown germ</em> / jamur berair).</li>
            <li>Kecambah kembar (<em>twin germ</em>) yang berukuran kerdil keduanya.</li>
            <li>Morfologi memuntir spiral ekstrem.</li>
          </ul>
        </li>
      </ul>
    `,
    parameters: [
      { key: "luasKebun", label: "Rencana Luas Kebun Baru (ha)", value: 100, type: "number", unit: "ha" },
      { key: "sph", label: "Standar Populasi Pohon/ha (SPH)", value: 143, type: "number", unit: "pokok/ha" },
      { key: "afkirPN", label: "Estimasi Culling Pre-Nursery (%)", value: 12, type: "number", unit: "%" },
      { key: "afkirMN", label: "Estimasi Culling Main Nursery (%)", value: 13, type: "number", unit: "%" },
      { key: "cadanganSulam", label: "Cadangan Penyulaman Lapang (%)", value: 5, type: "number", unit: "%" }
    ],
    calculate: (params) => {
      const pokokLapang = params.luasKebun * params.sph;
      const kebutuhanSiapSalur = Math.ceil(pokokLapang * (1 + params.cadanganSulam / 100));
      const efisiensi = (1 - params.afkirPN / 100) * (1 - params.afkirMN / 100);
      const totalKecambah = Math.ceil(kebutuhanSiapSalur / efisiensi);
      const rasioPengali = (totalKecambah / pokokLapang).toFixed(2);

      return [
        { label: "Kebutuhan Pokok di Lapangan", value: pokokLapang.toLocaleString("id-ID") + " pokok", highlight: "blue" },
        { label: "Kebutuhan Siap Salur (+Sulam)", value: kebutuhanSiapSalur.toLocaleString("id-ID") + " bibit", highlight: "emerald" },
        { label: "Total Kecambah Harus Dipesan", value: totalKecambah.toLocaleString("id-ID") + " butir", highlight: "amber" },
        { label: "Faktor Rasio Pemesanan", value: rasioPengali + "x lipat target lapang", highlight: "purple" }
      ];
    },
    records: [
      { id: 1, batch: "SPK-2025/KCB-01", produsen: "PPKS Medan", varietas: "Yangambi", pesanan: 20000, tiba: 20250, layak: 19850, afkirTiba: 400, status: "Selesai Sortasi" },
      { id: 2, batch: "SPK-2025/KCB-02", produsen: "PT Socfindo", varietas: "Socfindo Lame", pesanan: 15000, tiba: 15120, layak: 14870, afkirTiba: 250, status: "Selesai Sortasi" }
    ]
  },

  "pn-irigasi-naungan": {
    id: "pn-irigasi-naungan",
    category: "Pre Nursery (PN)",
    author: "Rohimin (24242032 / STIK BPDPKS)",
    title: "Jaringan Irigasi & Naungan (Shading Net)",
    subtitle: "Desain Sistem Sumisansui, Kapasitas Lapang 100% (Agriprima 2022), dan Aklimatisasi Cahaya",
    references: [
      { name: "Jurnal Agriprima Polije (Munir et al., 2022)", desc: "Kapasitas Lapang 100% & Kebutuhan Air Bibit Pre-Nursery" },
      { name: "SOP BSIP Sumbar 2025", desc: "Konstruksi Naungan Timur-Barat dan Ombrometer Observatorium" }
    ],
    visuals: [
      {
        type: "photo",
        badge: "Foto Real Lapangan",
        title: "Instalasi Irigasi Mikro & Shading Net Pre-Nursery (Tamaco Commercial Nursery)",
        src: "images/pn-irigasi-naungan.jpg",
        caption: "Sistem naungan paranet dan jaringan pipa sprinkler mikro overhead di Tamaco Commercial Nursery untuk menjaga level kapasitas lapang 100% (200-300 ml/bag/hari).",
        source: "Tamaco Commercial Oil Palm Nursery (CEphoto / Uwe Aranas, Wikimedia Commons)"
      },
      {
        type: "diagram",
        badge: "Ilustrasi Skema Agronomi",
        title: "Aklimatisasi Naungan Bertahap & Kebutuhan Air (Agriprima 2022)",
        svg: `<svg viewBox="0 0 500 220" class="w-full h-auto drop-shadow-xs" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="220" rx="14" fill="#f8fafc" stroke="#e2e8f0"/>
          <!-- Fase 1: Bulan 1 -->
          <rect x="25" y="30" width="135" height="120" rx="10" fill="#ecfdf5" stroke="#10b981"/>
          <text x="92" y="55" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">Bulan Ke-1</text>
          <text x="92" y="75" text-anchor="middle" font-size="14" font-weight="extrabold" fill="#047857">Naungan 100%</text>
          <text x="92" y="95" text-anchor="middle" font-size="9" fill="#059669">Paranet Rapat</text>
          <text x="92" y="110" text-anchor="middle" font-size="8.5" fill="#475569">Mencegah dehidrasi</text>
          <text x="92" y="135" text-anchor="middle" font-size="9" font-weight="bold" fill="#065f46">250 ml / bag / hari</text>
          <!-- Fase 2: Bulan 2 -->
          <rect x="180" y="30" width="135" height="120" rx="10" fill="#eff6ff" stroke="#3b82f6"/>
          <text x="247" y="55" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">Bulan Ke-2</text>
          <text x="247" y="75" text-anchor="middle" font-size="14" font-weight="extrabold" fill="#2563eb">Naungan 50%</text>
          <text x="247" y="95" text-anchor="middle" font-size="9" fill="#1d4ed8">Penjarangan Atap</text>
          <text x="247" y="110" text-anchor="middle" font-size="8.5" fill="#475569">Latihan fotosintesis</text>
          <text x="247" y="135" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e40af">250 ml / bag / hari</text>
          <!-- Fase 3: Bulan 3 -->
          <rect x="335" y="30" width="140" height="120" rx="10" fill="#fffbeb" stroke="#f59e0b"/>
          <text x="405" y="55" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">Bulan Ke-3</text>
          <text x="405" y="75" text-anchor="middle" font-size="14" font-weight="extrabold" fill="#d97706">Buka Penuh (0%)</text>
          <text x="405" y="95" text-anchor="middle" font-size="9" fill="#b45309">Full Sunlight</text>
          <text x="405" y="110" text-anchor="middle" font-size="8.5" fill="#475569">Siap Transplanting MN</text>
          <text x="405" y="135" text-anchor="middle" font-size="9" font-weight="bold" fill="#92400e">300 ml / bag / hari</text>
          <!-- Footer SOP Note -->
          <rect x="25" y="165" width="450" height="40" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
          <text x="40" y="184" font-size="9.5" font-weight="bold" fill="#0f172a">🌧️ Ambang Batas Curah Hujan (CH): Jika CH harian ≥ 10 mm, penyiraman sore ditiadakan.</text>
          <text x="40" y="198" font-size="9" fill="#64748b">Irigasi mikro 2 bar menjamin bukaan stomata optimal sesuai riset Agriprima Polije (2022).</text>
        </svg>`,
        caption: "Aklimatisasi bertahap melatih ketahanan stomata bibit sebelum dipindahkan ke Main Nursery di bawah terik matahari terbuka.",
        source: "Jurnal Agriprima (2022) & SOP BSIP Sumbar"
      }
    ],
    literature: `
      <h4>1. Temuan Ilmiah Kebutuhan Air (Jurnal Agriprima Polije 2022)</h4>
      <p>Riset <strong>Munir, Avivi, dan Soeparjono (Agriprima, Vol. 6 No. 1, 2022)</strong> membuktikan bahwa bibit sawit Pre-Nursery membutuhkan <strong>level penyiraman kapasitas lapang 100%</strong> (200-300 ml/bag/hari dibagi 2 sesi pagi & sore). Defisit air pada tingkat 50% kapasitas lapang menurunkan bobot basah tanaman hingga 34,8% dan mereduksi luas daun.</p>

      <h4>2. Konstruksi Naungan & Aklimatisasi Bertahap (SOP BSIP Sumbar 2025)</h4>
      <ul>
        <li><strong>Arah Hadap:</strong> Membujur Timur-Barat. Tiang sisi Timur setinggi 2,0 meter dan sisi Barat setinggi 1,5 meter agar sinar matahari pagi terserap optimal.</li>
        <li><strong>Material Atap:</strong> Paranet sintetis 60-70% atau anyaman pelepah sawit/alang-alang.</li>
        <li><strong>Jadwal Pembukaan:</strong> Bulan ke-1 (naungan 100%), Bulan ke-2 (penjarangan 50%), dan Bulan ke-3 (buka penuh 0% full sunlight) sebelum dipindahkan ke Main Nursery.</li>
        <li><strong>Ombrometer & Korelasi Irigasi:</strong> Bila curah hujan harian $\ge 10\text{ mm}$, penyiraman sore ditiadakan otomatis untuk menghemat biaya operasional dan mencegah penyakit busuk pucuk.</li>
      </ul>
    `,
    parameters: [
      { key: "populasiBibitPN", label: "Populasi Bibit Dirawat (baby bag)", value: 48500, type: "number", unit: "bibit" },
      { key: "volumeAirPerBag", label: "Volume Air per Bag/Hari (ml)", value: 250, type: "number", unit: "ml" },
      { key: "durasiIrigasi", label: "Durasi Siklus Siram per Hari (jam)", value: 2.0, type: "number", unit: "jam" },
      { key: "curahHujanHariIni", label: "Curah Hujan Ombrometer Hari Ini (mm)", value: 12.5, type: "number", unit: "mm" }
    ],
    calculate: (params) => {
      const totalVolumeLiter = Math.ceil((params.populasiBibitPN * params.volumeAirPerBag) / 1000);
      const debitPerJam = (totalVolumeLiter / params.durasiIrigasi).toFixed(1);
      const statusIrigasi = params.curahHujanHariIni >= 10 ? "MATIKAN IRIGASI SORE (HEMAT ENERGI)" : "Jalankan Irigasi Penuh 2x";

      return [
        { label: "Total Kebutuhan Air Harian", value: totalVolumeLiter.toLocaleString("id-ID") + " L (" + (totalVolumeLiter / 1000).toFixed(1) + " m³)", highlight: "blue" },
        { label: "Debit Pompa Diperlukan", value: debitPerJam + " Liter/jam", highlight: "emerald" },
        { label: "Rekomendasi Operasional CH", value: statusIrigasi, highlight: params.curahHujanHariIni >= 10 ? "rose" : "amber" }
      ];
    },
    records: [
      { id: 1, zona: "Zona PN Sumisansui 01", tekanan: "1.8 bar", luasNaungan: "600 m²", kondisiNaungan: "Penjarangan 50%", curahHujan: "12.5 mm", status: "Irigasi Sore Off" },
      { id: 2, zona: "Zona PN Sumisansui 02", tekanan: "1.8 bar", luasNaungan: "720 m²", kondisiNaungan: "Penjarangan 50%", curahHujan: "12.5 mm", status: "Irigasi Sore Off" }
    ]
  },

  "pn-penanaman-polybag": {
    id: "pn-penanaman-polybag",
    category: "Pre Nursery (PN)",
    author: "Rohimin (24242032 / STIK BPDPKS)",
    title: "Penanaman Kecambah ke Polybag Kecil",
    subtitle: "Formulasi Media 2:1:1 (Jurnal Agritrop 2022), Orientasi Radikula/Plumula, dan Kedalaman Tanam",
    references: [
      { name: "Jurnal AGRITROP Unmuh Jember (2022)", desc: "Simanihuruk et al. - Formulasi Topsoil, Kompos, & Arang Sekam" },
      { name: "SOP BSIP Sumbar 2025", desc: "Teknik Penanaman dan Posisi Geotropisme Kecambah" }
    ],
    visuals: [
      {
        type: "photo",
        badge: "Foto Real Lapangan",
        title: "Penanaman Kecambah ke Baby Bag 15 x 20 cm",
        src: "images/pn-penanaman-babybag.jpg",
        caption: "Aktivitas penanaman kecambah sawit ke baby polybag berisi media topsoil gembur dengan orientasi radikula ke bawah dan plumula ke atas.",
        source: "Dokumentasi Pembibitan Kelapa Sawit (Wagino, Wikimedia Commons)"
      },
      {
        type: "diagram",
        badge: "Ilustrasi Prosedur Tanam",
        title: "Kedalaman & Orientasi Tanam Kecambah yang Benar",
        svg: `<svg viewBox="0 0 500 220" class="w-full h-auto drop-shadow-xs" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="220" rx="14" fill="#f8fafc" stroke="#e2e8f0"/>
          <!-- Baby Bag Container -->
          <rect x="50" y="40" width="160" height="150" rx="8" fill="#1e293b"/>
          <rect x="55" y="45" width="150" height="140" rx="6" fill="#78350f" opacity="0.85"/>
          <!-- Lubang Tanam & Kecambah Benar -->
          <path d="M 115 65 L 145 65 L 138 95 L 122 95 Z" fill="#451a03"/>
          <circle cx="130" cy="85" r="9" fill="#78350f" stroke="#fbbf24"/>
          <!-- Plumula Naik -->
          <path d="M 128 76 L 130 60 L 132 76 Z" fill="#4ade80"/>
          <!-- Radikula Turun -->
          <path d="M 128 94 L 130 110 L 132 94 Z" fill="#f59e0b"/>
          <!-- Depth Indicator -->
          <line x1="175" y1="45" x2="175" y2="85" stroke="#f8fafc" stroke-width="1.5"/>
          <text x="180" y="68" font-size="9" font-weight="bold" fill="#ffffff">2 - 3 cm</text>
          <text x="130" y="175" text-anchor="middle" font-size="10" font-weight="bold" fill="#86efac">✓ POSISI BENAR</text>
          <!-- Callout Kanan -->
          <rect x="235" y="35" width="240" height="155" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
          <text x="250" y="58" font-size="11" font-weight="bold" fill="#0f172a">Standar Penanaman SOP BSIP 2025:</text>
          <text x="250" y="80" font-size="9.5" fill="#334155">• Kedalaman lubang tanam: 2,0 s/d 3,0 cm.</text>
          <text x="250" y="98" font-size="9.5" fill="#334155">• Radikula (tumpul) menghadap ke BAWAH.</text>
          <text x="250" y="116" font-size="9.5" fill="#334155">• Plumula (runcing) menghadap ke ATAS.</text>
          <text x="250" y="134" font-size="9.5" fill="#334155">• Ditutup lapisan tanah halus setebal 1 cm.</text>
          <rect x="250" y="148" width="210" height="26" rx="6" fill="#fee2e2"/>
          <text x="355" y="165" text-anchor="middle" font-size="9" font-weight="bold" fill="#b91c1c">⚠️ Larangan Keras: Jangan Tanam Terbalik!</text>
        </svg>`,
        caption: "Kedalaman tanam ideal adalah 2 - 3 cm. Tanam terbalik menyebabkan bibit membuang energi memutar plumula sehingga pertumbuhannya kerdil.",
        source: "SOP BSIP Sumbar 2025"
      },
      {
        type: "diagram",
        badge: "Infografis Formulasi Riset",
        title: "Komposisi Media Tanam 2:1:1 (Jurnal Agritrop 2022)",
        svg: `<svg viewBox="0 0 500 220" class="w-full h-auto drop-shadow-xs" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="220" rx="14" fill="#f8fafc" stroke="#e2e8f0"/>
          <!-- Topsoil 50% -->
          <rect x="30" y="35" width="135" height="110" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
          <text x="97" y="65" text-anchor="middle" font-size="13" font-weight="extrabold" fill="#b45309">50% (2 Bagian)</text>
          <text x="97" y="85" text-anchor="middle" font-size="11" font-weight="bold" fill="#78350f">Topsoil Mineral</text>
          <text x="97" y="105" text-anchor="middle" font-size="8.5" fill="#451a03">Tanah lapisan atas diayak,</text>
          <text x="97" y="120" text-anchor="middle" font-size="8.5" fill="#451a03">kaya fraksi lempung</text>
          <!-- Kompos 25% -->
          <rect x="180" y="35" width="135" height="110" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
          <text x="247" y="65" text-anchor="middle" font-size="13" font-weight="extrabold" fill="#047857">25% (1 Bagian)</text>
          <text x="247" y="85" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">Kompos Organik</text>
          <text x="247" y="105" text-anchor="middle" font-size="8.5" fill="#064e3b">Pupuk kandang matang,</text>
          <text x="247" y="120" text-anchor="middle" font-size="8.5" fill="#064e3b">sumber hara organik</text>
          <!-- Sekam 25% -->
          <rect x="330" y="35" width="140" height="110" rx="10" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
          <text x="400" y="65" text-anchor="middle" font-size="13" font-weight="extrabold" fill="#334155">25% (1 Bagian)</text>
          <text x="400" y="85" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">Arang Sekam Padi</text>
          <text x="400" y="105" text-anchor="middle" font-size="8.5" fill="#475569">Porositas aerasi tinggi,</text>
          <text x="400" y="120" text-anchor="middle" font-size="8.5" fill="#475569">mencegah semen tanah</text>
          <!-- Footer Mineral Tambahan -->
          <rect x="30" y="160" width="440" height="42" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
          <text x="45" y="179" font-size="10" font-weight="bold" fill="#0f172a">🧪 Suplementasi Tambahan: +5 g Rock Phosphate (RP) & +5 g Dolomit per Baby Bag</text>
          <text x="45" y="193" font-size="9" fill="#64748b">Menurunkan bulk density tanah dan mempercepat pertumbuhan akar serabut (Agritrop 2022).</text>
        </svg>`,
        caption: "Campuran 2:1:1 menurunkan bulk density tanah, meningkatkan aerasi akar serabut, dan mencegah pemadatan media saat disiram intensif.",
        source: "Jurnal AGRITROP Unmuh Jember (2022)"
      }
    ],
    literature: `
      <h4>1. Temuan Ilmiah Formulasi Media (Jurnal Agritrop 2022)</h4>
      <p>Riset <strong>Simanihuruk, Gusmara, dan Silitonga (AGRITROP Vol. 20 No. 1, 2022)</strong> membuktikan bahwa tanah mineral tunggal (topsoil tanpa campuran) menghasilkan bobot kering akar dan jumlah daun yang lebih rendah akibat kepadatan lindak (*bulk density*) yang padat. Kombinasi <strong>Topsoil Tanah Mineral : Kompos Organik Matang : Arang Sekam Padi (rasio 2:1:1)</strong> memberikan porositas aerasi paling optimal, merangsang perakaran aktif, dan menahan kelembapan.</p>

      <h4>2. Prosedur Penanaman Kecambah (SOP BSIP Sumbar 2025)</h4>
      <ul>
        <li><strong>Media Tanam:</strong> Diayak kassa 1,5-2,0 cm, dicampur <strong>5 gram Rock Phosphate (RP)</strong> dan <strong>5 gram Dolomit</strong> per baby bag, lalu disiram jenuh 1 hari sebelum tanam.</li>
        <li><strong>Kedalaman Lubang Tanam:</strong> Dibuat sedalam <strong>2 s/d 3 cm</strong> menggunakan penugal bulat tumpul.</li>
        <li><strong>Orientasi Arah:</strong>
          <ul>
            <li><strong>Radikula (calon akar):</strong> Berbentuk lebih tumpul dan berwarna kecokelatan $\to$ menghadap <strong>KE BAWAH</strong>.</li>
            <li><strong>Plumula (calon daun):</strong> Berbentuk runcing dan berwarna keputihan/kehijauan $\to$ menghadap <strong>KE ATAS</strong>.</li>
          </ul>
        </li>
        <li><strong>Penimbunan:</strong> Tutup dengan tanah halus setebal 1 cm, lalu tekan lembut dengan dua jari di sekeliling kecambah.</li>
      </ul>
    `,
    parameters: [
      { key: "rasioTopsoil", label: "Komposisi Topsoil Mineral (%)", value: 50, type: "number", unit: "%" },
      { key: "rasioKompos", label: "Komposisi Pupuk Kandang/Kompos (%)", value: 25, type: "number", unit: "%" },
      { key: "rasioSekam", label: "Komposisi Arang Sekam (%)", value: 25, type: "number", unit: "%" },
      { key: "kedalamanLubang", label: "Kedalaman Lubang Tanam (cm)", value: 2.5, type: "number", unit: "cm" },
      { key: "targetHK", label: "Standar Tanam per Tenaga Kerja (butir/HK)", value: 1200, type: "number", unit: "butir/HK" }
    ],
    calculate: (params) => {
      const totalRasio = params.rasioTopsoil + params.rasioKompos + params.rasioSekam;
      const statusRasio = totalRasio === 100 ? "Formula 2:1:1 Ideal Sesuai Riset" : "Total Rasio Belum 100%";
      return [
        { label: "Validasi Formulasi Media", value: statusRasio, highlight: totalRasio === 100 ? "emerald" : "rose" },
        { label: "Kedalaman Lubang Tanam", value: params.kedalamanLubang + " cm (SOP Presisi)", highlight: "blue" },
        { label: "Standar Prestasi Tanam", value: params.targetHK + " butir / HK", highlight: "purple" }
      ];
    },
    records: [
      { id: 1, bedeng: "Bedengan PN-01 s/d 04", varietas: "Yangambi", kecambahDitanam: 4800, hkTerlibat: 4, tglTanam: "2025-10-15", status: "Selesai Sempurna" },
      { id: 2, bedeng: "Bedengan PN-05 s/d 08", varietas: "Yangambi", kecambahDitanam: 4800, hkTerlibat: 4, tglTanam: "2025-10-16", status: "Selesai Sempurna" }
    ]
  },

  "pn-pemeliharaan-rutin": {
    id: "pn-pemeliharaan-rutin",
    category: "Pre Nursery (PN)",
    author: "Rohimin (24242032 / STIK BPDPKS)",
    title: "Pemeliharaan Rutin PN (Penyiraman & Pemupukan)",
    subtitle: "Fertigasi NPK Cair, Aplikasi Dosis KCl 0.5g (Agriprima 2022), Penyiangan, dan Proteksi Curvularia",
    references: [
      { name: "Jurnal Agriprima Polije (2022)", desc: "Dosis KCl 0.4 - 0.6g untuk Ketahanan Daun & Kutikula" },
      { name: "SOP BSIP Sumbar 2025", desc: "Jadwal Pemupukan Berkala & Pengendalian OPT Bercak Daun" }
    ],
    visuals: [
      {
        type: "photo",
        badge: "Foto Real Lapangan",
        title: "Pertumbuhan & Pemeliharaan Bibit Sawit Umur 2-3 Bulan di Baby Bag",
        src: "images/pn-pemeliharaan-bibit.jpg",
        caption: "Bibit muda tahap Pre-Nursery tumbuh subur dengan tajuk hijau segar bebas gulma setelah fertigasi NPK cair dan aplikasi KCl rutin.",
        source: "Dokumentasi Pembibitan Kelapa Sawit (Wagino, Wikimedia Commons)"
      },
      {
        type: "diagram",
        badge: "Ilustrasi Respon Nutrisi",
        title: "Jadwal Pemupukan Kocor & Dosis KCl (Agriprima 2022)",
        svg: `<svg viewBox="0 0 500 220" class="w-full h-auto drop-shadow-xs" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="220" rx="14" fill="#f8fafc" stroke="#e2e8f0"/>
          <!-- Fase 1: Minggu 4-8 -->
          <rect x="25" y="30" width="215" height="115" rx="10" fill="#ecfdf5" stroke="#10b981"/>
          <text x="132" y="55" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">Minggu Ke-4 s/d Ke-8</text>
          <text x="132" y="78" text-anchor="middle" font-size="14" font-weight="extrabold" fill="#047857">NPK 15-15-15 Cair (0,2%)</text>
          <text x="132" y="98" text-anchor="middle" font-size="9" fill="#059669">Dosis: 2 gram / liter air (25 ml/bag)</text>
          <text x="132" y="115" text-anchor="middle" font-size="8.5" fill="#475569">Langsung bilas daun dengan air bersih</text>
          <text x="132" y="132" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#065f46">Rotasi: 1 minggu sekali</text>
          <!-- Fase 2: Minggu 9-12 -->
          <rect x="260" y="30" width="215" height="115" rx="10" fill="#eff6ff" stroke="#3b82f6"/>
          <text x="367" y="55" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">Minggu Ke-9 s/d Ke-12</text>
          <text x="367" y="78" text-anchor="middle" font-size="14" font-weight="extrabold" fill="#2563eb">NPK 0,35% + Dosis KCl 0,5g</text>
          <text x="367" y="98" text-anchor="middle" font-size="9" fill="#1d4ed8">Riset Agriprima Polije (2022)</text>
          <text x="367" y="115" text-anchor="middle" font-size="8.5" fill="#475569">Meningkatkan turgor sel & tebal kutikula</text>
          <text x="367" y="132" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#1e40af">Tahan jamur Curvularia lunata</text>
          <!-- Proteksi OPT -->
          <rect x="25" y="160" width="450" height="42" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
          <text x="40" y="179" font-size="10" font-weight="bold" fill="#0f172a">🛡️ Perlindungan Penyakit: Semprot Mankozeb 0,2% (Dithane M-45) berselang 10 hari.</text>
          <text x="40" y="193" font-size="9" fill="#64748b">Penyiangan gulma manual wajib per 2 minggu tanpa menggunakan herbisida kimiawi.</text>
        </svg>`,
        caption: "Aplikasi pupuk kalium (KCl 0,5 g/bibit) mempertebal lapisan kutikula daun sehingga tahan terhadap serangan jamur bercak daun Curvularia.",
        source: "Jurnal Agriprima Polije (2022)"
      }
    ],
    literature: `
      <h4>1. Jadwal dan Dosis Pemupukan Pre-Nursery (SOP BSIP Sumbar 2025)</h4>
      <ul>
        <li><strong>Minggu ke-4 s/d ke-8:</strong> Kocor larutan Urea atau NPK 15-15-15 konsentrasi <strong>0,2% (2 g/liter air)</strong> sebanyak 25 ml/bibit tiap minggu. Langsung bilas daun dengan air bersih setelah kocor pupuk agar tidak terbakar.</li>
        <li><strong>Minggu ke-9 s/d ke-12:</strong> Konsentrasi NPK ditingkatkan menjadi <strong>0,3% - 0,4%</strong>. Berdasarkan temuan <em>Jurnal Agriprima (2022)</em>, penambahan <strong>KCl dosis 0,4 s/d 0,6 g/bibit</strong> meningkatkan sintesis karbohidrat dan mempertebal kutikula stomata sehingga bibit tahan kekeringan.</li>
      </ul>

      <h4>2. Sanitasi Gulma & Proteksi Penyakit</h4>
      <ul>
        <li><strong>Penyiangan Gulma:</strong> Manual mencabut gulma di baby bag setiap 2 minggu sekali (dilarang menggunakan herbisida di areal PN).</li>
        <li><strong>Pengendalian Bercak Daun (Curvularia eragrostidis):</strong> Penyemprotan fungisida Mankozeb (Dithane M-45 0,2%) berselang 7-10 hari sekali secara preventif.</li>
      </ul>
    `,
    parameters: [
      { key: "konsentrasiNPKAwal", label: "Konsentrasi Pupuk Cair Minggu 4-8 (%)", value: 0.2, type: "number", unit: "% (g/L)" },
      { key: "konsentrasiNPKLanjut", label: "Konsentrasi Pupuk Cair Minggu 9-12 (%)", value: 0.35, type: "number", unit: "% (g/L)" },
      { key: "dosisKCl", label: "Dosis KCl Tambahan (g/bibit, Agriprima 2022)", value: 0.5, type: "number", unit: "gram" },
      { key: "intervalFungisida", label: "Rotasi Semprot Fungisida (hari)", value: 10, type: "number", unit: "hari" }
    ],
    calculate: (params) => {
      return [
        { label: "Status Konsentrasi Larutan", value: params.konsentrasiNPKAwal <= 0.25 ? "Aman Tanpa Plasmolisis" : "Terlalu Pekat", highlight: "emerald" },
        { label: "Dosis Tambahan KCl", value: params.dosisKCl + " g / pokok (Valid Agriprima)", highlight: "blue" },
        { label: "Perlindungan Bercak Daun", value: "Aplikasi per " + params.intervalFungisida + " hari", highlight: "purple" }
      ];
    },
    records: [
      { id: 1, kegiatan: "Kocor NPK 15-15-15 Cair (0.2%) + Bilas Air", petak: "Petak PN-A1", populasi: 14850, tgl: "2025-10-10", status: "Selesai 100%" },
      { id: 2, kegiatan: "Semprot Fungisida Dithane M-45 (0.2%)", petak: "Petak PN-A1 & A2", populasi: 34450, tgl: "2025-10-12", status: "Preventif Bercak Daun" }
    ]
  },

  // ==========================================
  // MAIN NURSERY (MN - TAHAP LANJUTAN)
  // ==========================================
  "mn-perhitungan-lahan": {
    id: "mn-perhitungan-lahan",
    category: "Main Nursery",
    author: "Afiq Zuhairi (24241005 / SMPKS)",
    title: "Perhitungan Lahan MN",
    subtitle: "Pola Spacing Segitiga 90x90x90 cm, Kerapatan Efektif, dan Tata Akses Jalan Truk",
    references: [
      { name: "SOP BSIP Sumbar 2025", desc: "Standar Jarak Tanam Segitiga Equilateral Main Nursery" },
      { name: "Pedoman Tata Ruang Perkebunan", desc: "Alokasi Jalan Truk Roda Enam dan Jaringan Drainase" }
    ],
    visuals: [
      {
        type: "photo",
        badge: "Diagram Resmi Perkebunan",
        title: "Gambar : Pola Tanam Segitiga 9 x 9 Meter (Baris T-B)",
        src: "images/pola-tanam-segitiga.jpg",
        caption: "Diagram teknis resmi pola tanam segitiga sama sisi 9m x 9m arah Utara, jarak baris 7,8 m, jarak antar pohon 9 m pada baris Timur-Barat.",
        source: "Standar Pola Tanam Perkebunan Kelapa Sawit"
      },
      {
        type: "photo",
        badge: "Foto Real Lapangan",
        title: "Penataan Blok Hamparan Main Nursery Jarak Segitiga (Tamaco Commercial Nursery)",
        src: "images/mn-blok-nursery.jpg",
        caption: "Penataan ribuan bibit sawit dalam formasi blok segitiga sama sisi 90 x 90 cm dengan akses jalan kontrol armada dan irigasi pipa sprinkler terbuka.",
        source: "Tamaco Commercial Oil Palm Nursery (CEphoto / Uwe Aranas, Wikimedia Commons)"
      }
    ],
    literature: `
      <h4>1. Penataan Pola Segitiga Sama Sisi di Main Nursery</h4>
      <p>Pada tahap Main Nursery (umur 4 s/d 12 bulan), bibit sawit membutuhkan penyinaran matahari penuh dan ruang gerak pelepah yang leluasa. Pola tanam <strong>segitiga sama sisi (equilateral triangle) 90 cm x 90 cm x 90 cm</strong> memberikan distribusi cahaya merata tanpa saling menaungi (mencegah etiolasi).</p>

      <h4>2. Standar Kerapatan dan Tata Ruang (SOP BSIP Sumbar 2025)</h4>
      <ul>
        <li><strong>Kerapatan Populasi:</strong> Kerapatan kotor adalah 14.300 bibit/ha. Setelah dipotong alokasi jalan utama truk (lebar 6-8 m), jalan kontrol antar blok (lebar 3 m), dan saluran drainase (25% luas lahan), <strong>kerapatan efektif adalah 10.500 s/d 11.500 bibit/ha netto</strong>.</li>
        <li><strong>Kemiringan Tanah:</strong> Lahan harus datar sempurna (kemiringan lereng 0 - 2%) untuk menjamin kestabilan Large Bag 10 kg dan keseragaman distribusi sprinkler.</li>
      </ul>
    `,
    parameters: [
      { key: "targetBibitMN", label: "Target Populasi Bibit MN (pokok)", value: 80000, type: "number", unit: "pokok" },
      { key: "jarakTanam", label: "Jarak Tanam Segitiga (meter)", value: 0.9, type: "number", unit: "meter" },
      { key: "alokasiJalan", label: "Alokasi Jalan Kontrol & Parit (%)", value: 25, type: "number", unit: "%" }
    ],
    calculate: (params) => {
      const areaPerPokokM2 = (params.jarakTanam * params.jarakTanam * Math.sqrt(3)) / 2;
      const populasiGross = Math.floor(10000 / areaPerPokokM2);
      const populasiNetto = Math.floor(populasiGross * ((100 - params.alokasiJalan) / 100));
      const luasHektar = (params.targetBibitMN / populasiNetto).toFixed(2);

      return [
        { label: "Kerapatan Netto per Hektar", value: populasiNetto.toLocaleString("id-ID") + " bibit / ha", highlight: "blue" },
        { label: "Kebutuhan Luas Total Lahan MN", value: luasHektar + " Hektar (" + (luasHektar * 10000).toLocaleString("id-ID") + " m²)", highlight: "emerald" },
        { label: "Luas Ruang Kanopi per Pokok", value: areaPerPokokM2.toFixed(3) + " m² / polibag", highlight: "amber" }
      ];
    },
    records: [
      { id: 1, blok: "MN Blok 01", luas: "2.5 ha", kapasitas: 27500, terisi: 27200, jarak: "90 x 90 x 90 cm", status: "Optimal" },
      { id: 2, blok: "MN Blok 02", luas: "2.5 ha", kapasitas: 27500, terisi: 26800, jarak: "90 x 90 x 90 cm", status: "Optimal" },
      { id: 3, blok: "MN Blok 03", luas: "2.5 ha", kapasitas: 27500, terisi: 26000, jarak: "90 x 90 x 90 cm", status: "Optimal" }
    ]
  },

  "mn-transplanting": {
    id: "mn-transplanting",
    category: "Main Nursery",
    author: "Afiq Zuhairi (24241005 / SMPKS)",
    title: "Transplanting dari PN ke MN (Polybag Besar)",
    subtitle: "Large Bag Volume 10 Kg (JIPK 2022), Metode Coring Tube, dan Pelepasan Sayatan Melingkar",
    references: [
      { name: "Jurnal JIPK Unmura (Murniati et al., 2022)", desc: "Volume Media Polybag 10 kg & Dosis Rock Phosphate" },
      { name: "SOP BSIP Sumbar 2025", desc: "Prosedur Pindah Tanam Umur 3-4 Bulan Tanpa Pecah Bola Akar" }
    ],
    visuals: [
      {
        type: "photo",
        badge: "Foto Real Lapangan",
        title: "Bedengan Bibit Siap Transplanting ke Polybag Besar",
        src: "images/mn-transplanting-bed.jpg",
        caption: "Bedengan pembibitan pohon kelapa sawit muda yang telah memiliki 4-5 helai daun sempurna, siap ditransplanting ke large bag di hamparan luas.",
        source: "Dokumentasi Pembibitan Kelapa Sawit Kalangala (Wikimedia Commons)"
      },
      {
        type: "photo",
        badge: "Foto Real Lapangan",
        title: "Bibit Sawit di Polybag Besar (Large Bag 10 Kg)",
        src: "images/main-nursery-polybag.jpg",
        caption: "Bibit hasil transplanting di large bag hitam berpori tebal 0,15 mm, daun merekah simetris dan batang bonggol kokoh.",
        source: "Dokumentasi Kebun PalmaNursery"
      },
      {
        type: "diagram",
        badge: "Ilustrasi Prosedur SOP",
        title: "4 Langkah Transplanting Aman Tanpa Pecah Bola Akar",
        svg: `<svg viewBox="0 0 500 220" class="w-full h-auto drop-shadow-xs" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="220" rx="14" fill="#f8fafc" stroke="#e2e8f0"/>
          <!-- Step 1 -->
          <rect x="20" y="30" width="105" height="160" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
          <text x="72" y="52" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">1. Lubang Coring</text>
          <rect x="47" y="70" width="50" height="60" rx="4" fill="#1e293b"/>
          <rect x="57" y="70" width="30" height="40" rx="2" fill="#e2e8f0"/>
          <text x="72" y="145" text-anchor="middle" font-size="8" fill="#475569">Pipa pelubang coring</text>
          <text x="72" y="158" text-anchor="middle" font-size="8" fill="#475569">seukuran baby bag</text>
          <!-- Step 2 -->
          <rect x="135" y="30" width="105" height="160" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
          <text x="187" y="52" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">2. Sayat Dasar</text>
          <rect x="162" y="75" width="50" height="55" rx="4" fill="#334155"/>
          <line x1="160" y1="130" x2="214" y2="130" stroke="#ef4444" stroke-width="2" stroke-dasharray="2,2"/>
          <text x="187" y="145" text-anchor="middle" font-size="8" fill="#475569">Sayat melingkar dasar,</text>
          <text x="187" y="158" text-anchor="middle" font-size="8" fill="#475569">buang alas plastik</text>
          <!-- Step 3 -->
          <rect x="250" y="30" width="105" height="160" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
          <text x="302" y="52" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">3. Sayat Samping</text>
          <rect x="277" y="75" width="50" height="55" rx="4" fill="#334155"/>
          <line x1="302" y1="75" x2="302" y2="130" stroke="#ef4444" stroke-width="2" stroke-dasharray="2,2"/>
          <text x="302" y="145" text-anchor="middle" font-size="8" fill="#475569">Sayat vertikal samping,</text>
          <text x="302" y="158" text-anchor="middle" font-size="8" fill="#475569">tarik plastik utuh</text>
          <!-- Step 4 -->
          <rect x="365" y="30" width="115" height="160" rx="8" fill="#ecfdf5" stroke="#10b981"/>
          <text x="422" y="52" text-anchor="middle" font-size="10" font-weight="bold" fill="#065f46">4. Padatkan & Siram</text>
          <rect x="395" y="70" width="55" height="60" rx="4" fill="#064e3b"/>
          <text x="422" y="105" text-anchor="middle" font-size="16" fill="#86efac">🌱</text>
          <text x="422" y="145" text-anchor="middle" font-size="8" font-weight="bold" fill="#047857">Padatkan lateral,</text>
          <text x="422" y="158" text-anchor="middle" font-size="8" font-weight="bold" fill="#047857">siram jenuh 2 L air</text>
        </svg>`,
        caption: "Volume media 10 kg (JIPK 2022) memberikan ruang perakaran masif. Metode sayatan menjaga bola tanah tetap utuh tanpa merusak akar serabut.",
        source: "SOP BSIP Sumbar 2025 & Jurnal JIPK"
      }
    ],
    literature: `
      <h4>1. Temuan Ilmiah Volume Media Large Bag (Jurnal JIPK Unmura 2022)</h4>
      <p>Berdasarkan riset <strong>Murniati, Hermanto, dan Bimasri (JIPK Vol. 1 No. 2, 2022)</strong>, penggunaan <strong>volume media tanam 10 kg (ukuran Large Bag 50 x 40 cm atau 40 x 50 cm tebal 0,15 mm hitam anti-UV)</strong> menghasilkan pertumbuhan lingkar batang bibit dan biomassa kering tertinggi secara signifikan dibandingkan polybag volume lebih kecil.</p>

      <h4>2. Prosedur Transplanting (SOP BSIP Sumbar 2025)</h4>
      <ul>
        <li><strong>Kriteria Bibit:</strong> Umur 3 s/d 4 bulan, memiliki 4 s/d 5 helai daun sempurna, bonggol kokoh.</li>
        <li><strong>Pemupukan Dasar:</strong> Media Large Bag 10 kg dicampur <strong>50 gram Rock Phosphate (RP)</strong> per bag sebelum tanam.</li>
        <li><strong>Metode Coring:</strong> Buat lubang di large bag menggunakan silinder pelubang (<em>coring tube</em>) seukuran baby bag.</li>
        <li><strong>Sayatan Melingkar:</strong> Sayat dasar baby bag secara melingkar lalu buang alasnya. Masukkan bibit ke dalam lubang large bag, lalu sayat plastik secara vertikal dari bawah ke atas dan tarik keluar perlahan agar bola tanah perakaran (<em>root ball</em>) tidak pecah.</li>
        <li><strong>Pemadatan Leher Akar:</strong> Padatkan tanah sekeliling pangkal bibit. Permukaan tanah baby bag harus rata sempurna dengan permukaan tanah large bag.</li>
      </ul>
    `,
    parameters: [
      { key: "volumeMediaLargeBag", label: "Berat Media per Large Bag (kg, JIPK 2022)", value: 10.0, type: "number", unit: "kg" },
      { key: "dosisRPDasar", label: "Dosis Rock Phosphate per Bag (gram)", value: 50.0, type: "number", unit: "gram" },
      { key: "umurTransplanting", label: "Umur Bibit Saat Pindah Tanam (bulan)", value: 3.5, type: "number", unit: "bulan" },
      { key: "targetTransplantingHK", label: "Target Transplanting per HK (bibit/orang/hari)", value: 250, type: "number", unit: "bibit/HK" }
    ],
    calculate: (params) => {
      return [
        { label: "Validasi Volume Riset JIPK", value: params.volumeMediaLargeBag === 10 ? "Volume Optimum 10 kg (Valid)" : "Non-Standar", highlight: "emerald" },
        { label: "Kesiapan Umur Bibit", value: params.umurTransplanting + " Bulan (4-5 Helai Daun)", highlight: "blue" },
        { label: "Dosis Pupuk Dasar Fosfat", value: params.dosisRPDasar + " g RP / polybag", highlight: "purple" }
      ];
    },
    records: [
      { id: 1, batch: "TRP-2025/10-A", asal: "Petak PN-A1", tujuan: "MN Blok 01", jumlah: 14850, tglMulai: "2025-10-05", status: "Selesai 100%" },
      { id: 2, batch: "TRP-2025/10-B", asal: "Petak PN-A2", tujuan: "MN Blok 02", jumlah: 19600, tglMulai: "2025-10-12", status: "Berjalan (70%)" }
    ]
  },

  "mn-sensus-seleksi": {
    id: "mn-sensus-seleksi",
    category: "Main Nursery",
    author: "Afiq Zuhairi (24241005 / SMPKS)",
    title: "Sensus Bibit & Seleksi Ketat (Culling Afkir)",
    subtitle: "Standar Eliminasi Bibit Cacat (Stunted, Erect, Twisted, Crown Disease) & Buku Register Sensus",
    references: [
      { name: "SOP BSIP Sumbar 2025", desc: "4 Tahap Seleksi Culling Afkir & Toleransi Kumulatif < 10-15%" },
      { name: "Pedoman PPKS Medan", desc: "Identifikasi Morfologi Abnormalitas Kelapa Sawit" }
    ],
    visuals: [
      {
        type: "photo",
        badge: "Foto Real Lapangan",
        title: "Standar Bibit Normal & Vigor Prima Lolos Sensus",
        src: "images/main-nursery-polybag.jpg",
        caption: "Ciri bibit prima: Tajuk daun membuka seimbang, warna hijau tua mengkilap tanpa bercak nekrotik, dan diameter pangkal batang tebal padat.",
        source: "Dokumentasi Kebun PalmaNursery"
      },
      {
        type: "diagram",
        badge: "Panduan Visual Culling",
        title: "Identifikasi 6 Tipe Morfologi Bibit Afkir di Main Nursery",
        svg: `<svg viewBox="0 0 500 220" class="w-full h-auto drop-shadow-xs" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="220" rx="14" fill="#f8fafc" stroke="#e2e8f0"/>
          <!-- 1. Kerdil -->
          <rect x="20" y="25" width="70" height="170" rx="8" fill="#ffffff" stroke="#fecdd3"/>
          <text x="55" y="44" text-anchor="middle" font-size="9" font-weight="bold" fill="#be123c">1. Kerdil</text>
          <text x="55" y="56" text-anchor="middle" font-size="7.5" fill="#94a3b8">(Stunted)</text>
          <rect x="48" y="100" width="14" height="25" rx="2" fill="#ef4444"/>
          <text x="55" y="150" text-anchor="middle" font-size="7.5" fill="#64748b">Tinggi &lt;50%</text>
          <text x="55" y="162" text-anchor="middle" font-size="7.5" fill="#64748b">populasi</text>
          <!-- 2. Erect -->
          <rect x="98" y="25" width="70" height="170" rx="8" fill="#ffffff" stroke="#fecdd3"/>
          <text x="133" y="44" text-anchor="middle" font-size="9" font-weight="bold" fill="#be123c">2. Erect</text>
          <text x="133" y="56" text-anchor="middle" font-size="7.5" fill="#94a3b8">(Tegak Sapu)</text>
          <line x1="133" y1="80" x2="133" y2="125" stroke="#ef4444" stroke-width="2"/>
          <text x="133" y="150" text-anchor="middle" font-size="7.5" fill="#64748b">Sudut tajuk</text>
          <text x="133" y="162" text-anchor="middle" font-size="7.5" fill="#64748b">sangat sempit</text>
          <!-- 3. Rolled Leaf -->
          <rect x="176" y="25" width="70" height="170" rx="8" fill="#ffffff" stroke="#fecdd3"/>
          <text x="211" y="44" text-anchor="middle" font-size="9" font-weight="bold" fill="#be123c">3. Rolled</text>
          <text x="211" y="56" text-anchor="middle" font-size="7.5" fill="#94a3b8">(Menggulung)</text>
          <circle cx="211" cy="100" r="10" fill="none" stroke="#ef4444" stroke-width="2"/>
          <text x="211" y="150" text-anchor="middle" font-size="7.5" fill="#64748b">Daun tidak</text>
          <text x="211" y="162" text-anchor="middle" font-size="7.5" fill="#64748b">membuka</text>
          <!-- 4. Flat Top -->
          <rect x="254" y="25" width="70" height="170" rx="8" fill="#ffffff" stroke="#fecdd3"/>
          <text x="289" y="44" text-anchor="middle" font-size="9" font-weight="bold" fill="#be123c">4. Flat Top</text>
          <text x="289" y="56" text-anchor="middle" font-size="7.5" fill="#94a3b8">(Pucuk Rata)</text>
          <line x1="274" y1="95" x2="304" y2="95" stroke="#ef4444" stroke-width="3"/>
          <text x="289" y="150" text-anchor="middle" font-size="7.5" fill="#64748b">Tajuk rata</text>
          <text x="289" y="162" text-anchor="middle" font-size="7.5" fill="#64748b">tanpa kurva</text>
          <!-- 5. Short Internode -->
          <rect x="332" y="25" width="70" height="170" rx="8" fill="#ffffff" stroke="#fecdd3"/>
          <text x="367" y="44" text-anchor="middle" font-size="9" font-weight="bold" fill="#be123c">5. Short</text>
          <text x="367" y="56" text-anchor="middle" font-size="7.5" fill="#94a3b8">(Internode)</text>
          <line x1="360" y1="90" x2="374" y2="90" stroke="#ef4444" stroke-width="1.5"/>
          <line x1="360" y1="96" x2="374" y2="96" stroke="#ef4444" stroke-width="1.5"/>
          <line x1="360" y1="102" x2="374" y2="102" stroke="#ef4444" stroke-width="1.5"/>
          <text x="367" y="150" text-anchor="middle" font-size="7.5" fill="#64748b">Pelepah rapat</text>
          <text x="367" y="162" text-anchor="middle" font-size="7.5" fill="#64748b">bertumpuk</text>
          <!-- 6. Crown Disease -->
          <rect x="410" y="25" width="70" height="170" rx="8" fill="#ffffff" stroke="#fecdd3"/>
          <text x="445" y="44" text-anchor="middle" font-size="9" font-weight="bold" fill="#be123c">6. Crown</text>
          <text x="445" y="56" text-anchor="middle" font-size="7.5" fill="#94a3b8">(Penyakit Tajuk)</text>
          <path d="M 438 88 Q 445 105 452 92" stroke="#7f1d1d" stroke-width="2.5" fill="none"/>
          <text x="445" y="150" text-anchor="middle" font-size="7.5" fill="#64748b">Pucuk busuk</text>
          <text x="445" y="162" text-anchor="middle" font-size="7.5" fill="#64748b">patah meliuk</text>
        </svg>`,
        caption: "Bibit abnormal wajib dieleminasi pada sensus umur 4, 6, 9 bulan dan saat muat untuk mencegah tanaman steril tidak berbuah di kebun.",
        source: "SOP BSIP Sumbar 2025 & PPKS Medan"
      }
    ],
    literature: `
      <h4>1. Urgensi Seleksi Afkir (Culling) Main Nursery</h4>
      <p>Bibit abnormal yang terbawa ditanam di kebun akan menghasilkan tanaman mandul tanpa buah (steril) atau bertandan sedikit seumur hidupnya (25 tahun). Culling wajib dilakukan tanpa kompromi pada 4 tahapan kritis (umur 4, 6, 9 bulan dan saat pemuatan ke truk).</p>

      <h4>2. Ciri-Ciri Morfologi Bibit Afkir (SOP BSIP Sumbar 2025)</h4>
      <ul>
        <li><strong>Kerdil (Stunted/Runts):</strong> Pertumbuhan bibit sangat lambat dan jauh tertinggal dari populasi seumurnya.</li>
        <li><strong>Tegak Kaku (Erect):</strong> Pelepah tumbuh tegak kaku ke atas mirip sapu lidi dengan sudut tajuk sangat sempit.</li>
        <li><strong>Memuntir (Twisted):</strong> Anak daun atau pelepah berpilin meliuk abnormal.</li>
        <li><strong>Penyakit Tajuk (Crown Disease):</strong> Daun muda tengah meliuk layu atau patah membusuk.</li>
        <li><strong>Chimera:</strong> Garis-garis kuning keputihan memanjang akibat mutasi kloroplas.</li>
      </ul>

      <h4>3. Sensus Fisik 100% dan Klasifikasi Grade</h4>
      <p>Dilakukan setiap 2 bulan sekali untuk mengelompokkan bibit menjadi <strong>Grade A Prima</strong>, <strong>Grade B Rawat Tambahan</strong>, dan <strong>Afkir (dimusnahkan dengan dipotong titik tumbuhnya)</strong>.</p>
    `,
    parameters: [
      { key: "totalBibitDiperiksa", label: "Total Bibit MN Diperiksa (pokok)", value: 80000, type: "number", unit: "pokok" },
      { key: "afkirKerdil", label: "Culling Kerdil (Runts)", value: 420, type: "number", unit: "pokok" },
      { key: "afkirErect", label: "Culling Tegak Kaku (Erect)", value: 310, type: "number", unit: "pokok" },
      { key: "afkirTwisted", label: "Culling Memuntir (Twisted)", value: 250, type: "number", unit: "pokok" },
      { key: "afkirCrown", label: "Culling Crown Disease", value: 180, type: "number", unit: "pokok" },
      { key: "afkirChimera", label: "Culling Chimera / Daun Sempit", value: 140, type: "number", unit: "pokok" }
    ],
    calculate: (params) => {
      const totalAfkir = params.afkirKerdil + params.afkirErect + params.afkirTwisted + params.afkirCrown + params.afkirChimera;
      const persenAfkir = ((totalAfkir / params.totalBibitDiperiksa) * 100).toFixed(2);
      const bibitLolos = params.totalBibitDiperiksa - totalAfkir;
      const persenLolos = ((bibitLolos / params.totalBibitDiperiksa) * 100).toFixed(2);

      return [
        { label: "Persentase Bibit Lolos Seleksi", value: persenLolos + "% (" + bibitLolos.toLocaleString("id-ID") + " pokok)", highlight: "emerald" },
        { label: "Total Afkir Tereliminasi", value: totalAfkir.toLocaleString("id-ID") + " pokok (" + persenAfkir + "%)", highlight: totalAfkir <= (params.totalBibitDiperiksa * 0.1) ? "blue" : "rose" },
        { label: "Batas Toleransi SOP BSIP", value: "Maksimal 10 - 15% (Status: SANGAT PRIMA)", highlight: "purple" }
      ];
    },
    records: [
      { id: 1, tahap: "Seleksi Tahap 1 (Umur 4 bln)", blok: "MN Blok 01", diperiksa: 27500, lolos: 27200, afkir: 300, status: "Eradikasi Selesai" },
      { id: 2, tahap: "Seleksi Tahap 2 (Umur 6 bln)", blok: "MN Blok 01", diperiksa: 27200, lolos: 26850, afkir: 350, status: "Eradikasi Selesai" },
      { id: 3, tahap: "Seleksi Tahap 1 (Umur 4 bln)", blok: "MN Blok 02", diperiksa: 27500, lolos: 26800, afkir: 700, status: "Eradikasi Selesai" }
    ]
  },

  "mn-pemutaran-blok": {
    id: "mn-pemutaran-blok",
    category: "Main Nursery",
    author: "Afiq Zuhairi (24241005 / SMPKS)",
    title: "Pemutaran Bibit & Manajemen Blok",
    subtitle: "Teknik Pot Turning 180° untuk Memutus Akar Tembus dan Pemeliharaan Rutin NPK (JIPK 2022)",
    references: [
      { name: "SOP BSIP Sumbar 2025", desc: "Jadwal dan Rotasi Pot Turning Main Nursery" },
      { name: "Jurnal JIPK Unmura (2022)", desc: "Aplikasi NPK Majemuk 4-15g dan Perkembangan Batang" }
    ],
    visuals: [
      {
        type: "photo",
        badge: "Foto Real Lapangan",
        title: "Blok Polybag Main Nursery Siap Pemutaran (Tamaco Commercial Nursery)",
        src: "images/mn-pemutaran-blok.jpg",
        caption: "Barisan polybag besar tertata rapi dalam petak blok dengan lorong kontrol pemutaran pot 180° untuk pemutusan akar tembus dan sanitasi gulma.",
        source: "Tamaco Commercial Oil Palm Nursery (CEphoto / Uwe Aranas, Wikimedia Commons)"
      },
      {
        type: "diagram",
        badge: "Ilustrasi Prosedur SOP",
        title: "Mekanisme Pemutaran Kantong 180° (Root Pruning Alami)",
        svg: `<svg viewBox="0 0 500 220" class="w-full h-auto drop-shadow-xs" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="220" rx="14" fill="#f8fafc" stroke="#e2e8f0"/>
          <!-- Posisi Sebelum -->
          <rect x="30" y="30" width="180" height="150" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
          <text x="120" y="52" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">1. Sebelum Diputar (Umur 6 Bln)</text>
          <rect x="80" y="65" width="80" height="75" rx="6" fill="#1e293b"/>
          <!-- Akar tembus -->
          <line x1="95" y1="140" x2="90" y2="165" stroke="#dc2626" stroke-width="2"/>
          <line x1="120" y1="140" x2="120" y2="170" stroke="#dc2626" stroke-width="2"/>
          <line x1="145" y1="140" x2="150" y2="165" stroke="#dc2626" stroke-width="2"/>
          <text x="120" y="178" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#dc2626">Akar Menembus Tanah Subsoil</text>
          <!-- Panah Putar -->
          <path d="M 225 105 Q 250 80 275 105" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
          <text x="250" y="70" text-anchor="middle" font-size="10" font-weight="bold" fill="#2563eb">PUTAR 180°</text>
          <!-- Posisi Sesudah -->
          <rect x="290" y="30" width="180" height="150" rx="10" fill="#ecfdf5" stroke="#10b981"/>
          <text x="380" y="52" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">2. Pasca Putaran 180°</text>
          <rect x="340" y="65" width="80" height="75" rx="6" fill="#064e3b"/>
          <circle cx="380" cy="100" r="14" fill="#047857"/>
          <text x="380" y="105" text-anchor="middle" font-size="14" fill="#ffffff">✓</text>
          <text x="380" y="155" text-anchor="middle" font-size="9" font-weight="bold" fill="#047857">Akar Tembus Terputus Rapi</text>
          <text x="380" y="170" text-anchor="middle" font-size="8.5" fill="#475569">Bola perakaran tetap padat</text>
        </svg>`,
        caption: "Dilakukan pada umur 6 dan 9 bulan untuk mencegah akar tembus ke subsoil, sehingga bibit tidak mengalami syok dehidrasi saat dipindahkan.",
        source: "SOP BSIP Sumbar 2025"
      }
    ],
    literature: `
      <h4>1. Fungsi Teknik Pemutaran Bibit (Pot Turning)</h4>
      <p>Mulai umur 6 bulan, akar bibit sawit di large bag aktif menembus lubang drainase ke lapisan tanah asli di bawahnya. Bila dibiarkan, saat bibit diangkat untuk ditanam di kebun, akar jangkar tersebut akan putus mendadak dan mengakibatkan <strong>stres pemindahan (transplanting shock) parah</strong> yang memicu kematian bibit. Pemutaran polybag dilakukan dengan mengangkat kantong 5-10 cm, memutarnya 180°, lalu meletakkannya kembali.</p>

      <h4>2. Jadwal Pemutaran & Pemupukan NPK</h4>
      <ul>
        <li><strong>Rotasi Pemutaran:</strong> Dimulai sejak bibit berumur 6 s/d 7 bulan, diulangi setiap 1,5 s/d 2 bulan sekali.</li>
        <li><strong>Pemupukan NPK (Jurnal JIPK Unmura 2022):</strong> NPK 15-15-15 dosis 5 s/d 10 g/bag (umur 4-8 bulan, interval 2 minggu) dan NPK 12-12-17-2 dosis 15 s/d 20 g/bag (umur 9-12 bulan, interval 1 bulan) ditambah pupuk Magnesium Kieserit 5 g/bag.</li>
        <li><strong>Penyiraman Sprinkler:</strong> 2 s/d 3 liter air per polybag per hari.</li>
      </ul>
    `,
    parameters: [
      { key: "rotasiPemutaran", label: "Siklus Rotasi Pemutaran Saat Ini", value: 2, type: "number", unit: "Rotasi ke-" },
      { key: "intervalPemutaranBulan", label: "Interval Pemutaran Berkala (bulan)", value: 1.5, type: "number", unit: "bulan" },
      { key: "dosisNPKMakro", label: "Dosis NPK Majemuk per Bag (g)", value: 10, type: "number", unit: "gram" },
      { key: "persenSelesaiPutar", label: "Realisasi Pemutaran Blok (%)", value: 85, type: "number", unit: "%" }
    ],
    calculate: (params) => {
      return [
        { label: "Status Siklus Pemutaran", value: "Rotasi ke-" + params.rotasiPemutaran + " Berjalan", highlight: "emerald" },
        { label: "Realisasi Fisik Blok", value: params.persenSelesaiPutar + "% Selesai Diputar", highlight: "blue" },
        { label: "Kondisi Perakaran Dasar", value: "Terkendali Bebas Tembus Tanah", highlight: "purple" }
      ];
    },
    records: [
      { id: 1, blok: "MN Blok 01", rotasi: "Rotasi 1 (Umur 7 bln)", diputar: 26850, sisa: 0, tglSelesai: "2025-08-25", status: "Selesai 100%" },
      { id: 2, blok: "MN Blok 01", rotasi: "Rotasi 2 (Umur 9 bln)", diputar: 22800, sisa: 4050, tglSelesai: "2025-10-10", status: "Berjalan (85%)" },
      { id: 3, blok: "MN Blok 02", rotasi: "Rotasi 1 (Umur 7 bln)", diputar: 26450, sisa: 0, tglSelesai: "2025-09-15", status: "Selesai 100%" }
    ]
  },

  "mn-transportasi-lapangan": {
    id: "mn-transportasi-lapangan",
    category: "Main Nursery",
    author: "Afiq Zuhairi (24241005 / SMPKS)",
    title: "Transportasi Bibit Siap Tanam (Pre-Casting/Field)",
    subtitle: "Handling Pemuatan ke Truk, Standar Lubang Tanam 60x60x60 cm, dan Pupuk Dasar RP 250g",
    references: [
      { name: "SOP BSIP Sumbar 2025", desc: "Standar Loading, Pengangkutan, dan Eksekusi Tanam di Kebun" }
    ],
    visuals: [
      {
        type: "photo",
        badge: "Diagram Resmi Perkebunan",
        title: "Pola Tanam Segitiga 9 x 9 Meter untuk Distribusi Lapangan",
        src: "images/pola-tanam-segitiga.jpg",
        caption: "Acuan tata letak lubang tanam dan drop point bibit di jalan rintis: jarak baris 7,8 m, kerapatan 143 pokok/ha.",
        source: "Pedoman Penanaman Perkebunan Kelapa Sawit"
      },
      {
        type: "photo",
        badge: "Foto Real Lapangan",
        title: "Bibit Siap Salur di Loading Area Pelabuhan / Transportasi Kebun",
        src: "images/mn-transport-field.jpg",
        caption: "Hamparan bibit kelapa sawit siap salur di loading area Tawau, siap dimuat ke armada transportasi dengan perlakuan siram jenuh tanpa menarik batang.",
        source: "Dokumentasi Tawau Oil Palm Nursery (Wikimedia Commons)"
      }
    ],
    literature: `
      <h4>1. Prosedur Pemuatan dan Transportasi (Loading & Hauling)</h4>
      <ul>
        <li><strong>Larangan Memegang Batang:</strong> Dilarang keras mengangkat bibit dengan menarik batang atau helaian pelepah daun. Bibit wajib diangkat dengan memegang dasar polybag menggunakan dua tangan.</li>
        <li><strong>Penyiraman Jenuh:</strong> Siram polybag hingga jenuh air pada pagi hari keberangkatan truk.</li>
        <li><strong>Kapasitas Angkut Truk Roda Enam:</strong> 350 s/d 450 bibit per ritase, disusun 1 lapis rapat tanpa ditumpuk bertingkat, dan dipasangi jaring paranet penutup bak penahan angin kencang (*windburn*).</li>
      </ul>

      <h4>2. Standar Lubang Tanam & Eksekusi Lapangan (SOP BSIP Sumbar 2025)</h4>
      <ul>
        <li><strong>Ukuran Lubang:</strong> 60 cm x 60 cm x 60 cm dibuat 2-4 minggu sebelum tanam.</li>
        <li><strong>Pupuk Lubang:</strong> Tabur <strong>250 gram Rock Phosphate (RP)</strong> merata ke dasar dan dinding lubang.</li>
        <li><strong>Pelepasan Polybag:</strong> Plastik disayat vertikal dengan pisau tajam dari arah bawah ke atas, dimasukkan ke lubang, lalu plastik ditarik keluar tanpa memecahkan bola tanah perakaran. Timbun bertahap dengan topsoil sambil dipadatkan dengan tumit kaki.</li>
      </ul>
    `,
    parameters: [
      { key: "kapasitasTruk", label: "Kapasitas Rata-rata Truk (pokok/ritase)", value: 400, type: "number", unit: "bibit/truk" },
      { key: "ukuranLubangTanam", label: "Ukuran Lubang Tanam (cm)", value: 60, type: "number", unit: "cm" },
      { key: "dosisRPLubang", label: "Dosis Rock Phosphate per Lubang (gram)", value: 250, type: "number", unit: "gram" },
      { key: "prestasiTanamHK", label: "Target Tanam per Tenaga Kerja (pokok/HK)", value: 35, type: "number", unit: "pokok/HK" }
    ],
    calculate: (params) => {
      return [
        { label: "Kapasitas Pengangkutan Truk", value: params.kapasitasTruk + " bibit / unit truk", highlight: "emerald" },
        { label: "Dimensi Lubang Tanam", value: params.ukuranLubangTanam + " x " + params.ukuranLubangTanam + " x " + params.ukuranLubangTanam + " cm", highlight: "blue" },
        { label: "Pupuk Dasar Lubang RP", value: params.dosisRPLubang + " gram / lubang", highlight: "purple" }
      ];
    },
    records: [
      { id: 1, noSuratJalan: "SJ-2025/MN/101", tujuan: "Afdeling I Blok B-14", jumlahBibit: 1200, ritase: 3, platTruk: "BA 8920 LU", tgl: "2025-10-10", status: "Tiba Sempurna & Ditanam" },
      { id: 2, noSuratJalan: "SJ-2025/MN/102", tujuan: "Afdeling I Blok B-15", jumlahBibit: 1600, ritase: 4, platTruk: "BA 8920 LU", tgl: "2025-10-11", status: "Tiba Sempurna & Ditanam" },
      { id: 3, noSuratJalan: "SJ-2025/MN/103", tujuan: "Afdeling II Blok C-02", jumlahBibit: 800, ritase: 2, platTruk: "BA 9102 QN", tgl: "2025-10-14", status: "Dalam Perjalanan" }
    ]
  },

  // ==========================================
  // ADVANCED PLANTING MATERIAL (APM)
  // ==========================================
  "apm-pemeliharaan-khusus": {
    id: "apm-pemeliharaan-khusus",
    category: "APM (Bibit Lanjut)",
    author: "Mhd. Setyo Abdillah (24242025 / STIK BPDPKS)",
    title: "Pemeliharaan Khusus & Aklimatisasi",
    subtitle: "Manajemen Bibit Lanjut Umur 12-18 Bulan, Spacing 1.2x1.2m, Pemupukan NPK 35g & Boron",
    references: [
      { name: "SOP BSIP Sumbar 2025", desc: "Standar Pemeliharaan Bibit Bongsor Siap Tanam" },
      { name: "Pedoman Replanting PPKS", desc: "Manajemen APM untuk Mempersingkat TBM" }
    ],
    visuals: [
      {
        type: "photo",
        badge: "Foto Real Lapangan",
        title: "Bibit Bongsor Advanced Planting Material (APM > 12 Bulan)",
        src: "images/apm-bibit-bongsor.jpg",
        caption: "Bibit APM dengan diameter lingkar batang tebal > 6 cm dan tajuk pelepah kokoh di bawah perawatan intensif siap untuk percepatan masa TBM kebun.",
        source: "Dokumentasi Pembibitan Kelapa Sawit (Wagino, Wikimedia Commons)"
      },
      {
        type: "diagram",
        badge: "Ilustrasi Skema Agronomi",
        title: "Penataan Spacing APM 1.2 x 1.2 m & Tiang Ajir Bambu",
        svg: `<svg viewBox="0 0 500 220" class="w-full h-auto drop-shadow-xs" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="220" rx="14" fill="#f8fafc" stroke="#e2e8f0"/>
          <!-- Polybag APM 1 -->
          <rect x="50" y="55" width="100" height="100" rx="8" fill="#1e293b"/>
          <line x1="100" y1="20" x2="100" y2="155" stroke="#16a34a" stroke-width="4"/>
          <!-- Ajir bambu penopang miring -->
          <line x1="70" y1="155" x2="100" y2="70" stroke="#d97706" stroke-width="2.5"/>
          <text x="100" y="175" text-anchor="middle" font-size="9" font-weight="bold" fill="#0f172a">Pokok APM #1</text>
          <!-- Spacing Arrow -->
          <line x1="160" y1="105" x2="310" y2="105" stroke="#2563eb" stroke-width="2" stroke-dasharray="3,3"/>
          <text x="235" y="98" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">Spacing 1,2 m x 1,2 m</text>
          <!-- Polybag APM 2 -->
          <rect x="320" y="55" width="100" height="100" rx="8" fill="#1e293b"/>
          <line x1="370" y1="20" x2="370" y2="155" stroke="#16a34a" stroke-width="4"/>
          <line x1="340" y1="155" x2="370" y2="70" stroke="#d97706" stroke-width="2.5"/>
          <text x="370" y="175" text-anchor="middle" font-size="9" font-weight="bold" fill="#0f172a">Pokok APM #2</text>
          <!-- Info Box Bawah -->
          <rect x="30" y="185" width="440" height="25" rx="6" fill="#fef3c7" stroke="#f59e0b"/>
          <text x="250" y="201" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#92400e">Top Dressing Tanah + Tiang Ajir 1,5 m Menahan Terpaan Angin Kencang</text>
        </svg>`,
        caption: "Penjarangan jarak tanam polybag memberikan kanopi ruang penyinaran penuh dan tiang ajir melindungi bibit tinggi dari terpaan angin badai.",
        source: "Pedoman Replanting Kelapa Sawit PPKS"
      }
    ],
    literature: `
      <h4>1. Konsep Advanced Planting Material (APM)</h4>
      <p>Bibit APM adalah bibit kelapa sawit yang dipelihara secara intensif hingga berumur <strong>12 s/d 18 bulan</strong> di dalam Large Bag ekstra (ukuran 50x50 cm atau 60x60 cm). Tujuannya adalah mempercepat masa Tanaman Belum Menghasilkan (TBM) di kebun dari normalnya 36 bulan menjadi hanya 18-24 bulan, serta tahan terhadap serangan hama babi hutan dan kumbang tanduk (*Oryctes*).</p>

      <h4>2. Paket Perlakuan Khusus APM</h4>
      <ul>
        <li><strong>Penjarangan Spacing:</strong> Jarak tanam polybag diperlebar menjadi <strong>1,2 m x 1,2 m</strong> agar kanopi pelepah tidak bersentuhan rapat.</li>
        <li><strong>Pemupukan Intensif:</strong> Aplikasi NPK 12-12-17-2 dosis 30 s/d 40 gram/bag/bulan ditambah pupuk mikro Boron 5 gram/bag setiap 3 bulan sekali.</li>
        <li><strong>Sanitasi Pelepah Bawah:</strong> Pemangkasan pelepah kering terbawah dengan menyisakan minimal 16-20 pelepah aktif hijau.</li>
        <li><strong>Irigasi:</strong> Volume penyiraman ditingkatkan menjadi 3,5 s/d 4,5 liter per pokok per hari.</li>
      </ul>
    `,
    parameters: [
      { key: "umurBibitAPM", label: "Umur Rata-rata Bibit APM (bulan)", value: 14, type: "number", unit: "bulan" },
      { key: "spacingAPM", label: "Jarak Spacing Antar Kantong (m)", value: 1.2, type: "number", unit: "meter" },
      { key: "dosisNPKBulanan", label: "Dosis NPK Majemuk Bulanan (gram/bag)", value: 35, type: "number", unit: "gram" },
      { key: "dosisBoronTigaBln", label: "Dosis Pupuk Mikro Boron (gram/bag/3bln)", value: 5.0, type: "number", unit: "gram" }
    ],
    calculate: (params) => {
      return [
        { label: "Status Kematangan APM", value: params.umurBibitAPM >= 12 ? "Siap Tanam TBM 18 Bulan" : "Dalam Aklimatisasi", highlight: "emerald" },
        { label: "Intensitas Nutrisi Bulanan", value: params.dosisNPKBulanan + " g NPK + Boron", highlight: "blue" },
        { label: "Ketahanan Hama Lapang", value: "Tinggi (Bonggol Besar Keras)", highlight: "purple" }
      ];
    },
    records: [
      { id: 1, plot: "Plot APM Blok Sentral", varietas: "PPKS 540", jumlah: 3500, umur: "14 bulan", tinggiRata: "195 cm", status: "Sangat Prima" },
      { id: 2, plot: "Plot APM Cadangan", varietas: "Dami Mas", jumlah: 2000, umur: "13 bulan", tinggiRata: "180 cm", status: "Sangat Prima" }
    ]
  },

  "apm-standar-siap-tanam": {
    id: "apm-standar-siap-tanam",
    category: "APM (Bibit Lanjut)",
    author: "Mhd. Setyo Abdillah (24242025 / STIK BPDPKS)",
    title: "Standar Siap Tanam di Lapangan (Main Field)",
    subtitle: "Lubang Tanam Ekstra 80x80x80 cm, Aplikasi Bio-Mikoriza (FMA), dan Tiang Penopang Ajir",
    references: [
      { name: "SOP BSIP Sumbar 2025", desc: "Spesifikasi Eksekusi Tanam Bibit Bongsor APM di Lapangan" },
      { name: "Jurnal Riset Perkebunan", desc: "Efektivitas Bio-Inokulan Mikoriza terhadap Pemulihan Akar" }
    ],
    visuals: [
      {
        type: "photo",
        badge: "Foto Real Lapangan",
        title: "Hamparan Bibit Super Siap Salur ke Areal Perkebunan",
        src: "images/main-nursery-hamparan.jpg",
        caption: "Populasi bibit sawit prima dalam skala luas, siap dikirim untuk penanaman di areal peremajaan kebun (replanting).",
        source: "Dokumentasi Kebun PalmaNursery"
      },
      {
        type: "diagram",
        badge: "Infografis Mutu Standar",
        title: "Parameter Fisik Mutu Bibit Siap Tanam (SNI & PPKS)",
        svg: `<svg viewBox="0 0 500 220" class="w-full h-auto drop-shadow-xs" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="220" rx="14" fill="#f8fafc" stroke="#e2e8f0"/>
          <!-- Parameter 1 -->
          <rect x="25" y="30" width="135" height="70" rx="8" fill="#ecfdf5" stroke="#10b981"/>
          <text x="92" y="52" text-anchor="middle" font-size="10" font-weight="bold" fill="#065f46">Tinggi Tanaman</text>
          <text x="92" y="74" text-anchor="middle" font-size="14" font-weight="extrabold" fill="#047857">125 - 160 cm</text>
          <text x="92" y="90" text-anchor="middle" font-size="8.5" fill="#059669">Standar SNI & PPKS</text>
          <!-- Parameter 2 -->
          <rect x="180" y="30" width="135" height="70" rx="8" fill="#ecfdf5" stroke="#10b981"/>
          <text x="247" y="52" text-anchor="middle" font-size="10" font-weight="bold" fill="#065f46">Diameter Bonggol</text>
          <text x="247" y="74" text-anchor="middle" font-size="14" font-weight="extrabold" fill="#047857">&ge; 6,0 cm</text>
          <text x="247" y="90" text-anchor="middle" font-size="8.5" fill="#059669">Kokoh Tahan Angin</text>
          <!-- Parameter 3 -->
          <rect x="335" y="30" width="140" height="70" rx="8" fill="#ecfdf5" stroke="#10b981"/>
          <text x="405" y="52" text-anchor="middle" font-size="10" font-weight="bold" fill="#065f46">Jumlah Pelepah</text>
          <text x="405" y="74" text-anchor="middle" font-size="14" font-weight="extrabold" fill="#047857">14 - 18 Helai</text>
          <text x="405" y="90" text-anchor="middle" font-size="8.5" fill="#059669">Hijau Fungsional</text>
          <!-- Box Eksekusi Lapangan -->
          <rect x="25" y="115" width="450" height="85" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
          <text x="40" y="138" font-size="11" font-weight="bold" fill="#0f172a">Spesifikasi Lubang Tanam APM di Lapangan (SOP BSIP 2025):</text>
          <text x="40" y="158" font-size="9.5" fill="#334155">• Ukuran Lubang Tanam: 80 cm x 80 cm x 80 cm (Volume 0,512 m³).</text>
          <text x="40" y="174" font-size="9.5" fill="#334155">• Inokulasi Bio-Mikoriza (FMA): Tabur 50 gram di dasar lubang tanam menyentuh akar.</text>
          <text x="40" y="190" font-size="9.5" fill="#334155">• Pupuk Dasar Lubang: 400 gram Rock Phosphate + 100 gram Kieserit.</text>
        </svg>`,
        caption: "Bibit yang memenuhi seluruh parameter SNI menjamin tanaman seragam, tahan terhadap serangan hama babi/kumbang, dan cepat berbuah.",
        source: "SNI 8211:2015 & SOP BSIP Sumbar 2025"
      }
    ],
    literature: `
      <h4>1. Spesifikasi Penanaman Bibit APM di Lapangan</h4>
      <p>Karena bobot Large Bag APM mencapai 20-25 kg dengan tajuk rimbun setinggi 1,8-2,2 meter, proses penanaman memerlukan perlakuan khusus agar bibit tidak roboh tertiup angin dan perakaran segera pulih:</p>
      <ul>
        <li><strong>Dimensi Lubang Tanam Ekstra:</strong> Lubang dibuat berukuran <strong>80 cm x 80 cm x 80 cm</strong>.</li>
        <li><strong>Inokulasi Fungi Mikoriza Arbuskular (FMA):</strong> Taburkan <strong>50 gram mikoriza</strong> di dasar lubang tanam tepat bersentuhan dengan akar aktif untuk memacu serapan hara mikro dan air secara instan.</li>
        <li><strong>Pupuk Dasar:</strong> 400 gram Rock Phosphate dan 100 gram Kieserit.</li>
        <li><strong>Pemasangan Ajir Penopang:</strong> Wajib dipasang 2 tiang bambu penopang miring yang diikatkan ke batang menggunakan tali ijuk selama 6 bulan pertama untuk menahan terpaan angin kencang.</li>
      </ul>
    `,
    parameters: [
      { key: "ukuranLubangAPM", label: "Ukuran Lubang Tanam APM (cm)", value: 80, type: "number", unit: "cm" },
      { key: "dosisMikoriza", label: "Dosis Bio-Mikoriza FMA (gram/pokok)", value: 50, type: "number", unit: "gram" },
      { key: "dosisRPAPM", label: "Dosis Pupuk Rock Phosphate Lubang (g)", value: 400, type: "number", unit: "gram" },
      { key: "durasiPenopangBulan", label: "Lama Pemasangan Ajir Penopang (bulan)", value: 6, type: "number", unit: "bulan" }
    ],
    calculate: (params) => {
      return [
        { label: "Volume Galian Lubang APM", value: "0.512 m³ (80x80x80 cm)", highlight: "blue" },
        { label: "Bioproteksi Mikoriza", value: params.dosisMikoriza + " gram FMA / pokok", highlight: "emerald" },
        { label: "Stabilitas Terpaan Angin", value: "Aman dengan 2 Ajir Bambu", highlight: "purple" }
      ];
    },
    records: [
      { id: 1, lokasiTanam: "Afdeling Sentral Replanting Plot 01", jumlah: 1500, varietas: "PPKS 540", tgl: "2025-09-10", status: "Tumbuh Kuat (Ajir Terpasang)" },
      { id: 2, lokasiTanam: "Afdeling Sentral Replanting Plot 02", jumlah: 2000, varietas: "PPKS 540", tgl: "2025-09-25", status: "Tumbuh Kuat (Ajir Terpasang)" }
    ]
  }
};

// Expose globally
window.DEFAULT_DASHBOARD_STATS = DEFAULT_DASHBOARD_STATS;
window.SOP_REFERENCES_LIST = SOP_REFERENCES_LIST;
window.NURSERY_MODULES = NURSERY_MODULES;

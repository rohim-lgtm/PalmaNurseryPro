# PalmaNursery Pro - Smart Palm Oil Nursery Management SPA

Aplikasi web dashboard modern berbasis **Single Page Application (SPA)** khusus manajemen pembibitan kelapa sawit bernama **"PalmaNursery Pro"**. Dibangun dengan standar keahlian *Senior Frontend Developer* dan *Agricultural Tech Expert*, menggunakan **Tailwind CSS**, **Lucide Icons**, sistem data yang dapat diedit secara menyeluruh (**Fully Editable**), kalkulator agronomi *real-time*, serta terintegrasi penuh dengan **SOP BSIP Sumbar (Kementerian Pertanian 2025)** dan jurnal-jurnal ilmiah perkebunan terakreditasi.

---

## 🌴 Identitas & Konsep Aplikasi

- **Nama Aplikasi:** PalmaNursery Pro
- **Subteks Branding:** Smart Palm Oil Nursery
- **Persona Pengguna:** Planters (Estate Manager / Asisten Pembibitan)
- **Tema Warna:** *Forest Green* (hijau perkebunan sawit), *Earth Brown* (tanah/kayu), putih bersih, dan abu-abu modern (`bg-slate-50`).

---

## 🌟 Spesifikasi Tata Letak & Komponen

### 1. Layout Utama (App Shell)
- **Sidebar (Sisi Kiri):**
  - **Header:** Logo tunas sawit hijau (*palm sprout*), judul **PalmaNursery Pro**, subteks *"Smart Palm Oil Nursery"*, serta tombol *collapse* interaktif.
  - **Menu Navigasi:**
    - 📌 **Dashboard (Aktif):** Akses cepat ke ringkasan eksekutif pembibitan sawit.
    - 📂 **Pre-Nursery (PN - Tahap Awal):**
      - *Perhitungan Luas Lahan PN*
      - *Kebutuhan Kecambah & Seleksi Culling Awal*
      - *Jaringan Irigasi & Naungan (Shading Net)*
      - *Penanaman Kecambah ke Polybag Kecil*
      - *Pemeliharaan Rutin PN (Penyiraman & Pemupukan)*
    - 📂 **Main Nursery (MN - Tahap Lanjutan):**
      - *Perhitungan Lahan MN*
      - *Transplanting dari PN ke MN (Polybag Besar)*
      - *Sensus Bibit & Seleksi Ketat (Culling Afkir)*
      - *Pemutaran Bibit & Manajemen Blok*
      - *Transportasi Bibit Siap Tanam (Pre-Casting/Field)*
    - 📂 **Advanced Planting Material (APM):**
      - *Pemeliharaan Khusus & Aklimatisasi*
      - *Standar Siap Tanam di Lapangan (Main Field)*
    - 📚 **Pusat SOP & Referensi (Menu Khusus Dokumen Teknis):**
      - Akses komprehensif ke dokumen Standar Operasional Prosedur (SOP) dan publikasi riset perkebunan dengan tautan langsung.
  - **Footer Sidebar:** Profil pengguna berlabel **"Planters"** dengan jabatan **"Estate Manager / Asisten Pembibitan"** dan menu dropdown pengaturan.

- **Header Halaman (Sisi Kanan):**
  - Judul: *"Dashboard Pembibitan Sawit"*
  - Subteks: *"Selamat datang kembali, Planters! Berikut ringkasan operasional pembibitan kelapa sawit hari ini."*
  - Pencarian cepat modul/blok, lonceng notifikasi dengan *live badge*, dan widget tanggal interaktif.

---

### 2. Komponen Dashboard Utama

#### Baris 1: Kartu Statistik Ringkasan (4 Grid Cards)
1. **Total Lokasi Estate:** Angka **"3 Blok"** (hijau), keterangan **"+1 blok baru"** (Blok Sentral, Timur, dan Cadangan).
2. **Total Bibit Sawit:** Angka **"128.500 Pokok"** (biru), rincian PN (48.500) & MN (80.000 pokok).
3. **Proyek / Batch Aktif:** Angka **"18 Batch"** (oranye), status *on-track* (12 berjalan, 6 persiapan).
4. **Tingkat Konversi / Viabilitas:** Angka **"96.42%"** (ungu), tingkat keberhasilan tumbuh tinggi (> 95%).
*(Semua kartu statistik dapat diedit secara langsung melalui tombol "Edit Data" atau klik langsung kartu!)*

#### Baris 2: Banner Hero Visual Sawit & Aktivitas Lapangan (Split Layout)
- **Kolom Kiri (Banner Visual Perkebunan Sawit - 4 Slide Real Photos):**
  - Slide 1: Hamparan Luas Main Nursery Kelapa Sawit (Sprinkler & Bedengan Skala Perkebunan)
  - Slide 2: Pembibitan Pre-Nursery Bedengan Baby Bag dengan Irigasi Mikro Sumisansui
  - Slide 3: Barisan Polybag Besar Main Nursery Vigor Unggul (Large Bag 10 kg)
  - Slide 4: Diagram Pola Tanam Segitiga 9x9 Meter Standar Agronomi Perkebunan Sawit
  - Badge hijau: *"Sistem Pembibitan Sawit Unggul"*.
  - Heading: *"Optimalisasi Pertumbuhan Bibit Sawit untuk Produktivitas Maksimal"*.
  - Deskripsi: *"Monitoring terstruktur mulai dari fase kecambah, seleksi ketat di Pre-Nursery, hingga Main Nursery siap salur."*
  - Tombol CTA: *"Lihat Detail Blok >"*.
- **Kolom Kanan (Aktivitas Lapangan Terbaru / Log Mandor):**
  - 🟢 Penyiraman otomatis Blok PN-A selesai (2 jam lalu)
  - 🔵 Transplanting 1.500 bibit ke Main Nursery MN-B (4 jam lalu)
  - 🟠 Seleksi culling/bibit abnormal batch #12 (1 hari lalu)
  - 🟣 Pemupukan rutin NPKMg di Main Nursery (1 hari lalu)

#### Baris 3: Modul Utama Pembibitan Sawit (Quick Access dengan Visual Header)
- **Pre-Nursery (PN):** Header foto real bedengan baby bag, "Manajemen kecambah & polybag kecil (0-3 bulan)"
- **Main Nursery (MN):** Header foto real hamparan luas, "Pembesaran bibit sawit polybag besar (3-12 bulan)"
- **Advanced Planting Material (APM):** Header foto real large bag vigor, "Pengelolaan bibit akhir siap ke lapangan utama"

#### Baris 4: Bar Rujukan Dokumen & SOP Resmi (Pusat Referensi Ilmiah)
Panel khusus berjudul **"🔗 Pustaka SOP & Referensi Ilmiah Pembibitan Kelapa Sawit"** yang memuat tautan langsung ke sumber operasional terakreditasi:
1. **SOP Resmi BSIP Sumbar (Kementan):** Standar Operasional Prosedur Pembibitan (`https://sumbar.brmp.pertanian.go.id/informasi-publik/standar-operasional-prosedur`)
2. **Jurnal Agriprima (Polije 2022):** Kajian Teknis Pertumbuhan Bibit (`https://agriprima.polije.ac.id/index.php/journal/article/view/v6i1-g/pdf`)
3. **Jurnal Agritrop (Unmuh Jember 2022):** Manajemen Pembibitan Kelapa Sawit (`https://jurnal.unmuhjember.ac.id/index.php/AGRITROP/article/view/7337/3973`)
4. **Jurnal JIPK (Unmura 2022):** Penelitian Ilmu Pertanian & Perkebunan (`https://ejurnal.unmura.org/index.php/jipk/article/view/29/103`)
5. **Matriks Pemetaan Jurnal Resmi:** Dilengkapi tabel visual dan gambar dokumen pemetaan rujukan ke seluruh submateri website.

---

### 3. Galeri Foto Real Lapangan & Diagram Ilustrasi Teknis di Setiap Sub-Menu
Setiap sub-menu pada sidebar (seluruh 12 modul dan Pusat SOP) dilengkapi dengan:
- **Foto Real Lapangan:** Menampilkan dokumentasi riil pembibitan kelapa sawit (bedengan baby bag intensif, hamparan luas polybag besar, instalasi irigasi kabut mikro, dll.).
- **Diagram Ilustrasi Teknis Agronomi:** Skema vektor tajam dan presisi mengenai tata letak bedengan 1,2 m x 15 m (rasio 60:40), anatomi kecambah normal vs culling cacat (twisted, rot, broken), aklimatisasi naungan bertahap (100% -> 50% -> 0%), teknik kedalaman tanam 2-3 cm, formulasi media 2:1:1, pola tanam segitiga 90 cm di MN vs 9 m di lapangan utama, 4 langkah transplanting coring, 6 tipe morfologi afkir, pemutaran polybag 180°, dan parameter fisik bibit siap tanam SNI 8211.
- **Interactive Lightbox (Zoom Modal):** Klik pada foto manapun untuk membuka resolusi penuh dengan caption teknis lengkap.

---

### 3. Kemampuan Pengeditan Data (Fully Editable System)
- **Live LocalStorage:** Perubahan angka statistik dashboard, input parameter lapangan, dan rekaman tabel petak/batch langsung tersimpan di browser tanpa perlu server backend terpisah.
- **Kalkulator Agronomi Real-time:** Setiap modul (seperti kebutuhan kecambah, luas lahan, debit air siram, dan culling afkir) langsung mengkalkulasi output rekomendasi saat angka diubah.
- **CRUD Operasional:** Fitur *Tambah Data*, *Edit Data*, dan *Hapus Baris* pada seluruh tabel modul.

---

## 🚀 Cara Menjalankan

Cukup buka file `index.html` langsung di browser favorit Anda:

```powershell
Start-Process "d:\WEBSITE ANTYGRAVITY\index.html"
```

# Panduan Pembaruan E-Portofolio PPL Terbimbing
**Krisna Pratama Aulihar, S.Pd. — PPG Calon Guru PJOK Universitas Negeri Yogyakarta (UNY)**

Website E-Portofolio ini telah sepenuhnya dirombak ke tema **Modern Clean Agency** sesuai desain referensi terkini dengan palet visual:
- **Pure White Background** (`#FFFFFF` & `#F8F9F5`)
- **Deep Forest Green** (`#12382D`)
- **Vibrant Lime / Chartreuse Accent** (`#B8E023`)
- **Top Bar Kontak & Slanted Lime Social Strip**
- **Twin-Pill Section Badge (`●●`)**
- **Kolase Foto Asimetris Bergradasi & Rotating Circular Badge**
- **Full-Width Scrolling Marquee Ticker Hijau Hutan**
- **Kartu Layanan Interaktif & Pusat Kartu Hijau Lime**
- **Galeri Dokumentasi Lengkap dengan Lightbox Zoom Otomatis**

---

## 🧭 Struktur Navigasi Navbar & Dropdown

Navbar di seluruh 14 berkas HTML memiliki konsistensi navigasi 100%:
1. **Beranda** (`index.html`)
2. **Profil** (`profil.html`)
3. **UTS** *(Dropdown)*:
   - Rancangan (`UTS/rancangan.html`)
   - Materi (`UTS/materi.html`)
   - Media (`UTS/media.html`)
   - Instrumen (`UTS/instrumen.html`)
   - Video (`UTS/video.html`)
4. **UAS** *(Dropdown)*:
   - Rancangan (`UAS/rancangan.html`)
   - Materi (`UAS/materi.html`)
   - Media (`UAS/media.html`)
   - Instrumen (`UAS/instrumen.html`)
   - Video (`UAS/video.html`)
5. **Non-Mengajar** (`non-mengajar.html`)
6. **Dokumentasi** (`dokumentasi.html`)

---

## 📁 Struktur Berkas Proyek

```
e-porto-krisna/
├── index.html          # Beranda Utama (Hero Agency, Lokasi LPTR, Artefak Utama, Galeri PPL, Footer)
├── profil.html         # Profil Lengkap, Foto Resmi, Filosofi Pedagogik, Riwayat S1 & PPG UNY, Lisensi PBVSI
├── non-mengajar.html   # Kegiatan Kesiswaan (Futsal, Piket 5S, Upacara, Senam SKJ, O2SN, MGMP)
├── dokumentasi.html    # Galeri Dokumentasi Interaktif Berfilter (Semua, Praktik, Non-Mengajar, Supervisi)
├── logo.png            # Logo Resmi UNY
├── Pas Foto.JPG        # Foto Asli Krisna Pratama Aulihar, S.Pd.
├── css/
│   └── style.css       # Design System Lengkap (Clean Agency, Forest Green, Lime, Grid, Lightbox, Responsive)
├── js/
│   └── main.js         # Interaktivitas: Lightbox Modal, Filter Kategori, Progress Bar Observer, Toast
├── IMG/
│   ├── krisna.jpg      # Foto Profil Krisna Pratama (Resolusi Tinggi)
│   └── pas-foto.jpg    # Salinan Foto Resmi
├── UTS/                # Perangkat Siklus 1 PPL Terbimbing
│   ├── rancangan.html  # Modul Ajar Kurikulum Merdeka (Bola Voli Diferensiasi)
│   ├── materi.html     # Slide Interaktif Canva & Infografis Taktik PBVSI
│   ├── media.html      # Media Konkret Bola Spon & E-LKPD QR Code
│   ├── instrumen.html  # Rubrik Kinerja Passing, Bank Soal Kognitif, Observasi Sikap
│   └── video.html      # Video Mengajar Siklus 1 dengan Timestamps Sintaks Lengkap
├── UAS/                # Perangkat Siklus 2 & Uji Kinerja (UKin)
│   ├── rancangan.html  # Modul Ajar Circuit Training 5 Pos & TGfU Bulu Tangkis
│   ├── materi.html     # Fisiologi Olahraga Terapan, Target Heart Rate (THR), Peta Sirkuit
│   ├── media.html      # Audio Timer Tabata Beeper & E-LKPD Barcode Denyut Nadi
│   ├── instrumen.html  # Tes Kebugaran Jasmani Indonesia (TKJI) & Penilaian Diri
│   └── video.html      # Video Praktik Siklus 2 UKin dengan Timestamps Interaktif
└── Dokumen/            # Folder Tempat Menyimpan Berkas Asli PDF (RPP, Modul, Rubrik)
```

---

## 🛠️ Cara Kustomisasi & Memperbarui Portofolio

### 1. Foto Profil Anda
Foto asli Anda (`Pas Foto.JPG`) telah disalin ke `IMG/krisna.jpg` dan dipasang otomatis pada:
- **Hero Section `index.html`** (kolase foto asimetris dengan badge putar).
- **About / Lokasi LPTR `index.html`** (kartu sekolah & foto pengajar).
- **Halaman `profil.html`** (kartu identitas mahasiswa dengan frame rounded).

Jika ingin mengganti foto dengan foto lapangan lain, cukup letakkan foto baru ke folder `IMG/` dengan nama `krisna.jpg` atau ganti atribut `src` pada tag `<img>`.

### 2. Menautkan Video YouTube Anda
Buka `UTS/video.html` atau `UAS/video.html`, cari baris tag `<iframe>`:
```html
<iframe src="https://www.youtube.com/embed/KODE_VIDEO_ANDA" ...></iframe>
```
Ganti `KODE_VIDEO_ANDA` dengan ID video YouTube pelaksanaan praktik Anda.

### 3. Menautkan Berkas Dokumen PDF Asli
Simpan berkas PDF modul ajar, rubrik nilai, atau instrumen Anda ke dalam folder `Dokumen/`.
Arahkan tombol unduh di berkas HTML yang bersangkutan:
```html
<a href="Dokumen/Modul_Ajar_Voli_Krisna.pdf" download class="btn btn-primary-dark btn-sm">
  <i class="fa-solid fa-download"></i> Unduh Modul PDF
</a>
```

### 4. Membuka & Menguji Portofolio
- Buka file `index.html` langsung di browser Anda (Google Chrome, Microsoft Edge, Mozilla Firefox).
- Seluruh navigasi, dropdown, filter tab, modal pratinjau, dan tombol aksi berfungsi tanpa memerlukan server lokal tambahan.

# LAPORAN PROYEK
# Sistem Pendukung Keputusan Pemilihan Laptop Menggunakan Metode TOPSIS

---

## Abstract / Executive Summary

Proyek ini mengembangkan aplikasi desktop Sistem Pendukung Keputusan (SPK) untuk pemilihan laptop terbaik menggunakan metode TOPSIS (Technique for Order of Preference by Similarity to Ideal Solution). Aplikasi dibangun menggunakan teknologi Electron, Node.js, Express.js, dan SQLite sebagai database lokal. Sistem ini mengevaluasi laptop berdasarkan 8 kriteria: Harga (cost), RAM, SSD, Baterai, Processor, GPU, Upgrade RAM, dan Upgrade Storage. Dengan database built-in berisi 344+ laptop dari 18 brand dan benchmark otomatis untuk 1200+ processor serta 500+ GPU, aplikasi ini memberikan rekomendasi objektif dan terukur. Aplikasi berjalan secara offline sebagai standalone desktop application untuk Windows.

---

## Intisari

| Item | Keterangan |
|------|-----------|
| Judul | SPK Pemilihan Laptop dengan Metode TOPSIS |
| Platform | Windows Desktop (Electron) |
| Metode | TOPSIS (Hwang & Yoon, 1981) |
| Kriteria | 8 kriteria (1 cost, 7 benefit) |
| Database | 344+ laptop, 18 brand |
| Benchmark | 1200+ processor, 500+ GPU |
| Bahasa | JavaScript (Node.js) |
| Database Engine | SQLite (better-sqlite3) |

---

## Daftar Isi

1. Pendahuluan
2. Perencanaan & Metodologi
3. Pelaksanaan & Pembahasan
4. Penutup
5. Lampiran dan Referensi

---

## 1. Pendahuluan

### 1.1 Latar Belakang

Di era digital saat ini, laptop menjadi kebutuhan utama bagi mahasiswa, profesional, dan pekerja kreatif. Dengan ratusan pilihan laptop yang tersedia di pasaran dari berbagai brand dengan spesifikasi yang beragam, memilih laptop yang tepat sesuai kebutuhan dan budget menjadi tantangan tersendiri.

Permasalahan utama yang dihadapi:
- Banyaknya alternatif laptop dengan spesifikasi berbeda-beda
- Kriteria penilaian yang beragam (harga, performa, daya tahan baterai, upgradeability)
- Sulitnya membandingkan secara objektif tanpa bias subjektif
- Tidak adanya tools yang komprehensif untuk analisis multi-kriteria

Oleh karena itu, diperlukan sebuah sistem yang dapat membantu pengambilan keputusan secara objektif dan terukur menggunakan metode ilmiah.

### 1.2 Tujuan Proyek

1. Membangun aplikasi SPK desktop yang mengimplementasikan metode TOPSIS secara benar sesuai standar Hwang & Yoon (1981)
2. Menyediakan database laptop yang komprehensif dengan data spesifikasi lengkap
3. Mengotomatisasi penilaian processor dan GPU menggunakan benchmark score
4. Memberikan hasil ranking yang objektif, transparan, dan dapat diverifikasi
5. Menyediakan fitur analisis lanjutan (sensitivity analysis, perbandingan head-to-head, export)

### 1.3 Batasan Masalah

- Aplikasi hanya berjalan di platform Windows (64-bit)
- Data harga laptop bersifat approximate (perkiraan harga pasar Indonesia)
- Benchmark score menggunakan data dari PassMark (processor) dan 3DMark Time Spy (GPU)
- Metode yang digunakan hanya TOPSIS (tidak membandingkan dengan metode lain seperti AHP, SAW, ELECTRE)
- Aplikasi berjalan offline, tidak terhubung ke internet untuk update data real-time
- Kriteria penilaian dibatasi 8 kriteria yang telah ditentukan

---

## 2. Perencanaan & Metodologi

### 2.1 Alat dan Bahan

#### Perangkat Lunak:
| Software | Versi | Fungsi |
|----------|-------|--------|
| Node.js | v20.x | Runtime JavaScript |
| Electron | v28.3.3 | Framework desktop app |
| Express.js | v4.x | Web framework (backend) |
| SQLite | - | Database engine |
| better-sqlite3 | v11.x | SQLite driver untuk Node.js |
| EJS | v3.x | Template engine (views) |
| Bootstrap | v5.3.2 | CSS framework |
| Chart.js | v4.4.0 | Library grafik/chart |
| jsPDF | - | Export ke PDF |
| SheetJS (xlsx) | - | Export/Import Excel |
| electron-builder | v24.x | Packaging & build |

#### Perangkat Keras (Development):
- Komputer dengan OS Windows 10/11
- RAM minimal 8 GB
- Storage minimal 500 MB free space

### 2.2 Metodologi: Metode TOPSIS

TOPSIS (Technique for Order of Preference by Similarity to Ideal Solution) dikembangkan oleh Hwang dan Yoon pada tahun 1981. Prinsip dasarnya adalah alternatif terbaik memiliki jarak terdekat ke solusi ideal positif dan jarak terjauh dari solusi ideal negatif.

#### Langkah-langkah TOPSIS:

**Langkah 1: Membuat Matriks Keputusan**

Matriks keputusan X berukuran m × n, dimana m = jumlah alternatif dan n = jumlah kriteria.

**Langkah 2: Normalisasi Matriks**

Normalisasi menggunakan metode Euclidean:

```
rij = xij / √(Σ xij²)
```

Dimana rij adalah nilai normalisasi untuk alternatif i pada kriteria j.

**Langkah 3: Matriks Normalisasi Terbobot**

```
vij = wj × rij
```

Dimana wj adalah bobot kriteria j (total bobot = 1.00).

**Langkah 4: Menentukan Solusi Ideal Positif (A+) dan Negatif (A-)**

- A+ = { max(vij) jika benefit, min(vij) jika cost }
- A- = { min(vij) jika benefit, max(vij) jika cost }

**Langkah 5: Menghitung Jarak ke Solusi Ideal**

```
Di+ = √(Σ (vij - vj+)²)    (jarak ke ideal positif)
Di- = √(Σ (vij - vj-)²)    (jarak ke ideal negatif)
```

**Langkah 6: Menghitung Nilai Preferensi (Closeness Coefficient)**

```
Ci = Di- / (Di+ + Di-)
```

Nilai Ci berkisar antara 0 sampai 1. Semakin mendekati 1, semakin baik alternatif tersebut.

**Langkah 7: Ranking**

Alternatif diurutkan berdasarkan nilai Ci dari terbesar ke terkecil.

### 2.3 Kriteria Penilaian

| No | Kriteria | Tipe | Bobot | Keterangan |
|----|----------|------|-------|------------|
| C1 | Harga | Cost | 0.20 | Semakin murah semakin baik |
| C2 | RAM | Benefit | 0.13 | Kapasitas RAM (GB) |
| C3 | SSD | Benefit | 0.13 | Kapasitas penyimpanan (GB) |
| C4 | Baterai | Benefit | 0.10 | Daya tahan baterai (jam) |
| C5 | Processor | Benefit | 0.15 | Skor benchmark 1-10 |
| C6 | GPU | Benefit | 0.13 | Skor benchmark 1-10 |
| C7 | Upgrade RAM | Benefit | 0.08 | Bisa di-upgrade (1) atau tidak (0) |
| C8 | Upgrade Storage | Benefit | 0.08 | Bisa di-upgrade (1) atau tidak (0) |

Total bobot: 0.20 + 0.13 + 0.13 + 0.10 + 0.15 + 0.13 + 0.08 + 0.08 = **1.00**

### 2.4 Alur Pengerjaan (Flowchart)

```
[Start]
   ↓
[Input Data Laptop]
   ↓
[Input/Edit Kriteria & Bobot]
   ↓
[Generate Nilai Alternatif]
   ↓
[Normalisasi Matriks]
   ↓
[Hitung Matriks Terbobot]
   ↓
[Tentukan A+ dan A-]
   ↓
[Hitung Jarak D+ dan D-]
   ↓
[Hitung Closeness Coefficient]
   ↓
[Ranking Alternatif]
   ↓
[Tampilkan Hasil & Export]
   ↓
[End]
```

### 2.5 Arsitektur Aplikasi

```
┌─────────────────────────────────────────┐
│           ELECTRON (Main Process)        │
│  ┌─────────────────────────────────────┐ │
│  │      EXPRESS.JS (Web Server)        │ │
│  │  ┌──────────┐  ┌────────────────┐  │ │
│  │  │  Routes  │  │  Controllers   │  │ │
│  │  └──────────┘  └────────────────┘  │ │
│  │  ┌──────────┐  ┌────────────────┐  │ │
│  │  │  Models  │  │  Utils/TOPSIS  │  │ │
│  │  └──────────┘  └────────────────┘  │ │
│  │  ┌──────────────────────────────┐  │ │
│  │  │     SQLite Database          │  │ │
│  │  └──────────────────────────────┘  │ │
│  └─────────────────────────────────────┘ │
│  ┌─────────────────────────────────────┐ │
│  │    RENDERER (BrowserWindow/EJS)     │ │
│  │  ┌──────────┐  ┌────────────────┐  │ │
│  │  │  Views   │  │  Public Assets │  │ │
│  │  │  (EJS)   │  │  (CSS/JS/Libs) │  │ │
│  │  └──────────┘  └────────────────┘  │ │
│  └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

### 2.6 Struktur Folder

```
spk-topsis/
├── main.js                 # Electron main process
├── app.js                  # Express.js application
├── package.json            # Dependencies & build config
├── config/
│   └── database.js         # SQLite connection & migrations
├── controllers/
│   ├── dashboardController.js
│   ├── kriteriaController.js
│   ├── laptopController.js
│   ├── nilaiController.js
│   ├── toolsController.js
│   └── topsisController.js
├── models/
│   ├── kriteriaModel.js
│   ├── laptopModel.js
│   └── nilaiModel.js
├── routes/
│   ├── dashboardRoutes.js
│   ├── kriteriaRoutes.js
│   ├── laptopRoutes.js
│   ├── nilaiRoutes.js
│   ├── toolsRoutes.js
│   └── topsisRoutes.js
├── utils/
│   ├── topsis.js           # Implementasi algoritma TOPSIS
│   └── generateHash.js
├── views/                  # EJS templates
│   ├── layouts/main.ejs
│   ├── dashboard/index.ejs
│   ├── laptop/create.ejs, edit.ejs, index.ejs
│   ├── kriteria/create.ejs, edit.ejs, index.ejs
│   ├── nilai/index.ejs, input.ejs
│   ├── topsis/index.ejs
│   ├── tools/...
│   └── partials/header, footer, navbar, sidebar
├── public/
│   ├── css/style.css
│   ├── js/
│   │   ├── script.js       # SPA navigation & UI
│   │   ├── benchmarks.js   # 1200+ processor & 500+ GPU
│   │   └── laptop-database.js  # 344+ laptop database
│   └── libs/               # jsPDF, SheetJS (offline)
├── middleware/
│   └── auth.js             # Profile check
└── database/
    └── spk_topsis.db       # SQLite database file
```

---

## 3. Pelaksanaan & Pembahasan

### 3.1 Proses Pengerjaan

#### Tahap 1: Setup Project & Database
- Inisialisasi project Node.js dengan Express.js
- Konfigurasi SQLite database dengan auto-migration
- Membuat tabel: laptop, kriteria, nilai, profile, history
- Implementasi MVC pattern (Model-View-Controller)

#### Tahap 2: Implementasi CRUD
- Form tambah/edit/hapus laptop dengan validasi
- Manajemen kriteria (nama, bobot, tipe cost/benefit)
- Generate nilai otomatis dari data laptop
- DataTables untuk tampilan data interaktif

#### Tahap 3: Implementasi Algoritma TOPSIS
- Coding algoritma di `utils/topsis.js`
- Normalisasi matriks (Euclidean normalization)
- Perhitungan matriks terbobot
- Penentuan solusi ideal positif & negatif
- Perhitungan jarak Euclidean
- Closeness coefficient & ranking
- Verifikasi hasil dengan contoh soal dari referensi PDF

#### Tahap 4: Database Benchmark
- Riset data benchmark dari PassMark (processor) dan 3DMark (GPU)
- Input 1200+ processor dari era 1971 (Intel 4004) hingga 2025 (Intel Core Ultra, AMD Ryzen AI)
- Input 500+ GPU dari ATI Mobility Radeon hingga NVIDIA RTX 5090
- Konversi benchmark ke skor 1-10 menggunakan skala logaritmik
- Custom dropdown component dengan filter brand dan search

#### Tahap 5: Database Laptop
- Riset spesifikasi 344+ laptop dari 18 brand
- Brand: ASUS, Lenovo, HP, Dell, Acer, MSI, Apple, Microsoft, Razer, Samsung, LG, Huawei, Xiaomi, Infinix, Axioo, Advan, Zyrex, Gigabyte
- Autocomplete dropdown dengan auto-fill semua field
- Data mencakup laptop tahun 2020-2025

#### Tahap 6: Fitur Lanjutan
- Export PDF (jsPDF + AutoTable) — hasil ranking rapih
- Export Excel (SheetJS) — dengan rumus formula di setiap cell
- Sensitivity Analysis — slider interaktif, ranking berubah real-time
- Perbandingan Head-to-Head — radar chart 2 laptop
- History perhitungan — simpan & lihat kembali
- Import Excel — upload, preview, bulk import
- Tooltip/Help — penjelasan di setiap langkah TOPSIS
- Reset/Clear data — tools management

#### Tahap 7: UI/UX & Packaging
- Desain UI modern, clean dengan Plus Jakarta Sans font
- Dark mode toggle
- Smooth SPA-like navigation (AJAX content swap)
- Packaging ke Windows .exe menggunakan electron-builder
- Disable DevTools untuk keamanan

### 3.2 Kendala & Solusi

| No | Kendala | Solusi |
|----|---------|--------|
| 1 | MySQL tidak cocok untuk desktop offline | Migrasi ke SQLite (better-sqlite3) — zero-config, single file |
| 2 | Export Excel/PDF menyebabkan halaman stuck putih | Fix: smooth-nav script intercepting blob download links. Tambah check `blob:` dan `download` attribute |
| 3 | Dropdown benchmark terpotong di viewport | Implementasi fixed-positioning dengan auto-flip (detect space above/below) |
| 4 | File .exe besar karena native module | Gunakan `install prebuilt binary` dari electron-builder untuk better-sqlite3 |
| 5 | Skor processor/GPU tidak linear | Gunakan konversi logaritmik: `score = 1 + 9 * (log(benchmark) - log(min)) / (log(max) - log(min))` |
| 6 | Bobot kriteria bisa tidak = 1.0 | Tambah validasi real-time + tombol auto-normalize |

### 3.3 Analisis Hasil

#### Contoh Perhitungan TOPSIS:

Diberikan 3 laptop sebagai alternatif:

| Laptop | Harga | RAM | SSD | Baterai | Proc | GPU | Up.RAM | Up.SSD |
|--------|-------|-----|-----|---------|------|-----|--------|--------|
| ASUS VivoBook 14 | 9,800,000 | 8 | 512 | 9 | 6 | 4 | 0 | 1 |
| Lenovo IdeaPad Slim 5 | 12,500,000 | 16 | 512 | 10 | 7 | 5 | 0 | 1 |
| Acer Aspire 5 | 10,500,000 | 8 | 512 | 8 | 6 | 5 | 1 | 1 |

Setelah melalui 7 langkah TOPSIS:
1. Normalisasi → matriks ternormalisasi
2. Pembobotan → matriks terbobot
3. Solusi ideal A+ dan A-
4. Jarak D+ dan D-
5. Closeness Coefficient (Ci)

Hasil ranking menunjukkan laptop dengan Ci tertinggi sebagai rekomendasi terbaik.

#### Validasi:
- Algoritma telah diverifikasi dengan contoh soal dari referensi akademik
- Hasil konsisten dengan perhitungan manual
- Perubahan bobot (sensitivity analysis) menghasilkan perubahan ranking yang logis

### 3.4 Fitur Aplikasi

1. **Dashboard** — Statistik jumlah laptop, kriteria, grafik distribusi
2. **Data Laptop** — CRUD dengan autocomplete dari database 344+ laptop
3. **Kriteria** — Kelola kriteria, bobot, tipe (cost/benefit) dengan validasi
4. **Data Nilai** — Matriks keputusan otomatis dari data laptop
5. **Perhitungan TOPSIS** — Step-by-step dengan tooltip penjelasan
6. **Export PDF/Excel** — Hasil lengkap dengan rumus
7. **Sensitivity Analysis** — Slider interaktif real-time
8. **Perbandingan** — Head-to-head 2 laptop dengan radar chart
9. **History** — Log perhitungan sebelumnya
10. **Import Excel** — Bulk import data laptop
11. **Tools** — Reset data, clear database

---

## 4. Penutup

### 4.1 Kesimpulan

1. **Tujuan tercapai** — Aplikasi SPK berhasil dibangun dan mengimplementasikan metode TOPSIS secara benar sesuai standar Hwang & Yoon (1981).
2. **Database komprehensif** — 344+ laptop dari 18 brand dengan data spesifikasi lengkap tersedia sebagai built-in database.
3. **Benchmark otomatis** — Penilaian processor dan GPU terotomatisasi menggunakan data benchmark dari PassMark dan 3DMark.
4. **Hasil objektif** — Ranking yang dihasilkan bersifat objektif, transparan (setiap langkah ditampilkan), dan dapat diverifikasi.
5. **Fitur lengkap** — Sensitivity analysis, export, import, perbandingan, dan history memberikan analisis yang komprehensif.
6. **User-friendly** — UI modern, smooth navigation, dark mode, dan autocomplete membuat aplikasi mudah digunakan.

### 4.2 Saran Pengembangan

1. **Multi-platform** — Extend ke macOS dan Linux menggunakan electron-builder
2. **Online database** — Integrasi API untuk update harga dan spesifikasi real-time
3. **Metode lain** — Tambahkan perbandingan dengan metode AHP, SAW, ELECTRE, PROMETHEE
4. **Machine Learning** — Rekomendasi berdasarkan preferensi user sebelumnya
5. **Collaborative** — Multi-user dengan sinkronisasi cloud
6. **Mobile version** — Versi Android/iOS menggunakan React Native atau Flutter

---

## 5. Lampiran dan Referensi

### 5.1 Daftar Pustaka

1. Hwang, C.L. & Yoon, K. (1981). *Multiple Attribute Decision Making: Methods and Applications*. Springer-Verlag, Berlin.
2. Yoon, K.P. & Hwang, C.L. (1995). *Multiple Attribute Decision Making: An Introduction*. Sage Publications.
3. PassMark Software. (2025). *CPU Benchmark Charts*. https://www.cpubenchmark.net/
4. UL Solutions. (2025). *3DMark Time Spy Benchmark*. https://www.3dmark.com/
5. Electron Documentation. (2025). https://www.electronjs.org/docs/
6. Express.js Documentation. (2025). https://expressjs.com/
7. better-sqlite3 Documentation. (2025). https://github.com/WiseLibs/better-sqlite3

### 5.2 Lampiran

#### A. Implementasi Algoritma TOPSIS (utils/topsis.js)

```javascript
function hitungTopsis(alternatif, kriteria) {
    const m = alternatif.length; // jumlah alternatif
    const n = kriteria.length;   // jumlah kriteria

    // Step 1: Matriks keputusan sudah ada dari parameter

    // Step 2: Normalisasi (Euclidean)
    const pembagi = [];
    for (let j = 0; j < n; j++) {
        let sum = 0;
        for (let i = 0; i < m; i++) {
            sum += Math.pow(alternatif[i].nilai[j], 2);
        }
        pembagi.push(Math.sqrt(sum));
    }

    const normalisasi = alternatif.map(alt => ({
        ...alt,
        normal: alt.nilai.map((val, j) => pembagi[j] !== 0 ? val / pembagi[j] : 0)
    }));

    // Step 3: Matriks terbobot
    const terbobot = normalisasi.map(alt => ({
        ...alt,
        weighted: alt.normal.map((val, j) => val * kriteria[j].bobot)
    }));

    // Step 4: Solusi ideal positif (A+) dan negatif (A-)
    const idealPositif = [];
    const idealNegatif = [];
    for (let j = 0; j < n; j++) {
        const values = terbobot.map(alt => alt.weighted[j]);
        if (kriteria[j].tipe === 'benefit') {
            idealPositif.push(Math.max(...values));
            idealNegatif.push(Math.min(...values));
        } else {
            idealPositif.push(Math.min(...values));
            idealNegatif.push(Math.max(...values));
        }
    }

    // Step 5: Jarak ke solusi ideal
    const hasil = terbobot.map(alt => {
        let dPlus = 0, dMinus = 0;
        for (let j = 0; j < n; j++) {
            dPlus += Math.pow(alt.weighted[j] - idealPositif[j], 2);
            dMinus += Math.pow(alt.weighted[j] - idealNegatif[j], 2);
        }
        dPlus = Math.sqrt(dPlus);
        dMinus = Math.sqrt(dMinus);

        // Step 6: Closeness coefficient
        const ci = (dPlus + dMinus) !== 0 ? dMinus / (dPlus + dMinus) : 0;

        return { ...alt, dPlus, dMinus, ci };
    });

    // Step 7: Ranking
    hasil.sort((a, b) => b.ci - a.ci);
    return hasil.map((h, i) => ({ ...h, rank: i + 1 }));
}
```

#### B. Konversi Benchmark ke Skor 1-10

```javascript
function benchmarkToScore(benchmark, type) {
    const ranges = {
        processor: { min: 35, max: 55200 },    // PassMark
        gpu: { min: 10, max: 28400 }           // 3DMark Time Spy
    };
    const { min, max } = ranges[type];
    if (benchmark <= min) return 1;
    if (benchmark >= max) return 10;
    // Logarithmic scale
    const score = 1 + 9 * (Math.log(benchmark) - Math.log(min)) / (Math.log(max) - Math.log(min));
    return Math.round(score);
}
```

#### C. Daftar Brand dalam Database

| No | Brand | Jumlah Laptop | Kategori |
|----|-------|---------------|----------|
| 1 | ASUS | 60+ | Budget - Gaming - Workstation |
| 2 | Lenovo | 40+ | Budget - Gaming - Business |
| 3 | HP | 38 | Budget - Gaming - Business |
| 4 | Dell | 30+ | Budget - Gaming - Workstation |
| 5 | Acer | 32 | Budget - Gaming - Workstation |
| 6 | MSI | 30+ | Budget - Gaming |
| 7 | Apple | 19 | Premium - Workstation |
| 8 | Microsoft | 11 | Premium |
| 9 | Razer | 7 | Gaming |
| 10 | Samsung | 8 | Premium |
| 11 | LG | 8 | Premium |
| 12 | Huawei | 7 | Mainstream - Premium |
| 13 | Xiaomi | 6 | Mainstream - Premium |
| 14 | Infinix | 6 | Budget |
| 15 | Axioo | 5 | Budget - Gaming |
| 16 | Advan | 4 | Budget |
| 17 | Zyrex | 3 | Budget |
| 18 | Gigabyte | 5 | Gaming - Workstation |

---

*Laporan ini dibuat sebagai dokumentasi proyek Sistem Pendukung Keputusan (SPK) untuk mata kuliah terkait.*

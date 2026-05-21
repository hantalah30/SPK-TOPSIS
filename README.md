# SPK Pemilihan Laptop Terbaik - Metode TOPSIS

Aplikasi Desktop (`.exe`) Sistem Pendukung Keputusan untuk menentukan laptop terbaik menggunakan metode **TOPSIS**.

![Electron](https://img.shields.io/badge/Electron-28-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![SQLite](https://img.shields.io/badge/SQLite-Embedded-orange)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple)

## 📋 Fitur

- **Aplikasi Desktop (.exe)** - Tidak perlu install Node.js, MySQL, atau apapun
- **Database Embedded (SQLite)** - Data tersimpan lokal, tanpa setup database
- **Authentication** - Login/Logout dengan session & bcrypt
- **Dashboard** - Statistik & chart interaktif
- **CRUD Laptop** - Tambah, edit, hapus data laptop
- **CRUD Kriteria** - Kelola kriteria penilaian (Benefit/Cost)
- **Data Nilai** - Input nilai laptop terhadap kriteria
- **Perhitungan TOPSIS** - Implementasi lengkap 7 langkah
- **Ranking** - Hasil perangkingan otomatis + grafik
- **Dark Mode** - Toggle tema gelap/terang
- **Cetak PDF** - Print hasil perhitungan
- **Responsive** - DataTables, SweetAlert2

## 🚀 Cara Menggunakan (User Biasa)

### Download & Install
1. Download file installer `.exe` dari halaman Release
2. Jalankan installer, ikuti petunjuk
3. Buka aplikasi dari Desktop/Start Menu
4. Login: `admin` / `admin123`

Tidak perlu install MySQL, Node.js, atau software lain.

## 🛠️ Cara Build dari Source (Developer)

### Prasyarat
- Node.js versi 18+
- npm

### Langkah-langkah

1. **Clone/Download project**
   ```bash
   cd spk-topsis
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan mode development (Electron)**
   ```bash
   npm start
   ```

4. **Jalankan mode web saja (tanpa Electron)**
   ```bash
   npm run server
   ```
   Lalu buka `http://localhost:3456`

5. **Build .exe installer**
   ```bash
   npm run build
   ```
   Hasil build ada di folder `dist/`

## 📁 Struktur Folder

```
spk-topsis/
├── config/
│   └── database.js          # Konfigurasi SQLite (embedded)
├── controllers/             # Logic bisnis (MVC)
├── database/
│   ├── spk_topsis.sql       # Referensi SQL (untuk dokumentasi)
│   └── spk_topsis.db        # File database SQLite (auto-generated)
├── middleware/
│   └── auth.js              # Middleware autentikasi
├── models/                  # Data access layer
├── public/
│   ├── css/style.css
│   ├── js/script.js
│   └── icon.ico
├── routes/                  # URL routing
├── scripts/                 # Build utilities
├── utils/
│   └── topsis.js            # Algoritma TOPSIS
├── views/                   # Template EJS
├── app.js                   # Express server
├── main.js                  # Electron main process
├── package.json
└── README.md
```

## 📊 Alur Metode TOPSIS

1. **Matriks Keputusan** - Menyusun data alternatif × kriteria
2. **Normalisasi** - `rij = xij / √(Σxij²)`
3. **Normalisasi Terbobot** - `yij = wi × rij`
4. **Solusi Ideal Positif (A+)** - Max untuk benefit, Min untuk cost
5. **Solusi Ideal Negatif (A-)** - Min untuk benefit, Max untuk cost
6. **Jarak ke Solusi Ideal** - `D+ = √(Σ(yij - A+j)²)` dan `D- = √(Σ(yij - A-j)²)`
7. **Nilai Preferensi** - `Vi = D- / (D- + D+)` → Ranking

### Kriteria Default:

| Kriteria | Bobot | Tipe |
|----------|-------|------|
| Harga | 0.30 | Cost |
| RAM | 0.25 | Benefit |
| SSD | 0.25 | Benefit |
| Baterai | 0.20 | Benefit |

## 🔑 Login Default

- Username: `admin`
- Password: `admin123`

## 🛠️ Teknologi

| Komponen | Teknologi |
|----------|-----------|
| Desktop | Electron 28 |
| Backend | Node.js, Express.js |
| Database | SQLite (better-sqlite3) |
| View Engine | EJS |
| CSS | Bootstrap 5 |
| Auth | express-session, bcryptjs |
| Chart | Chart.js |
| Build | electron-builder |

## 📝 Catatan

- Database SQLite otomatis dibuat saat pertama kali dijalankan
- Data tersimpan di folder `database/spk_topsis.db`
- Tidak memerlukan koneksi internet (semua assets lokal via CDN saat online)
- Minimal 2 data laptop untuk perhitungan TOPSIS
- Total bobot kriteria sebaiknya = 1.0

## 📄 Lisensi

MIT License - Bebas digunakan untuk tugas kuliah/skripsi.

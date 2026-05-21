# DOKUMENTASI LENGKAP
# SPK PEMILIHAN LAPTOP TERBAIK MENGGUNAKAN METODE TOPSIS

---

## BAB 1: PENDAHULUAN

### 1.1 Latar Belakang

Dalam memilih laptop, konsumen dihadapkan pada banyak pilihan dengan berbagai spesifikasi yang berbeda-beda. Setiap laptop memiliki kelebihan dan kekurangan masing-masing pada aspek harga, RAM, penyimpanan (SSD), dan daya tahan baterai. Untuk membantu pengambilan keputusan secara objektif dan terukur, digunakan Sistem Pendukung Keputusan (SPK) dengan metode TOPSIS.

### 1.2 Apa itu TOPSIS?

**TOPSIS** adalah singkatan dari **Technique for Order Preference by Similarity to Ideal Solution**.

Metode ini dikembangkan oleh Hwang dan Yoon pada tahun 1981. Prinsip dasarnya:

> Alternatif terbaik adalah yang memiliki **jarak terdekat ke solusi ideal positif** (kondisi terbaik) dan **jarak terjauh dari solusi ideal negatif** (kondisi terburuk).

### 1.3 Mengapa TOPSIS?

- Konsepnya sederhana dan mudah dipahami
- Proses komputasinya efisien
- Mampu mengukur kinerja relatif dari alternatif dalam bentuk matematis
- Cocok untuk masalah dengan banyak kriteria (multi-criteria)

---

## BAB 2: DATA YANG DIGUNAKAN

### 2.1 Data Alternatif (Laptop)

Terdapat 5 alternatif laptop yang akan dibandingkan:

| No | Nama Laptop | Harga (Rp) | RAM (GB) | SSD (GB) | Baterai (Jam) |
|----|-------------|------------|----------|----------|---------------|
| A1 | ASUS VivoBook 14 | 7.500.000 | 8 | 512 | 8 |
| A2 | Lenovo IdeaPad Slim 3 | 6.800.000 | 8 | 256 | 7 |
| A3 | HP Pavilion 14 | 8.500.000 | 16 | 512 | 9 |
| A4 | Acer Aspire 5 | 7.200.000 | 8 | 512 | 8 |
| A5 | Dell Inspiron 15 | 9.000.000 | 16 | 1024 | 10 |

### 2.2 Data Kriteria

Terdapat 4 kriteria penilaian:

| Kode | Nama Kriteria | Bobot | Tipe | Keterangan |
|------|---------------|-------|------|------------|
| C1 | Harga | 0.30 (30%) | Cost | Semakin KECIL semakin BAIK |
| C2 | RAM | 0.25 (25%) | Benefit | Semakin BESAR semakin BAIK |
| C3 | SSD | 0.25 (25%) | Benefit | Semakin BESAR semakin BAIK |
| C4 | Baterai | 0.20 (20%) | Benefit | Semakin BESAR semakin BAIK |

**Penjelasan Tipe:**
- **Benefit**: Nilai yang lebih tinggi lebih diinginkan (RAM besar = bagus)
- **Cost**: Nilai yang lebih rendah lebih diinginkan (Harga murah = bagus)

**Penjelasan Bobot:**
- Total bobot = 0.30 + 0.25 + 0.25 + 0.20 = 1.00 (100%)
- Harga diberi bobot tertinggi (30%) karena dianggap faktor paling penting
- RAM dan SSD masing-masing 25% karena sama pentingnya untuk performa
- Baterai 20% sebagai faktor pendukung mobilitas

---

## BAB 3: LANGKAH-LANGKAH PERHITUNGAN TOPSIS

### LANGKAH 1: Menyusun Matriks Keputusan (X)

Matriks keputusan adalah tabel yang berisi nilai mentah setiap alternatif terhadap setiap kriteria.

```
         C1(Harga)   C2(RAM)   C3(SSD)   C4(Baterai)
A1       7.500.000      8        512         8
A2       6.800.000      8        256         7
A3       8.500.000     16        512         9
A4       7.200.000      8        512         8
A5       9.000.000     16       1024        10
```

---

### LANGKAH 2: Normalisasi Matriks

**Tujuan:** Menyamakan skala semua kriteria karena satuannya berbeda (harga dalam jutaan, RAM dalam satuan, SSD dalam ratusan).

**Rumus Normalisasi:**

```
rij = xij / sqrt(x1j^2 + x2j^2 + x3j^2 + ... + xnj^2)
```

Dimana:
- rij = nilai normalisasi alternatif ke-i kriteria ke-j
- xij = nilai asli alternatif ke-i kriteria ke-j
- n = jumlah alternatif

**Perhitungan Pembagi (per kolom):**

**Kolom C1 (Harga):**
```
= sqrt(7.500.000^2 + 6.800.000^2 + 8.500.000^2 + 7.200.000^2 + 9.000.000^2)
= sqrt(56.250.000.000.000 + 46.240.000.000.000 + 72.250.000.000.000 + 51.840.000.000.000 + 81.000.000.000.000)
= sqrt(307.580.000.000.000)
= 17.537.958,83
```

**Kolom C2 (RAM):**
```
= sqrt(8^2 + 8^2 + 16^2 + 8^2 + 16^2)
= sqrt(64 + 64 + 256 + 64 + 256)
= sqrt(704)
= 26,53
```

**Kolom C3 (SSD):**
```
= sqrt(512^2 + 256^2 + 512^2 + 512^2 + 1024^2)
= sqrt(262.144 + 65.536 + 262.144 + 262.144 + 1.048.576)
= sqrt(1.900.544)
= 1.378,60
```

**Kolom C4 (Baterai):**
```
= sqrt(8^2 + 7^2 + 9^2 + 8^2 + 10^2)
= sqrt(64 + 49 + 81 + 64 + 100)
= sqrt(358)
= 18,92
```

**Hasil Normalisasi (rij = xij / pembagi):**

| | C1 (Harga) | C2 (RAM) | C3 (SSD) | C4 (Baterai) |
|---|---|---|---|---|
| A1 (ASUS) | 7.500.000/17.537.958 = **0,4276** | 8/26,53 = **0,3015** | 512/1.378,60 = **0,3714** | 8/18,92 = **0,4228** |
| A2 (Lenovo) | 6.800.000/17.537.958 = **0,3877** | 8/26,53 = **0,3015** | 256/1.378,60 = **0,1857** | 7/18,92 = **0,3700** |
| A3 (HP) | 8.500.000/17.537.958 = **0,4847** | 16/26,53 = **0,6030** | 512/1.378,60 = **0,3714** | 9/18,92 = **0,4757** |
| A4 (Acer) | 7.200.000/17.537.958 = **0,4105** | 8/26,53 = **0,3015** | 512/1.378,60 = **0,3714** | 8/18,92 = **0,4228** |
| A5 (Dell) | 9.000.000/17.537.958 = **0,5132** | 16/26,53 = **0,6030** | 1024/1.378,60 = **0,7428** | 10/18,92 = **0,5285** |

Setelah normalisasi, semua nilai berada dalam rentang 0-1.

---

### LANGKAH 3: Matriks Normalisasi Terbobot (Y)

**Tujuan:** Memberikan pengaruh bobot kepentingan pada setiap kriteria.

**Rumus:**
```
yij = wi * rij
```

Dimana:
- yij = nilai terbobot
- wi = bobot kriteria ke-j
- rij = nilai normalisasi

**Perhitungan:**

| | C1 (×0,30) | C2 (×0,25) | C3 (×0,25) | C4 (×0,20) |
|---|---|---|---|---|
| A1 (ASUS) | 0,4276×0,30 = **0,1283** | 0,3015×0,25 = **0,0754** | 0,3714×0,25 = **0,0928** | 0,4228×0,20 = **0,0846** |
| A2 (Lenovo) | 0,3877×0,30 = **0,1163** | 0,3015×0,25 = **0,0754** | 0,1857×0,25 = **0,0464** | 0,3700×0,20 = **0,0740** |
| A3 (HP) | 0,4847×0,30 = **0,1454** | 0,6030×0,25 = **0,1508** | 0,3714×0,25 = **0,0928** | 0,4757×0,20 = **0,0951** |
| A4 (Acer) | 0,4105×0,30 = **0,1232** | 0,3015×0,25 = **0,0754** | 0,3714×0,25 = **0,0928** | 0,4228×0,20 = **0,0846** |
| A5 (Dell) | 0,5132×0,30 = **0,1540** | 0,6030×0,25 = **0,1508** | 0,7428×0,25 = **0,1857** | 0,5285×0,20 = **0,1057** |

---

### LANGKAH 4: Menentukan Solusi Ideal Positif (A+) dan Negatif (A-)

**Solusi Ideal Positif (A+)** = kondisi TERBAIK yang mungkin:
- Untuk kriteria **Benefit**: ambil nilai **MAKSIMUM** dari kolom
- Untuk kriteria **Cost**: ambil nilai **MINIMUM** dari kolom

**Solusi Ideal Negatif (A-)** = kondisi TERBURUK yang mungkin:
- Untuk kriteria **Benefit**: ambil nilai **MINIMUM** dari kolom
- Untuk kriteria **Cost**: ambil nilai **MAKSIMUM** dari kolom

**Perhitungan:**

| Kriteria | Tipe | Nilai di kolom | A+ | A- |
|----------|------|----------------|----|----|
| C1 (Harga) | Cost | 0,1283; 0,1163; 0,1454; 0,1232; 0,1540 | MIN = **0,1163** | MAX = **0,1540** |
| C2 (RAM) | Benefit | 0,0754; 0,0754; 0,1508; 0,0754; 0,1508 | MAX = **0,1508** | MIN = **0,0754** |
| C3 (SSD) | Benefit | 0,0928; 0,0464; 0,0928; 0,0928; 0,1857 | MAX = **0,1857** | MIN = **0,0464** |
| C4 (Baterai) | Benefit | 0,0846; 0,0740; 0,0951; 0,0846; 0,1057 | MAX = **0,1057** | MIN = **0,0740** |

**Hasil:**
```
A+ = {0,1163;  0,1508;  0,1857;  0,1057}
A- = {0,1540;  0,0754;  0,0464;  0,0740}
```

**Interpretasi:**
- A+ menggambarkan laptop "sempurna": harga termurah, RAM terbesar, SSD terbesar, baterai terlama
- A- menggambarkan laptop "terburuk": harga termahal, RAM terkecil, SSD terkecil, baterai terpendek

---

### LANGKAH 5: Menghitung Jarak ke Solusi Ideal

**Rumus Jarak ke Solusi Ideal Positif (D+):**
```
Di+ = sqrt( (yi1 - A1+)^2 + (yi2 - A2+)^2 + ... + (yin - An+)^2 )
```

**Rumus Jarak ke Solusi Ideal Negatif (D-):**
```
Di- = sqrt( (yi1 - A1-)^2 + (yi2 - A2-)^2 + ... + (yin - An-)^2 )
```

**Perhitungan D+ (Jarak ke Solusi Ideal Positif):**

**A1 (ASUS VivoBook 14):**
```
D1+ = sqrt((0,1283-0,1163)^2 + (0,0754-0,1508)^2 + (0,0928-0,1857)^2 + (0,0846-0,1057)^2)
    = sqrt((0,0120)^2 + (-0,0754)^2 + (-0,0929)^2 + (-0,0211)^2)
    = sqrt(0,000144 + 0,005685 + 0,008630 + 0,000445)
    = sqrt(0,014905)
    = 0,1220
```

**A2 (Lenovo IdeaPad Slim 3):**
```
D2+ = sqrt((0,1163-0,1163)^2 + (0,0754-0,1508)^2 + (0,0464-0,1857)^2 + (0,0740-0,1057)^2)
    = sqrt(0^2 + (-0,0754)^2 + (-0,1393)^2 + (-0,0317)^2)
    = sqrt(0 + 0,005685 + 0,019405 + 0,001005)
    = sqrt(0,026095)
    = 0,1615
```

**A3 (HP Pavilion 14):**
```
D3+ = sqrt((0,1454-0,1163)^2 + (0,1508-0,1508)^2 + (0,0928-0,1857)^2 + (0,0951-0,1057)^2)
    = sqrt((0,0291)^2 + 0^2 + (-0,0929)^2 + (-0,0106)^2)
    = sqrt(0,000847 + 0 + 0,008630 + 0,000112)
    = sqrt(0,009588)
    = 0,0979
```

**A4 (Acer Aspire 5):**
```
D4+ = sqrt((0,1232-0,1163)^2 + (0,0754-0,1508)^2 + (0,0928-0,1857)^2 + (0,0846-0,1057)^2)
    = sqrt((0,0069)^2 + (-0,0754)^2 + (-0,0929)^2 + (-0,0211)^2)
    = sqrt(0,000048 + 0,005685 + 0,008630 + 0,000445)
    = sqrt(0,014808)
    = 0,1216
```

**A5 (Dell Inspiron 15):**
```
D5+ = sqrt((0,1540-0,1163)^2 + (0,1508-0,1508)^2 + (0,1857-0,1857)^2 + (0,1057-0,1057)^2)
    = sqrt((0,0377)^2 + 0^2 + 0^2 + 0^2)
    = sqrt(0,001421)
    = 0,0376
```

**Perhitungan D- (Jarak ke Solusi Ideal Negatif):**

**A1 (ASUS VivoBook 14):**
```
D1- = sqrt((0,1283-0,1540)^2 + (0,0754-0,0754)^2 + (0,0928-0,0464)^2 + (0,0846-0,0740)^2)
    = sqrt((-0,0257)^2 + 0^2 + (0,0464)^2 + (0,0106)^2)
    = sqrt(0,000660 + 0 + 0,002153 + 0,000112)
    = sqrt(0,002925)
    = 0,0541
```

**A2 (Lenovo IdeaPad Slim 3):**
```
D2- = sqrt((0,1163-0,1540)^2 + (0,0754-0,0754)^2 + (0,0464-0,0464)^2 + (0,0740-0,0740)^2)
    = sqrt((-0,0377)^2 + 0^2 + 0^2 + 0^2)
    = sqrt(0,001421)
    = 0,0376
```

**A3 (HP Pavilion 14):**
```
D3- = sqrt((0,1454-0,1540)^2 + (0,1508-0,0754)^2 + (0,0928-0,0464)^2 + (0,0951-0,0740)^2)
    = sqrt((-0,0086)^2 + (0,0754)^2 + (0,0464)^2 + (0,0211)^2)
    = sqrt(0,000074 + 0,005685 + 0,002153 + 0,000445)
    = sqrt(0,008357)
    = 0,0914
```

**A4 (Acer Aspire 5):**
```
D4- = sqrt((0,1232-0,1540)^2 + (0,0754-0,0754)^2 + (0,0928-0,0464)^2 + (0,0846-0,0740)^2)
    = sqrt((-0,0308)^2 + 0^2 + (0,0464)^2 + (0,0106)^2)
    = sqrt(0,000949 + 0 + 0,002153 + 0,000112)
    = sqrt(0,003214)
    = 0,0567
```

**A5 (Dell Inspiron 15):**
```
D5- = sqrt((0,1540-0,1540)^2 + (0,1508-0,0754)^2 + (0,1857-0,0464)^2 + (0,1057-0,0740)^2)
    = sqrt(0^2 + (0,0754)^2 + (0,1393)^2 + (0,0317)^2)
    = sqrt(0 + 0,005685 + 0,019405 + 0,001005)
    = sqrt(0,026095)
    = 0,1615
```

**Ringkasan Jarak:**

| Alternatif | D+ (ke terbaik) | D- (ke terburuk) |
|------------|-----------------|-------------------|
| A1 (ASUS) | 0,1220 | 0,0541 |
| A2 (Lenovo) | 0,1615 | 0,0376 |
| A3 (HP) | 0,0979 | 0,0914 |
| A4 (Acer) | 0,1216 | 0,0567 |
| A5 (Dell) | 0,0376 | 0,1615 |

---

### LANGKAH 6: Menghitung Nilai Preferensi (Vi)

**Rumus:**
```
Vi = Di- / (Di- + Di+)
```

**Interpretasi:**
- Vi mendekati 1 = alternatif sangat baik (dekat ke ideal, jauh dari terburuk)
- Vi mendekati 0 = alternatif sangat buruk (jauh dari ideal, dekat ke terburuk)

**Perhitungan:**

```
V1 (ASUS)   = 0,0541 / (0,0541 + 0,1220) = 0,0541 / 0,1761 = 0,3071
V2 (Lenovo) = 0,0376 / (0,0376 + 0,1615) = 0,0376 / 0,1991 = 0,1890
V3 (HP)     = 0,0914 / (0,0914 + 0,0979) = 0,0914 / 0,1893 = 0,4830
V4 (Acer)   = 0,0567 / (0,0567 + 0,1216) = 0,0567 / 0,1783 = 0,3179
V5 (Dell)   = 0,1615 / (0,1615 + 0,0376) = 0,1615 / 0,1991 = 0,8110
```

---

### LANGKAH 7: Ranking Akhir

Urutkan dari nilai Vi terbesar ke terkecil:

| RANKING | LAPTOP | NILAI PREFERENSI (Vi) | KETERANGAN |
|---------|--------|----------------------|------------|
| **1** | **Dell Inspiron 15** | **0,8110** | **TERBAIK** |
| 2 | HP Pavilion 14 | 0,4830 | |
| 3 | Acer Aspire 5 | 0,3179 | |
| 4 | ASUS VivoBook 14 | 0,3071 | |
| 5 | Lenovo IdeaPad Slim 3 | 0,1890 | |

---

## BAB 4: ANALISIS HASIL

### 4.1 Mengapa Dell Inspiron 15 Ranking 1?

Dell Inspiron 15 mendapat nilai preferensi tertinggi (0,8110) karena:

1. **RAM 16 GB** - Tertinggi bersama HP (kriteria benefit, bobot 25%)
2. **SSD 1024 GB** - TERTINGGI dari semua laptop, 2x lipat dari yang lain (kriteria benefit, bobot 25%)
3. **Baterai 10 Jam** - TERTINGGI dari semua laptop (kriteria benefit, bobot 20%)
4. **Harga 9.000.000** - Memang paling mahal, tapi bobot harga hanya 30%

Dell unggul di 3 kriteria benefit (total bobot 70%) dan hanya kalah di 1 kriteria cost (bobot 30%). Keunggulan di 70% kriteria mengalahkan kelemahan di 30% kriteria.

D+ Dell = 0,0376 (TERKECIL) artinya Dell paling dekat ke kondisi ideal.
D- Dell = 0,1615 (TERBESAR) artinya Dell paling jauh dari kondisi terburuk.

### 4.2 Mengapa Lenovo IdeaPad Slim 3 Ranking Terakhir?

Lenovo mendapat nilai preferensi terendah (0,1890) karena:

1. **SSD hanya 256 GB** - TERENDAH, setengah dari laptop lain (sangat merugikan di kriteria SSD)
2. **Baterai hanya 7 Jam** - TERENDAH dari semua laptop
3. **RAM 8 GB** - Standar, sama dengan ASUS dan Acer
4. **Harga 6.800.000** - Memang paling murah, tapi tidak cukup menutupi kelemahan

Meskipun Lenovo paling murah, keunggulan harga (bobot 30%) tidak mampu mengkompensasi kelemahan di SSD dan Baterai (total bobot 45%).

D+ Lenovo = 0,1615 (TERBESAR) artinya Lenovo paling jauh dari kondisi ideal.
D- Lenovo = 0,0376 (TERKECIL) artinya Lenovo paling dekat ke kondisi terburuk.

### 4.3 Mengapa HP Pavilion 14 Ranking 2?

HP mendapat ranking 2 (Vi = 0,4830) karena:
- RAM 16 GB (sama dengan Dell)
- Baterai 9 Jam (kedua tertinggi)
- SSD 512 GB (standar, bukan yang tertinggi)
- Harga 8.500.000 (mahal tapi bukan termahal)

HP memiliki keseimbangan yang baik antara spesifikasi dan harga.

### 4.4 Mengapa Acer Sedikit di Atas ASUS?

Acer (Vi = 0,3179) sedikit lebih baik dari ASUS (Vi = 0,3071) karena:
- Spesifikasi keduanya SAMA (RAM 8GB, SSD 512GB, Baterai 8 Jam)
- Tapi Acer lebih MURAH (7.200.000 vs 7.500.000)
- Karena harga adalah kriteria cost, harga lebih rendah = lebih baik

---

## BAB 5: PENGARUH BOBOT TERHADAP HASIL

### 5.1 Skenario: Jika Harga Lebih Diprioritaskan

Jika bobot diubah menjadi:
- Harga: 0,50 (50%)
- RAM: 0,20 (20%)
- SSD: 0,20 (20%)
- Baterai: 0,10 (10%)

Maka laptop murah seperti Lenovo akan naik ranking karena keunggulan harganya lebih dihargai.

### 5.2 Skenario: Jika Performa Lebih Diprioritaskan

Jika bobot diubah menjadi:
- Harga: 0,10 (10%)
- RAM: 0,30 (30%)
- SSD: 0,40 (40%)
- Baterai: 0,20 (20%)

Maka Dell akan semakin dominan karena SSD 1024GB-nya sangat unggul.

### 5.3 Kesimpulan Pengaruh Bobot

Bobot mencerminkan **prioritas pengambil keputusan**. Tidak ada bobot yang "benar" atau "salah" - semuanya tergantung pada kebutuhan dan preferensi pengguna.

---

## BAB 6: KESIMPULAN

### 6.1 Hasil Akhir

Berdasarkan perhitungan metode TOPSIS dengan bobot Harga 30%, RAM 25%, SSD 25%, dan Baterai 20%, laptop terbaik adalah **Dell Inspiron 15** dengan nilai preferensi **0,8110**.

### 6.2 Rekomendasi

| Kebutuhan | Laptop Rekomendasi | Alasan |
|-----------|-------------------|--------|
| Performa maksimal | Dell Inspiron 15 | RAM 16GB, SSD 1TB, Baterai 10 jam |
| Keseimbangan harga-performa | HP Pavilion 14 | RAM 16GB dengan harga lebih terjangkau |
| Budget terbatas | Acer Aspire 5 | Spesifikasi standar dengan harga kompetitif |

### 6.3 Validitas Metode

Metode TOPSIS memberikan hasil yang objektif dan dapat dipertanggungjawabkan secara matematis. Setiap langkah perhitungan transparan dan dapat diverifikasi ulang.

---

## LAMPIRAN: RUMUS-RUMUS TOPSIS

```
1. Normalisasi:        rij = xij / sqrt(sum(xij^2))
2. Terbobot:           yij = wi * rij
3. Solusi Ideal (+):   A+j = max(yij) jika benefit, min(yij) jika cost
4. Solusi Ideal (-):   A-j = min(yij) jika benefit, max(yij) jika cost
5. Jarak Positif:      Di+ = sqrt(sum((yij - A+j)^2))
6. Jarak Negatif:      Di- = sqrt(sum((yij - A-j)^2))
7. Preferensi:         Vi = Di- / (Di- + Di+)
8. Ranking:            Urutkan Vi dari terbesar ke terkecil
```

---

Dokumen ini dibuat sebagai dokumentasi lengkap perhitungan SPK Pemilihan Laptop Terbaik menggunakan metode TOPSIS.

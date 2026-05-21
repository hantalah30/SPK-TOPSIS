/**
 * ============================================
 * IMPLEMENTASI METODE TOPSIS
 * (Technique for Order Preference by Similarity to Ideal Solution)
 * ============================================
 * 
 * ALUR PERHITUNGAN TOPSIS:
 * 1. Membuat matriks keputusan
 * 2. Normalisasi matriks keputusan
 * 3. Membuat matriks normalisasi terbobot
 * 4. Menentukan solusi ideal positif (A+) dan negatif (A-)
 * 5. Menghitung jarak ke solusi ideal positif (D+) dan negatif (D-)
 * 6. Menghitung nilai preferensi (Vi)
 * 7. Meranking alternatif berdasarkan nilai preferensi
 */

function hitungTopsis(alternatif, kriteria, nilai) {
    // ============================================
    // LANGKAH 1: Membuat Matriks Keputusan
    // ============================================
    // Matriks keputusan berisi nilai setiap alternatif terhadap setiap kriteria
    const matriksKeputusan = [];
    
    for (const alt of alternatif) {
        const row = [];
        for (const krit of kriteria) {
            // Cari nilai alternatif terhadap kriteria
            const nilaiItem = nilai.find(
                n => n.id_laptop === alt.id_laptop && n.id_kriteria === krit.id_kriteria
            );
            row.push(nilaiItem ? parseFloat(nilaiItem.nilai) : 0);
        }
        matriksKeputusan.push(row);
    }

    // ============================================
    // LANGKAH 2: Normalisasi Matriks
    // ============================================
    // Rumus: rij = xij / sqrt(sum(xij^2))
    // Menghitung pembagi (akar dari jumlah kuadrat setiap kolom)
    const pembagi = [];
    for (let j = 0; j < kriteria.length; j++) {
        let sumKuadrat = 0;
        for (let i = 0; i < alternatif.length; i++) {
            sumKuadrat += Math.pow(matriksKeputusan[i][j], 2);
        }
        pembagi.push(Math.sqrt(sumKuadrat));
    }

    // Membuat matriks ternormalisasi
    const matriksNormalisasi = [];
    for (let i = 0; i < alternatif.length; i++) {
        const row = [];
        for (let j = 0; j < kriteria.length; j++) {
            // Hindari pembagian dengan nol
            const nilaiNormal = pembagi[j] !== 0 
                ? matriksKeputusan[i][j] / pembagi[j] 
                : 0;
            row.push(parseFloat(nilaiNormal.toFixed(6)));
        }
        matriksNormalisasi.push(row);
    }

    // ============================================
    // LANGKAH 3: Matriks Normalisasi Terbobot
    // ============================================
    // Rumus: yij = wi * rij
    // Mengalikan setiap elemen matriks normalisasi dengan bobot kriteria
    const matriksTerbobot = [];
    for (let i = 0; i < alternatif.length; i++) {
        const row = [];
        for (let j = 0; j < kriteria.length; j++) {
            const bobot = parseFloat(kriteria[j].bobot);
            const nilaiTerbobot = matriksNormalisasi[i][j] * bobot;
            row.push(parseFloat(nilaiTerbobot.toFixed(6)));
        }
        matriksTerbobot.push(row);
    }

    // ============================================
    // LANGKAH 4: Solusi Ideal Positif (A+) dan Negatif (A-)
    // ============================================
    // A+ = max(yij) jika benefit, min(yij) jika cost
    // A- = min(yij) jika benefit, max(yij) jika cost
    const solusiIdealPositif = [];
    const solusiIdealNegatif = [];

    for (let j = 0; j < kriteria.length; j++) {
        const kolom = matriksTerbobot.map(row => row[j]);
        
        if (kriteria[j].tipe === 'benefit') {
            // Benefit: A+ = max, A- = min
            solusiIdealPositif.push(parseFloat(Math.max(...kolom).toFixed(6)));
            solusiIdealNegatif.push(parseFloat(Math.min(...kolom).toFixed(6)));
        } else {
            // Cost: A+ = min, A- = max
            solusiIdealPositif.push(parseFloat(Math.min(...kolom).toFixed(6)));
            solusiIdealNegatif.push(parseFloat(Math.max(...kolom).toFixed(6)));
        }
    }

    // ============================================
    // LANGKAH 5: Jarak ke Solusi Ideal
    // ============================================
    // D+ = sqrt(sum((yij - A+j)^2))
    // D- = sqrt(sum((yij - A-j)^2))
    const jarakPositif = []; // D+
    const jarakNegatif = []; // D-

    for (let i = 0; i < alternatif.length; i++) {
        let sumDPlus = 0;
        let sumDMinus = 0;

        for (let j = 0; j < kriteria.length; j++) {
            sumDPlus += Math.pow(matriksTerbobot[i][j] - solusiIdealPositif[j], 2);
            sumDMinus += Math.pow(matriksTerbobot[i][j] - solusiIdealNegatif[j], 2);
        }

        jarakPositif.push(parseFloat(Math.sqrt(sumDPlus).toFixed(6)));
        jarakNegatif.push(parseFloat(Math.sqrt(sumDMinus).toFixed(6)));
    }

    // ============================================
    // LANGKAH 6: Nilai Preferensi (Vi)
    // ============================================
    // Vi = D- / (D- + D+)
    // Semakin besar Vi, semakin baik alternatif tersebut
    const nilaiPreferensi = [];
    for (let i = 0; i < alternatif.length; i++) {
        const total = jarakNegatif[i] + jarakPositif[i];
        const vi = total !== 0 ? jarakNegatif[i] / total : 0;
        nilaiPreferensi.push(parseFloat(vi.toFixed(6)));
    }

    // ============================================
    // LANGKAH 7: Ranking
    // ============================================
    // Urutkan berdasarkan nilai preferensi (descending)
    const ranking = alternatif.map((alt, index) => ({
        id_laptop: alt.id_laptop,
        nama_laptop: alt.nama_laptop,
        nilai_preferensi: nilaiPreferensi[index],
        jarak_positif: jarakPositif[index],
        jarak_negatif: jarakNegatif[index]
    }));

    // Sort descending berdasarkan nilai preferensi
    ranking.sort((a, b) => b.nilai_preferensi - a.nilai_preferensi);

    // Tambahkan nomor ranking
    ranking.forEach((item, index) => {
        item.ranking = index + 1;
    });

    // ============================================
    // RETURN SEMUA HASIL PERHITUNGAN
    // ============================================
    return {
        matriksKeputusan,
        pembagi,
        matriksNormalisasi,
        matriksTerbobot,
        solusiIdealPositif,
        solusiIdealNegatif,
        jarakPositif,
        jarakNegatif,
        nilaiPreferensi,
        ranking,
        alternatif,
        kriteria
    };
}

module.exports = { hitungTopsis };

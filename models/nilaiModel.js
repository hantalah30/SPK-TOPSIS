/**
 * Model Nilai - Mengelola data nilai laptop terhadap kriteria (SQLite)
 */

const { db } = require('../config/database');

const NilaiModel = {
    // Ambil semua nilai dengan join laptop dan kriteria
    getAll() {
        return db.prepare(`
            SELECT n.*, l.nama_laptop, k.nama_kriteria 
            FROM nilai n
            JOIN laptop l ON n.id_laptop = l.id_laptop
            JOIN kriteria k ON n.id_kriteria = k.id_kriteria
            ORDER BY n.id_laptop, n.id_kriteria
        `).all();
    },

    // Ambil nilai berdasarkan laptop
    getByLaptop(id_laptop) {
        return db.prepare(`
            SELECT n.*, k.nama_kriteria, k.bobot, k.tipe
            FROM nilai n
            JOIN kriteria k ON n.id_kriteria = k.id_kriteria
            WHERE n.id_laptop = ?
            ORDER BY n.id_kriteria
        `).all(id_laptop);
    },

    // Tambah atau update nilai (upsert)
    upsert(id_laptop, id_kriteria, nilai) {
        return db.prepare(`
            INSERT INTO nilai (id_laptop, id_kriteria, nilai) 
            VALUES (?, ?, ?)
            ON CONFLICT(id_laptop, id_kriteria) DO UPDATE SET 
                nilai = excluded.nilai,
                updated_at = CURRENT_TIMESTAMP
        `).run(id_laptop, id_kriteria, nilai);
    },

    // Hapus nilai berdasarkan laptop
    deleteByLaptop(id_laptop) {
        return db.prepare('DELETE FROM nilai WHERE id_laptop = ?').run(id_laptop);
    },

    // Hapus nilai berdasarkan kriteria
    deleteByKriteria(id_kriteria) {
        return db.prepare('DELETE FROM nilai WHERE id_kriteria = ?').run(id_kriteria);
    },

    // Hitung jumlah data nilai
    count() {
        const row = db.prepare('SELECT COUNT(*) as total FROM nilai').get();
        return row.total;
    },

    // Ambil matriks keputusan (untuk perhitungan TOPSIS)
    getMatriksKeputusan() {
        return db.prepare(`
            SELECT l.id_laptop, l.nama_laptop, k.id_kriteria, k.nama_kriteria, 
                   k.bobot, k.tipe, n.nilai
            FROM laptop l
            CROSS JOIN kriteria k
            LEFT JOIN nilai n ON l.id_laptop = n.id_laptop AND k.id_kriteria = n.id_kriteria
            ORDER BY l.id_laptop, k.id_kriteria
        `).all();
    }
};

module.exports = NilaiModel;

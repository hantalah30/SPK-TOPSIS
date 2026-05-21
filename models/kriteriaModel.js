/**
 * Model Kriteria - Mengelola data kriteria penilaian (SQLite)
 */

const { db } = require('../config/database');

const KriteriaModel = {
    // Ambil semua kriteria
    getAll() {
        return db.prepare('SELECT * FROM kriteria ORDER BY id_kriteria ASC').all();
    },

    // Ambil kriteria berdasarkan ID
    getById(id) {
        return db.prepare('SELECT * FROM kriteria WHERE id_kriteria = ?').get(id) || null;
    },

    // Tambah kriteria baru
    create(data) {
        const { nama_kriteria, bobot, tipe } = data;
        return db.prepare(
            'INSERT INTO kriteria (nama_kriteria, bobot, tipe) VALUES (?, ?, ?)'
        ).run(nama_kriteria, bobot, tipe);
    },

    // Update kriteria
    update(id, data) {
        const { nama_kriteria, bobot, tipe } = data;
        return db.prepare(
            'UPDATE kriteria SET nama_kriteria = ?, bobot = ?, tipe = ?, updated_at = CURRENT_TIMESTAMP WHERE id_kriteria = ?'
        ).run(nama_kriteria, bobot, tipe, id);
    },

    // Hapus kriteria
    delete(id) {
        return db.prepare('DELETE FROM kriteria WHERE id_kriteria = ?').run(id);
    },

    // Hitung jumlah kriteria
    count() {
        const row = db.prepare('SELECT COUNT(*) as total FROM kriteria').get();
        return row.total;
    }
};

module.exports = KriteriaModel;

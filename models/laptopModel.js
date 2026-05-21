/**
 * Model Laptop - SQLite
 */

const { db } = require('../config/database');

const LaptopModel = {
    getAll() {
        return db.prepare('SELECT * FROM laptop ORDER BY id_laptop ASC').all();
    },

    getById(id) {
        return db.prepare('SELECT * FROM laptop WHERE id_laptop = ?').get(id) || null;
    },

    create(data) {
        const { nama_laptop, harga, ram, ssd, baterai, processor, skor_processor, gpu, skor_gpu, upgrade_ram, upgrade_storage } = data;
        return db.prepare(`
            INSERT INTO laptop 
            (nama_laptop, harga, ram, ssd, baterai, processor, skor_processor, gpu, skor_gpu, upgrade_ram, upgrade_storage) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).run(
            nama_laptop, harga, ram, ssd, baterai,
            processor || '', skor_processor || 5,
            gpu || '', skor_gpu || 5,
            upgrade_ram ? 1 : 0, upgrade_storage ? 1 : 0
        );
    },

    update(id, data) {
        const { nama_laptop, harga, ram, ssd, baterai, processor, skor_processor, gpu, skor_gpu, upgrade_ram, upgrade_storage } = data;
        return db.prepare(`
            UPDATE laptop 
            SET nama_laptop = ?, harga = ?, ram = ?, ssd = ?, baterai = ?, 
                processor = ?, skor_processor = ?, gpu = ?, skor_gpu = ?, 
                upgrade_ram = ?, upgrade_storage = ?,
                updated_at = CURRENT_TIMESTAMP 
            WHERE id_laptop = ?
        `).run(
            nama_laptop, harga, ram, ssd, baterai,
            processor || '', skor_processor || 5,
            gpu || '', skor_gpu || 5,
            upgrade_ram ? 1 : 0, upgrade_storage ? 1 : 0,
            id
        );
    },

    delete(id) {
        return db.prepare('DELETE FROM laptop WHERE id_laptop = ?').run(id);
    },

    count() {
        const row = db.prepare('SELECT COUNT(*) as total FROM laptop').get();
        return row.total;
    }
};

module.exports = LaptopModel;

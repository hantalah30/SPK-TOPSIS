/**
 * Controller Tools
 * - Reset/Clear data
 * - History TOPSIS
 * - Sensitivity analysis
 * - Compare 2 laptop
 * - Export PDF/Excel data
 */

const { db, resetToDefault, clearAllData } = require('../config/database');
const LaptopModel = require('../models/laptopModel');
const KriteriaModel = require('../models/kriteriaModel');
const NilaiModel = require('../models/nilaiModel');
const { hitungTopsis } = require('../utils/topsis');

const ToolsController = {
    // ============================================
    // RESET / CLEAR DATA
    // ============================================
    resetPage(req, res) {
        const totalLaptop = LaptopModel.count();
        const totalKriteria = KriteriaModel.count();
        const totalNilai = NilaiModel.count();
        res.render('tools/reset', {
            title: 'Reset Data',
            user: req.session.user,
            stats: { totalLaptop, totalKriteria, totalNilai },
            success: req.flash('success'),
            error: req.flash('error')
        });
    },

    resetToDefault(req, res) {
        try {
            resetToDefault();
            req.flash('success', 'Data berhasil direset ke kondisi default!');
            res.redirect('/tools/reset');
        } catch (error) {
            console.error('Reset error:', error);
            req.flash('error', 'Gagal reset data!');
            res.redirect('/tools/reset');
        }
    },

    clearAllLaptop(req, res) {
        try {
            clearAllData();
            req.flash('success', 'Semua data laptop berhasil dihapus!');
            res.redirect('/tools/reset');
        } catch (error) {
            console.error('Clear error:', error);
            req.flash('error', 'Gagal menghapus data!');
            res.redirect('/tools/reset');
        }
    },

    // ============================================
    // COMPARE 2 LAPTOP (Head-to-Head)
    // ============================================
    comparePage(req, res) {
        const laptops = LaptopModel.getAll();
        const kriteria = KriteriaModel.getAll();
        const id1 = req.query.id1 ? parseInt(req.query.id1) : null;
        const id2 = req.query.id2 ? parseInt(req.query.id2) : null;
        
        let laptop1 = null, laptop2 = null, nilai1 = [], nilai2 = [];
        if (id1) {
            laptop1 = LaptopModel.getById(id1);
            nilai1 = NilaiModel.getByLaptop(id1);
        }
        if (id2) {
            laptop2 = LaptopModel.getById(id2);
            nilai2 = NilaiModel.getByLaptop(id2);
        }

        res.render('tools/compare', {
            title: 'Perbandingan Laptop',
            user: req.session.user,
            laptops, kriteria,
            laptop1, laptop2,
            nilai1, nilai2,
            error: req.flash('error')
        });
    },

    // ============================================
    // SENSITIVITY ANALYSIS
    // ============================================
    sensitivityPage(req, res) {
        const alternatif = LaptopModel.getAll();
        const kriteria = KriteriaModel.getAll();
        const nilai = NilaiModel.getAll();
        res.render('tools/sensitivity', {
            title: 'Sensitivity Analysis',
            user: req.session.user,
            alternatif, kriteria, nilai
        });
    },

    sensitivityCalc(req, res) {
        try {
            const { bobotBaru } = req.body;
            const alternatif = LaptopModel.getAll();
            const kriteria = KriteriaModel.getAll();
            const nilai = NilaiModel.getAll();
            
            // Override bobot dengan yang dari user
            const kriteriaModified = kriteria.map((k, idx) => ({
                ...k,
                bobot: parseFloat(bobotBaru[idx]) || k.bobot
            }));

            const hasil = hitungTopsis(alternatif, kriteriaModified, nilai);
            res.json({
                success: true,
                ranking: hasil.ranking,
                kriteria: kriteriaModified
            });
        } catch (error) {
            console.error('Sensitivity error:', error);
            res.json({ success: false, error: error.message });
        }
    },

    // ============================================
    // HISTORY TOPSIS
    // ============================================
    historyPage(req, res) {
        try {
            // Buat tabel history kalau belum ada
            db.exec(`
                CREATE TABLE IF NOT EXISTS topsis_history (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
                    total_laptop INTEGER,
                    total_kriteria INTEGER,
                    ranking_terbaik TEXT,
                    nilai_terbaik REAL,
                    detail_ranking TEXT
                );
            `);

            const histories = db.prepare('SELECT * FROM topsis_history ORDER BY timestamp DESC LIMIT 50').all();
            res.render('tools/history', {
                title: 'History Perhitungan',
                user: req.session.user,
                histories,
                success: req.flash('success'),
                error: req.flash('error')
            });
        } catch (error) {
            console.error('History error:', error);
            req.flash('error', 'Gagal memuat history!');
            res.redirect('/dashboard');
        }
    },

    // Save current calculation to history
    saveHistory(req, res) {
        try {
            const alternatif = LaptopModel.getAll();
            const kriteria = KriteriaModel.getAll();
            const nilai = NilaiModel.getAll();

            if (alternatif.length < 2) {
                return res.json({ success: false, error: 'Minimal 2 laptop untuk hitung TOPSIS' });
            }

            const hasil = hitungTopsis(alternatif, kriteria, nilai);
            
            db.exec(`
                CREATE TABLE IF NOT EXISTS topsis_history (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
                    total_laptop INTEGER,
                    total_kriteria INTEGER,
                    ranking_terbaik TEXT,
                    nilai_terbaik REAL,
                    detail_ranking TEXT
                );
            `);

            db.prepare(`INSERT INTO topsis_history 
                (total_laptop, total_kriteria, ranking_terbaik, nilai_terbaik, detail_ranking) 
                VALUES (?, ?, ?, ?, ?)`).run(
                alternatif.length,
                kriteria.length,
                hasil.ranking[0].nama_laptop,
                hasil.ranking[0].nilai_preferensi,
                JSON.stringify(hasil.ranking)
            );

            res.json({ success: true });
        } catch (error) {
            console.error('Save history error:', error);
            res.json({ success: false, error: error.message });
        }
    },

    deleteHistory(req, res) {
        try {
            db.prepare('DELETE FROM topsis_history WHERE id = ?').run(req.params.id);
            req.flash('success', 'History berhasil dihapus!');
            res.redirect('/tools/history');
        } catch (error) {
            console.error('Delete history error:', error);
            req.flash('error', 'Gagal hapus history!');
            res.redirect('/tools/history');
        }
    },

    clearHistory(req, res) {
        try {
            db.exec('DELETE FROM topsis_history');
            req.flash('success', 'Semua history dihapus!');
            res.redirect('/tools/history');
        } catch (error) {
            req.flash('error', 'Gagal hapus history!');
            res.redirect('/tools/history');
        }
    },

    // ============================================
    // IMPORT EXCEL
    // ============================================
    importPage(req, res) {
        res.render('tools/import', {
            title: 'Import Data',
            user: req.session.user,
            success: req.flash('success'),
            error: req.flash('error')
        });
    },

    importProcess(req, res) {
        try {
            const { laptops } = req.body;
            if (!laptops || !Array.isArray(laptops)) {
                return res.json({ success: false, error: 'Data tidak valid' });
            }

            const kriteria = KriteriaModel.getAll();
            let imported = 0;

            laptops.forEach(l => {
                if (!l.nama_laptop || !l.harga) return;
                
                const data = {
                    nama_laptop: l.nama_laptop,
                    harga: parseInt(l.harga) || 0,
                    ram: parseInt(l.ram) || 8,
                    ssd: parseInt(l.ssd) || 256,
                    baterai: parseInt(l.baterai) || 6,
                    processor: l.processor || '',
                    skor_processor: parseInt(l.skor_processor) || 5,
                    gpu: l.gpu || '',
                    skor_gpu: parseInt(l.skor_gpu) || 5,
                    upgrade_ram: l.upgrade_ram ? 1 : 0,
                    upgrade_storage: l.upgrade_storage ? 1 : 0
                };

                const result = LaptopModel.create(data);

                // Auto-insert nilai
                const nilaiMap = {
                    'Harga': data.harga,
                    'RAM': data.ram,
                    'SSD': data.ssd,
                    'Baterai': data.baterai,
                    'Processor': data.skor_processor,
                    'GPU': data.skor_gpu,
                    'Upgrade RAM': data.upgrade_ram,
                    'Upgrade Storage': data.upgrade_storage
                };
                kriteria.forEach(k => {
                    if (nilaiMap[k.nama_kriteria] !== undefined) {
                        NilaiModel.upsert(result.lastInsertRowid, k.id_kriteria, nilaiMap[k.nama_kriteria]);
                    }
                });
                imported++;
            });

            res.json({ success: true, imported });
        } catch (error) {
            console.error('Import error:', error);
            res.json({ success: false, error: error.message });
        }
    }
};

module.exports = ToolsController;

/**
 * KONFIGURASI DATABASE SQLite (LOKAL)
 */

const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

let dbPath;
try {
    const { app } = require('electron');
    dbPath = path.join(app.getPath('userData'), 'spk_topsis.db');
} catch (e) {
    dbPath = path.join(__dirname, '..', 'database', 'spk_topsis.db');
}

const dbDir = path.dirname(dbPath);
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
}

const db = Database(dbPath);
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');
db.pragma('synchronous = NORMAL');

function columnExists(table, column) {
    const cols = db.prepare(`PRAGMA table_info(${table})`).all();
    return cols.some(c => c.name === column);
}

function initializeDatabase() {
    db.exec(`
        CREATE TABLE IF NOT EXISTS profile (
            id INTEGER PRIMARY KEY,
            nama TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS laptop (
            id_laptop INTEGER PRIMARY KEY AUTOINCREMENT,
            nama_laptop TEXT NOT NULL,
            harga INTEGER NOT NULL,
            ram INTEGER NOT NULL,
            ssd INTEGER NOT NULL,
            baterai INTEGER NOT NULL,
            processor TEXT DEFAULT '',
            skor_processor INTEGER DEFAULT 5,
            gpu TEXT DEFAULT '',
            skor_gpu INTEGER DEFAULT 5,
            upgrade_ram INTEGER DEFAULT 0,
            upgrade_storage INTEGER DEFAULT 0,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS kriteria (
            id_kriteria INTEGER PRIMARY KEY AUTOINCREMENT,
            nama_kriteria TEXT NOT NULL,
            bobot REAL NOT NULL,
            tipe TEXT NOT NULL CHECK(tipe IN ('benefit', 'cost')),
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS nilai (
            id_nilai INTEGER PRIMARY KEY AUTOINCREMENT,
            id_laptop INTEGER NOT NULL,
            id_kriteria INTEGER NOT NULL,
            nilai REAL NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (id_laptop) REFERENCES laptop(id_laptop) ON DELETE CASCADE,
            FOREIGN KEY (id_kriteria) REFERENCES kriteria(id_kriteria) ON DELETE CASCADE,
            UNIQUE(id_laptop, id_kriteria)
        );
    `);

    // Migration: tambah kolom baru kalau belum ada
    if (!columnExists('laptop', 'processor')) db.exec(`ALTER TABLE laptop ADD COLUMN processor TEXT DEFAULT ''`);
    if (!columnExists('laptop', 'skor_processor')) db.exec(`ALTER TABLE laptop ADD COLUMN skor_processor INTEGER DEFAULT 5`);
    if (!columnExists('laptop', 'gpu')) db.exec(`ALTER TABLE laptop ADD COLUMN gpu TEXT DEFAULT ''`);
    if (!columnExists('laptop', 'skor_gpu')) db.exec(`ALTER TABLE laptop ADD COLUMN skor_gpu INTEGER DEFAULT 5`);
    if (!columnExists('laptop', 'upgrade_ram')) db.exec(`ALTER TABLE laptop ADD COLUMN upgrade_ram INTEGER DEFAULT 0`);
    if (!columnExists('laptop', 'upgrade_storage')) db.exec(`ALTER TABLE laptop ADD COLUMN upgrade_storage INTEGER DEFAULT 0`);

    // ============================================
    // SEED 8 KRITERIA DEFAULT
    // Total bobot harus = 1.00
    // ============================================
    const kriteriaCount = db.prepare('SELECT COUNT(*) as count FROM kriteria').get();
    if (kriteriaCount.count === 0) {
        const ins = db.prepare('INSERT INTO kriteria (nama_kriteria, bobot, tipe) VALUES (?, ?, ?)');
        db.transaction(() => {
            ins.run('Harga', 0.20, 'cost');           // 20%
            ins.run('RAM', 0.13, 'benefit');          // 13%
            ins.run('SSD', 0.13, 'benefit');          // 13%
            ins.run('Baterai', 0.10, 'benefit');      // 10%
            ins.run('Processor', 0.15, 'benefit');    // 15% (skor 1-10)
            ins.run('GPU', 0.13, 'benefit');          // 13% (skor 1-10)
            ins.run('Upgrade RAM', 0.08, 'benefit');  // 8%  (0/1)
            ins.run('Upgrade Storage', 0.08, 'benefit'); // 8%  (0/1)
            // Total: 0.20 + 0.13 + 0.13 + 0.10 + 0.15 + 0.13 + 0.08 + 0.08 = 1.00
        })();
    } else {
        // Migration: tambah kriteria baru kalau belum ada (untuk database lama)
        const existingKriteria = db.prepare('SELECT nama_kriteria FROM kriteria').all().map(k => k.nama_kriteria);
        const newKriteria = [
            { nama: 'Processor', bobot: 0.15, tipe: 'benefit' },
            { nama: 'GPU', bobot: 0.13, tipe: 'benefit' },
            { nama: 'Upgrade RAM', bobot: 0.08, tipe: 'benefit' },
            { nama: 'Upgrade Storage', bobot: 0.08, tipe: 'benefit' }
        ];
        const ins = db.prepare('INSERT INTO kriteria (nama_kriteria, bobot, tipe) VALUES (?, ?, ?)');
        let added = false;
        newKriteria.forEach(k => {
            if (!existingKriteria.includes(k.nama)) {
                ins.run(k.nama, k.bobot, k.tipe);
                added = true;
            }
        });
        // Kalau ada kriteria baru ditambahkan, sesuaikan bobot kriteria lama supaya total = 1.0
        if (added) {
            // Adjust bobot kriteria utama (Harga, RAM, SSD, Baterai)
            const adjusts = [
                { nama: 'Harga', bobot: 0.20 },
                { nama: 'RAM', bobot: 0.13 },
                { nama: 'SSD', bobot: 0.13 },
                { nama: 'Baterai', bobot: 0.10 }
            ];
            const upd = db.prepare('UPDATE kriteria SET bobot = ? WHERE nama_kriteria = ?');
            adjusts.forEach(a => upd.run(a.bobot, a.nama));

            // Insert nilai untuk laptop yang sudah ada terhadap kriteria baru
            const allLaptops = db.prepare('SELECT * FROM laptop').all();
            const allKriteria = db.prepare('SELECT * FROM kriteria').all();
            const insN = db.prepare(`INSERT INTO nilai (id_laptop, id_kriteria, nilai) VALUES (?, ?, ?)
                ON CONFLICT(id_laptop, id_kriteria) DO UPDATE SET nilai = excluded.nilai`);
            
            db.transaction(() => {
                allLaptops.forEach(laptop => {
                    const nilaiMap = {
                        'Harga': laptop.harga,
                        'RAM': laptop.ram,
                        'SSD': laptop.ssd,
                        'Baterai': laptop.baterai,
                        'Processor': laptop.skor_processor || 5,
                        'GPU': laptop.skor_gpu || 5,
                        'Upgrade RAM': laptop.upgrade_ram || 0,
                        'Upgrade Storage': laptop.upgrade_storage || 0
                    };
                    allKriteria.forEach(k => {
                        if (nilaiMap[k.nama_kriteria] !== undefined) {
                            insN.run(laptop.id_laptop, k.id_kriteria, nilaiMap[k.nama_kriteria]);
                        }
                    });
                });
            })();
        }
    }

    // Seed laptop contoh
    const laptopCount = db.prepare('SELECT COUNT(*) as count FROM laptop').get();
    if (laptopCount.count === 0) {
        const insL = db.prepare(`INSERT INTO laptop 
            (nama_laptop, harga, ram, ssd, baterai, processor, skor_processor, gpu, skor_gpu, upgrade_ram, upgrade_storage) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
        const insN = db.prepare('INSERT INTO nilai (id_laptop, id_kriteria, nilai) VALUES (?, ?, ?)');
        db.transaction(() => {
            const data = [
                { nama: 'ASUS VivoBook 14', harga: 7500000, ram: 8, ssd: 512, baterai: 8,
                  processor: 'Intel Core i5-1235U', skor_processor: 7, gpu: 'Intel Iris Xe', skor_gpu: 4, upgrade_ram: 1, upgrade_storage: 1 },
                { nama: 'Lenovo IdeaPad Slim 3', harga: 6800000, ram: 8, ssd: 256, baterai: 7,
                  processor: 'AMD Ryzen 5 5500U', skor_processor: 6, gpu: 'AMD Radeon Graphics', skor_gpu: 4, upgrade_ram: 0, upgrade_storage: 1 },
                { nama: 'HP Pavilion 14', harga: 8500000, ram: 16, ssd: 512, baterai: 9,
                  processor: 'Intel Core i7-1255U', skor_processor: 8, gpu: 'Intel Iris Xe', skor_gpu: 4, upgrade_ram: 1, upgrade_storage: 1 },
                { nama: 'Acer Aspire 5', harga: 7200000, ram: 8, ssd: 512, baterai: 8,
                  processor: 'Intel Core i5-1240P', skor_processor: 7, gpu: 'NVIDIA GeForce MX550', skor_gpu: 6, upgrade_ram: 1, upgrade_storage: 1 },
                { nama: 'Dell Inspiron 15', harga: 9000000, ram: 16, ssd: 1024, baterai: 10,
                  processor: 'Intel Core i7-1355U', skor_processor: 9, gpu: 'NVIDIA GeForce MX570', skor_gpu: 7, upgrade_ram: 1, upgrade_storage: 1 }
            ];
            data.forEach((l, i) => {
                insL.run(l.nama, l.harga, l.ram, l.ssd, l.baterai, l.processor, l.skor_processor, l.gpu, l.skor_gpu, l.upgrade_ram, l.upgrade_storage);
                const id = i + 1;
                insN.run(id, 1, l.harga);            // Harga
                insN.run(id, 2, l.ram);              // RAM
                insN.run(id, 3, l.ssd);              // SSD
                insN.run(id, 4, l.baterai);          // Baterai
                insN.run(id, 5, l.skor_processor);   // Processor
                insN.run(id, 6, l.skor_gpu);         // GPU
                insN.run(id, 7, l.upgrade_ram);      // Upgrade RAM
                insN.run(id, 8, l.upgrade_storage);  // Upgrade Storage
            });
        })();
    }
}

initializeDatabase();

function testConnection() { return true; }

// ============================================
// RESET DATA KE DEFAULT
// ============================================
function resetToDefault() {
    db.transaction(() => {
        // Hapus semua data (kecuali profile)
        db.exec('DELETE FROM nilai');
        db.exec('DELETE FROM laptop');
        db.exec('DELETE FROM kriteria');
        // Reset auto increment
        db.exec("DELETE FROM sqlite_sequence WHERE name IN ('laptop','kriteria','nilai')");
        
        // Re-seed kriteria
        const insK = db.prepare('INSERT INTO kriteria (nama_kriteria, bobot, tipe) VALUES (?, ?, ?)');
        insK.run('Harga', 0.20, 'cost');
        insK.run('RAM', 0.13, 'benefit');
        insK.run('SSD', 0.13, 'benefit');
        insK.run('Baterai', 0.10, 'benefit');
        insK.run('Processor', 0.15, 'benefit');
        insK.run('GPU', 0.13, 'benefit');
        insK.run('Upgrade RAM', 0.08, 'benefit');
        insK.run('Upgrade Storage', 0.08, 'benefit');
        
        // Re-seed laptop sample
        const insL = db.prepare(`INSERT INTO laptop 
            (nama_laptop, harga, ram, ssd, baterai, processor, skor_processor, gpu, skor_gpu, upgrade_ram, upgrade_storage) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
        const insN = db.prepare('INSERT INTO nilai (id_laptop, id_kriteria, nilai) VALUES (?, ?, ?)');
        const data = [
            { nama: 'ASUS VivoBook 14', harga: 7500000, ram: 8, ssd: 512, baterai: 8, processor: 'Intel Core i5-1235U', skor_processor: 7, gpu: 'Intel Iris Xe', skor_gpu: 4, upgrade_ram: 1, upgrade_storage: 1 },
            { nama: 'Lenovo IdeaPad Slim 3', harga: 6800000, ram: 8, ssd: 256, baterai: 7, processor: 'AMD Ryzen 5 5500U', skor_processor: 6, gpu: 'AMD Radeon Graphics', skor_gpu: 4, upgrade_ram: 0, upgrade_storage: 1 },
            { nama: 'HP Pavilion 14', harga: 8500000, ram: 16, ssd: 512, baterai: 9, processor: 'Intel Core i7-1255U', skor_processor: 8, gpu: 'Intel Iris Xe', skor_gpu: 4, upgrade_ram: 1, upgrade_storage: 1 },
            { nama: 'Acer Aspire 5', harga: 7200000, ram: 8, ssd: 512, baterai: 8, processor: 'Intel Core i5-1240P', skor_processor: 7, gpu: 'NVIDIA GeForce MX550', skor_gpu: 6, upgrade_ram: 1, upgrade_storage: 1 },
            { nama: 'Dell Inspiron 15', harga: 9000000, ram: 16, ssd: 1024, baterai: 10, processor: 'Intel Core i7-1355U', skor_processor: 9, gpu: 'NVIDIA GeForce MX570', skor_gpu: 7, upgrade_ram: 1, upgrade_storage: 1 }
        ];
        data.forEach((l, i) => {
            insL.run(l.nama, l.harga, l.ram, l.ssd, l.baterai, l.processor, l.skor_processor, l.gpu, l.skor_gpu, l.upgrade_ram, l.upgrade_storage);
            const id = i + 1;
            insN.run(id, 1, l.harga);
            insN.run(id, 2, l.ram);
            insN.run(id, 3, l.ssd);
            insN.run(id, 4, l.baterai);
            insN.run(id, 5, l.skor_processor);
            insN.run(id, 6, l.skor_gpu);
            insN.run(id, 7, l.upgrade_ram);
            insN.run(id, 8, l.upgrade_storage);
        });
    })();
    return true;
}

// ============================================
// CLEAR ALL DATA (kosongkan semua)
// ============================================
function clearAllData() {
    db.transaction(() => {
        db.exec('DELETE FROM nilai');
        db.exec('DELETE FROM laptop');
        db.exec("DELETE FROM sqlite_sequence WHERE name IN ('laptop','nilai')");
    })();
    return true;
}

module.exports = { db, testConnection, dbPath, resetToDefault, clearAllData };

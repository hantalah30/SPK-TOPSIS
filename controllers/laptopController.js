/**
 * Controller Laptop
 */

const LaptopModel = require('../models/laptopModel');
const NilaiModel = require('../models/nilaiModel');
const KriteriaModel = require('../models/kriteriaModel');

// Helper: build map kriteria → nilai berdasarkan data laptop
function buildNilaiMap(laptopData) {
    return {
        'Harga': laptopData.harga,
        'RAM': laptopData.ram,
        'SSD': laptopData.ssd,
        'Baterai': laptopData.baterai,
        'Processor': laptopData.skor_processor || 5,
        'GPU': laptopData.skor_gpu || 5,
        'Upgrade RAM': laptopData.upgrade_ram ? 1 : 0,
        'Upgrade Storage': laptopData.upgrade_storage ? 1 : 0
    };
}

const LaptopController = {
    index(req, res) {
        try {
            const laptops = LaptopModel.getAll();
            res.render('laptop/index', {
                title: 'Data Laptop',
                user: req.session.user,
                laptops,
                success: req.flash('success'),
                error: req.flash('error')
            });
        } catch (error) {
            console.error('Laptop index error:', error);
            req.flash('error', 'Gagal memuat data laptop!');
            res.redirect('/dashboard');
        }
    },

    createPage(req, res) {
        res.render('laptop/create', {
            title: 'Tambah Laptop',
            user: req.session.user,
            error: req.flash('error')
        });
    },

    createProcess(req, res) {
        try {
            const { nama_laptop, harga, ram, ssd, baterai, processor, skor_processor, gpu, skor_gpu, upgrade_ram, upgrade_storage } = req.body;

            if (!nama_laptop || !harga || !ram || !ssd || !baterai) {
                req.flash('error', 'Field utama harus diisi!');
                return res.redirect('/laptop/create');
            }

            const data = {
                nama_laptop,
                harga: parseInt(harga),
                ram: parseInt(ram),
                ssd: parseInt(ssd),
                baterai: parseInt(baterai),
                processor: processor || '',
                skor_processor: parseInt(skor_processor) || 5,
                gpu: gpu || '',
                skor_gpu: parseInt(skor_gpu) || 5,
                upgrade_ram: upgrade_ram === 'on' || upgrade_ram === '1' || upgrade_ram === true,
                upgrade_storage: upgrade_storage === 'on' || upgrade_storage === '1' || upgrade_storage === true
            };

            const result = LaptopModel.create(data);

            // Auto-insert nilai untuk semua kriteria
            const kriteria = KriteriaModel.getAll();
            const nilaiMap = buildNilaiMap(data);
            for (const krit of kriteria) {
                const nilaiValue = nilaiMap[krit.nama_kriteria];
                if (nilaiValue !== undefined) {
                    NilaiModel.upsert(result.lastInsertRowid, krit.id_kriteria, nilaiValue);
                }
            }

            req.flash('success', 'Laptop berhasil ditambahkan!');
            res.redirect('/laptop');
        } catch (error) {
            console.error('Laptop create error:', error);
            req.flash('error', 'Gagal menambahkan laptop!');
            res.redirect('/laptop/create');
        }
    },

    editPage(req, res) {
        try {
            const laptop = LaptopModel.getById(req.params.id);
            if (!laptop) {
                req.flash('error', 'Laptop tidak ditemukan!');
                return res.redirect('/laptop');
            }
            res.render('laptop/edit', {
                title: 'Edit Laptop',
                user: req.session.user,
                laptop,
                error: req.flash('error')
            });
        } catch (error) {
            console.error('Laptop edit page error:', error);
            req.flash('error', 'Gagal memuat data laptop!');
            res.redirect('/laptop');
        }
    },

    editProcess(req, res) {
        try {
            const { nama_laptop, harga, ram, ssd, baterai, processor, skor_processor, gpu, skor_gpu, upgrade_ram, upgrade_storage } = req.body;
            const id = req.params.id;

            if (!nama_laptop || !harga || !ram || !ssd || !baterai) {
                req.flash('error', 'Field utama harus diisi!');
                return res.redirect(`/laptop/edit/${id}`);
            }

            const data = {
                nama_laptop,
                harga: parseInt(harga),
                ram: parseInt(ram),
                ssd: parseInt(ssd),
                baterai: parseInt(baterai),
                processor: processor || '',
                skor_processor: parseInt(skor_processor) || 5,
                gpu: gpu || '',
                skor_gpu: parseInt(skor_gpu) || 5,
                upgrade_ram: upgrade_ram === 'on' || upgrade_ram === '1' || upgrade_ram === true,
                upgrade_storage: upgrade_storage === 'on' || upgrade_storage === '1' || upgrade_storage === true
            };

            LaptopModel.update(id, data);

            const kriteria = KriteriaModel.getAll();
            const nilaiMap = buildNilaiMap(data);
            for (const krit of kriteria) {
                const nilaiValue = nilaiMap[krit.nama_kriteria];
                if (nilaiValue !== undefined) {
                    NilaiModel.upsert(id, krit.id_kriteria, nilaiValue);
                }
            }

            req.flash('success', 'Laptop berhasil diperbarui!');
            res.redirect('/laptop');
        } catch (error) {
            console.error('Laptop edit error:', error);
            req.flash('error', 'Gagal memperbarui laptop!');
            res.redirect('/laptop');
        }
    },

    delete(req, res) {
        try {
            LaptopModel.delete(req.params.id);
            req.flash('success', 'Laptop berhasil dihapus!');
            res.redirect('/laptop');
        } catch (error) {
            console.error('Laptop delete error:', error);
            req.flash('error', 'Gagal menghapus laptop!');
            res.redirect('/laptop');
        }
    }
};

module.exports = LaptopController;

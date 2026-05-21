/**
 * Controller Nilai
 * Mengelola input nilai laptop terhadap kriteria
 */

const NilaiModel = require('../models/nilaiModel');
const LaptopModel = require('../models/laptopModel');
const KriteriaModel = require('../models/kriteriaModel');

const NilaiController = {
    // Halaman data nilai
    index(req, res) {
        try {
            const laptops = LaptopModel.getAll();
            const kriteria = KriteriaModel.getAll();
            const nilai = NilaiModel.getAll();

            res.render('nilai/index', {
                title: 'Data Nilai',
                user: req.session.user,
                laptops,
                kriteria,
                nilai,
                success: req.flash('success'),
                error: req.flash('error')
            });
        } catch (error) {
            console.error('Nilai index error:', error);
            req.flash('error', 'Gagal memuat data nilai!');
            res.redirect('/dashboard');
        }
    },

    // Halaman input nilai per laptop
    inputPage(req, res) {
        try {
            const laptop = LaptopModel.getById(req.params.id);
            if (!laptop) {
                req.flash('error', 'Laptop tidak ditemukan!');
                return res.redirect('/nilai');
            }

            const kriteria = KriteriaModel.getAll();
            const nilaiExisting = NilaiModel.getByLaptop(req.params.id);

            res.render('nilai/input', {
                title: `Input Nilai - ${laptop.nama_laptop}`,
                user: req.session.user,
                laptop,
                kriteria,
                nilaiExisting,
                error: req.flash('error')
            });
        } catch (error) {
            console.error('Nilai input page error:', error);
            req.flash('error', 'Gagal memuat halaman input!');
            res.redirect('/nilai');
        }
    },

    // Proses simpan nilai
    saveProcess(req, res) {
        try {
            const id_laptop = req.params.id;
            const { nilai } = req.body;

            if (!nilai || typeof nilai !== 'object') {
                req.flash('error', 'Data nilai tidak valid!');
                return res.redirect(`/nilai/input/${id_laptop}`);
            }

            for (const [id_kriteria, nilaiValue] of Object.entries(nilai)) {
                if (nilaiValue && !isNaN(nilaiValue)) {
                    NilaiModel.upsert(parseInt(id_laptop), parseInt(id_kriteria), parseFloat(nilaiValue));
                }
            }

            req.flash('success', 'Nilai berhasil disimpan!');
            res.redirect('/nilai');
        } catch (error) {
            console.error('Nilai save error:', error);
            req.flash('error', 'Gagal menyimpan nilai!');
            res.redirect('/nilai');
        }
    }
};

module.exports = NilaiController;

/**
 * Controller TOPSIS
 * Menampilkan perhitungan dan hasil metode TOPSIS
 */

const LaptopModel = require('../models/laptopModel');
const KriteriaModel = require('../models/kriteriaModel');
const NilaiModel = require('../models/nilaiModel');
const { hitungTopsis } = require('../utils/topsis');

const TopsisController = {
    // Halaman hasil perhitungan TOPSIS
    index(req, res) {
        try {
            const alternatif = LaptopModel.getAll();
            const kriteria = KriteriaModel.getAll();
            const nilai = NilaiModel.getAll();

            // Validasi: minimal 2 alternatif dan 1 kriteria
            if (alternatif.length < 2) {
                req.flash('error', 'Minimal 2 data laptop diperlukan untuk perhitungan TOPSIS!');
                return res.render('topsis/index', {
                    title: 'Perhitungan TOPSIS',
                    user: req.session.user,
                    hasil: null,
                    success: req.flash('success'),
                    error: req.flash('error')
                });
            }

            if (kriteria.length < 1) {
                req.flash('error', 'Minimal 1 kriteria diperlukan!');
                return res.render('topsis/index', {
                    title: 'Perhitungan TOPSIS',
                    user: req.session.user,
                    hasil: null,
                    success: req.flash('success'),
                    error: req.flash('error')
                });
            }

            // Cek apakah semua laptop sudah memiliki nilai
            const totalNilaiDibutuhkan = alternatif.length * kriteria.length;
            if (nilai.length < totalNilaiDibutuhkan) {
                req.flash('error', 'Pastikan semua laptop sudah memiliki nilai untuk setiap kriteria!');
            }

            // Hitung TOPSIS
            const hasil = hitungTopsis(alternatif, kriteria, nilai);

            res.render('topsis/index', {
                title: 'Perhitungan TOPSIS',
                user: req.session.user,
                hasil,
                success: req.flash('success'),
                error: req.flash('error')
            });
        } catch (error) {
            console.error('TOPSIS error:', error);
            req.flash('error', 'Gagal melakukan perhitungan TOPSIS!');
            res.render('topsis/index', {
                title: 'Perhitungan TOPSIS',
                user: req.session.user,
                hasil: null,
                success: req.flash('success'),
                error: req.flash('error')
            });
        }
    }
};

module.exports = TopsisController;

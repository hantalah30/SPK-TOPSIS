/**
 * Controller Kriteria
 * CRUD data kriteria penilaian
 */

const KriteriaModel = require('../models/kriteriaModel');

const KriteriaController = {
    // Halaman daftar kriteria
    index(req, res) {
        try {
            const kriteria = KriteriaModel.getAll();
            res.render('kriteria/index', {
                title: 'Data Kriteria',
                user: req.session.user,
                kriteria,
                success: req.flash('success'),
                error: req.flash('error')
            });
        } catch (error) {
            console.error('Kriteria index error:', error);
            req.flash('error', 'Gagal memuat data kriteria!');
            res.redirect('/dashboard');
        }
    },

    // Halaman tambah kriteria
    createPage(req, res) {
        const allKriteria = KriteriaModel.getAll();
        const currentTotal = allKriteria.reduce((sum, k) => sum + parseFloat(k.bobot), 0);
        res.render('kriteria/create', {
            title: 'Tambah Kriteria',
            user: req.session.user,
            currentTotal,
            error: req.flash('error')
        });
    },

    // Proses tambah kriteria
    createProcess(req, res) {
        try {
            const { nama_kriteria, bobot, tipe } = req.body;

            if (!nama_kriteria || !bobot || !tipe) {
                req.flash('error', 'Semua field harus diisi!');
                return res.redirect('/kriteria/create');
            }

            if (parseFloat(bobot) < 0 || parseFloat(bobot) > 1) {
                req.flash('error', 'Bobot harus antara 0 dan 1!');
                return res.redirect('/kriteria/create');
            }

            KriteriaModel.create({ nama_kriteria, bobot: parseFloat(bobot), tipe });
            req.flash('success', 'Kriteria berhasil ditambahkan!');
            res.redirect('/kriteria');
        } catch (error) {
            console.error('Kriteria create error:', error);
            req.flash('error', 'Gagal menambahkan kriteria!');
            res.redirect('/kriteria/create');
        }
    },

    // Halaman edit kriteria
    editPage(req, res) {
        try {
            const kriteria = KriteriaModel.getById(req.params.id);
            if (!kriteria) {
                req.flash('error', 'Kriteria tidak ditemukan!');
                return res.redirect('/kriteria');
            }
            
            // Ambil semua kriteria untuk hitung total real-time
            const allKriteria = KriteriaModel.getAll();
            const otherTotal = allKriteria
                .filter(k => k.id_kriteria !== parseInt(req.params.id))
                .reduce((sum, k) => sum + parseFloat(k.bobot), 0);

            res.render('kriteria/edit', {
                title: 'Edit Kriteria',
                user: req.session.user,
                kriteria,
                otherTotal,
                error: req.flash('error')
            });
        } catch (error) {
            console.error('Kriteria edit page error:', error);
            req.flash('error', 'Gagal memuat data kriteria!');
            res.redirect('/kriteria');
        }
    },

    // Proses edit kriteria
    editProcess(req, res) {
        try {
            const { nama_kriteria, bobot, tipe } = req.body;
            const id = req.params.id;

            if (!nama_kriteria || !bobot || !tipe) {
                req.flash('error', 'Semua field harus diisi!');
                return res.redirect(`/kriteria/edit/${id}`);
            }

            if (parseFloat(bobot) < 0 || parseFloat(bobot) > 1) {
                req.flash('error', 'Bobot harus antara 0 dan 1!');
                return res.redirect(`/kriteria/edit/${id}`);
            }

            KriteriaModel.update(id, { nama_kriteria, bobot: parseFloat(bobot), tipe });
            req.flash('success', 'Kriteria berhasil diperbarui!');
            res.redirect('/kriteria');
        } catch (error) {
            console.error('Kriteria edit error:', error);
            req.flash('error', 'Gagal memperbarui kriteria!');
            res.redirect('/kriteria');
        }
    },

    // Proses hapus kriteria
    delete(req, res) {
        try {
            KriteriaModel.delete(req.params.id);
            req.flash('success', 'Kriteria berhasil dihapus!');
            res.redirect('/kriteria');
        } catch (error) {
            console.error('Kriteria delete error:', error);
            req.flash('error', 'Gagal menghapus kriteria!');
            res.redirect('/kriteria');
        }
    },

    // Auto-normalize bobot supaya total = 1.0
    autoNormalize(req, res) {
        try {
            const kriteria = KriteriaModel.getAll();
            const totalBobot = kriteria.reduce((sum, k) => sum + parseFloat(k.bobot), 0);
            
            if (totalBobot === 0) {
                req.flash('error', 'Tidak ada kriteria untuk di-normalize!');
                return res.redirect('/kriteria');
            }

            // Bagi setiap bobot dengan total supaya jumlahnya = 1.0
            kriteria.forEach(k => {
                const bobotBaru = parseFloat(k.bobot) / totalBobot;
                KriteriaModel.update(k.id_kriteria, {
                    nama_kriteria: k.nama_kriteria,
                    bobot: parseFloat(bobotBaru.toFixed(4)),
                    tipe: k.tipe
                });
            });

            req.flash('success', 'Bobot berhasil di-normalize. Total = 1.0');
            res.redirect('/kriteria');
        } catch (error) {
            console.error('Auto-normalize error:', error);
            req.flash('error', 'Gagal melakukan auto-normalize!');
            res.redirect('/kriteria');
        }
    }
};

module.exports = KriteriaController;

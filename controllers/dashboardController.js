/**
 * Controller Dashboard
 */

const LaptopModel = require('../models/laptopModel');
const KriteriaModel = require('../models/kriteriaModel');
const NilaiModel = require('../models/nilaiModel');

const DashboardController = {
    index(req, res) {
        try {
            const totalLaptop = LaptopModel.count();
            const totalKriteria = KriteriaModel.count();
            const totalNilai = NilaiModel.count();
            const laptops = LaptopModel.getAll();

            res.render('dashboard/index', {
                title: 'Dashboard',
                user: req.session.user,
                stats: { totalLaptop, totalKriteria, totalNilai },
                laptops,
                success: req.flash('success'),
                error: req.flash('error')
            });
        } catch (error) {
            console.error('Dashboard error:', error);
            res.redirect('/');
        }
    }
};

module.exports = DashboardController;

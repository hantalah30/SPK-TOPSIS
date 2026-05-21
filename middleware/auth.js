/**
 * Middleware - Cek apakah user sudah input nama
 * Tidak ada login/password, cukup nama saja
 */

const { db } = require('../config/database');

// Cek apakah sudah ada nama tersimpan
function isAuthenticated(req, res, next) {
    // Cek session dulu
    if (req.session && req.session.user) {
        return next();
    }

    // Cek database - apakah sudah pernah input nama
    const profile = db.prepare('SELECT * FROM profile WHERE id = 1').get();
    if (profile && profile.nama) {
        // Simpan ke session
        req.session.user = {
            nama: profile.nama
        };
        return next();
    }

    // Belum ada nama, redirect ke halaman input nama
    return res.redirect('/welcome');
}

module.exports = { isAuthenticated };

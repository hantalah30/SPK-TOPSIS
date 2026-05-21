/**
 * SPK PEMILIHAN LAPTOP TERBAIK - METODE TOPSIS
 * Aplikasi Desktop Standalone
 */

const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const path = require('path');

const { db, testConnection } = require('./config/database');
const { isAuthenticated } = require('./middleware/auth');

// Import routes
const dashboardRoutes = require('./routes/dashboardRoutes');
const laptopRoutes = require('./routes/laptopRoutes');
const kriteriaRoutes = require('./routes/kriteriaRoutes');
const nilaiRoutes = require('./routes/nilaiRoutes');
const topsisRoutes = require('./routes/topsisRoutes');

const app = express();
const PORT = process.env.PORT || 3456;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
    secret: process.env.SESSION_SECRET || 'spk-topsis-local-secret',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 365 * 24 * 60 * 60 * 1000 } // 1 tahun
}));

app.use(flash());

// Global: pass user ke semua views
app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
});

// ============================================
// WELCOME - Input Nama (pengganti login)
// ============================================

// Halaman welcome (input nama)
app.get('/welcome', (req, res) => {
    // Kalau sudah ada nama, langsung ke dashboard
    const profile = db.prepare('SELECT * FROM profile WHERE id = 1').get();
    if (profile && profile.nama) {
        req.session.user = { nama: profile.nama };
        return res.redirect('/dashboard');
    }
    res.render('welcome', { title: 'Selamat Datang' });
});

// Proses simpan nama
app.post('/welcome', (req, res) => {
    const { nama } = req.body;
    if (!nama || nama.trim() === '') {
        return res.redirect('/welcome');
    }

    const trimmedNama = nama.trim();

    // Simpan ke database (permanen)
    const existing = db.prepare('SELECT * FROM profile WHERE id = 1').get();
    if (existing) {
        db.prepare('UPDATE profile SET nama = ? WHERE id = 1').run(trimmedNama);
    } else {
        db.prepare('INSERT INTO profile (id, nama) VALUES (1, ?)').run(trimmedNama);
    }

    // Simpan ke session
    req.session.user = { nama: trimmedNama };
    res.redirect('/dashboard');
});

// ============================================
// ROUTES (semua dilindungi isAuthenticated)
// ============================================

app.get('/', (req, res) => {
    const profile = db.prepare('SELECT * FROM profile WHERE id = 1').get();
    if (profile && profile.nama) {
        req.session.user = { nama: profile.nama };
        return res.redirect('/dashboard');
    }
    res.redirect('/welcome');
});

app.use('/dashboard', isAuthenticated, dashboardRoutes);
app.use('/laptop', isAuthenticated, laptopRoutes);
app.use('/kriteria', isAuthenticated, kriteriaRoutes);
app.use('/nilai', isAuthenticated, nilaiRoutes);
app.use('/topsis', isAuthenticated, topsisRoutes);
app.use('/tools', isAuthenticated, require('./routes/toolsRoutes'));

// 404
app.use((req, res) => {
    res.status(404).render('errors/404', {
        title: '404',
        user: req.session ? req.session.user : null
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error('Server Error:', err);
    res.status(500).send('<div style="font-family:sans-serif;padding:40px;text-align:center;"><h2>Error</h2><a href="/">Kembali</a></div>');
});

// Start
testConnection();
const server = app.listen(PORT, '127.0.0.1', () => {
    console.log(`[SPK TOPSIS] http://localhost:${PORT}`);
});

module.exports = server;

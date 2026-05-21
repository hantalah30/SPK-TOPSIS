/**
 * ============================================
 * ELECTRON MAIN PROCESS
 * SPK TOPSIS - Pemilihan Laptop Terbaik
 * ============================================
 * 
 * Aplikasi DESKTOP standalone.
 * - Database lokal (SQLite)
 * - Tidak butuh internet
 * - Tidak bisa di-inspect/F12/Ctrl+U
 * - Tanpa menu bar
 */

const { app, BrowserWindow, shell, dialog, globalShortcut, session } = require('electron');
const path = require('path');
const net = require('net');

// Variabel global
let mainWindow;
let splashWindow;
let server;
let PORT = 3456;

// ============================================
// CARI PORT YANG TERSEDIA
// ============================================
function findAvailablePort(startPort) {
    return new Promise((resolve) => {
        const testServer = net.createServer();
        testServer.listen(startPort, () => {
            testServer.close(() => resolve(startPort));
        });
        testServer.on('error', () => {
            resolve(findAvailablePort(startPort + 1));
        });
    });
}

// ============================================
// SPLASH SCREEN
// ============================================
function createSplashWindow() {
    splashWindow = new BrowserWindow({
        width: 360,
        height: 300,
        frame: false,
        transparent: true,
        alwaysOnTop: true,
        resizable: false,
        skipTaskbar: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    const splashHTML = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:100%;height:100%;overflow:hidden}
body{font-family:'Segoe UI',sans-serif;display:flex;align-items:center;justify-content:center;
background:#4f6ef7;border-radius:20px;color:white;text-align:center;-webkit-app-region:drag}
.container{padding:40px}
.icon{font-size:44px;margin-bottom:20px}
h2{font-size:17px;margin-bottom:4px;font-weight:700}
p{font-size:12px;opacity:0.7;margin-bottom:28px}
.loader{width:36px;height:36px;border:3px solid rgba(255,255,255,0.25);border-top:3px solid white;
border-radius:50%;animation:spin 0.7s linear infinite;margin:0 auto}
@keyframes spin{to{transform:rotate(360deg)}}
.status{margin-top:16px;font-size:10px;opacity:0.5}
</style></head><body>
<div class="container">
<div class="icon">💻</div>
<h2>SPK TOPSIS</h2>
<p>Pemilihan Laptop Terbaik</p>
<div class="loader"></div>
<div class="status">Mempersiapkan aplikasi...</div>
</div></body></html>`;

    splashWindow.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(splashHTML)}`);
}

// ============================================
// START EXPRESS SERVER
// ============================================
function startExpressServer() {
    return new Promise((resolve, reject) => {
        try {
            process.env.PORT = PORT;
            process.env.NODE_ENV = 'production';
            process.env.SESSION_SECRET = 'spk-topsis-local-' + Date.now();
            server = require('./app');
            setTimeout(() => resolve(), 800);
        } catch (error) {
            reject(error);
        }
    });
}

// ============================================
// CREATE MAIN WINDOW (TANPA MENU, TANPA DEVTOOLS)
// ============================================
function createWindow() {
    const iconPath = process.platform === 'darwin'
        ? path.join(__dirname, 'public', 'icon.png')
        : path.join(__dirname, 'public', 'icon.ico');

    mainWindow = new BrowserWindow({
        width: 1400,
        height: 900,
        minWidth: 1024,
        minHeight: 700,
        title: 'SPK TOPSIS - Pemilihan Laptop Terbaik',
        icon: iconPath,
        show: false,
        frame: true,
        // HAPUS MENU BAR
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            // DISABLE DEVTOOLS
            devTools: false
        }
    });

    // HAPUS MENU SEPENUHNYA
    mainWindow.setMenu(null);
    mainWindow.setMenuBarVisibility(false);

    // ============================================
    // HANDLE DOWNLOAD - Auto save ke Downloads folder
    // ============================================
    mainWindow.webContents.session.on('will-download', (event, item, webContents) => {
        // Auto save ke Downloads tanpa dialog
        const downloadsPath = app.getPath('downloads');
        const fileName = item.getFilename();
        const savePath = path.join(downloadsPath, fileName);
        
        item.setSavePath(savePath);
        
        item.on('done', (e, state) => {
            if (state === 'completed') {
                // Tampilkan notifikasi via dialog (non-blocking)
                console.log('Download completed:', savePath);
            } else {
                console.log('Download failed:', state);
            }
        });
    });

    // Load aplikasi
    mainWindow.loadURL(`http://localhost:${PORT}`);

    // Tampilkan setelah load
    mainWindow.webContents.on('did-finish-load', () => {
        if (splashWindow) {
            splashWindow.close();
            splashWindow = null;
        }
        mainWindow.show();
        mainWindow.focus();
    });

    // Retry jika gagal load
    mainWindow.webContents.on('did-fail-load', () => {
        setTimeout(() => {
            mainWindow.loadURL(`http://localhost:${PORT}`);
        }, 1000);
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    // Block link external
    mainWindow.webContents.setWindowOpenHandler(({ url }) => {
        if (url.startsWith('http') && !url.includes('localhost')) {
            shell.openExternal(url);
            return { action: 'deny' };
        }
        return { action: 'allow' };
    });

    // ============================================
    // BLOCK SEMUA SHORTCUT INSPECT/DEVTOOLS
    // ============================================
    mainWindow.webContents.on('before-input-event', (event, input) => {
        // Block F12
        if (input.key === 'F12') {
            event.preventDefault();
        }
        // Block Ctrl+Shift+I (Inspect)
        if (input.control && input.shift && input.key === 'I') {
            event.preventDefault();
        }
        // Block Ctrl+Shift+J (Console)
        if (input.control && input.shift && input.key === 'J') {
            event.preventDefault();
        }
        // Block Ctrl+Shift+C (Element picker)
        if (input.control && input.shift && input.key === 'C') {
            event.preventDefault();
        }
        // Block Ctrl+U (View Source)
        if (input.control && input.key === 'u') {
            event.preventDefault();
        }
        if (input.control && input.key === 'U') {
            event.preventDefault();
        }
    });
}

// ============================================
// APP LIFECYCLE
// ============================================

// Single instance lock
const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
    app.quit();
} else {
    app.on('second-instance', () => {
        if (mainWindow) {
            if (mainWindow.isMinimized()) mainWindow.restore();
            mainWindow.focus();
        }
    });
}

// App ready
app.whenReady().then(async () => {
    try {
        createSplashWindow();
        PORT = await findAvailablePort(PORT);
        await startExpressServer();
        createWindow();

        // Block global shortcuts untuk devtools
        globalShortcut.register('F12', () => {});
        globalShortcut.register('CommandOrControl+Shift+I', () => {});
        globalShortcut.register('CommandOrControl+Shift+J', () => {});
        globalShortcut.register('CommandOrControl+Shift+C', () => {});
        globalShortcut.register('CommandOrControl+U', () => {});

    } catch (error) {
        if (splashWindow) splashWindow.close();
        dialog.showErrorBox(
            'Gagal Memulai Aplikasi',
            `Error: ${error.message}\n\nSilakan restart aplikasi.`
        );
        app.quit();
    }
});

app.on('window-all-closed', () => {
    if (server && server.close) server.close();
    globalShortcut.unregisterAll();
    // macOS convention: keep app running until user explicitly quits with Cmd+Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('will-quit', () => {
    globalShortcut.unregisterAll();
});

app.on('activate', () => {
    if (mainWindow === null) createWindow();
});

app.on('before-quit', () => {
    if (server && server.close) server.close();
});

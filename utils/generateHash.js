/**
 * Utility: Generate password hash
 * Jalankan: node utils/generateHash.js
 * 
 * Digunakan untuk membuat hash password baru
 */

const bcrypt = require('bcryptjs');

async function generateHash() {
    const password = process.argv[2] || 'admin123';
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    
    console.log('Password:', password);
    console.log('Hash:', hash);
    console.log('\nGunakan hash ini di SQL INSERT statement.');
}

generateHash();

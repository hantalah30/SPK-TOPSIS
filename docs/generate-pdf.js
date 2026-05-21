/**
 * Script untuk generate PDF dari dokumentasi
 * Jalankan: node docs/generate-pdf.js
 */

const markdownpdf = require('markdown-pdf');
const path = require('path');
const fs = require('fs');

const inputFile = path.join(__dirname, 'Penjelasan_Lengkap_SPK_TOPSIS.md');
const outputFile = path.join(__dirname, 'Penjelasan_Lengkap_SPK_TOPSIS.pdf');

const options = {
    cssPath: path.join(__dirname, 'pdf-style.css'),
    paperFormat: 'A4',
    paperBorder: '2cm',
    remarkable: {
        html: true,
        breaks: true
    }
};

console.log('Generating PDF...');
console.log('Input:', inputFile);
console.log('Output:', outputFile);

markdownpdf(options)
    .from(inputFile)
    .to(outputFile, function() {
        console.log('');
        console.log('PDF berhasil dibuat!');
        console.log('File:', outputFile);
        console.log('Size:', (fs.statSync(outputFile).size / 1024).toFixed(1), 'KB');
    });

const markdownpdf = require('markdown-pdf');
const path = require('path');
const fs = require('fs');

const inputFile = path.join(__dirname, 'Laporan_Proyek_SPK_TOPSIS.md');
const outputFile = path.join(__dirname, 'Laporan_Proyek_SPK_TOPSIS.pdf');

const options = {
    cssPath: path.join(__dirname, 'pdf-style.css'),
    paperFormat: 'A4',
    paperBorder: '2cm',
    remarkable: {
        html: true,
        breaks: true
    }
};

console.log('Generating Laporan PDF...');

markdownpdf(options)
    .from(inputFile)
    .to(outputFile, function() {
        console.log('');
        console.log('PDF Laporan Proyek berhasil dibuat!');
        console.log('File:', outputFile);
        console.log('Size:', (fs.statSync(outputFile).size / 1024).toFixed(1), 'KB');
    });

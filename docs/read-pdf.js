const fs = require('fs');
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js');

async function extractText() {
    const data = new Uint8Array(fs.readFileSync('C:\\Users\\hanta\\Documents\\Tugas SPK\\Struktur_Laporan_Proyek.pdf'));
    const doc = await pdfjsLib.getDocument({ data }).promise;
    
    let fullText = '';
    for (let i = 1; i <= doc.numPages; i++) {
        const page = await doc.getPage(i);
        const content = await page.getTextContent();
        const text = content.items.map(item => item.str).join(' ');
        fullText += `\n--- PAGE ${i} ---\n${text}\n`;
    }
    console.log(fullText);
}

extractText().catch(e => console.error(e.message));

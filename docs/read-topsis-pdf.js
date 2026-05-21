const fs = require('fs');
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js');

async function extractText() {
    const data = new Uint8Array(fs.readFileSync('C:/Users/hanta/Documents/Tugas SPK/topsis.pdf'));
    const doc = await pdfjsLib.getDocument({ data }).promise;
    
    console.log('Total pages:', doc.numPages);
    
    let fullText = '';
    for (let i = 1; i <= doc.numPages; i++) {
        const page = await doc.getPage(i);
        const content = await page.getTextContent();
        const text = content.items.map(item => item.str).join(' ');
        fullText += `\n\n--- PAGE ${i} ---\n${text}\n`;
    }
    console.log(fullText);
}

extractText().catch(e => console.error(e.message));

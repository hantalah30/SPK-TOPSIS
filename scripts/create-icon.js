/**
 * Script untuk membuat icon 256x256 .ico
 */

const fs = require('fs');
const path = require('path');

// Membuat ICO file dengan gambar 256x256 32-bit BGRA
const width = 256;
const height = 256;

// ICO Header
const icoHeader = Buffer.alloc(6);
icoHeader.writeUInt16LE(0, 0);     // Reserved
icoHeader.writeUInt16LE(1, 2);     // Type: ICO
icoHeader.writeUInt16LE(1, 4);     // Count: 1 image

// Untuk 256x256, width dan height di entry harus 0 (artinya 256)
const imageDataSize = 40 + (width * height * 4) + (Math.ceil(width / 8) * height); // BMP header + pixels + AND mask
const imageDataOffset = 6 + 16; // ICO header + 1 entry

// ICO Directory Entry
const entry = Buffer.alloc(16);
entry.writeUInt8(0, 0);            // Width: 0 = 256
entry.writeUInt8(0, 1);            // Height: 0 = 256
entry.writeUInt8(0, 2);            // Color palette
entry.writeUInt8(0, 3);            // Reserved
entry.writeUInt16LE(1, 4);         // Color planes
entry.writeUInt16LE(32, 6);        // Bits per pixel
entry.writeUInt32LE(imageDataSize, 8);  // Size of image data
entry.writeUInt32LE(imageDataOffset, 12); // Offset to image data

// BMP Info Header (BITMAPINFOHEADER)
const bmpHeader = Buffer.alloc(40);
bmpHeader.writeUInt32LE(40, 0);           // Header size
bmpHeader.writeInt32LE(width, 4);         // Width
bmpHeader.writeInt32LE(height * 2, 8);    // Height (doubled for XOR + AND mask)
bmpHeader.writeUInt16LE(1, 12);           // Planes
bmpHeader.writeUInt16LE(32, 14);          // Bits per pixel
bmpHeader.writeUInt32LE(0, 16);           // Compression: none
bmpHeader.writeUInt32LE(width * height * 4, 20); // Image size
bmpHeader.writeInt32LE(0, 24);            // X pixels per meter
bmpHeader.writeInt32LE(0, 28);            // Y pixels per meter
bmpHeader.writeUInt32LE(0, 32);           // Colors used
bmpHeader.writeUInt32LE(0, 36);           // Important colors

// Pixel data (BGRA, bottom-up)
const pixels = Buffer.alloc(width * height * 4);

for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
        const offset = (y * width + x) * 4;
        
        // Gradient dari #667eea (kiri atas) ke #764ba2 (kanan bawah)
        const t = ((x / width) + (y / height)) / 2;
        
        // Warna gradient
        const r = Math.round(102 + (118 - 102) * t);  // 102 -> 118
        const g = Math.round(126 + (75 - 126) * t);   // 126 -> 75
        const b = Math.round(234 + (162 - 234) * t);  // 234 -> 162
        
        // Buat lingkaran di tengah (laptop icon effect)
        const cx = width / 2;
        const cy = height / 2;
        const dist = Math.sqrt(Math.pow(x - cx, 2) + Math.pow(y - cy, 2));
        const radius = width * 0.4;
        
        if (dist < radius) {
            // Di dalam lingkaran - warna lebih terang
            pixels[offset] = Math.min(255, b + 30);     // B
            pixels[offset + 1] = Math.min(255, g + 30); // G
            pixels[offset + 2] = Math.min(255, r + 30); // R
            pixels[offset + 3] = 255;                    // A
        } else if (dist < radius + 3) {
            // Border lingkaran
            pixels[offset] = 255;     // B
            pixels[offset + 1] = 255; // G
            pixels[offset + 2] = 255; // R
            pixels[offset + 3] = 255; // A
        } else {
            // Background gradient
            pixels[offset] = b;       // B
            pixels[offset + 1] = g;   // G
            pixels[offset + 2] = r;   // R
            pixels[offset + 3] = 255; // A
        }
    }
}

// AND mask (all zeros = fully opaque)
const andMaskRowSize = Math.ceil(width / 8);
const andMask = Buffer.alloc(andMaskRowSize * height, 0x00);

// Combine all parts
const ico = Buffer.concat([icoHeader, entry, bmpHeader, pixels, andMask]);

const iconPath = path.join(__dirname, '..', 'public', 'icon.ico');
fs.writeFileSync(iconPath, ico);
console.log(`✅ Icon created: ${iconPath} (${ico.length} bytes)`);

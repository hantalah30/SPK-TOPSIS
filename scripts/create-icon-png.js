/**
 * Membuat icon.png 512x512 (untuk macOS)
 * Manual encoder: PNG minimal (RGBA, no compression library required via zlib)
 */

const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const SIZE = 512;

function createIconPng() {
    const width = SIZE;
    const height = SIZE;

    // Create raw RGBA pixel buffer
    const rawSize = width * height * 4;
    const raw = Buffer.alloc(rawSize);

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const offset = (y * width + x) * 4;

            // Gradient #4f6ef7 -> #7c3aed (sesuai brand)
            const t = ((x / width) + (y / height)) / 2;
            const r0 = 0x4f, g0 = 0x6e, b0 = 0xf7;
            const r1 = 0x7c, g1 = 0x3a, b1 = 0xed;
            let r = Math.round(r0 + (r1 - r0) * t);
            let g = Math.round(g0 + (g1 - g0) * t);
            let b = Math.round(b0 + (b1 - b0) * t);

            // Rounded square corners (mac-style)
            const cornerRadius = width * 0.22;
            const dx = Math.max(0, cornerRadius - x, x - (width - cornerRadius));
            const dy = Math.max(0, cornerRadius - y, y - (height - cornerRadius));
            const cornerDist = Math.sqrt(dx * dx + dy * dy);
            let alpha = 255;
            if (cornerDist > cornerRadius) {
                alpha = 0;
            } else if (cornerDist > cornerRadius - 1) {
                alpha = Math.round(255 * (cornerRadius - cornerDist));
            }

            // Draw "Laptop" symbol
            const cx = width / 2;
            const cy = height / 2;
            // Laptop body (rectangle screen + base)
            const screenW = width * 0.45;
            const screenH = height * 0.3;
            const screenTop = cy - screenH * 0.7;
            const screenLeft = cx - screenW / 2;
            // Screen
            if (x >= screenLeft && x <= screenLeft + screenW &&
                y >= screenTop && y <= screenTop + screenH) {
                r = 255; g = 255; b = 255; // white screen
                // Inner darker area
                const margin = 8;
                if (x >= screenLeft + margin && x <= screenLeft + screenW - margin &&
                    y >= screenTop + margin && y <= screenTop + screenH - margin) {
                    r = 30; g = 41; b = 59; // dark navy
                }
            }
            // Laptop base (trapezoid)
            const baseTop = screenTop + screenH + 4;
            const baseH = height * 0.06;
            const baseW = screenW * 1.25;
            const baseLeft = cx - baseW / 2;
            const baseRight = cx + baseW / 2;
            if (y >= baseTop && y <= baseTop + baseH) {
                // Trapezoid: narrower at top
                const yt = (y - baseTop) / baseH;
                const leftEdge = baseLeft + (1 - yt) * (baseW - screenW) / 2;
                const rightEdge = baseRight - (1 - yt) * (baseW - screenW) / 2;
                if (x >= leftEdge && x <= rightEdge) {
                    r = 255; g = 255; b = 255;
                }
            }

            raw[offset] = r;
            raw[offset + 1] = g;
            raw[offset + 2] = b;
            raw[offset + 3] = alpha;
        }
    }

    // PNG file structure
    // Signature
    const signature = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);

    // IHDR chunk
    const ihdrData = Buffer.alloc(13);
    ihdrData.writeUInt32BE(width, 0);
    ihdrData.writeUInt32BE(height, 4);
    ihdrData.writeUInt8(8, 8);   // bit depth
    ihdrData.writeUInt8(6, 9);   // color type: RGBA
    ihdrData.writeUInt8(0, 10);  // compression
    ihdrData.writeUInt8(0, 11);  // filter
    ihdrData.writeUInt8(0, 12);  // interlace
    const ihdrChunk = makeChunk('IHDR', ihdrData);

    // IDAT chunk (compressed pixel data with filter byte per row)
    const filtered = Buffer.alloc(height * (1 + width * 4));
    for (let y = 0; y < height; y++) {
        filtered[y * (1 + width * 4)] = 0; // filter type: none
        raw.copy(filtered, y * (1 + width * 4) + 1, y * width * 4, (y + 1) * width * 4);
    }
    const compressed = zlib.deflateSync(filtered);
    const idatChunk = makeChunk('IDAT', compressed);

    // IEND chunk
    const iendChunk = makeChunk('IEND', Buffer.alloc(0));

    return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function makeChunk(type, data) {
    const length = Buffer.alloc(4);
    length.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, 'ascii');
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
    return Buffer.concat([length, typeBuf, data, crc]);
}

// CRC32 implementation
function crc32(buf) {
    let c;
    const crcTable = [];
    for (let n = 0; n < 256; n++) {
        c = n;
        for (let k = 0; k < 8; k++) {
            c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
        }
        crcTable[n] = c >>> 0;
    }
    let crc = 0xFFFFFFFF;
    for (let i = 0; i < buf.length; i++) {
        crc = (crcTable[(crc ^ buf[i]) & 0xFF] ^ (crc >>> 8)) >>> 0;
    }
    return (crc ^ 0xFFFFFFFF) >>> 0;
}

const png = createIconPng();
const pngPath = path.join(__dirname, '..', 'public', 'icon.png');
fs.writeFileSync(pngPath, png);
console.log(`Icon PNG created: ${pngPath} (${png.length} bytes, ${SIZE}x${SIZE})`);

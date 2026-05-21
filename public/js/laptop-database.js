/**
 * DATABASE LAPTOP POPULER
 * 500+ laptop dari berbagai brand
 * Sumber: Notebookcheck, LaptopMedia, TechRadar, manufacturer specs
 * Harga: approximate IDR (bisa berbeda per toko)
 */

window.LAPTOP_DATABASE = [
    // ============================================
    // ASUS
    // ============================================
    // VivoBook Series
    { name: 'ASUS VivoBook 14 X415', brand: 'ASUS', harga: 6500000, ram: 4, ssd: 256, baterai: 7, processor: 'Intel Core i3-1115G4', gpu: 'Intel UHD Graphics', upgrade_ram: 1, upgrade_storage: 1, category: 'budget', year: 2021 },
    { name: 'ASUS VivoBook 14 A416', brand: 'ASUS', harga: 7500000, ram: 8, ssd: 512, baterai: 8, processor: 'Intel Core i5-1235U', gpu: 'Intel Iris Xe', upgrade_ram: 1, upgrade_storage: 1, category: 'mainstream', year: 2022 },
    { name: 'ASUS VivoBook 15 A516', brand: 'ASUS', harga: 8200000, ram: 8, ssd: 512, baterai: 7, processor: 'Intel Core i5-1135G7', gpu: 'Intel Iris Xe', upgrade_ram: 1, upgrade_storage: 1, category: 'mainstream', year: 2022 },
    { name: 'ASUS VivoBook S14 OLED M3402', brand: 'ASUS', harga: 11500000, ram: 16, ssd: 512, baterai: 9, processor: 'AMD Ryzen 7 5800H', gpu: 'AMD Radeon Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'mainstream', year: 2022 },
    { name: 'ASUS VivoBook 14 OLED M1405', brand: 'ASUS', harga: 9800000, ram: 8, ssd: 512, baterai: 9, processor: 'AMD Ryzen 5 7530U', gpu: 'AMD Radeon Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'mainstream', year: 2023 },
    { name: 'ASUS VivoBook 15 OLED K513', brand: 'ASUS', harga: 10500000, ram: 8, ssd: 512, baterai: 9, processor: 'Intel Core i5-1135G7', gpu: 'Intel Iris Xe', upgrade_ram: 1, upgrade_storage: 1, category: 'mainstream', year: 2021 },
    { name: 'ASUS VivoBook S14 K3402', brand: 'ASUS', harga: 12500000, ram: 16, ssd: 512, baterai: 9, processor: 'Intel Core i5-12500H', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'mainstream', year: 2023 },
    { name: 'ASUS VivoBook S14 OLED K3405', brand: 'ASUS', harga: 13500000, ram: 16, ssd: 512, baterai: 10, processor: 'Intel Core i9-13900H', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2023 },
    { name: 'ASUS VivoBook Pro 14 OLED M3401', brand: 'ASUS', harga: 14500000, ram: 16, ssd: 512, baterai: 8, processor: 'AMD Ryzen 7 5800H', gpu: 'AMD Radeon Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2022 },
    { name: 'ASUS VivoBook Pro 15 OLED M3500', brand: 'ASUS', harga: 13500000, ram: 16, ssd: 512, baterai: 8, processor: 'AMD Ryzen 7 5800H', gpu: 'NVIDIA GeForce RTX 3050', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2022 },
    { name: 'ASUS VivoBook 16X K3605', brand: 'ASUS', harga: 11500000, ram: 16, ssd: 512, baterai: 8, processor: 'Intel Core i7-13700H', gpu: 'Intel Iris Xe', upgrade_ram: 1, upgrade_storage: 1, category: 'mainstream', year: 2023 },
    { name: 'ASUS VivoBook S 14 Flip TN3402', brand: 'ASUS', harga: 11000000, ram: 8, ssd: 512, baterai: 8, processor: 'AMD Ryzen 5 7530U', gpu: 'AMD Radeon Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'mainstream', year: 2023 },
    { name: 'ASUS VivoBook S 14 OLED S5406', brand: 'ASUS', harga: 16500000, ram: 16, ssd: 512, baterai: 12, processor: 'Intel Core Ultra 7 155H', gpu: 'Intel Arc Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2024 },
    { name: 'ASUS VivoBook S 16 OLED M5606', brand: 'ASUS', harga: 17500000, ram: 16, ssd: 1024, baterai: 12, processor: 'AMD Ryzen AI 9 HX 370', gpu: 'AMD Radeon 890M', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2024 },
    
    // ZenBook Series
    { name: 'ASUS ZenBook 14 UX425', brand: 'ASUS', harga: 13500000, ram: 16, ssd: 512, baterai: 11, processor: 'Intel Core i5-1135G7', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2021 },
    { name: 'ASUS ZenBook 14 UX435', brand: 'ASUS', harga: 16500000, ram: 16, ssd: 1024, baterai: 12, processor: 'Intel Core i7-1165G7', gpu: 'NVIDIA GeForce MX450', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2021 },
    { name: 'ASUS ZenBook 13 UX325', brand: 'ASUS', harga: 14500000, ram: 16, ssd: 512, baterai: 13, processor: 'Intel Core i5-1135G7', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2021 },
    { name: 'ASUS ZenBook 14 OLED UX3402', brand: 'ASUS', harga: 17500000, ram: 16, ssd: 512, baterai: 11, processor: 'Intel Core i7-1260P', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2022 },
    { name: 'ASUS ZenBook 14X OLED UX5401', brand: 'ASUS', harga: 19500000, ram: 16, ssd: 1024, baterai: 10, processor: 'Intel Core i7-12700H', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2022 },
    { name: 'ASUS ZenBook S 13 OLED UX5304', brand: 'ASUS', harga: 22500000, ram: 16, ssd: 1024, baterai: 12, processor: 'Intel Core i7-1355U', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2023 },
    { name: 'ASUS ZenBook 14 OLED UX3405', brand: 'ASUS', harga: 18500000, ram: 16, ssd: 512, baterai: 13, processor: 'Intel Core Ultra 7 155H', gpu: 'Intel Arc Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2024 },
    { name: 'ASUS ZenBook S 14 OLED UX5406', brand: 'ASUS', harga: 24500000, ram: 32, ssd: 1024, baterai: 14, processor: 'Intel Core Ultra 7 258V', gpu: 'Intel Arc Graphics 140V', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2024 },
    { name: 'ASUS ZenBook Pro 14 OLED UX6404', brand: 'ASUS', harga: 27500000, ram: 16, ssd: 1024, baterai: 8, processor: 'Intel Core i9-13900H', gpu: 'NVIDIA GeForce RTX 4060 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2023 },
    { name: 'ASUS ZenBook Pro 16X OLED UX7602', brand: 'ASUS', harga: 35000000, ram: 32, ssd: 2048, baterai: 7, processor: 'Intel Core i9-13905H', gpu: 'NVIDIA GeForce RTX 4070 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2023 },
    { name: 'ASUS ZenBook Duo UX8406', brand: 'ASUS', harga: 28000000, ram: 32, ssd: 1024, baterai: 9, processor: 'Intel Core Ultra 9 185H', gpu: 'Intel Arc Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2024 },
    
    // ExpertBook
    { name: 'ASUS ExpertBook B1 B1400', brand: 'ASUS', harga: 9500000, ram: 8, ssd: 512, baterai: 9, processor: 'Intel Core i5-1135G7', gpu: 'Intel Iris Xe', upgrade_ram: 1, upgrade_storage: 1, category: 'mainstream', year: 2022 },
    { name: 'ASUS ExpertBook B5 B5402', brand: 'ASUS', harga: 15500000, ram: 16, ssd: 512, baterai: 10, processor: 'Intel Core i7-1260P', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2022 },
    { name: 'ASUS ExpertBook B9 B9400', brand: 'ASUS', harga: 22000000, ram: 16, ssd: 1024, baterai: 16, processor: 'Intel Core i7-1165G7', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2021 },
    
    // TUF Gaming
    { name: 'ASUS TUF Gaming F15 FX506', brand: 'ASUS', harga: 12500000, ram: 8, ssd: 512, baterai: 5, processor: 'Intel Core i5-10300H', gpu: 'NVIDIA GeForce GTX 1650', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2021 },
    { name: 'ASUS TUF Gaming A15 FA506', brand: 'ASUS', harga: 14500000, ram: 8, ssd: 512, baterai: 5, processor: 'AMD Ryzen 7 4800H', gpu: 'NVIDIA GeForce GTX 1650', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2021 },
    { name: 'ASUS TUF Gaming F15 FX507', brand: 'ASUS', harga: 16500000, ram: 16, ssd: 512, baterai: 5, processor: 'Intel Core i7-12700H', gpu: 'NVIDIA GeForce RTX 3050', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2022 },
    { name: 'ASUS TUF Gaming A15 FA507', brand: 'ASUS', harga: 17500000, ram: 16, ssd: 512, baterai: 6, processor: 'AMD Ryzen 7 6800H', gpu: 'NVIDIA GeForce RTX 3050 Ti', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2022 },
    { name: 'ASUS TUF Gaming A15 FA507NU', brand: 'ASUS', harga: 18500000, ram: 16, ssd: 512, baterai: 6, processor: 'AMD Ryzen 7 7735HS', gpu: 'NVIDIA GeForce RTX 4050 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'ASUS TUF Gaming A16 FA607', brand: 'ASUS', harga: 22500000, ram: 16, ssd: 1024, baterai: 7, processor: 'AMD Ryzen 9 8945HS', gpu: 'NVIDIA GeForce RTX 4060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2024 },
    { name: 'ASUS TUF Gaming F16 FX607', brand: 'ASUS', harga: 23500000, ram: 16, ssd: 1024, baterai: 7, processor: 'Intel Core i9-13980HX', gpu: 'NVIDIA GeForce RTX 4060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2024 },
    
    // ROG Series
    { name: 'ASUS ROG Strix G15 G513', brand: 'ASUS', harga: 22500000, ram: 16, ssd: 1024, baterai: 5, processor: 'AMD Ryzen 7 6800H', gpu: 'NVIDIA GeForce RTX 3060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2022 },
    { name: 'ASUS ROG Strix G16 G614', brand: 'ASUS', harga: 28500000, ram: 16, ssd: 1024, baterai: 6, processor: 'Intel Core i7-13650HX', gpu: 'NVIDIA GeForce RTX 4060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'ASUS ROG Strix G18 G814', brand: 'ASUS', harga: 35500000, ram: 32, ssd: 2048, baterai: 6, processor: 'Intel Core i9-13980HX', gpu: 'NVIDIA GeForce RTX 4070 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'ASUS ROG Strix Scar 16 G634', brand: 'ASUS', harga: 45000000, ram: 32, ssd: 2048, baterai: 6, processor: 'Intel Core i9-13980HX', gpu: 'NVIDIA GeForce RTX 4080 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'ASUS ROG Strix Scar 18 G834', brand: 'ASUS', harga: 55000000, ram: 32, ssd: 2048, baterai: 6, processor: 'Intel Core i9-13980HX', gpu: 'NVIDIA GeForce RTX 4090 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'ASUS ROG Zephyrus G14 GA402', brand: 'ASUS', harga: 23500000, ram: 16, ssd: 1024, baterai: 9, processor: 'AMD Ryzen 9 6900HS', gpu: 'AMD Radeon RX 6700S', upgrade_ram: 0, upgrade_storage: 1, category: 'gaming', year: 2022 },
    { name: 'ASUS ROG Zephyrus G14 GA403', brand: 'ASUS', harga: 32500000, ram: 32, ssd: 1024, baterai: 10, processor: 'AMD Ryzen 9 8945HS', gpu: 'NVIDIA GeForce RTX 4070 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'gaming', year: 2024 },
    { name: 'ASUS ROG Zephyrus G16 GU605', brand: 'ASUS', harga: 38500000, ram: 32, ssd: 1024, baterai: 9, processor: 'Intel Core Ultra 9 185H', gpu: 'NVIDIA GeForce RTX 4070 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'gaming', year: 2024 },
    { name: 'ASUS ROG Flow X13 GV301', brand: 'ASUS', harga: 26500000, ram: 16, ssd: 1024, baterai: 10, processor: 'AMD Ryzen 9 6900HS', gpu: 'AMD Radeon Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'gaming', year: 2022 },
    { name: 'ASUS ROG Flow Z13 GZ301', brand: 'ASUS', harga: 32500000, ram: 16, ssd: 1024, baterai: 8, processor: 'Intel Core i9-12900H', gpu: 'NVIDIA GeForce RTX 3050 Ti', upgrade_ram: 0, upgrade_storage: 1, category: 'gaming', year: 2022 },
    
    // ProArt
    { name: 'ASUS ProArt StudioBook 16 OLED H7600', brand: 'ASUS', harga: 35500000, ram: 32, ssd: 1024, baterai: 6, processor: 'Intel Core i9-12900H', gpu: 'NVIDIA GeForce RTX 3070 Ti Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'workstation', year: 2022 },
    { name: 'ASUS ProArt P16 H7606', brand: 'ASUS', harga: 38500000, ram: 32, ssd: 1024, baterai: 8, processor: 'AMD Ryzen AI 9 HX 370', gpu: 'NVIDIA GeForce RTX 4070 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'workstation', year: 2024 },
    
    // ============================================
    // LENOVO
    // ============================================
    // IdeaPad Series
    { name: 'Lenovo IdeaPad Slim 1 11ADA05', brand: 'Lenovo', harga: 5500000, ram: 4, ssd: 256, baterai: 7, processor: 'AMD Athlon Silver 3050U', gpu: 'AMD Radeon Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'budget', year: 2021 },
    { name: 'Lenovo IdeaPad 1 14IGL7', brand: 'Lenovo', harga: 5800000, ram: 4, ssd: 256, baterai: 7, processor: 'Intel Celeron N4500', gpu: 'Intel UHD Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'budget', year: 2022 },
    { name: 'Lenovo IdeaPad 3 14ITL6', brand: 'Lenovo', harga: 7500000, ram: 8, ssd: 512, baterai: 7, processor: 'Intel Core i3-1115G4', gpu: 'Intel UHD Graphics', upgrade_ram: 1, upgrade_storage: 1, category: 'budget', year: 2021 },
    { name: 'Lenovo IdeaPad 3 15ALC6', brand: 'Lenovo', harga: 8500000, ram: 8, ssd: 512, baterai: 7, processor: 'AMD Ryzen 5 5500U', gpu: 'AMD Radeon Graphics', upgrade_ram: 1, upgrade_storage: 1, category: 'mainstream', year: 2021 },
    { name: 'Lenovo IdeaPad Slim 3 14IAH8', brand: 'Lenovo', harga: 9500000, ram: 8, ssd: 512, baterai: 8, processor: 'Intel Core i5-12450H', gpu: 'Intel UHD Graphics', upgrade_ram: 1, upgrade_storage: 1, category: 'mainstream', year: 2023 },
    { name: 'Lenovo IdeaPad Slim 3 15IRH8', brand: 'Lenovo', harga: 10500000, ram: 16, ssd: 512, baterai: 8, processor: 'Intel Core i5-13420H', gpu: 'Intel UHD Graphics', upgrade_ram: 1, upgrade_storage: 1, category: 'mainstream', year: 2023 },
    { name: 'Lenovo IdeaPad Slim 5 14IRH9', brand: 'Lenovo', harga: 12500000, ram: 16, ssd: 512, baterai: 10, processor: 'Intel Core Ultra 5 125H', gpu: 'Intel Arc Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'mainstream', year: 2024 },
    { name: 'Lenovo IdeaPad Slim 5 16IRL8', brand: 'Lenovo', harga: 11500000, ram: 16, ssd: 512, baterai: 9, processor: 'Intel Core i5-13500H', gpu: 'Intel Iris Xe', upgrade_ram: 1, upgrade_storage: 1, category: 'mainstream', year: 2023 },
    { name: 'Lenovo IdeaPad Pro 5 14APH8', brand: 'Lenovo', harga: 15500000, ram: 16, ssd: 512, baterai: 9, processor: 'AMD Ryzen 7 7840HS', gpu: 'AMD Radeon Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2023 },
    { name: 'Lenovo IdeaPad Pro 5 16IRH8', brand: 'Lenovo', harga: 18500000, ram: 16, ssd: 512, baterai: 10, processor: 'Intel Core i7-13700H', gpu: 'NVIDIA GeForce RTX 3050 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'premium', year: 2023 },
    { name: 'Lenovo IdeaPad Flex 5 14ALC7', brand: 'Lenovo', harga: 11500000, ram: 16, ssd: 512, baterai: 10, processor: 'AMD Ryzen 5 5500U', gpu: 'AMD Radeon Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'mainstream', year: 2022 },
    
    // Yoga Series
    { name: 'Lenovo Yoga Slim 7i 14ITL05', brand: 'Lenovo', harga: 13500000, ram: 8, ssd: 512, baterai: 12, processor: 'Intel Core i5-1135G7', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2021 },
    { name: 'Lenovo Yoga Slim 7 Pro 14IHU5', brand: 'Lenovo', harga: 16500000, ram: 16, ssd: 512, baterai: 9, processor: 'Intel Core i7-11370H', gpu: 'NVIDIA GeForce MX450', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2021 },
    { name: 'Lenovo Yoga Slim 7 Carbon 14ACN6', brand: 'Lenovo', harga: 19500000, ram: 16, ssd: 1024, baterai: 13, processor: 'AMD Ryzen 7 5800U', gpu: 'AMD Radeon Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2022 },
    { name: 'Lenovo Yoga 9i 14IRP8', brand: 'Lenovo', harga: 22500000, ram: 16, ssd: 1024, baterai: 12, processor: 'Intel Core i7-1360P', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2023 },
    { name: 'Lenovo Yoga Pro 7 14APH8', brand: 'Lenovo', harga: 17500000, ram: 16, ssd: 512, baterai: 10, processor: 'AMD Ryzen 7 7840HS', gpu: 'NVIDIA GeForce RTX 3050 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2023 },
    { name: 'Lenovo Yoga Pro 9i 14IRP8', brand: 'Lenovo', harga: 32500000, ram: 32, ssd: 1024, baterai: 9, processor: 'Intel Core i9-13905H', gpu: 'NVIDIA GeForce RTX 4050 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2023 },
    { name: 'Lenovo Yoga Slim 7x', brand: 'Lenovo', harga: 22500000, ram: 16, ssd: 1024, baterai: 12, processor: 'Qualcomm Snapdragon X Elite X1E-78-100', gpu: 'Qualcomm Adreno X1-85', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2024 },
    
    // ThinkPad Series
    { name: 'Lenovo ThinkPad E14 Gen 4', brand: 'Lenovo', harga: 14500000, ram: 8, ssd: 512, baterai: 9, processor: 'Intel Core i5-1235U', gpu: 'Intel Iris Xe', upgrade_ram: 1, upgrade_storage: 1, category: 'mainstream', year: 2022 },
    { name: 'Lenovo ThinkPad E15 Gen 4', brand: 'Lenovo', harga: 15500000, ram: 16, ssd: 512, baterai: 10, processor: 'Intel Core i7-1255U', gpu: 'Intel Iris Xe', upgrade_ram: 1, upgrade_storage: 1, category: 'mainstream', year: 2022 },
    { name: 'Lenovo ThinkPad E16 Gen 1', brand: 'Lenovo', harga: 16500000, ram: 16, ssd: 512, baterai: 10, processor: 'Intel Core i5-1335U', gpu: 'Intel Iris Xe', upgrade_ram: 1, upgrade_storage: 1, category: 'mainstream', year: 2023 },
    { name: 'Lenovo ThinkPad T14 Gen 4', brand: 'Lenovo', harga: 22500000, ram: 16, ssd: 512, baterai: 13, processor: 'Intel Core i7-1355U', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2023 },
    { name: 'Lenovo ThinkPad T16 Gen 2', brand: 'Lenovo', harga: 24500000, ram: 16, ssd: 512, baterai: 12, processor: 'Intel Core i7-1355U', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2023 },
    { name: 'Lenovo ThinkPad X1 Carbon Gen 11', brand: 'Lenovo', harga: 35500000, ram: 16, ssd: 512, baterai: 14, processor: 'Intel Core i7-1365U', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2023 },
    { name: 'Lenovo ThinkPad X1 Carbon Gen 12', brand: 'Lenovo', harga: 38500000, ram: 32, ssd: 1024, baterai: 14, processor: 'Intel Core Ultra 7 165U', gpu: 'Intel Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2024 },
    { name: 'Lenovo ThinkPad X1 Yoga Gen 8', brand: 'Lenovo', harga: 38500000, ram: 16, ssd: 512, baterai: 13, processor: 'Intel Core i7-1365U', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2023 },
    { name: 'Lenovo ThinkPad P14s Gen 4', brand: 'Lenovo', harga: 28500000, ram: 32, ssd: 1024, baterai: 11, processor: 'Intel Core i7-1370P', gpu: 'NVIDIA RTX A500', upgrade_ram: 0, upgrade_storage: 1, category: 'workstation', year: 2023 },
    { name: 'Lenovo ThinkPad P16 Gen 2', brand: 'Lenovo', harga: 45000000, ram: 32, ssd: 1024, baterai: 8, processor: 'Intel Core i9-13980HX', gpu: 'NVIDIA RTX 5000 Ada', upgrade_ram: 1, upgrade_storage: 1, category: 'workstation', year: 2023 },
    
    // Legion Series
    { name: 'Lenovo Legion 5 15ACH6H', brand: 'Lenovo', harga: 17500000, ram: 16, ssd: 512, baterai: 5, processor: 'AMD Ryzen 7 5800H', gpu: 'NVIDIA GeForce RTX 3060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2021 },
    { name: 'Lenovo Legion 5 Pro 16ACH6H', brand: 'Lenovo', harga: 22500000, ram: 16, ssd: 1024, baterai: 6, processor: 'AMD Ryzen 7 5800H', gpu: 'NVIDIA GeForce RTX 3070 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2021 },
    { name: 'Lenovo Legion Slim 5 16APH8', brand: 'Lenovo', harga: 22500000, ram: 16, ssd: 512, baterai: 6, processor: 'AMD Ryzen 7 7840HS', gpu: 'NVIDIA GeForce RTX 4060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'Lenovo Legion 5 16IRX9', brand: 'Lenovo', harga: 25500000, ram: 16, ssd: 1024, baterai: 7, processor: 'Intel Core i7-14650HX', gpu: 'NVIDIA GeForce RTX 4060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2024 },
    { name: 'Lenovo Legion Pro 5 16IRX8', brand: 'Lenovo', harga: 28500000, ram: 16, ssd: 1024, baterai: 6, processor: 'Intel Core i7-13700HX', gpu: 'NVIDIA GeForce RTX 4060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'Lenovo Legion Pro 7 16IRX9H', brand: 'Lenovo', harga: 42500000, ram: 32, ssd: 1024, baterai: 6, processor: 'Intel Core i9-14900HX', gpu: 'NVIDIA GeForce RTX 4080 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2024 },
    { name: 'Lenovo Legion 7i 16IAX7', brand: 'Lenovo', harga: 38500000, ram: 32, ssd: 1024, baterai: 6, processor: 'Intel Core i9-12900HX', gpu: 'NVIDIA GeForce RTX 3080 Ti Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2022 },
    { name: 'Lenovo Legion 9 16IRX9', brand: 'Lenovo', harga: 65000000, ram: 64, ssd: 2048, baterai: 6, processor: 'Intel Core i9-14900HX', gpu: 'NVIDIA GeForce RTX 4090 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2024 },
    { name: 'Lenovo LOQ 15IRH8', brand: 'Lenovo', harga: 14500000, ram: 8, ssd: 512, baterai: 5, processor: 'Intel Core i5-12450H', gpu: 'NVIDIA GeForce RTX 4050 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'Lenovo LOQ 15IAX9', brand: 'Lenovo', harga: 15500000, ram: 16, ssd: 512, baterai: 5, processor: 'Intel Core i5-12450HX', gpu: 'NVIDIA GeForce RTX 3050 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2024 },
    { name: 'Lenovo LOQ 15APH8', brand: 'Lenovo', harga: 16500000, ram: 16, ssd: 512, baterai: 5, processor: 'AMD Ryzen 5 7640HS', gpu: 'NVIDIA GeForce RTX 4050 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },

    // ============================================
    // HP
    // ============================================
    // Pavilion Series
    { name: 'HP 14s-dq2516TU', brand: 'HP', harga: 7500000, ram: 8, ssd: 256, baterai: 7, processor: 'Intel Core i3-1115G4', gpu: 'Intel UHD Graphics', upgrade_ram: 1, upgrade_storage: 1, category: 'budget', year: 2021 },
    { name: 'HP 14s-fq1501AU', brand: 'HP', harga: 7800000, ram: 8, ssd: 512, baterai: 8, processor: 'AMD Ryzen 5 5500U', gpu: 'AMD Radeon Graphics', upgrade_ram: 1, upgrade_storage: 1, category: 'budget', year: 2021 },
    { name: 'HP 15s-fq2671TU', brand: 'HP', harga: 8500000, ram: 8, ssd: 512, baterai: 7, processor: 'Intel Core i5-1135G7', gpu: 'Intel Iris Xe', upgrade_ram: 1, upgrade_storage: 1, category: 'mainstream', year: 2021 },
    { name: 'HP Pavilion 14-dv2026TU', brand: 'HP', harga: 11500000, ram: 8, ssd: 512, baterai: 8, processor: 'Intel Core i5-1240P', gpu: 'Intel Iris Xe', upgrade_ram: 1, upgrade_storage: 1, category: 'mainstream', year: 2022 },
    { name: 'HP Pavilion 14-ec1037AU', brand: 'HP', harga: 12500000, ram: 16, ssd: 512, baterai: 9, processor: 'AMD Ryzen 7 5825U', gpu: 'AMD Radeon Graphics', upgrade_ram: 1, upgrade_storage: 1, category: 'mainstream', year: 2022 },
    { name: 'HP Pavilion 15-eg2074TX', brand: 'HP', harga: 14500000, ram: 8, ssd: 512, baterai: 7, processor: 'Intel Core i7-1255U', gpu: 'NVIDIA GeForce MX550', upgrade_ram: 1, upgrade_storage: 1, category: 'mainstream', year: 2022 },
    { name: 'HP Pavilion x360 14-dy2073TU', brand: 'HP', harga: 13500000, ram: 8, ssd: 512, baterai: 8, processor: 'Intel Core i5-1235U', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'mainstream', year: 2022 },
    { name: 'HP Pavilion Plus 14-eh1004TU', brand: 'HP', harga: 16500000, ram: 16, ssd: 512, baterai: 10, processor: 'Intel Core i7-13700H', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2023 },
    { name: 'HP Pavilion Aero 13-be2003AU', brand: 'HP', harga: 15500000, ram: 16, ssd: 512, baterai: 11, processor: 'AMD Ryzen 7 7735U', gpu: 'AMD Radeon Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2023 },
    
    // Envy Series
    { name: 'HP Envy 13-ba1505TX', brand: 'HP', harga: 16500000, ram: 8, ssd: 512, baterai: 11, processor: 'Intel Core i5-1135G7', gpu: 'NVIDIA GeForce MX450', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2021 },
    { name: 'HP Envy 14-eb0007TX', brand: 'HP', harga: 19500000, ram: 16, ssd: 512, baterai: 11, processor: 'Intel Core i7-1165G7', gpu: 'NVIDIA GeForce GTX 1650 Ti', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2021 },
    { name: 'HP Envy 16-h1011TX', brand: 'HP', harga: 28500000, ram: 16, ssd: 1024, baterai: 8, processor: 'Intel Core i7-13700H', gpu: 'NVIDIA GeForce RTX 4060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'premium', year: 2023 },
    { name: 'HP Envy x360 13-bf0008TU', brand: 'HP', harga: 18500000, ram: 16, ssd: 512, baterai: 12, processor: 'Intel Core i7-1250U', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2022 },
    { name: 'HP Envy x360 14-fc0023TU', brand: 'HP', harga: 22500000, ram: 16, ssd: 1024, baterai: 12, processor: 'Intel Core Ultra 7 155U', gpu: 'Intel Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2024 },
    { name: 'HP Envy x360 15-ey0008AU', brand: 'HP', harga: 17500000, ram: 16, ssd: 512, baterai: 10, processor: 'AMD Ryzen 7 5825U', gpu: 'AMD Radeon Graphics', upgrade_ram: 1, upgrade_storage: 1, category: 'premium', year: 2022 },
    
    // Spectre Series
    { name: 'HP Spectre x360 13-aw2106TU', brand: 'HP', harga: 24500000, ram: 16, ssd: 512, baterai: 14, processor: 'Intel Core i7-1165G7', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2021 },
    { name: 'HP Spectre x360 14-ef0023TU', brand: 'HP', harga: 28500000, ram: 16, ssd: 1024, baterai: 14, processor: 'Intel Core i7-1255U', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2022 },
    { name: 'HP Spectre x360 14-eu0023TU', brand: 'HP', harga: 32500000, ram: 32, ssd: 1024, baterai: 16, processor: 'Intel Core Ultra 7 155H', gpu: 'Intel Arc Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2024 },
    { name: 'HP Spectre x360 16-f1023TX', brand: 'HP', harga: 32500000, ram: 16, ssd: 1024, baterai: 12, processor: 'Intel Core i7-12700H', gpu: 'Intel Arc A370M', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2022 },
    
    // Omen Series (Gaming)
    { name: 'HP Omen 15-ek1006TX', brand: 'HP', harga: 18500000, ram: 16, ssd: 512, baterai: 5, processor: 'Intel Core i7-10750H', gpu: 'NVIDIA GeForce RTX 3060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2021 },
    { name: 'HP Omen 16-b1027TX', brand: 'HP', harga: 22500000, ram: 16, ssd: 1024, baterai: 6, processor: 'Intel Core i7-12700H', gpu: 'NVIDIA GeForce RTX 3060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2022 },
    { name: 'HP Omen 16-n0006AX', brand: 'HP', harga: 24500000, ram: 16, ssd: 1024, baterai: 6, processor: 'AMD Ryzen 7 6800H', gpu: 'NVIDIA GeForce RTX 3070 Ti Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2022 },
    { name: 'HP Omen Transcend 14-fb0027TX', brand: 'HP', harga: 28500000, ram: 16, ssd: 1024, baterai: 9, processor: 'Intel Core Ultra 7 155H', gpu: 'NVIDIA GeForce RTX 4060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2024 },
    { name: 'HP Omen 16-xf0023AX', brand: 'HP', harga: 28500000, ram: 16, ssd: 1024, baterai: 6, processor: 'AMD Ryzen 7 8845HS', gpu: 'NVIDIA GeForce RTX 4070 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2024 },
    { name: 'HP Omen 17-ck2024TX', brand: 'HP', harga: 38500000, ram: 32, ssd: 1024, baterai: 6, processor: 'Intel Core i9-13900HX', gpu: 'NVIDIA GeForce RTX 4080 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'HP Victus 16-d1023TX', brand: 'HP', harga: 16500000, ram: 8, ssd: 512, baterai: 5, processor: 'Intel Core i5-12500H', gpu: 'NVIDIA GeForce RTX 3050 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2022 },
    { name: 'HP Victus 16-r0023TX', brand: 'HP', harga: 18500000, ram: 16, ssd: 512, baterai: 5, processor: 'Intel Core i5-13420H', gpu: 'NVIDIA GeForce RTX 4050 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2024 },
    { name: 'HP Victus 16-s0023AX', brand: 'HP', harga: 17500000, ram: 16, ssd: 512, baterai: 5, processor: 'AMD Ryzen 5 7640HS', gpu: 'NVIDIA GeForce RTX 4050 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2024 },
    
    // EliteBook & ProBook (Business)
    { name: 'HP ProBook 440 G9', brand: 'HP', harga: 13500000, ram: 8, ssd: 512, baterai: 9, processor: 'Intel Core i5-1235U', gpu: 'Intel Iris Xe', upgrade_ram: 1, upgrade_storage: 1, category: 'business', year: 2022 },
    { name: 'HP ProBook 450 G10', brand: 'HP', harga: 15500000, ram: 16, ssd: 512, baterai: 9, processor: 'Intel Core i7-1355U', gpu: 'Intel Iris Xe', upgrade_ram: 1, upgrade_storage: 1, category: 'business', year: 2023 },
    { name: 'HP EliteBook 840 G9', brand: 'HP', harga: 22500000, ram: 16, ssd: 512, baterai: 13, processor: 'Intel Core i7-1255U', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'business', year: 2022 },
    { name: 'HP EliteBook 845 G10', brand: 'HP', harga: 24500000, ram: 16, ssd: 512, baterai: 14, processor: 'AMD Ryzen 7 7840U', gpu: 'AMD Radeon Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'business', year: 2023 },
    { name: 'HP EliteBook 860 G11', brand: 'HP', harga: 28500000, ram: 32, ssd: 1024, baterai: 14, processor: 'Intel Core Ultra 7 165U', gpu: 'Intel Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'business', year: 2024 },
    { name: 'HP EliteBook x360 1040 G10', brand: 'HP', harga: 34500000, ram: 16, ssd: 512, baterai: 13, processor: 'Intel Core i7-1365U', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'business', year: 2023 },
    { name: 'HP ZBook Firefly 14 G10', brand: 'HP', harga: 32500000, ram: 16, ssd: 512, baterai: 12, processor: 'Intel Core i7-1365U', gpu: 'NVIDIA RTX A500', upgrade_ram: 0, upgrade_storage: 1, category: 'workstation', year: 2023 },
    { name: 'HP ZBook Studio 16 G10', brand: 'HP', harga: 48500000, ram: 32, ssd: 1024, baterai: 7, processor: 'Intel Core i7-13700H', gpu: 'NVIDIA RTX 4000 Ada', upgrade_ram: 0, upgrade_storage: 1, category: 'workstation', year: 2023 },
    { name: 'HP ZBook Power 16 G11', brand: 'HP', harga: 38500000, ram: 32, ssd: 1024, baterai: 8, processor: 'Intel Core Ultra 7 165H', gpu: 'NVIDIA RTX 2000 Ada', upgrade_ram: 1, upgrade_storage: 1, category: 'workstation', year: 2024 },
    
    // ============================================
    // DELL
    // ============================================
    // Inspiron Series
    { name: 'Dell Inspiron 14 3520', brand: 'Dell', harga: 8500000, ram: 8, ssd: 256, baterai: 6, processor: 'Intel Core i3-1215U', gpu: 'Intel UHD Graphics', upgrade_ram: 1, upgrade_storage: 1, category: 'budget', year: 2022 },
    { name: 'Dell Inspiron 14 3525', brand: 'Dell', harga: 8800000, ram: 8, ssd: 512, baterai: 7, processor: 'AMD Ryzen 5 5625U', gpu: 'AMD Radeon Graphics', upgrade_ram: 1, upgrade_storage: 1, category: 'budget', year: 2022 },
    { name: 'Dell Inspiron 15 3520', brand: 'Dell', harga: 9500000, ram: 8, ssd: 512, baterai: 6, processor: 'Intel Core i5-1235U', gpu: 'Intel Iris Xe', upgrade_ram: 1, upgrade_storage: 1, category: 'mainstream', year: 2022 },
    { name: 'Dell Inspiron 14 5420', brand: 'Dell', harga: 12500000, ram: 8, ssd: 512, baterai: 7, processor: 'Intel Core i5-1240P', gpu: 'Intel Iris Xe', upgrade_ram: 1, upgrade_storage: 1, category: 'mainstream', year: 2022 },
    { name: 'Dell Inspiron 14 5430', brand: 'Dell', harga: 14500000, ram: 16, ssd: 512, baterai: 7, processor: 'Intel Core i7-1355U', gpu: 'Intel Iris Xe', upgrade_ram: 1, upgrade_storage: 1, category: 'mainstream', year: 2023 },
    { name: 'Dell Inspiron 14 Plus 7420', brand: 'Dell', harga: 16500000, ram: 16, ssd: 512, baterai: 8, processor: 'Intel Core i7-12700H', gpu: 'NVIDIA GeForce RTX 3050', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2022 },
    { name: 'Dell Inspiron 16 5630', brand: 'Dell', harga: 15500000, ram: 16, ssd: 512, baterai: 8, processor: 'Intel Core i5-1340P', gpu: 'Intel Iris Xe', upgrade_ram: 1, upgrade_storage: 1, category: 'mainstream', year: 2023 },
    { name: 'Dell Inspiron 16 7630 2-in-1', brand: 'Dell', harga: 19500000, ram: 16, ssd: 1024, baterai: 9, processor: 'Intel Core i7-1360P', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2023 },
    
    // XPS Series
    { name: 'Dell XPS 13 9310', brand: 'Dell', harga: 22500000, ram: 16, ssd: 512, baterai: 12, processor: 'Intel Core i7-1185G7', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 0, category: 'premium', year: 2021 },
    { name: 'Dell XPS 13 9315', brand: 'Dell', harga: 24500000, ram: 16, ssd: 512, baterai: 12, processor: 'Intel Core i7-1250U', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 0, category: 'premium', year: 2022 },
    { name: 'Dell XPS 13 Plus 9320', brand: 'Dell', harga: 28500000, ram: 16, ssd: 512, baterai: 12, processor: 'Intel Core i7-1280P', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 0, category: 'premium', year: 2022 },
    { name: 'Dell XPS 13 9340', brand: 'Dell', harga: 32500000, ram: 16, ssd: 1024, baterai: 13, processor: 'Intel Core Ultra 7 155H', gpu: 'Intel Arc Graphics', upgrade_ram: 0, upgrade_storage: 0, category: 'premium', year: 2024 },
    { name: 'Dell XPS 14 9440', brand: 'Dell', harga: 38500000, ram: 16, ssd: 1024, baterai: 13, processor: 'Intel Core Ultra 7 155H', gpu: 'NVIDIA GeForce RTX 4050 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2024 },
    { name: 'Dell XPS 15 9520', brand: 'Dell', harga: 32500000, ram: 16, ssd: 512, baterai: 8, processor: 'Intel Core i7-12700H', gpu: 'NVIDIA GeForce RTX 3050', upgrade_ram: 1, upgrade_storage: 1, category: 'premium', year: 2022 },
    { name: 'Dell XPS 15 9530', brand: 'Dell', harga: 36500000, ram: 16, ssd: 512, baterai: 9, processor: 'Intel Core i7-13700H', gpu: 'NVIDIA GeForce RTX 4050 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'premium', year: 2023 },
    { name: 'Dell XPS 16 9640', brand: 'Dell', harga: 48500000, ram: 32, ssd: 1024, baterai: 11, processor: 'Intel Core Ultra 9 185H', gpu: 'NVIDIA GeForce RTX 4070 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2024 },
    { name: 'Dell XPS 17 9730', brand: 'Dell', harga: 42500000, ram: 32, ssd: 1024, baterai: 9, processor: 'Intel Core i7-13700H', gpu: 'NVIDIA GeForce RTX 4060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'premium', year: 2023 },
    
    // Latitude Series
    { name: 'Dell Latitude 3420', brand: 'Dell', harga: 11500000, ram: 8, ssd: 256, baterai: 8, processor: 'Intel Core i5-1135G7', gpu: 'Intel Iris Xe', upgrade_ram: 1, upgrade_storage: 1, category: 'business', year: 2021 },
    { name: 'Dell Latitude 3440', brand: 'Dell', harga: 13500000, ram: 8, ssd: 512, baterai: 9, processor: 'Intel Core i5-1335U', gpu: 'Intel Iris Xe', upgrade_ram: 1, upgrade_storage: 1, category: 'business', year: 2023 },
    { name: 'Dell Latitude 5430', brand: 'Dell', harga: 16500000, ram: 8, ssd: 512, baterai: 10, processor: 'Intel Core i5-1235U', gpu: 'Intel Iris Xe', upgrade_ram: 1, upgrade_storage: 1, category: 'business', year: 2022 },
    { name: 'Dell Latitude 5440', brand: 'Dell', harga: 18500000, ram: 16, ssd: 512, baterai: 11, processor: 'Intel Core i7-1355U', gpu: 'Intel Iris Xe', upgrade_ram: 1, upgrade_storage: 1, category: 'business', year: 2023 },
    { name: 'Dell Latitude 7430', brand: 'Dell', harga: 24500000, ram: 16, ssd: 512, baterai: 14, processor: 'Intel Core i7-1265U', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'business', year: 2022 },
    { name: 'Dell Latitude 7440', brand: 'Dell', harga: 26500000, ram: 16, ssd: 512, baterai: 15, processor: 'Intel Core i7-1365U', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'business', year: 2023 },
    { name: 'Dell Latitude 9440', brand: 'Dell', harga: 38500000, ram: 16, ssd: 512, baterai: 13, processor: 'Intel Core i7-1365U', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'business', year: 2023 },
    { name: 'Dell Precision 5560', brand: 'Dell', harga: 36500000, ram: 32, ssd: 1024, baterai: 9, processor: 'Intel Core i7-11800H', gpu: 'NVIDIA RTX A2000', upgrade_ram: 1, upgrade_storage: 1, category: 'workstation', year: 2021 },
    { name: 'Dell Precision 7680', brand: 'Dell', harga: 65000000, ram: 64, ssd: 2048, baterai: 7, processor: 'Intel Core i9-13950HX', gpu: 'NVIDIA RTX 5000 Ada', upgrade_ram: 1, upgrade_storage: 1, category: 'workstation', year: 2023 },
    
    // Alienware & G Series (Gaming)
    { name: 'Dell G15 5511', brand: 'Dell', harga: 15500000, ram: 8, ssd: 512, baterai: 5, processor: 'Intel Core i7-11800H', gpu: 'NVIDIA GeForce RTX 3050', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2021 },
    { name: 'Dell G15 5520', brand: 'Dell', harga: 18500000, ram: 16, ssd: 512, baterai: 6, processor: 'Intel Core i7-12700H', gpu: 'NVIDIA GeForce RTX 3060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2022 },
    { name: 'Dell G15 5530', brand: 'Dell', harga: 22500000, ram: 16, ssd: 1024, baterai: 6, processor: 'Intel Core i7-13650HX', gpu: 'NVIDIA GeForce RTX 4060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'Dell G16 7630', brand: 'Dell', harga: 28500000, ram: 16, ssd: 1024, baterai: 6, processor: 'Intel Core i9-13900HX', gpu: 'NVIDIA GeForce RTX 4070 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'Dell Alienware m15 R6', brand: 'Dell', harga: 28500000, ram: 16, ssd: 512, baterai: 6, processor: 'Intel Core i7-11800H', gpu: 'NVIDIA GeForce RTX 3070 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2021 },
    { name: 'Dell Alienware x14', brand: 'Dell', harga: 32500000, ram: 16, ssd: 512, baterai: 5, processor: 'Intel Core i7-12700H', gpu: 'NVIDIA GeForce RTX 3060 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'gaming', year: 2022 },
    { name: 'Dell Alienware x16 R1', brand: 'Dell', harga: 48500000, ram: 32, ssd: 1024, baterai: 6, processor: 'Intel Core i9-13900HK', gpu: 'NVIDIA GeForce RTX 4080 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'Dell Alienware m18 R2', brand: 'Dell', harga: 65000000, ram: 32, ssd: 2048, baterai: 6, processor: 'Intel Core i9-14900HX', gpu: 'NVIDIA GeForce RTX 4090 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2024 },
    { name: 'Dell Alienware m16 R2', brand: 'Dell', harga: 38500000, ram: 32, ssd: 1024, baterai: 6, processor: 'Intel Core Ultra 9 185H', gpu: 'NVIDIA GeForce RTX 4070 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'gaming', year: 2024 },

    // ============================================
    // ACER
    // ============================================
    // Aspire Series (Budget/Mainstream)
    { name: 'Acer Aspire 3 A314-22', brand: 'Acer', harga: 6500000, ram: 4, ssd: 256, baterai: 7, processor: 'AMD Ryzen 3 3250U', gpu: 'AMD Radeon Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'budget', year: 2021 },
    { name: 'Acer Aspire 3 A315-58', brand: 'Acer', harga: 7000000, ram: 4, ssd: 256, baterai: 7, processor: 'Intel Core i3-1115G4', gpu: 'Intel UHD Graphics', upgrade_ram: 1, upgrade_storage: 1, category: 'budget', year: 2021 },
    { name: 'Acer Aspire 3 A315-510P', brand: 'Acer', harga: 7800000, ram: 8, ssd: 512, baterai: 8, processor: 'Intel Core i3-N305', gpu: 'Intel UHD Graphics', upgrade_ram: 1, upgrade_storage: 1, category: 'budget', year: 2023 },
    { name: 'Acer Aspire 5 A514-54', brand: 'Acer', harga: 9500000, ram: 8, ssd: 512, baterai: 8, processor: 'Intel Core i5-1135G7', gpu: 'Intel Iris Xe', upgrade_ram: 1, upgrade_storage: 1, category: 'mainstream', year: 2021 },
    { name: 'Acer Aspire 5 A514-55', brand: 'Acer', harga: 10500000, ram: 8, ssd: 512, baterai: 8, processor: 'Intel Core i5-1235U', gpu: 'Intel Iris Xe', upgrade_ram: 1, upgrade_storage: 1, category: 'mainstream', year: 2022 },
    { name: 'Acer Aspire 5 A515-57', brand: 'Acer', harga: 11500000, ram: 8, ssd: 512, baterai: 7, processor: 'Intel Core i7-1255U', gpu: 'Intel Iris Xe', upgrade_ram: 1, upgrade_storage: 1, category: 'mainstream', year: 2022 },
    { name: 'Acer Aspire 7 A715-76G', brand: 'Acer', harga: 14500000, ram: 16, ssd: 512, baterai: 6, processor: 'Intel Core i5-12450H', gpu: 'NVIDIA GeForce RTX 2050', upgrade_ram: 1, upgrade_storage: 1, category: 'mainstream', year: 2022 },
    { name: 'Acer Aspire Lite AL14-31P', brand: 'Acer', harga: 8500000, ram: 8, ssd: 512, baterai: 7, processor: 'Intel Core i3-N305', gpu: 'Intel UHD Graphics', upgrade_ram: 1, upgrade_storage: 1, category: 'budget', year: 2023 },
    { name: 'Acer Aspire Vero AV14-51', brand: 'Acer', harga: 13500000, ram: 16, ssd: 512, baterai: 9, processor: 'Intel Core i7-1255U', gpu: 'Intel Iris Xe', upgrade_ram: 1, upgrade_storage: 1, category: 'mainstream', year: 2022 },
    { name: 'Acer Aspire Go 14 AG14-21P', brand: 'Acer', harga: 7500000, ram: 8, ssd: 512, baterai: 8, processor: 'AMD Ryzen 5 7520U', gpu: 'AMD Radeon Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'budget', year: 2024 },
    
    // Swift Series (Ultrabook)
    { name: 'Acer Swift 3 SF314-43', brand: 'Acer', harga: 12500000, ram: 8, ssd: 512, baterai: 11, processor: 'AMD Ryzen 7 5700U', gpu: 'AMD Radeon Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'mainstream', year: 2021 },
    { name: 'Acer Swift 3 SF314-512', brand: 'Acer', harga: 13500000, ram: 8, ssd: 512, baterai: 12, processor: 'Intel Core i5-1240P', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'mainstream', year: 2022 },
    { name: 'Acer Swift 5 SF514-56T', brand: 'Acer', harga: 19500000, ram: 16, ssd: 512, baterai: 10, processor: 'Intel Core i7-1260P', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2022 },
    { name: 'Acer Swift Edge SFE16-42', brand: 'Acer', harga: 18500000, ram: 16, ssd: 1024, baterai: 11, processor: 'AMD Ryzen 7 6800U', gpu: 'AMD Radeon Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2022 },
    { name: 'Acer Swift Go 14 SFG14-71', brand: 'Acer', harga: 14500000, ram: 16, ssd: 512, baterai: 12, processor: 'Intel Core i7-13700H', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2023 },
    { name: 'Acer Swift Go 14 SFG14-73', brand: 'Acer', harga: 17500000, ram: 16, ssd: 1024, baterai: 13, processor: 'Intel Core Ultra 7 155H', gpu: 'Intel Arc Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2024 },
    { name: 'Acer Swift X SFX14-41G', brand: 'Acer', harga: 17500000, ram: 16, ssd: 512, baterai: 9, processor: 'AMD Ryzen 7 5800U', gpu: 'NVIDIA GeForce RTX 3050 Ti', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2021 },
    { name: 'Acer Swift X 14 SFX14-71G', brand: 'Acer', harga: 22500000, ram: 16, ssd: 1024, baterai: 8, processor: 'Intel Core i7-13700H', gpu: 'NVIDIA GeForce RTX 4050 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2023 },
    
    // Predator & Nitro Series (Gaming)
    { name: 'Acer Nitro 5 AN515-45', brand: 'Acer', harga: 14500000, ram: 8, ssd: 512, baterai: 5, processor: 'AMD Ryzen 7 5800H', gpu: 'NVIDIA GeForce RTX 3060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2021 },
    { name: 'Acer Nitro 5 AN515-57', brand: 'Acer', harga: 15500000, ram: 8, ssd: 512, baterai: 5, processor: 'Intel Core i5-11400H', gpu: 'NVIDIA GeForce RTX 3050', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2021 },
    { name: 'Acer Nitro 5 AN515-58', brand: 'Acer', harga: 16500000, ram: 8, ssd: 512, baterai: 6, processor: 'Intel Core i5-12500H', gpu: 'NVIDIA GeForce RTX 3050', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2022 },
    { name: 'Acer Nitro V 15 ANV15-51', brand: 'Acer', harga: 15500000, ram: 8, ssd: 512, baterai: 5, processor: 'Intel Core i5-13420H', gpu: 'NVIDIA GeForce RTX 4050 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'Acer Nitro 16 AN16-41', brand: 'Acer', harga: 18500000, ram: 16, ssd: 512, baterai: 6, processor: 'AMD Ryzen 7 7840HS', gpu: 'NVIDIA GeForce RTX 4060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'Acer Nitro 17 AN17-41', brand: 'Acer', harga: 22500000, ram: 16, ssd: 1024, baterai: 6, processor: 'AMD Ryzen 7 7840HS', gpu: 'NVIDIA GeForce RTX 4070 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'Acer Predator Helios 300 PH315-54', brand: 'Acer', harga: 22500000, ram: 16, ssd: 512, baterai: 6, processor: 'Intel Core i7-11800H', gpu: 'NVIDIA GeForce RTX 3060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2021 },
    { name: 'Acer Predator Helios 16 PH16-71', brand: 'Acer', harga: 32500000, ram: 16, ssd: 1024, baterai: 6, processor: 'Intel Core i9-13900HX', gpu: 'NVIDIA GeForce RTX 4070 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'Acer Predator Helios Neo 16 PHN16-71', brand: 'Acer', harga: 26500000, ram: 16, ssd: 1024, baterai: 6, processor: 'Intel Core i7-13700HX', gpu: 'NVIDIA GeForce RTX 4060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'Acer Predator Helios 18 PH18-71', brand: 'Acer', harga: 42500000, ram: 32, ssd: 1024, baterai: 6, processor: 'Intel Core i9-13900HX', gpu: 'NVIDIA GeForce RTX 4080 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'Acer Predator Triton 14 PT14-51', brand: 'Acer', harga: 32500000, ram: 16, ssd: 1024, baterai: 8, processor: 'Intel Core i7-13700H', gpu: 'NVIDIA GeForce RTX 4070 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'Acer Predator Triton 16 PT16-51', brand: 'Acer', harga: 36500000, ram: 16, ssd: 1024, baterai: 8, processor: 'Intel Core i7-13700H', gpu: 'NVIDIA GeForce RTX 4070 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'Acer Predator Triton 17 X', brand: 'Acer', harga: 65000000, ram: 32, ssd: 2048, baterai: 6, processor: 'Intel Core i9-13900HX', gpu: 'NVIDIA GeForce RTX 4090 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    
    // ConceptD (Creator)
    { name: 'Acer ConceptD 7 CN715-72G', brand: 'Acer', harga: 38500000, ram: 32, ssd: 1024, baterai: 6, processor: 'Intel Core i7-10875H', gpu: 'NVIDIA GeForce RTX 3070 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'workstation', year: 2021 },
    { name: 'Acer ConceptD 5 CN515-71P', brand: 'Acer', harga: 32500000, ram: 16, ssd: 1024, baterai: 7, processor: 'Intel Core i7-9750H', gpu: 'NVIDIA Quadro T1000', upgrade_ram: 1, upgrade_storage: 1, category: 'workstation', year: 2021 },
    
    // ============================================
    // MSI
    // ============================================
    // Modern Series (Business/Mainstream)
    { name: 'MSI Modern 14 B11MOU', brand: 'MSI', harga: 8500000, ram: 8, ssd: 256, baterai: 8, processor: 'Intel Core i3-1115G4', gpu: 'Intel UHD Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'budget', year: 2021 },
    { name: 'MSI Modern 14 C12M', brand: 'MSI', harga: 11500000, ram: 8, ssd: 512, baterai: 8, processor: 'Intel Core i5-1235U', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'mainstream', year: 2022 },
    { name: 'MSI Modern 14 C13M', brand: 'MSI', harga: 13500000, ram: 16, ssd: 512, baterai: 8, processor: 'Intel Core i7-1355U', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'mainstream', year: 2023 },
    { name: 'MSI Modern 15 B12M', brand: 'MSI', harga: 12500000, ram: 8, ssd: 512, baterai: 8, processor: 'Intel Core i5-1235U', gpu: 'Intel Iris Xe', upgrade_ram: 1, upgrade_storage: 1, category: 'mainstream', year: 2022 },
    { name: 'MSI Modern 15 H AI C1MHL', brand: 'MSI', harga: 16500000, ram: 16, ssd: 512, baterai: 9, processor: 'Intel Core Ultra 5 125H', gpu: 'Intel Arc Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2024 },
    
    // Prestige Series (Premium/Creator)
    { name: 'MSI Prestige 14 A12SC', brand: 'MSI', harga: 18500000, ram: 16, ssd: 1024, baterai: 11, processor: 'Intel Core i7-1280P', gpu: 'NVIDIA GeForce GTX 1650', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2022 },
    { name: 'MSI Prestige 14 Evo B13M', brand: 'MSI', harga: 18500000, ram: 16, ssd: 512, baterai: 12, processor: 'Intel Core i7-13700H', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2023 },
    { name: 'MSI Prestige 16 AI Evo B1MG', brand: 'MSI', harga: 24500000, ram: 32, ssd: 1024, baterai: 11, processor: 'Intel Core Ultra 7 155H', gpu: 'Intel Arc Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2024 },
    { name: 'MSI Prestige 16 Studio Evo A13UCX', brand: 'MSI', harga: 28500000, ram: 32, ssd: 1024, baterai: 9, processor: 'Intel Core i7-13700H', gpu: 'NVIDIA GeForce RTX 4050 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2023 },
    { name: 'MSI Creator Z16 HX Studio A13V', brand: 'MSI', harga: 38500000, ram: 32, ssd: 1024, baterai: 8, processor: 'Intel Core i9-13950HX', gpu: 'NVIDIA GeForce RTX 4070 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'workstation', year: 2023 },
    { name: 'MSI Creator M16 B13V', brand: 'MSI', harga: 24500000, ram: 32, ssd: 1024, baterai: 8, processor: 'Intel Core i7-13700H', gpu: 'NVIDIA GeForce RTX 4060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'workstation', year: 2023 },
    
    // Cyborg/Thin/Pulse/Sword (Gaming)
    { name: 'MSI Cyborg 15 A12VE', brand: 'MSI', harga: 14500000, ram: 8, ssd: 512, baterai: 5, processor: 'Intel Core i7-12650H', gpu: 'NVIDIA GeForce RTX 4050 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'MSI Cyborg 15 A13VE', brand: 'MSI', harga: 16500000, ram: 8, ssd: 512, baterai: 5, processor: 'Intel Core i7-13620H', gpu: 'NVIDIA GeForce RTX 4060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'MSI Thin 15 B12UCX', brand: 'MSI', harga: 13500000, ram: 8, ssd: 512, baterai: 5, processor: 'Intel Core i5-12450H', gpu: 'NVIDIA GeForce RTX 2050', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'MSI Pulse 15 B13V', brand: 'MSI', harga: 22500000, ram: 16, ssd: 1024, baterai: 6, processor: 'Intel Core i7-13700H', gpu: 'NVIDIA GeForce RTX 4060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'MSI Sword 15 A11UE', brand: 'MSI', harga: 17500000, ram: 8, ssd: 512, baterai: 5, processor: 'Intel Core i7-11800H', gpu: 'NVIDIA GeForce RTX 3060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2021 },
    { name: 'MSI Sword 17 HX A14V', brand: 'MSI', harga: 26500000, ram: 16, ssd: 1024, baterai: 6, processor: 'Intel Core i9-14900HX', gpu: 'NVIDIA GeForce RTX 4070 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2024 },
    { name: 'MSI Katana 15 B13V', brand: 'MSI', harga: 18500000, ram: 16, ssd: 512, baterai: 6, processor: 'Intel Core i7-13620H', gpu: 'NVIDIA GeForce RTX 4060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'MSI Katana A15 AI B8VE', brand: 'MSI', harga: 18500000, ram: 16, ssd: 512, baterai: 5, processor: 'AMD Ryzen 7 8745HS', gpu: 'NVIDIA GeForce RTX 4060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2024 },
    { name: 'MSI Vector 16 HX AI A2X', brand: 'MSI', harga: 32500000, ram: 32, ssd: 1024, baterai: 6, processor: 'Intel Core Ultra 9 275HX', gpu: 'NVIDIA GeForce RTX 5070 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2025 },
    { name: 'MSI Stealth 14 AI Studio A1V', brand: 'MSI', harga: 32500000, ram: 32, ssd: 1024, baterai: 7, processor: 'Intel Core Ultra 7 155H', gpu: 'NVIDIA GeForce RTX 4060 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'gaming', year: 2024 },
    { name: 'MSI Stealth 15M B12U', brand: 'MSI', harga: 24500000, ram: 16, ssd: 512, baterai: 7, processor: 'Intel Core i7-1280H', gpu: 'NVIDIA GeForce RTX 3060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2022 },
    { name: 'MSI Stealth 16 AI Studio A1V', brand: 'MSI', harga: 38500000, ram: 32, ssd: 1024, baterai: 7, processor: 'Intel Core Ultra 9 185H', gpu: 'NVIDIA GeForce RTX 4070 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'gaming', year: 2024 },
    { name: 'MSI Raider GE68HX 14V', brand: 'MSI', harga: 42500000, ram: 32, ssd: 1024, baterai: 6, processor: 'Intel Core i9-14900HX', gpu: 'NVIDIA GeForce RTX 4080 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2024 },
    { name: 'MSI Raider GE78HX 14V', brand: 'MSI', harga: 48500000, ram: 32, ssd: 2048, baterai: 6, processor: 'Intel Core i9-14900HX', gpu: 'NVIDIA GeForce RTX 4090 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2024 },
    { name: 'MSI Titan GT77 HX 13V', brand: 'MSI', harga: 75000000, ram: 64, ssd: 2048, baterai: 6, processor: 'Intel Core i9-13980HX', gpu: 'NVIDIA GeForce RTX 4090 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'MSI Titan 18 HX A14V', brand: 'MSI', harga: 85000000, ram: 64, ssd: 4096, baterai: 6, processor: 'Intel Core i9-14900HX', gpu: 'NVIDIA GeForce RTX 4090 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2024 },
    { name: 'MSI Crosshair 15 B12U', brand: 'MSI', harga: 18500000, ram: 16, ssd: 512, baterai: 6, processor: 'Intel Core i7-12700H', gpu: 'NVIDIA GeForce RTX 3060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2022 },
    { name: 'MSI Bravo 15 B5DD', brand: 'MSI', harga: 11500000, ram: 8, ssd: 512, baterai: 5, processor: 'AMD Ryzen 5 5600H', gpu: 'AMD Radeon RX 5500M', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2021 },
    { name: 'MSI Bravo 15 C7VF', brand: 'MSI', harga: 17500000, ram: 16, ssd: 512, baterai: 6, processor: 'AMD Ryzen 7 7735HS', gpu: 'NVIDIA GeForce RTX 4060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'MSI Alpha 15 B5EE', brand: 'MSI', harga: 14500000, ram: 8, ssd: 512, baterai: 6, processor: 'AMD Ryzen 5 5600H', gpu: 'AMD Radeon RX 6600M', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2021 },
    { name: 'MSI Alpha 17 C7VG', brand: 'MSI', harga: 28500000, ram: 16, ssd: 1024, baterai: 6, processor: 'AMD Ryzen 9 7945HX', gpu: 'NVIDIA GeForce RTX 4070 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },

    // ============================================
    // APPLE
    // ============================================
    // MacBook Air
    { name: 'Apple MacBook Air M1 13 (2020)', brand: 'Apple', harga: 14500000, ram: 8, ssd: 256, baterai: 18, processor: 'Apple M1 (8-Core)', gpu: 'Apple M1 GPU (7-Core)', upgrade_ram: 0, upgrade_storage: 0, category: 'premium', year: 2020 },
    { name: 'Apple MacBook Air M2 13 (2022)', brand: 'Apple', harga: 17500000, ram: 8, ssd: 256, baterai: 18, processor: 'Apple M2 (8-Core)', gpu: 'Apple M2 GPU (8-Core)', upgrade_ram: 0, upgrade_storage: 0, category: 'premium', year: 2022 },
    { name: 'Apple MacBook Air M2 15 (2023)', brand: 'Apple', harga: 22500000, ram: 8, ssd: 256, baterai: 18, processor: 'Apple M2 (8-Core)', gpu: 'Apple M2 GPU (10-Core)', upgrade_ram: 0, upgrade_storage: 0, category: 'premium', year: 2023 },
    { name: 'Apple MacBook Air M3 13 (2024)', brand: 'Apple', harga: 19500000, ram: 8, ssd: 256, baterai: 18, processor: 'Apple M3 (8-Core)', gpu: 'Apple M3 GPU (8-Core)', upgrade_ram: 0, upgrade_storage: 0, category: 'premium', year: 2024 },
    { name: 'Apple MacBook Air M3 15 (2024)', brand: 'Apple', harga: 24500000, ram: 8, ssd: 256, baterai: 18, processor: 'Apple M3 (8-Core)', gpu: 'Apple M3 GPU (10-Core)', upgrade_ram: 0, upgrade_storage: 0, category: 'premium', year: 2024 },
    { name: 'Apple MacBook Air M4 13 (2025)', brand: 'Apple', harga: 21500000, ram: 16, ssd: 256, baterai: 18, processor: 'Apple M4 (10-Core)', gpu: 'Apple M4 GPU (8-Core)', upgrade_ram: 0, upgrade_storage: 0, category: 'premium', year: 2025 },
    { name: 'Apple MacBook Air M4 15 (2025)', brand: 'Apple', harga: 26500000, ram: 16, ssd: 256, baterai: 18, processor: 'Apple M4 (10-Core)', gpu: 'Apple M4 GPU (10-Core)', upgrade_ram: 0, upgrade_storage: 0, category: 'premium', year: 2025 },
    
    // MacBook Pro
    { name: 'Apple MacBook Pro M1 13 (2020)', brand: 'Apple', harga: 19500000, ram: 8, ssd: 256, baterai: 17, processor: 'Apple M1 (8-Core)', gpu: 'Apple M1 GPU (8-Core)', upgrade_ram: 0, upgrade_storage: 0, category: 'premium', year: 2020 },
    { name: 'Apple MacBook Pro M2 13 (2022)', brand: 'Apple', harga: 22500000, ram: 8, ssd: 256, baterai: 17, processor: 'Apple M2 (8-Core)', gpu: 'Apple M2 GPU (10-Core)', upgrade_ram: 0, upgrade_storage: 0, category: 'premium', year: 2022 },
    { name: 'Apple MacBook Pro M1 Pro 14 (2021)', brand: 'Apple', harga: 32500000, ram: 16, ssd: 512, baterai: 17, processor: 'Apple M1 Pro (10-Core)', gpu: 'Apple M1 Pro GPU (16-Core)', upgrade_ram: 0, upgrade_storage: 0, category: 'workstation', year: 2021 },
    { name: 'Apple MacBook Pro M1 Max 16 (2021)', brand: 'Apple', harga: 48500000, ram: 32, ssd: 1024, baterai: 21, processor: 'Apple M1 Max (10-Core)', gpu: 'Apple M1 Max GPU (32-Core)', upgrade_ram: 0, upgrade_storage: 0, category: 'workstation', year: 2021 },
    { name: 'Apple MacBook Pro M2 Pro 14 (2023)', brand: 'Apple', harga: 36500000, ram: 16, ssd: 512, baterai: 17, processor: 'Apple M2 Pro (10-Core)', gpu: 'Apple M2 Pro GPU (16-Core)', upgrade_ram: 0, upgrade_storage: 0, category: 'workstation', year: 2023 },
    { name: 'Apple MacBook Pro M2 Max 16 (2023)', brand: 'Apple', harga: 52500000, ram: 32, ssd: 1024, baterai: 22, processor: 'Apple M2 Max (12-Core)', gpu: 'Apple M2 Max GPU (38-Core)', upgrade_ram: 0, upgrade_storage: 0, category: 'workstation', year: 2023 },
    { name: 'Apple MacBook Pro M3 14 (2023)', brand: 'Apple', harga: 28500000, ram: 8, ssd: 512, baterai: 22, processor: 'Apple M3 (8-Core)', gpu: 'Apple M3 GPU (10-Core)', upgrade_ram: 0, upgrade_storage: 0, category: 'workstation', year: 2023 },
    { name: 'Apple MacBook Pro M3 Pro 14 (2023)', brand: 'Apple', harga: 38500000, ram: 18, ssd: 512, baterai: 18, processor: 'Apple M3 Pro (12-Core)', gpu: 'Apple M3 Pro GPU (18-Core)', upgrade_ram: 0, upgrade_storage: 0, category: 'workstation', year: 2023 },
    { name: 'Apple MacBook Pro M3 Max 16 (2023)', brand: 'Apple', harga: 58500000, ram: 36, ssd: 1024, baterai: 22, processor: 'Apple M3 Max (16-Core)', gpu: 'Apple M3 Max GPU (40-Core)', upgrade_ram: 0, upgrade_storage: 0, category: 'workstation', year: 2023 },
    { name: 'Apple MacBook Pro M4 14 (2024)', brand: 'Apple', harga: 28500000, ram: 16, ssd: 512, baterai: 24, processor: 'Apple M4 (10-Core)', gpu: 'Apple M4 GPU (10-Core)', upgrade_ram: 0, upgrade_storage: 0, category: 'workstation', year: 2024 },
    { name: 'Apple MacBook Pro M4 Pro 14 (2024)', brand: 'Apple', harga: 38500000, ram: 24, ssd: 512, baterai: 22, processor: 'Apple M4 Pro (12-Core)', gpu: 'Apple M4 Pro GPU (16-Core)', upgrade_ram: 0, upgrade_storage: 0, category: 'workstation', year: 2024 },
    { name: 'Apple MacBook Pro M4 Max 16 (2024)', brand: 'Apple', harga: 62500000, ram: 36, ssd: 1024, baterai: 24, processor: 'Apple M4 Max (16-Core)', gpu: 'Apple M4 Max GPU (40-Core)', upgrade_ram: 0, upgrade_storage: 0, category: 'workstation', year: 2024 },
    
    // ============================================
    // MICROSOFT SURFACE
    // ============================================
    { name: 'Microsoft Surface Laptop 4 13.5', brand: 'Microsoft', harga: 18500000, ram: 8, ssd: 256, baterai: 17, processor: 'Intel Core i5-1135G7', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 0, category: 'premium', year: 2021 },
    { name: 'Microsoft Surface Laptop 5 13.5', brand: 'Microsoft', harga: 22500000, ram: 8, ssd: 256, baterai: 18, processor: 'Intel Core i5-1235U', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 0, category: 'premium', year: 2022 },
    { name: 'Microsoft Surface Laptop 5 15', brand: 'Microsoft', harga: 28500000, ram: 16, ssd: 512, baterai: 17, processor: 'Intel Core i7-1255U', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 0, category: 'premium', year: 2022 },
    { name: 'Microsoft Surface Laptop 6 13.5', brand: 'Microsoft', harga: 28500000, ram: 16, ssd: 512, baterai: 19, processor: 'Intel Core Ultra 5 135H', gpu: 'Intel Arc Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2024 },
    { name: 'Microsoft Surface Laptop 7 13.8', brand: 'Microsoft', harga: 26500000, ram: 16, ssd: 256, baterai: 20, processor: 'Qualcomm Snapdragon X Elite X1E-80-100', gpu: 'Qualcomm Adreno', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2024 },
    { name: 'Microsoft Surface Laptop 7 15', brand: 'Microsoft', harga: 32500000, ram: 16, ssd: 512, baterai: 22, processor: 'Qualcomm Snapdragon X Elite X1E-80-100', gpu: 'Qualcomm Adreno', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2024 },
    { name: 'Microsoft Surface Laptop Studio 2', brand: 'Microsoft', harga: 38500000, ram: 16, ssd: 512, baterai: 19, processor: 'Intel Core i7-13800H', gpu: 'NVIDIA GeForce RTX 4050 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'workstation', year: 2023 },
    { name: 'Microsoft Surface Pro 8', brand: 'Microsoft', harga: 18500000, ram: 8, ssd: 128, baterai: 16, processor: 'Intel Core i5-1135G7', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2021 },
    { name: 'Microsoft Surface Pro 9', brand: 'Microsoft', harga: 22500000, ram: 8, ssd: 256, baterai: 15, processor: 'Intel Core i5-1235U', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2022 },
    { name: 'Microsoft Surface Pro 10', brand: 'Microsoft', harga: 26500000, ram: 16, ssd: 256, baterai: 19, processor: 'Intel Core Ultra 5 135U', gpu: 'Intel Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2024 },
    { name: 'Microsoft Surface Pro 11', brand: 'Microsoft', harga: 26500000, ram: 16, ssd: 256, baterai: 14, processor: 'Qualcomm Snapdragon X Elite X1E-80-100', gpu: 'Qualcomm Adreno', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2024 },
    
    // ============================================
    // RAZER
    // ============================================
    { name: 'Razer Blade 14 (2022)', brand: 'Razer', harga: 32500000, ram: 16, ssd: 1024, baterai: 7, processor: 'AMD Ryzen 9 6900HX', gpu: 'NVIDIA GeForce RTX 3070 Ti Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'gaming', year: 2022 },
    { name: 'Razer Blade 14 (2023)', brand: 'Razer', harga: 36500000, ram: 16, ssd: 1024, baterai: 8, processor: 'AMD Ryzen 9 7940HS', gpu: 'NVIDIA GeForce RTX 4070 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'Razer Blade 14 (2024)', brand: 'Razer', harga: 42500000, ram: 32, ssd: 1024, baterai: 8, processor: 'AMD Ryzen 9 8945HS', gpu: 'NVIDIA GeForce RTX 4070 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'gaming', year: 2024 },
    { name: 'Razer Blade 15 (2022)', brand: 'Razer', harga: 38500000, ram: 16, ssd: 1024, baterai: 7, processor: 'Intel Core i7-12800H', gpu: 'NVIDIA GeForce RTX 3070 Ti Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2022 },
    { name: 'Razer Blade 16 (2023)', brand: 'Razer', harga: 52500000, ram: 32, ssd: 1024, baterai: 6, processor: 'Intel Core i9-13950HX', gpu: 'NVIDIA GeForce RTX 4080 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'Razer Blade 16 (2024)', brand: 'Razer', harga: 58500000, ram: 32, ssd: 1024, baterai: 6, processor: 'Intel Core i9-14900HX', gpu: 'NVIDIA GeForce RTX 4090 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2024 },
    { name: 'Razer Blade 18 (2024)', brand: 'Razer', harga: 65000000, ram: 32, ssd: 2048, baterai: 6, processor: 'Intel Core i9-14900HX', gpu: 'NVIDIA GeForce RTX 4090 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2024 },
    
    // ============================================
    // SAMSUNG
    // ============================================
    { name: 'Samsung Galaxy Book2 360', brand: 'Samsung', harga: 14500000, ram: 8, ssd: 256, baterai: 12, processor: 'Intel Core i5-1235U', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'mainstream', year: 2022 },
    { name: 'Samsung Galaxy Book3 Pro 14', brand: 'Samsung', harga: 22500000, ram: 16, ssd: 512, baterai: 15, processor: 'Intel Core i7-1360P', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2023 },
    { name: 'Samsung Galaxy Book3 Pro 16', brand: 'Samsung', harga: 24500000, ram: 16, ssd: 512, baterai: 17, processor: 'Intel Core i7-1360P', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2023 },
    { name: 'Samsung Galaxy Book3 Pro 360', brand: 'Samsung', harga: 28500000, ram: 16, ssd: 512, baterai: 16, processor: 'Intel Core i7-1360P', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2023 },
    { name: 'Samsung Galaxy Book3 Ultra', brand: 'Samsung', harga: 38500000, ram: 16, ssd: 1024, baterai: 14, processor: 'Intel Core i7-13700H', gpu: 'NVIDIA GeForce RTX 4050 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2023 },
    { name: 'Samsung Galaxy Book4 Pro 14', brand: 'Samsung', harga: 24500000, ram: 16, ssd: 512, baterai: 15, processor: 'Intel Core Ultra 7 155H', gpu: 'Intel Arc Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2024 },
    { name: 'Samsung Galaxy Book4 Pro 360', brand: 'Samsung', harga: 28500000, ram: 16, ssd: 512, baterai: 17, processor: 'Intel Core Ultra 7 155H', gpu: 'Intel Arc Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2024 },
    { name: 'Samsung Galaxy Book4 Ultra', brand: 'Samsung', harga: 42500000, ram: 32, ssd: 1024, baterai: 14, processor: 'Intel Core Ultra 9 185H', gpu: 'NVIDIA GeForce RTX 4070 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2024 },
    
    // ============================================
    // LG GRAM
    // ============================================
    { name: 'LG Gram 14 14Z90P', brand: 'LG', harga: 18500000, ram: 16, ssd: 512, baterai: 22, processor: 'Intel Core i5-1135G7', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2021 },
    { name: 'LG Gram 16 16Z90P', brand: 'LG', harga: 22500000, ram: 16, ssd: 512, baterai: 22, processor: 'Intel Core i7-1165G7', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2021 },
    { name: 'LG Gram 17 17Z90P', brand: 'LG', harga: 24500000, ram: 16, ssd: 512, baterai: 19, processor: 'Intel Core i7-1165G7', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2021 },
    { name: 'LG Gram 14 14Z90R', brand: 'LG', harga: 22500000, ram: 16, ssd: 512, baterai: 22, processor: 'Intel Core i7-1360P', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2023 },
    { name: 'LG Gram 16 16Z90S', brand: 'LG', harga: 26500000, ram: 16, ssd: 512, baterai: 23, processor: 'Intel Core Ultra 7 155H', gpu: 'Intel Arc Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2024 },
    { name: 'LG Gram 17 17Z90S', brand: 'LG', harga: 28500000, ram: 16, ssd: 1024, baterai: 23, processor: 'Intel Core Ultra 7 155H', gpu: 'Intel Arc Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2024 },
    { name: 'LG Gram Pro 16 16Z90SP', brand: 'LG', harga: 32500000, ram: 32, ssd: 1024, baterai: 18, processor: 'Intel Core Ultra 7 155H', gpu: 'NVIDIA GeForce RTX 3050', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2024 },
    { name: 'LG Gram Pro 17 17Z90TP', brand: 'LG', harga: 36500000, ram: 32, ssd: 1024, baterai: 17, processor: 'Intel Core Ultra 9 285H', gpu: 'NVIDIA GeForce RTX 5050 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2025 },

    // ============================================
    // HUAWEI
    // ============================================
    { name: 'Huawei MateBook D 14 (2021)', brand: 'Huawei', harga: 9500000, ram: 8, ssd: 512, baterai: 8, processor: 'Intel Core i5-1135G7', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'mainstream', year: 2021 },
    { name: 'Huawei MateBook D 14 (2022)', brand: 'Huawei', harga: 11500000, ram: 8, ssd: 512, baterai: 9, processor: 'Intel Core i5-1240P', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'mainstream', year: 2022 },
    { name: 'Huawei MateBook D 16 (2024)', brand: 'Huawei', harga: 14500000, ram: 16, ssd: 1024, baterai: 11, processor: 'Intel Core i9-13900H', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'mainstream', year: 2024 },
    { name: 'Huawei MateBook 14s', brand: 'Huawei', harga: 14500000, ram: 16, ssd: 512, baterai: 11, processor: 'Intel Core i7-11370H', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2021 },
    { name: 'Huawei MateBook X Pro 2022', brand: 'Huawei', harga: 24500000, ram: 16, ssd: 512, baterai: 14, processor: 'Intel Core i7-1260P', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 0, category: 'premium', year: 2022 },
    { name: 'Huawei MateBook X Pro 2024', brand: 'Huawei', harga: 32500000, ram: 32, ssd: 1024, baterai: 13, processor: 'Intel Core Ultra 9 185H', gpu: 'Intel Arc Graphics', upgrade_ram: 0, upgrade_storage: 0, category: 'premium', year: 2024 },
    { name: 'Huawei MateBook 16s', brand: 'Huawei', harga: 18500000, ram: 16, ssd: 512, baterai: 11, processor: 'Intel Core i7-12700H', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2022 },
    
    // ============================================
    // XIAOMI / REDMIBOOK
    // ============================================
    { name: 'Xiaomi RedmiBook 14 (2024)', brand: 'Xiaomi', harga: 7500000, ram: 16, ssd: 512, baterai: 8, processor: 'Intel Core i5-12450H', gpu: 'Intel UHD Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'mainstream', year: 2024 },
    { name: 'Xiaomi RedmiBook Pro 14 (2022)', brand: 'Xiaomi', harga: 12500000, ram: 16, ssd: 512, baterai: 11, processor: 'Intel Core i5-12450H', gpu: 'NVIDIA GeForce MX550', upgrade_ram: 0, upgrade_storage: 1, category: 'mainstream', year: 2022 },
    { name: 'Xiaomi RedmiBook Pro 15 (2022)', brand: 'Xiaomi', harga: 14500000, ram: 16, ssd: 512, baterai: 10, processor: 'Intel Core i7-12650H', gpu: 'NVIDIA GeForce RTX 2050', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2022 },
    { name: 'Xiaomi Mi NoteBook Pro', brand: 'Xiaomi', harga: 13500000, ram: 16, ssd: 512, baterai: 10, processor: 'Intel Core i5-11300H', gpu: 'NVIDIA GeForce MX450', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2021 },
    { name: 'Xiaomi Book Pro 14 2022', brand: 'Xiaomi', harga: 14500000, ram: 16, ssd: 512, baterai: 12, processor: 'Intel Core i5-1240P', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2022 },
    { name: 'Xiaomi Book Pro 16 2022', brand: 'Xiaomi', harga: 18500000, ram: 16, ssd: 512, baterai: 11, processor: 'Intel Core i7-1260P', gpu: 'NVIDIA GeForce RTX 2050', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2022 },
    
    // ============================================
    // INFINIX
    // ============================================
    { name: 'Infinix INBook X1', brand: 'Infinix', harga: 6500000, ram: 8, ssd: 256, baterai: 8, processor: 'Intel Core i3-1005G1', gpu: 'Intel UHD Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'budget', year: 2021 },
    { name: 'Infinix INBook X1 Pro', brand: 'Infinix', harga: 7500000, ram: 8, ssd: 512, baterai: 9, processor: 'Intel Core i5-1035G1', gpu: 'Intel UHD Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'budget', year: 2022 },
    { name: 'Infinix INBook X2 Slim', brand: 'Infinix', harga: 7800000, ram: 8, ssd: 512, baterai: 8, processor: 'Intel Core i3-1115G4', gpu: 'Intel UHD Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'budget', year: 2022 },
    { name: 'Infinix InBook Y2 Plus', brand: 'Infinix', harga: 7000000, ram: 8, ssd: 256, baterai: 8, processor: 'Intel Core i3-1115G4', gpu: 'Intel UHD Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'budget', year: 2023 },
    { name: 'Infinix InBook X3 Slim', brand: 'Infinix', harga: 8500000, ram: 16, ssd: 512, baterai: 9, processor: 'Intel Core i5-1235U', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'mainstream', year: 2024 },
    { name: 'Infinix Zerobook 13', brand: 'Infinix', harga: 13500000, ram: 16, ssd: 1024, baterai: 11, processor: 'Intel Core i9-13900H', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2024 },
    
    // ============================================
    // AXIOO
    // ============================================
    { name: 'Axioo MyBook 14', brand: 'Axioo', harga: 5500000, ram: 4, ssd: 256, baterai: 6, processor: 'Intel Celeron N4020', gpu: 'Intel UHD Graphics 600', upgrade_ram: 0, upgrade_storage: 1, category: 'budget', year: 2022 },
    { name: 'Axioo MyBook 14H', brand: 'Axioo', harga: 6500000, ram: 8, ssd: 512, baterai: 7, processor: 'Intel Celeron N4500', gpu: 'Intel UHD Graphics', upgrade_ram: 1, upgrade_storage: 1, category: 'budget', year: 2023 },
    { name: 'Axioo Mybook Hype 5', brand: 'Axioo', harga: 7500000, ram: 8, ssd: 256, baterai: 6, processor: 'Intel Core i5-1035G1', gpu: 'Intel UHD Graphics', upgrade_ram: 1, upgrade_storage: 1, category: 'budget', year: 2022 },
    { name: 'Axioo Pongo 725', brand: 'Axioo', harga: 11500000, ram: 8, ssd: 512, baterai: 5, processor: 'Intel Core i5-12450H', gpu: 'NVIDIA GeForce RTX 3050', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'Axioo Pongo 728', brand: 'Axioo', harga: 13500000, ram: 16, ssd: 512, baterai: 6, processor: 'Intel Core i7-12650H', gpu: 'NVIDIA GeForce RTX 3050', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    
    // ============================================
    // ADVAN
    // ============================================
    { name: 'Advan Workplus', brand: 'Advan', harga: 4500000, ram: 8, ssd: 256, baterai: 6, processor: 'Intel Core i3-1005G1', gpu: 'Intel UHD Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'budget', year: 2023 },
    { name: 'Advan Workpro', brand: 'Advan', harga: 6500000, ram: 8, ssd: 256, baterai: 7, processor: 'Intel Core i3-1115G4', gpu: 'Intel UHD Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'budget', year: 2023 },
    { name: 'Advan Soulmate', brand: 'Advan', harga: 4000000, ram: 4, ssd: 128, baterai: 6, processor: 'Intel Celeron N4020', gpu: 'Intel UHD Graphics 600', upgrade_ram: 0, upgrade_storage: 1, category: 'budget', year: 2022 },
    { name: 'Advan Notebook Laptop', brand: 'Advan', harga: 5500000, ram: 8, ssd: 256, baterai: 6, processor: 'Intel Celeron N4500', gpu: 'Intel UHD Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'budget', year: 2023 },
    
    // ============================================
    // ZYREX
    // ============================================
    { name: 'Zyrex Sky 232 Plus', brand: 'Zyrex', harga: 5500000, ram: 4, ssd: 256, baterai: 7, processor: 'Intel Celeron N4020', gpu: 'Intel UHD Graphics 600', upgrade_ram: 0, upgrade_storage: 1, category: 'budget', year: 2022 },
    { name: 'Zyrex Maxx 14 Pro', brand: 'Zyrex', harga: 8500000, ram: 8, ssd: 512, baterai: 8, processor: 'Intel Core i3-1115G4', gpu: 'Intel UHD Graphics', upgrade_ram: 1, upgrade_storage: 1, category: 'budget', year: 2023 },
    { name: 'Zyrex Sky 232', brand: 'Zyrex', harga: 5000000, ram: 4, ssd: 128, baterai: 7, processor: 'Intel Celeron N4020', gpu: 'Intel UHD Graphics 600', upgrade_ram: 0, upgrade_storage: 1, category: 'budget', year: 2021 },
    
    // ============================================
    // GIGABYTE
    // ============================================
    { name: 'Gigabyte AERO 15 OLED', brand: 'Gigabyte', harga: 32500000, ram: 16, ssd: 1024, baterai: 8, processor: 'Intel Core i7-12700H', gpu: 'NVIDIA GeForce RTX 3070 Ti Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'workstation', year: 2022 },
    { name: 'Gigabyte AERO 16 OLED', brand: 'Gigabyte', harga: 38500000, ram: 16, ssd: 1024, baterai: 8, processor: 'Intel Core i7-13700H', gpu: 'NVIDIA GeForce RTX 4070 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'workstation', year: 2023 },
    { name: 'Gigabyte AORUS 15 BSF', brand: 'Gigabyte', harga: 26500000, ram: 16, ssd: 1024, baterai: 6, processor: 'Intel Core i7-13700H', gpu: 'NVIDIA GeForce RTX 4070 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'Gigabyte AORUS 17X', brand: 'Gigabyte', harga: 48500000, ram: 32, ssd: 1024, baterai: 6, processor: 'Intel Core i9-13980HX', gpu: 'NVIDIA GeForce RTX 4090 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'Gigabyte G5 KF', brand: 'Gigabyte', harga: 16500000, ram: 16, ssd: 512, baterai: 5, processor: 'Intel Core i5-12500H', gpu: 'NVIDIA GeForce RTX 4060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    
    // ============================================
    // ASUS ZenBook & ProArt (additional)
    // ============================================
    { name: 'ASUS ZenBook 13 OLED UM325', brand: 'ASUS', harga: 16500000, ram: 16, ssd: 512, baterai: 12, processor: 'AMD Ryzen 7 5800U', gpu: 'AMD Radeon Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2021 },
    { name: 'ASUS ZenBook 14 OLED UX3402', brand: 'ASUS', harga: 18500000, ram: 16, ssd: 512, baterai: 12, processor: 'Intel Core i7-1260P', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2022 },
    { name: 'ASUS ZenBook 14 OLED UX3405', brand: 'ASUS', harga: 22500000, ram: 16, ssd: 512, baterai: 12, processor: 'Intel Core Ultra 7 155H', gpu: 'Intel Arc Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2024 },
    { name: 'ASUS ZenBook 14 Flip OLED UP3404', brand: 'ASUS', harga: 24500000, ram: 16, ssd: 512, baterai: 11, processor: 'Intel Core i7-1360P', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2023 },
    { name: 'ASUS ZenBook S 13 OLED UX5304', brand: 'ASUS', harga: 24500000, ram: 32, ssd: 1024, baterai: 12, processor: 'Intel Core i7-1355U', gpu: 'Intel Iris Xe', upgrade_ram: 0, upgrade_storage: 0, category: 'premium', year: 2023 },
    { name: 'ASUS ZenBook Duo UX8406', brand: 'ASUS', harga: 38500000, ram: 32, ssd: 1024, baterai: 14, processor: 'Intel Core Ultra 9 185H', gpu: 'Intel Arc Graphics', upgrade_ram: 0, upgrade_storage: 1, category: 'premium', year: 2024 },
    { name: 'ASUS ZenBook Pro 14 OLED UX6404', brand: 'ASUS', harga: 32500000, ram: 16, ssd: 1024, baterai: 8, processor: 'Intel Core i9-13900H', gpu: 'NVIDIA GeForce RTX 4060 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'workstation', year: 2023 },
    { name: 'ASUS ZenBook Pro 16X OLED UX7602', brand: 'ASUS', harga: 42500000, ram: 32, ssd: 1024, baterai: 9, processor: 'Intel Core i9-13905H', gpu: 'NVIDIA GeForce RTX 4070 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'workstation', year: 2023 },
    { name: 'ASUS ProArt Studiobook 16 OLED H7604', brand: 'ASUS', harga: 48500000, ram: 32, ssd: 1024, baterai: 8, processor: 'Intel Core i9-13980HX', gpu: 'NVIDIA RTX 3000 Ada', upgrade_ram: 1, upgrade_storage: 1, category: 'workstation', year: 2023 },
    { name: 'ASUS ProArt P16 H7606', brand: 'ASUS', harga: 38500000, ram: 32, ssd: 1024, baterai: 9, processor: 'AMD Ryzen AI 9 HX 370', gpu: 'NVIDIA GeForce RTX 4070 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'workstation', year: 2024 },
    
    // ============================================
    // ASUS ROG (additional)
    // ============================================
    { name: 'ASUS ROG Zephyrus G14 GA401', brand: 'ASUS', harga: 26500000, ram: 16, ssd: 1024, baterai: 9, processor: 'AMD Ryzen 9 5900HS', gpu: 'NVIDIA GeForce RTX 3060 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'gaming', year: 2021 },
    { name: 'ASUS ROG Zephyrus G14 GA402', brand: 'ASUS', harga: 28500000, ram: 16, ssd: 1024, baterai: 10, processor: 'AMD Ryzen 9 7940HS', gpu: 'NVIDIA GeForce RTX 4060 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'ASUS ROG Zephyrus G14 GA403', brand: 'ASUS', harga: 32500000, ram: 32, ssd: 1024, baterai: 11, processor: 'AMD Ryzen 9 8945HS', gpu: 'NVIDIA GeForce RTX 4070 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'gaming', year: 2024 },
    { name: 'ASUS ROG Zephyrus G15 GA503', brand: 'ASUS', harga: 28500000, ram: 16, ssd: 1024, baterai: 10, processor: 'AMD Ryzen 9 6900HS', gpu: 'NVIDIA GeForce RTX 3070 Ti Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'gaming', year: 2022 },
    { name: 'ASUS ROG Zephyrus G16 GU603', brand: 'ASUS', harga: 32500000, ram: 16, ssd: 1024, baterai: 8, processor: 'Intel Core i9-13900H', gpu: 'NVIDIA GeForce RTX 4060 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'ASUS ROG Zephyrus G16 GU605', brand: 'ASUS', harga: 38500000, ram: 32, ssd: 1024, baterai: 11, processor: 'Intel Core Ultra 9 185H', gpu: 'NVIDIA GeForce RTX 4070 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'gaming', year: 2024 },
    { name: 'ASUS ROG Zephyrus M16 GU604', brand: 'ASUS', harga: 38500000, ram: 32, ssd: 1024, baterai: 7, processor: 'Intel Core i9-13900H', gpu: 'NVIDIA GeForce RTX 4080 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'ASUS ROG Zephyrus Duo 16 GX650', brand: 'ASUS', harga: 65000000, ram: 32, ssd: 2048, baterai: 6, processor: 'AMD Ryzen 9 7945HX', gpu: 'NVIDIA GeForce RTX 4090 Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'ASUS ROG Strix G15 G513', brand: 'ASUS', harga: 22500000, ram: 16, ssd: 1024, baterai: 6, processor: 'AMD Ryzen 7 6800H', gpu: 'NVIDIA GeForce RTX 3060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2022 },
    { name: 'ASUS ROG Strix G16 G614', brand: 'ASUS', harga: 28500000, ram: 16, ssd: 1024, baterai: 6, processor: 'Intel Core i7-13650HX', gpu: 'NVIDIA GeForce RTX 4060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'ASUS ROG Strix G18 G814', brand: 'ASUS', harga: 38500000, ram: 32, ssd: 1024, baterai: 6, processor: 'Intel Core i9-14900HX', gpu: 'NVIDIA GeForce RTX 4080 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2024 },
    { name: 'ASUS ROG Strix Scar 16 G634', brand: 'ASUS', harga: 48500000, ram: 32, ssd: 1024, baterai: 6, processor: 'Intel Core i9-13980HX', gpu: 'NVIDIA GeForce RTX 4080 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'ASUS ROG Strix Scar 18 G834', brand: 'ASUS', harga: 65000000, ram: 32, ssd: 2048, baterai: 6, processor: 'Intel Core i9-14900HX', gpu: 'NVIDIA GeForce RTX 4090 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2024 },
    { name: 'ASUS ROG Flow X13 GV301', brand: 'ASUS', harga: 28500000, ram: 16, ssd: 1024, baterai: 10, processor: 'AMD Ryzen 9 6900HS', gpu: 'NVIDIA GeForce RTX 3050 Ti', upgrade_ram: 0, upgrade_storage: 1, category: 'gaming', year: 2022 },
    { name: 'ASUS ROG Flow X16 GV601', brand: 'ASUS', harga: 38500000, ram: 32, ssd: 1024, baterai: 8, processor: 'AMD Ryzen 9 6900HS', gpu: 'NVIDIA GeForce RTX 3070 Ti Laptop', upgrade_ram: 0, upgrade_storage: 1, category: 'gaming', year: 2022 },
    { name: 'ASUS ROG Flow Z13 GZ301', brand: 'ASUS', harga: 32500000, ram: 16, ssd: 1024, baterai: 9, processor: 'Intel Core i9-12900H', gpu: 'NVIDIA GeForce RTX 3050 Ti', upgrade_ram: 0, upgrade_storage: 1, category: 'gaming', year: 2022 },
    { name: 'ASUS TUF Gaming F15 FX507', brand: 'ASUS', harga: 16500000, ram: 8, ssd: 512, baterai: 6, processor: 'Intel Core i5-12500H', gpu: 'NVIDIA GeForce RTX 3050', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2022 },
    { name: 'ASUS TUF Gaming F15 FX507 (2024)', brand: 'ASUS', harga: 18500000, ram: 16, ssd: 512, baterai: 6, processor: 'Intel Core i7-13620H', gpu: 'NVIDIA GeForce RTX 4060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2024 },
    { name: 'ASUS TUF Gaming A15 FA506', brand: 'ASUS', harga: 14500000, ram: 8, ssd: 512, baterai: 6, processor: 'AMD Ryzen 7 4800H', gpu: 'NVIDIA GeForce RTX 3050', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2021 },
    { name: 'ASUS TUF Gaming A15 FA507', brand: 'ASUS', harga: 17500000, ram: 16, ssd: 512, baterai: 6, processor: 'AMD Ryzen 7 7735HS', gpu: 'NVIDIA GeForce RTX 4060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
    { name: 'ASUS TUF Gaming A16 FA607', brand: 'ASUS', harga: 22500000, ram: 16, ssd: 1024, baterai: 6, processor: 'AMD Ryzen 7 8845HS', gpu: 'AMD Radeon RX 7700S', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2024 },
    { name: 'ASUS TUF Gaming F17 FX707', brand: 'ASUS', harga: 22500000, ram: 16, ssd: 1024, baterai: 6, processor: 'Intel Core i7-13700H', gpu: 'NVIDIA GeForce RTX 4060 Laptop', upgrade_ram: 1, upgrade_storage: 1, category: 'gaming', year: 2023 },
];

// Helper: dapatkan list nama untuk autocomplete
window.LAPTOP_NAMES = window.LAPTOP_DATABASE.map(l => l.name);

// Helper: cari laptop berdasarkan nama (exact atau case-insensitive)
window.findLaptop = function(name) {
    if (!name) return null;
    const lower = name.toLowerCase().trim();
    return window.LAPTOP_DATABASE.find(l => l.name.toLowerCase() === lower) || null;
};

// Helper: cari laptop dengan fuzzy match (untuk autocomplete)
window.searchLaptops = function(query, limit = 50) {
    if (!query || query.length < 1) return window.LAPTOP_DATABASE.slice(0, limit);
    const q = query.toLowerCase().trim();
    const tokens = q.split(/\s+/).filter(t => t.length > 0);
    return window.LAPTOP_DATABASE.filter(l => {
        const name = l.name.toLowerCase();
        // semua token harus ada di nama
        return tokens.every(t => name.includes(t));
    }).slice(0, limit);
};

// Helper: dapatkan list brand unik
window.LAPTOP_BRANDS = [...new Set(window.LAPTOP_DATABASE.map(l => l.brand))].sort();


// =================================================================
// CUSTOM DROPDOWN COMPONENT for Laptop Name autocomplete
// =================================================================
window.initLaptopDropdown = function(config) {
    const { inputId } = config;
    const input = document.getElementById(inputId);
    if (!input) return;

    // Remove old dropdown if exists
    const oldDropdown = document.getElementById(inputId + '-laptop-dropdown');
    if (oldDropdown) oldDropdown.remove();

    const data = window.LAPTOP_DATABASE || [];
    const brands = window.LAPTOP_BRANDS || [];

    const wrapper = document.createElement('div');
    wrapper.className = 'laptop-dropdown';
    wrapper.id = inputId + '-laptop-dropdown';
    wrapper.style.cssText = 'position:fixed;background:var(--surface,#fff);border:1px solid var(--border,#e8ecf2);border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,0.18);z-index:10000;display:none;overflow:hidden;';

    const tabsContainer = document.createElement('div');
    tabsContainer.style.cssText = 'display:flex;gap:4px;padding:8px;border-bottom:1px solid var(--border-light,#f1f4f8);overflow-x:auto;flex-wrap:nowrap;';

    let activeBrand = 'All';
    const brandList = ['All', ...brands];

    brandList.forEach(brand => {
        const tab = document.createElement('button');
        tab.type = 'button';
        tab.textContent = brand;
        tab.style.cssText = 'padding:5px 12px;border-radius:6px;border:none;background:transparent;font-size:11px;font-weight:600;cursor:pointer;color:var(--text-secondary,#64748b);white-space:nowrap;transition:all 0.15s;';
        if (brand === 'All') {
            tab.style.background = 'var(--primary,#4f6ef7)';
            tab.style.color = '#fff';
        }
        tab.onclick = () => {
            activeBrand = brand;
            tabsContainer.querySelectorAll('button').forEach(b => {
                b.style.background = 'transparent';
                b.style.color = 'var(--text-secondary,#64748b)';
            });
            tab.style.background = 'var(--primary,#4f6ef7)';
            tab.style.color = '#fff';
            renderList();
        };
        tabsContainer.appendChild(tab);
    });

    const listContainer = document.createElement('div');
    listContainer.style.cssText = 'overflow-y:auto;';

    function renderList() {
        const search = input.value.toLowerCase().trim();
        const tokens = search.split(/\s+/).filter(t => t.length > 0);
        const filtered = data.filter(item => {
            const matchBrand = activeBrand === 'All' || item.brand === activeBrand;
            const name = item.name.toLowerCase();
            const matchSearch = tokens.length === 0 || tokens.every(t => name.includes(t));
            return matchBrand && matchSearch;
        });

        listContainer.innerHTML = '';

        if (filtered.length === 0) {
            const empty = document.createElement('div');
            empty.style.cssText = 'padding:20px;text-align:center;color:var(--text-muted,#94a3b8);font-size:12px;';
            empty.textContent = 'Tidak ada laptop. Ketik manual untuk laptop baru.';
            listContainer.appendChild(empty);
            return;
        }

        // Sort by year descending then name
        filtered.sort((a, b) => (b.year || 0) - (a.year || 0) || a.name.localeCompare(b.name));

        const display = filtered.slice(0, 80);

        const brandColors = {
            'ASUS': '#0066cc', 'Lenovo': '#e2231a', 'HP': '#0096d6',
            'Dell': '#007db8', 'Acer': '#83b81a', 'MSI': '#ff0000',
            'Apple': '#888', 'Microsoft': '#00a4ef', 'Razer': '#44d62c',
            'Samsung': '#1428a0', 'LG': '#a50034', 'Huawei': '#cf0a2c',
            'Xiaomi': '#ff6900', 'Infinix': '#00468c', 'Axioo': '#3b82f6',
            'Advan': '#10b981', 'Zyrex': '#f59e0b', 'Gigabyte': '#ff7800'
        };
        const categoryLabel = {
            'budget': '💰 Budget', 'mainstream': '⚡ Mainstream', 'premium': '✨ Premium',
            'gaming': '🎮 Gaming', 'workstation': '🛠️ Workstation', 'business': '💼 Business'
        };

        display.forEach(item => {
            const row = document.createElement('div');
            row.style.cssText = 'padding:10px 14px;cursor:pointer;font-size:12px;border-bottom:1px solid var(--border-light,#f1f4f8);transition:background 0.15s;';
            row.onmouseenter = () => row.style.background = 'var(--surface-hover,#f1f5f9)';
            row.onmouseleave = () => row.style.background = 'transparent';
            row.onmousedown = (e) => {
                e.preventDefault();
                selectItem(item);
            };

            const top = document.createElement('div');
            top.style.cssText = 'display:flex;align-items:center;gap:8px;margin-bottom:4px;';

            const brandTag = document.createElement('span');
            brandTag.style.cssText = `font-size:9px;font-weight:700;padding:2px 6px;border-radius:4px;color:#fff;background:${brandColors[item.brand] || '#888'};letter-spacing:0.3px;flex-shrink:0;`;
            brandTag.textContent = item.brand;

            const name = document.createElement('span');
            name.style.cssText = 'font-weight:600;color:var(--text,#1e293b);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;min-width:0;';
            name.textContent = item.name;

            const yearTag = document.createElement('span');
            yearTag.style.cssText = 'font-size:10px;color:var(--text-muted,#94a3b8);font-weight:500;flex-shrink:0;';
            yearTag.textContent = item.year || '';

            top.appendChild(brandTag);
            top.appendChild(name);
            top.appendChild(yearTag);

            const bottom = document.createElement('div');
            bottom.style.cssText = 'display:flex;align-items:center;gap:10px;font-size:11px;color:var(--text-secondary,#64748b);';

            const cat = document.createElement('span');
            cat.style.cssText = 'font-size:10px;font-weight:600;';
            cat.textContent = categoryLabel[item.category] || item.category || '';

            const specs = document.createElement('span');
            specs.style.cssText = 'overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;min-width:0;';
            specs.textContent = `${item.ram}GB · ${item.ssd}GB · ${item.baterai}j`;

            const price = document.createElement('span');
            price.style.cssText = 'font-weight:700;color:var(--primary,#4f6ef7);flex-shrink:0;';
            price.textContent = 'Rp' + (item.harga / 1000000).toFixed(1) + 'jt';

            bottom.appendChild(cat);
            bottom.appendChild(specs);
            bottom.appendChild(price);

            row.appendChild(top);
            row.appendChild(bottom);
            listContainer.appendChild(row);
        });

        if (filtered.length > 80) {
            const more = document.createElement('div');
            more.style.cssText = 'padding:8px;text-align:center;color:var(--text-muted,#94a3b8);font-size:11px;font-style:italic;';
            more.textContent = `+${filtered.length - 80} lainnya — ketik untuk filter`;
            listContainer.appendChild(more);
        }
    }

    function selectItem(item) {
        input.value = item.name;
        wrapper.style.display = 'none';
        // Auto-fill all other fields
        autofillFields(item);
        showInfo(item);
    }

    function autofillFields(item) {
        const form = input.closest('form');
        if (!form) return;
        // Helper setters
        const setVal = (selector, value) => {
            const el = form.querySelector(selector);
            if (el && (el.value === '' || form.dataset.autofillForce === '1')) {
                el.value = value;
                el.dispatchEvent(new Event('input', { bubbles: true }));
                el.dispatchEvent(new Event('change', { bubbles: true }));
            } else if (el && el.value !== '' && form.dataset.autofillForce !== '1') {
                // For autofill, always overwrite when user picks from dropdown
                el.value = value;
                el.dispatchEvent(new Event('input', { bubbles: true }));
                el.dispatchEvent(new Event('change', { bubbles: true }));
            }
        };
        const setCheck = (selector, checked) => {
            const el = form.querySelector(selector);
            if (el) {
                el.checked = !!checked;
                el.dispatchEvent(new Event('change', { bubbles: true }));
            }
        };

        // Numeric & text fields
        if (item.harga != null) setVal('input[name="harga"]', item.harga);
        if (item.ram != null) setVal('input[name="ram"]', item.ram);
        if (item.ssd != null) setVal('input[name="ssd"]', item.ssd);
        if (item.baterai != null) setVal('input[name="baterai"]', item.baterai);
        if (item.processor) setVal('#inputProcessor', item.processor);
        if (item.gpu) setVal('#inputGpu', item.gpu);
        // Upgradeability
        setCheck('#upgradeRam', item.upgrade_ram === 1 || item.upgrade_ram === true);
        setCheck('#upgradeStorage', item.upgrade_storage === 1 || item.upgrade_storage === true);

        // Trigger benchmark autofill scoring for processor & GPU
        if (item.processor && window.BENCHMARK_DATA) {
            const procData = window.BENCHMARK_DATA.processors.find(p => p.name.toLowerCase() === item.processor.toLowerCase());
            if (procData && window.benchmarkToScore) {
                const skor = window.benchmarkToScore(procData.score, 'processor');
                const skorEl = form.querySelector('#skorProc');
                const badgeEl = form.querySelector('#skorProcVal');
                if (skorEl) skorEl.value = skor;
                if (badgeEl) badgeEl.textContent = skor;
            }
        }
        if (item.gpu && window.BENCHMARK_DATA) {
            const gpuData = window.BENCHMARK_DATA.gpus.find(g => g.name.toLowerCase() === item.gpu.toLowerCase());
            if (gpuData && window.benchmarkToScore) {
                const skor = window.benchmarkToScore(gpuData.score, 'gpu');
                const skorEl = form.querySelector('#skorGpu');
                const badgeEl = form.querySelector('#skorGpuVal');
                if (skorEl) skorEl.value = skor;
                if (badgeEl) badgeEl.textContent = skor;
            }
        }
    }

    function showInfo(item) {
        const id = inputId + '-info';
        let info = document.getElementById(id);
        if (!info) {
            info = document.createElement('small');
            info.id = id;
            info.className = 'd-block mt-1';
            info.style.cssText = 'color:#22c55e;font-size:11px;';
            input.parentNode.appendChild(info);
        }
        info.innerHTML = `<i class="fas fa-magic"></i> Auto-isi spesifikasi dari database (${item.brand} · ${item.year})`;
    }

    function hideInfo() {
        const info = document.getElementById(inputId + '-info');
        if (info) info.remove();
    }

    if (input.parentNode.style.position !== 'relative') {
        input.parentNode.style.position = 'relative';
    }

    wrapper.appendChild(tabsContainer);
    wrapper.appendChild(listContainer);
    document.body.appendChild(wrapper);

    function adjustDropdownPosition() {
        const rect = input.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const spaceBelow = viewportHeight - rect.bottom - 16;
        const spaceAbove = rect.top - 16;

        const useUpward = spaceBelow < 280 && spaceAbove > spaceBelow;
        const maxHeight = useUpward
            ? Math.min(420, spaceAbove)
            : Math.min(420, spaceBelow);

        wrapper.style.left = rect.left + 'px';
        wrapper.style.width = Math.max(rect.width, 360) + 'px';

        if (useUpward) {
            wrapper.style.top = (rect.top - maxHeight - 4) + 'px';
        } else {
            wrapper.style.top = (rect.bottom + 4) + 'px';
        }
        wrapper.style.maxHeight = maxHeight + 'px';

        const tabsHeight = tabsContainer.offsetHeight || 50;
        listContainer.style.maxHeight = (maxHeight - tabsHeight - 4) + 'px';
    }

    input.addEventListener('focus', () => {
        wrapper.style.display = 'block';
        adjustDropdownPosition();
        renderList();
    });

    input.addEventListener('input', () => {
        wrapper.style.display = 'block';
        adjustDropdownPosition();
        renderList();
        // If exact match, show info
        const found = window.findLaptop(input.value);
        if (found) {
            showInfo(found);
        } else {
            hideInfo();
        }
    });

    window.addEventListener('resize', () => {
        if (wrapper.style.display === 'block') adjustDropdownPosition();
    });
    window.addEventListener('scroll', () => {
        if (wrapper.style.display === 'block') adjustDropdownPosition();
    }, true);

    document.addEventListener('mousedown', (e) => {
        if (!wrapper.contains(e.target) && e.target !== input) {
            wrapper.style.display = 'none';
        }
    });

    // If input already has matching value, show info
    const found = window.findLaptop(input.value);
    if (found) showInfo(found);
};

window.setupLaptopAutocomplete = function() {
    document.querySelectorAll('.laptop-dropdown').forEach(d => d.remove());
    // Find all inputs marked for laptop autocomplete
    document.querySelectorAll('input[name="nama_laptop"]').forEach(input => {
        if (!input.id) input.id = 'inputLaptopName_' + Math.random().toString(36).slice(2, 8);
        window.initLaptopDropdown({ inputId: input.id });
    });
};

document.addEventListener('DOMContentLoaded', function() {
    if (typeof window.setupLaptopAutocomplete === 'function') {
        window.setupLaptopAutocomplete();
    }
});

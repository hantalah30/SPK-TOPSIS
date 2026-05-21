const express = require('express');
const router = express.Router();
const LaptopController = require('../controllers/laptopController');

router.get('/', LaptopController.index);
router.get('/create', LaptopController.createPage);
router.post('/create', LaptopController.createProcess);
router.get('/edit/:id', LaptopController.editPage);
router.post('/edit/:id', LaptopController.editProcess);
router.get('/delete/:id', LaptopController.delete);

module.exports = router;

const express = require('express');
const router = express.Router();
const NilaiController = require('../controllers/nilaiController');

router.get('/', NilaiController.index);
router.get('/input/:id', NilaiController.inputPage);
router.post('/input/:id', NilaiController.saveProcess);

module.exports = router;

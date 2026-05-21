const express = require('express');
const router = express.Router();
const TopsisController = require('../controllers/topsisController');

router.get('/', TopsisController.index);

module.exports = router;

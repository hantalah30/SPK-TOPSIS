const express = require('express');
const router = express.Router();
const KriteriaController = require('../controllers/kriteriaController');

router.get('/', KriteriaController.index);
router.get('/auto-normalize', KriteriaController.autoNormalize);
router.get('/create', KriteriaController.createPage);
router.post('/create', KriteriaController.createProcess);
router.get('/edit/:id', KriteriaController.editPage);
router.post('/edit/:id', KriteriaController.editProcess);
router.get('/delete/:id', KriteriaController.delete);

module.exports = router;

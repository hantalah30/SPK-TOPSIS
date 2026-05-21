const express = require('express');
const router = express.Router();
const ToolsController = require('../controllers/toolsController');

// Reset / Clear data
router.get('/reset', ToolsController.resetPage);
router.post('/reset/default', ToolsController.resetToDefault);
router.post('/reset/clear', ToolsController.clearAllLaptop);

// Compare
router.get('/compare', ToolsController.comparePage);

// Sensitivity
router.get('/sensitivity', ToolsController.sensitivityPage);
router.post('/sensitivity/calc', ToolsController.sensitivityCalc);

// History
router.get('/history', ToolsController.historyPage);
router.post('/history/save', ToolsController.saveHistory);
router.get('/history/delete/:id', ToolsController.deleteHistory);
router.get('/history/clear', ToolsController.clearHistory);

// Import
router.get('/import', ToolsController.importPage);
router.post('/import/process', ToolsController.importProcess);

module.exports = router;

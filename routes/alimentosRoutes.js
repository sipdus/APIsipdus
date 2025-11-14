const express = require('express');
const router = express.Router();
const alimentosController = require('../controllers/alimentosController');

router.get('/', alimentosController.getAllAlimentos);
router.post('/', alimentosController.addAlimento);

module.exports = router;

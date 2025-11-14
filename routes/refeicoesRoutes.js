const express = require('express');
const router = express.Router();
const refeicoesController = require('../controllers/refeicoesController');

router.get('/', refeicoesController.getAllRefeicoes);
router.post('/', refeicoesController.addRefeicao);

module.exports = router;

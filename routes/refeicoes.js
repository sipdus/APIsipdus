const express = require('express');
const router = express.Router();
const refeicoesController = require('../controllers/refeicoesController');

router.post('/', refeicoesController.addRefeicao);
router.get('/:user_id', refeicoesController.getRefeicoesByUser);

module.exports = router;

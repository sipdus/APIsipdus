const express = require('express');
const router = express.Router();
const refeicoesController = require('../controllers/refeicoesController');

// 🔹 Rotas REST
router.get('/', refeicoesController.getAllRefeicoes);          // Listar todas
router.get('/:id', refeicoesController.getRefeicaoById);        // Buscar por ID
router.post('/', refeicoesController.addRefeicao);              // Criar nova
router.put('/:id', refeicoesController.updateRefeicao);         // Atualizar
router.delete('/:id', refeicoesController.deleteRefeicao);      // Deletar

module.exports = router;

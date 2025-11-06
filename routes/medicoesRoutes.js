const express = require('express');
const router = express.Router();
const medicoesController = require('../controllers/medicoesController');

// 🔹 Rotas REST
router.get('/', medicoesController.getAllMedicoes);             // Listar todas
router.get('/:id', medicoesController.getMedicaoById);          // Buscar por ID
router.post('/', medicoesController.addMedicao);                // Criar nova
router.put('/:id', medicoesController.updateMedicao);           // Atualizar
router.delete('/:id', medicoesController.deleteMedicao);        // Deletar

module.exports = router;

const express = require('express');
const router = express.Router();
const alimentosController = require('../controllers/alimentosController');

// 🔹 Rotas REST
router.get('/', alimentosController.getAllAlimentos);           // Listar todos
router.get('/:id', alimentosController.getAlimentoById);        // Buscar por ID
router.post('/', alimentosController.addAlimento);              // Criar novo
router.put('/:id', alimentosController.updateAlimento);         // Atualizar
router.delete('/:id', alimentosController.deleteAlimento);      // Deletar

module.exports = router;

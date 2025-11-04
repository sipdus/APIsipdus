const express = require('express');
const router = express.Router();
const medidasController = require('../controllers/medidasController');

// Rota para salvar nova medição
router.post('/add', medidasController.addMedida);

// Rota para listar medições de um usuário
router.get('/user/:user_id', medidasController.getMedidasByUser);

module.exports = router;

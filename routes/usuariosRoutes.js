const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// 🔹 Rotas REST
router.get('/', usuariosController.getAllUsuarios);             // Listar todos
router.get('/:id', usuariosController.getUsuarioById);          // Buscar por ID
router.post('/', usuariosController.addUsuario);                // Criar novo
router.put('/:id', usuariosController.updateUsuario);           // Atualizar
router.delete('/:id', usuariosController.deleteUsuario);        // Deletar

module.exports = router;

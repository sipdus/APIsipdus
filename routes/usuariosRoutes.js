const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// 🔹 Rotas REST para usuários

// Cadastrar novo usuário
router.post('/register', usuariosController.addUsuario);

// Login de usuário
router.post('/login', usuariosController.loginUsuario);

// Listar todos os usuários
router.get('/', usuariosController.getAllUsuarios);

// Buscar usuário por ID
router.get('/:id', usuariosController.getUsuarioById);

// Atualizar usuário por ID
router.put('/:id', usuariosController.updateUsuario);

// Deletar usuário por ID
router.delete('/:id', usuariosController.deleteUsuario);

module.exports = router;

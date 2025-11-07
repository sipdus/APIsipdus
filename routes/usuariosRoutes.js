const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// 🔹 Rotas REST
router.get('/', usuariosController.getAllUsuarios);
router.get('/:id', usuariosController.getUsuarioById);
router.post('/', usuariosController.addUsuario);
router.post('/login', usuariosController.loginUsuario); // nova rota
router.put('/:id', usuariosController.updateUsuario);
router.delete('/:id', usuariosController.deleteUsuario);

module.exports = router;

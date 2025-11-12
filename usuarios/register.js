// api/usuarios/register.js
const express = require('express');
const cors = require('cors');
const usuariosController = require('../../../controllers/usuariosController');

const app = express();
app.use(cors());
app.use(express.json());

app.post((req, res) => usuariosController.addUsuario(req, res));

module.exports = app;

const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Importar rotas
const alimentosRoutes = require('./routes/alimentosRoutes');
const refeicoesRoutes = require('./routes/refeicoesRoutes');
const medicoesRoutes = require('./routes/medicoesRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');

// Usar rotas
app.use('/alimentos', alimentosRoutes);
app.use('/refeicoes', refeicoesRoutes);
app.use('/medicoes', medicoesRoutes);
app.use('/usuarios', usuariosRoutes);

// Inicializar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

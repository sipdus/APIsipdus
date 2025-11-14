const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Importar rotas corretamente
const alimentosRoutes = require('./routes/alimentosRoutes');
const refeicoesRoutes = require('./routes/refeicoesRoutes');
const medidasRoutes = require('./routes/medidasRoutes'); // ⬅ renomeado
const usuariosRoutes = require('./routes/usuariosRoutes');

// Usar rotas com prefixos padronizados
app.use('/alimentos', alimentosRoutes);
app.use('/refeicoes', refeicoesRoutes);
app.use('/medidas', medidasRoutes);
app.use('/users', usuariosRoutes); // POST /users/register

// Endpoint raiz
app.get('/', (req, res) => {
  res.send('API SIPDUS está rodando!');
});

// Exportar para Vercel
module.exports = app;

// Rodar local (node server.js)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
}

const express = require('express');
const cors = require('cors');

const app = express();

// 🟢 Middlewares
app.use(express.json());
app.use(cors());

// 🟢 Importar rotas
const alimentosRoutes = require('./routes/alimentosRoutes');
const refeicoesRoutes = require('./routes/refeicoesRoutes');
const medicoesRoutes = require('./routes/medicoesRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');

// 🟢 Usar rotas com prefixos padronizados
app.use('/alimentos', alimentosRoutes);
app.use('/refeicoes', refeicoesRoutes);
app.use('/medidas', medicoesRoutes);
app.use('/users', usuariosRoutes); // ✅ rotas /usuarios/register, /usuarios/login etc.

// 🟢 Endpoint raiz para teste
app.get('/', (req, res) => {
  res.send('✅ API SIPDUS está rodando!');
});

// 🟢 Exportar o app para o Vercel
module.exports = app;

// 🟢 Rodar localmente (node server.js)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`🚀 Servidor rodando em http://localhost:${PORT}`));
}

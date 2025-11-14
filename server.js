const express = require('express');
const cors = require('cors');

const app = express();

// 🟢 Middlewares
app.use(express.json());
app.use(cors());

// 🟢 Importar rotas
const alimentosRoutes = require('./routes/alimentosRoutes');
const refeicoesRoutes = require('./routes/refeicoesRoutes');
const medidasRoutes = require('./routes/medidasRoutes');
const usersRoutes = require('./routes/usersRoutes');

// 🟢 Usar rotas
app.use('/alimentos', alimentosRoutes);
app.use('/refeicoes', refeicoesRoutes);
app.use('/medidas', medidasRoutes);
app.use('/users', usersRoutes); // /users/register, /users/login etc.

// 🟢 Endpoint raiz
app.get('/', (req, res) => {
  res.send('✅ API SIPDUS rodando no Vercel!');
});

// 🟢 Exportar para Vercel
module.exports = app;

// 🟢 Se rodar localmente
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () =>
    console.log(`🚀 Servidor rodando localmente em http://localhost:${PORT}`)
  );
}

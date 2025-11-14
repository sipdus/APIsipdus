const express = require('express');
const cors = require('cors');

const app = express();

<<<<<<< HEAD:index.js
app.use(express.json());
app.use(cors());

// Importar rotas
const usersRoutes = require('./routes/usersRoutes');
=======
// 🟢 Middlewares
app.use(express.json());
app.use(cors());

// 🟢 Importar rotas
>>>>>>> e67226da687c02d73b1d16c81d3035c4127781ff:server.js
const alimentosRoutes = require('./routes/alimentosRoutes');
const refeicoesRoutes = require('./routes/refeicoesRoutes');
const medidasRoutes = require('./routes/medidasRoutes');

<<<<<<< HEAD:index.js
// Usar rotas
app.use('/users', usersRoutes);
app.use('/alimentos', alimentosRoutes);
app.use('/refeicoes', refeicoesRoutes);
app.use('/medidas', medidasRoutes);

app.get('/', (req, res) => {
  res.send('API SIPDUS está rodando!');
});

module.exports = app;

=======
// 🟢 Usar rotas com prefixos padronizados
app.use('/alimentos', alimentosRoutes);
app.use('/refeicoes', refeicoesRoutes);
app.use('/medicoes', medicoesRoutes);
app.use('/usuarios', usuariosRoutes); // ✅ rotas /usuarios/register, /usuarios/login etc.

// 🟢 Endpoint raiz para teste
app.get('/', (req, res) => {
  res.send('✅ API SIPDUS está rodando!');
});

// 🟢 Exportar o app para o Vercel
module.exports = app;

// 🟢 Rodar localmente (node server.js)
>>>>>>> e67226da687c02d73b1d16c81d3035c4127781ff:server.js
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server rodando em http://localhost:${PORT}`));
}

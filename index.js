const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Importar rotas
const usersRoutes = require('./routes/usersRoutes');
const alimentosRoutes = require('./routes/alimentosRoutes');
const refeicoesRoutes = require('./routes/refeicoesRoutes');
const medidasRoutes = require('./routes/medidasRoutes');

// Usar rotas
app.use('/users', usersRoutes);
app.use('/alimentos', alimentosRoutes);
app.use('/refeicoes', refeicoesRoutes);
app.use('/medidas', medidasRoutes);

app.get('/', (req, res) => {
  res.send('API SIPDUS está rodando!');
});

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, '0.0.0.0', () => { // ✅ Adicione '0.0.0.0'
  console.log(`🚀 Server running on port ${PORT}`);
  });}

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Rotas
const userRoutes = require('./routes/users');
const medidasRoutes = require('./routes/medidas');
const refeicoesRoutes = require('./routes/refeicoes');
const alimentosRoutes = require('./routes/alimentos');

app.use('/api/refeicoes', refeicoesRoutes);
app.use('/api/users', userRoutes);
app.use('/api/medidas', medidasRoutes);
app.use('/api/alimentos', alimentosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

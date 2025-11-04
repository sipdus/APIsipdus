const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

// Teste rápido
app.get('/', (req, res) => {
  res.send('API funcionando!');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
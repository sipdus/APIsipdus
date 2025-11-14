const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// Rotas
const usuariosRoutes = require("../routes/usuariosRoutes");
const alimentosRoutes = require("../routes/alimentosRoutes");
const refeicoesRoutes = require("../routes/refeicoesRoutes");
const medicoesRoutes = require("../routes/medicoesRoutes");

app.use("/users", usuariosRoutes);
app.use("/alimentos", alimentosRoutes);
app.use("/refeicoes", refeicoesRoutes);
app.use("/medidas", medicoesRoutes);

// Teste
app.get("/", (req, res) => {
  res.send("API SIPDUS rodando no vercel!");
});

module.exports = app;

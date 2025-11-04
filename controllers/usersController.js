const db = require('../db');

// Cadastro de usuário
exports.registerUser = (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ error: 'Preencha todos os campos.' });
  }

  const sql = 'INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)';
  db.run(sql, [nome, email, senha], function (err) {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
    }
    res.status(201).json({ message: 'Usuário cadastrado com sucesso!', userId: this.lastID });
  });
};

// Login de usuário
exports.loginUser = (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ error: 'Informe email e senha.' });
  }

  const sql = 'SELECT * FROM users WHERE email = ? AND senha = ?';
  db.get(sql, [email, senha], (err, row) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Erro ao fazer login.' });
    }

    if (!row) {
      return res.status(401).json({ error: 'Usuário ou senha incorretos.' });
    }

    res.status(200).json({ message: 'Login realizado com sucesso!', user: row });
  });
};


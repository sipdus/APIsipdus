const sqlite3 = require('sqlite3').verbose();

// Cria (ou abre) o banco local
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco:', err.message);
  } else {
    console.log('Conectado ao banco SQLite.');
  }
});

// Cria tabelas (se não existirem)
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      senha TEXT NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS medidas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      glicose REAL,
      bpm INTEGER,
      spo2 INTEGER,
      data DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(user_id) REFERENCES users(id)
    )
  `);
});

module.exports = db;

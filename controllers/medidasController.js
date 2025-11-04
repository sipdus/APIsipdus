const db = require('../db');

// Registrar nova medição
exports.addMedida = (req, res) => {
  const { user_id, glicose, bpm, spo2 } = req.body;

  if (!user_id || glicose === undefined || bpm === undefined || spo2 === undefined) {
    return res.status(400).json({ error: 'Preencha todos os campos.' });
  }

  const sql = `
    INSERT INTO medidas (user_id, glicose, bpm, spo2)
    VALUES (?, ?, ?, ?)
  `;

  db.run(sql, [user_id, glicose, bpm, spo2], function (err) {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Erro ao salvar medição.' });
    }

    res.status(201).json({
      message: 'Medição salva com sucesso!',
      medida_id: this.lastID
    });
  });
};

// Listar todas as medições de um usuário
exports.getMedidasByUser = (req, res) => {
  const { user_id } = req.params;

  const sql = 'SELECT * FROM medidas WHERE user_id = ? ORDER BY data DESC';
  db.all(sql, [user_id], (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Erro ao buscar medições.' });
    }

    res.status(200).json(rows);
  });
};

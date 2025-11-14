const supabase = require('../config/supabase');

exports.getAllRefeicoes = async (req, res) => {
  try {
    const { data, error } = await supabase.from('refeicoes').select('*');
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addRefeicao = async (req, res) => {
  const { user_id, descricao, data } = req.body;

  try {
    const { data: result, error } = await supabase
      .from('refeicoes')
      .insert([{ user_id, descricao, data }]);

    if (error) throw error;

    res.status(201).json({ message: 'Refeição criada!', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

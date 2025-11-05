const supabase = require('../supabase');

exports.addRefeicao = async (req, res) => {
  const { user_id, nome, quantidade, carboidratos, calorias } = req.body;
  if (!user_id || !nome) return res.status(400).json({ error: 'Campos obrigatórios: user_id e nome.' });

  const { data, error } = await supabase
    .from('refeicoes')
    .insert([{ user_id, nome, quantidade, carboidratos, calorias }]);

  if (error) return res.status(500).json({ error: error.message });

  res.status(201).json({ message: 'Refeição salva com sucesso!', refeicao_id: data[0].id });
};

exports.getRefeicoesByUser = async (req, res) => {
  const { user_id } = req.params;

  const { data, error } = await supabase
    .from('refeicoes')
    .select('*')
    .eq('user_id', user_id)
    .order('data', { ascending: false });

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json(data);
};

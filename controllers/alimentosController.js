const supabase = require('../supabase');

exports.getAlimentos = async (req, res) => {
  const { data, error } = await supabase
    .from('alimentos')
    .select('*')
    .order('nome', { ascending: true });

  if (error) return res.status(500).json({ error: error.message });

  res.json(data);
};

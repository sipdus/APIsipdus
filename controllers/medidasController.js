const supabase = require('../supabase');

exports.addMedida = async (req, res) => {
  const { user_id, glicose, bpm, spo2 } = req.body;
  if (!user_id || glicose === undefined || bpm === undefined || spo2 === undefined)
    return res.status(400).json({ error: 'Preencha todos os campos.' });

  const { data, error } = await supabase
    .from('medidas')
    .insert([{ user_id, glicose, bpm, spo2 }]);

  if (error) return res.status(500).json({ error: error.message });

  res.status(201).json({ message: 'Medição salva com sucesso!', medida_id: data[0].id });
};

exports.getMedidasByUser = async (req, res) => {
  const { user_id } = req.params;

  const { data, error } = await supabase
    .from('medidas')
    .select('*')
    .eq('user_id', user_id)
    .order('data', { ascending: false });

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json(data);
};

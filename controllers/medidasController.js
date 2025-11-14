const supabase = require('../config/supabase');

exports.getAllMedidas = async (req, res) => {
  try {
    const { data, error } = await supabase.from('medidas').select('*');
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMedidaById = async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from('medidas')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addMedida = async (req, res) => {
  const { user_id, glicose, bpm, spo2, data } = req.body;

  try {
    const { data: result, error } = await supabase
      .from('medidas')
      .insert([{ user_id, glicose, bpm, spo2, data }]);

    if (error) throw error;

    res.status(201).json({ message: 'Medição adicionada!', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateMedida = async (req, res) => {
  const { id } = req.params;
  const { user_id, glicose, bpm, spo2, data } = req.body;

  try {
    const { data: result, error } = await supabase
      .from('medidas')
      .update({ user_id, glicose, bpm, spo2, data })
      .eq('id', id);

    if (error) throw error;

    res.json({ message: 'Medição atualizada!', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteMedida = async (req, res) => {
  const { id } = req.params;

  try {
    const { error } = await supabase.from('medidas').delete().eq('id', id);
    if (error) throw error;

    res.json({ message: 'Medição deletada!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const { createClient } = require('@supabase/supabase-js');

const supabase = require('../config/supabase');


// 🟩 Listar medições
exports.getAllMedicoes = async (req, res) => {
  try {
    const { data, error } = await supabase.from('medicoes').select('*');
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🟦 Buscar medição por ID
exports.getMedicaoById = async (req, res) => {
  const { id } = req.params;
  try {
    const { data, error } = await supabase
      .from('medicoes')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🟨 Adicionar medição
exports.addMedicao = async (req, res) => {
  const { usuario_id, glicose, bpm, spo2, data } = req.body;
  try {
    const { data: result, error } = await supabase.from('medicoes').insert([
      { usuario_id, glicose, bpm, spo2, data }
    ]);
    if (error) throw error;
    res.status(201).json({ message: 'Medição adicionada com sucesso!', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🟥 Atualizar medição
exports.updateMedicao = async (req, res) => {
  const { id } = req.params;
  const { usuario_id, glicose, bpm, spo2, data } = req.body;
  try {
    const { data: result, error } = await supabase
      .from('medicoes')
      .update({ usuario_id, glicose, bpm, spo2, data })
      .eq('id', id);
    if (error) throw error;
    res.json({ message: 'Medição atualizada com sucesso!', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ⛔ Deletar medição
exports.deleteMedicao = async (req, res) => {
  const { id } = req.params;
  try {
    const { error } = await supabase.from('medicoes').delete().eq('id', id);
    if (error) throw error;
    res.json({ message: 'Medição deletada com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

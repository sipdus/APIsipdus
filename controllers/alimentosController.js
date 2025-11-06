const { createClient } = require('@supabase/supabase-js');

const supabase = require('../config/supabase');

// 🟩 Listar todos os alimentos
exports.getAllAlimentos = async (req, res) => {
  try {
    const { data, error } = await supabase.from('alimentos').select('*');
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🟦 Buscar alimento por ID
exports.getAlimentoById = async (req, res) => {
  const { id } = req.params;
  try {
    const { data, error } = await supabase
      .from('alimentos')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🟨 Adicionar novo alimento
exports.addAlimento = async (req, res) => {
  const { nome, calorias, proteina, lipideos, colesterol, carboidratos, fibra } = req.body;
  try {
    const { data, error } = await supabase.from('alimentos').insert([
      { nome, calorias, proteina, lipideos, colesterol, carboidratos, fibra }
    ]);
    if (error) throw error;
    res.status(201).json({ message: 'Alimento adicionado com sucesso!', data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🟥 Atualizar alimento
exports.updateAlimento = async (req, res) => {
  const { id } = req.params;
  const { nome, calorias, proteina, lipideos, colesterol, carboidratos, fibra } = req.body;
  try {
    const { data, error } = await supabase
      .from('alimentos')
      .update({ nome, calorias, proteina, lipideos, colesterol, carboidratos, fibra })
      .eq('id', id);
    if (error) throw error;
    res.json({ message: 'Alimento atualizado com sucesso!', data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ⛔ Deletar alimento
exports.deleteAlimento = async (req, res) => {
  const { id } = req.params;
  try {
    const { error } = await supabase.from('alimentos').delete().eq('id', id);
    if (error) throw error;
    res.json({ message: 'Alimento deletado com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

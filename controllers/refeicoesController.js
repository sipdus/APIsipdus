const { createClient } = require('@supabase/supabase-js');

const supabase = require('../config/supabase');


// 🟩 Listar todas as refeições
exports.getAllRefeicoes = async (req, res) => {
  try {
    const { data, error } = await supabase.from('refeicoes').select('*');
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🟦 Buscar refeição por ID
exports.getRefeicaoById = async (req, res) => {
  const { id } = req.params;
  try {
    const { data, error } = await supabase
      .from('refeicoes')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🟨 Adicionar refeição
exports.addRefeicao = async (req, res) => {
  const { usuario_id, nome, data, alimentos } = req.body;
  try {
    const { data: result, error } = await supabase.from('refeicoes').insert([
      { usuario_id, nome, data, alimentos }
    ]);
    if (error) throw error;
    res.status(201).json({ message: 'Refeição adicionada com sucesso!', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🟥 Atualizar refeição
exports.updateRefeicao = async (req, res) => {
  const { id } = req.params;
  const { usuario_id, nome, data, alimentos } = req.body;
  try {
    const { data: result, error } = await supabase
      .from('refeicoes')
      .update({ usuario_id, nome, data, alimentos })
      .eq('id', id);
    if (error) throw error;
    res.json({ message: 'Refeição atualizada com sucesso!', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ⛔ Deletar refeição
exports.deleteRefeicao = async (req, res) => {
  const { id } = req.params;
  try {
    const { error } = await supabase.from('refeicoes').delete().eq('id', id);
    if (error) throw error;
    res.json({ message: 'Refeição deletada com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

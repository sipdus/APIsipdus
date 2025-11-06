const { createClient } = require('@supabase/supabase-js');

const supabase = require('../config/supabase');


// 🟩 Listar usuários
exports.getAllUsuarios = async (req, res) => {
  try {
    const { data, error } = await supabase.from('usuarios').select('*');
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🟦 Buscar usuário por ID
exports.getUsuarioById = async (req, res) => {
  const { id } = req.params;
  try {
    const { data, error } = await supabase
      .from('usuarios')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🟨 Adicionar usuário
exports.addUsuario = async (req, res) => {
  const { nome, email, senha, idade, peso, altura } = req.body;
  try {
    const { data: result, error } = await supabase.from('usuarios').insert([
      { nome, email, senha, idade, peso, altura }
    ]);
    if (error) throw error;
    res.status(201).json({ message: 'Usuário criado com sucesso!', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🟥 Atualizar usuário
exports.updateUsuario = async (req, res) => {
  const { id } = req.params;
  const { nome, email, senha, idade, peso, altura } = req.body;
  try {
    const { data: result, error } = await supabase
      .from('usuarios')
      .update({ nome, email, senha, idade, peso, altura })
      .eq('id', id);
    if (error) throw error;
    res.json({ message: 'Usuário atualizado com sucesso!', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ⛔ Deletar usuário
exports.deleteUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const { error } = await supabase.from('usuarios').delete().eq('id', id);
    if (error) throw error;
    res.json({ message: 'Usuário deletado com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

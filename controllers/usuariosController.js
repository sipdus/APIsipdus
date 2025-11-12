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
    if (error) return res.status(404).json({ error: 'Usuário não encontrado.' });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🟨 Adicionar usuário (cadastro)
exports.addUsuario = async (req, res) => {
  const { nome, email, senha } = req.body; // remover idade, peso, altura
  if (!nome || !email || !senha) {
    return res.status(400).json({ error: 'Nome, email e senha são obrigatórios.' });
  }

  try {
    const { data: result, error } = await supabase.from('usuarios').insert([
      { nome, email, senha }
    ]);
    if (error) throw error;
    res.status(201).json({ message: 'Usuário criado com sucesso!', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔹 Login de usuário
exports.loginUsuario = async (req, res) => {
  const { email, senha } = req.body;
  if (!email || !senha) {
    return res.status(400).json({ error: "Email e senha são obrigatórios." });
  }

  try {
    const { data, error } = await supabase
      .from('usuarios')
      .select('*')
      .eq('email', email)
      .eq('senha', senha)
      .single();

    if (error) return res.status(401).json({ error: "Usuário ou senha incorretos." });

    res.json({ user: data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🟥 Atualizar usuário
exports.updateUsuario = async (req, res) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body; // remover idade, peso, altura
  try {
    const { data: result, error } = await supabase
      .from('usuarios')
      .update({ nome, email, senha })
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

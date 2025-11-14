const supabase = require('../config/supabase');

// Listar usuários
exports.getAllUsuarios = async (req, res) => {
  try {
    const { data, error } = await supabase.from('users').select('*');
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Buscar usuário por ID
exports.getUsuarioById = async (req, res) => {
  const { id } = req.params;
  try {
    const { data, error } = await supabase.from('users').select('*').eq('id', id).single();
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Cadastrar usuário
exports.addUsuario = async (req, res) => {
  const { name, email, senha } = req.body;

  if (!name || !email || !senha) {
    return res.status(400).json({ error: "name, email e senha são obrigatórios." });
  }

  try {
    const { data, error } = await supabase.from('users').insert([{ name, email, senha }]);
    if (error) throw error;

    res.status(201).json({ message: "Usuário criado com sucesso!", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login usuário
exports.loginUsuario = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .eq('senha', senha)
      .single();

    if (error || !data) {
      return res.status(401).json({ error: "Usuário ou senha incorretos." });
    }

    res.json({ user: data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar usuário
exports.updateUsuario = async (req, res) => {
  const { id } = req.params;
  const { name, email, senha } = req.body;

  try {
    const { data, error } = await supabase
      .from('users')
      .update({ name, email, senha })
      .eq('id', id);

    if (error) throw error;

    res.json({ message: 'Usuário atualizado com sucesso!', data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar usuário
exports.deleteUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const { error } = await supabase.from('users').delete().eq('id', id);
    if (error) throw error;

    res.json({ message: 'Usuário deletado com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

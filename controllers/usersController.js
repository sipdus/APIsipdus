const supabase = require('../config/supabase');

// Listar usuários
exports.getAllUsers = async (req, res) => {
  try {
    const { data, error } = await supabase.from('users').select('*');
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Buscar usuário por ID
exports.getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Registrar usuário
exports.registerUser = async (req, res) => {
  const { name, email, senha } = req.body;

  if (!name || !email || !senha) {
    return res.status(400).json({ error: "name, email e senha são obrigatórios." });
  }

  try {
    const { data, error } = await supabase.from('users').insert([{ name, email, senha }]);

    if (error) throw error;

    res.status(201).json({ message: "Usuário registrado com sucesso!", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login
exports.loginUser = async (req, res) => {
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

// Atualizar
exports.updateUser = async (req, res) => {
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

// Deletar
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const { error } = await supabase.from('users').delete().eq('id', id);
    if (error) throw error;

    res.json({ message: 'Usuário deletado com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

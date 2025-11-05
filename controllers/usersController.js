const supabase = require('../supabase');

// Cadastro
exports.registerUser = async (req, res) => {
  const { nome, email, senha } = req.body;
  if (!nome || !email || !senha)
    return res.status(400).json({ error: 'Preencha todos os campos.' });

  const { data, error } = await supabase
    .from('users')
    .insert([{ nome, email, senha }]);

  if (error) return res.status(500).json({ error: error.message });

  res.status(201).json({ message: 'Usuário cadastrado com sucesso!', userId: data[0].id });
};

// Login
exports.loginUser = async (req, res) => {
  const { email, senha } = req.body;
  if (!email || !senha) return res.status(400).json({ error: 'Informe email e senha.' });

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .eq('senha', senha)
    .single();

  if (error || !data) return res.status(401).json({ error: 'Usuário ou senha incorretos.' });

  res.status(200).json({ message: 'Login realizado com sucesso!', user: data });
};

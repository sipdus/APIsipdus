exports.registerUser = (req, res) => {
  const { nome, email, senha } = req.body;

  console.log('Novo usuário:', { nome, email, senha });
  res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
};

exports.loginUser = (req, res) => {
  const { email, senha } = req.body;

  console.log('Login:', { email, senha });
  res.status(200).json({ message: 'Login realizado com sucesso!' });
};

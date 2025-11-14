const supabase = require('../config/supabase');

exports.getAllAlimentos = async (req, res) => {
  try {
    const { data, error } = await supabase.from('alimentos').select('*');
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addAlimento = async (req, res) => {
  const {
    nome,
    calorias,
    carboidratos,
    proteinas,
    refeicao_id,
    lipideos,
    colesterol,
    fibra
  } = req.body;

  try {
    const { data, error } = await supabase.from('alimentos').insert([
      {
        nome,
        calorias,
        carboidratos,
        proteinas,
        refeicao_id,
        lipideos,
        colesterol,
        fibra
      }
    ]);

    if (error) throw error;

    res.status(201).json({ message: 'Alimento criado!', data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

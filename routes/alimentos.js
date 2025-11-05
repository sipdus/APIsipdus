const express = require('express');
const router = express.Router();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://SEU_PROJETO.supabase.co';
const supabaseKey = 'SUA_CHAVE_DE_SERVICE_ROLE'; // não coloque no front-end
const supabase = createClient(supabaseUrl, supabaseKey);

// GET: listar todos os alimentos
router.get('/', async (req, res) => {
  const { data, error } = await supabase.from('alimentos').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// POST: adicionar um alimento
router.post('/', async (req, res) => {
  const { nome, calorias, proteina, gordura, colesterol, carboidrato, fibra } = req.body;
  const { data, error } = await supabase.from('alimentos').insert([
    { nome, calorias, proteina, gordura, colesterol, carboidrato, fibra }
  ]);
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

module.exports = router;

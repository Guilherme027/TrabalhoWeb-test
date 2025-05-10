const express = require('express');
const router = express.Router();
const Form = require('../models/form');

router.post('/', async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.status(201).json({ message: 'Formulário salvo com sucesso', form });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao salvar formulário' });
  }
});

router.get('/', async (req, res) => {
  const forms = await Form.find();
  res.status(200).json(forms);
});

module.exports = router;

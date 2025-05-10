const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();

// Cadastro
router.post('/signup', async (req, res) => {
  const { nome, email, senha, funcao, aceitouTermos, imagem } = req.body;

  try {
    const usuarioExistente = await User.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ message: 'Usuário já cadastrado' });
    }

    const hashedSenha = await bcrypt.hash(senha, 10);
    const novoUsuario = new User({
      nome,
      email,
      senha: hashedSenha,
      funcao,
      aceitouTermos,
      imagem
    });

    await novoUsuario.save();
    res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao cadastrar usuário', error });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await User.findOne({ email });
    if (!usuario) {
      return res.status(401).json({ message: 'Email não encontrado' });
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
    if (!senhaCorreta) {
      return res.status(401).json({ message: 'Senha incorreta' });
    }

    const token = jwt.sign(
      { userId: usuario._id, email: usuario.email },
      'secreto123',
      { expiresIn: '2h' }
    );

    res.status(200).json({ token, usuario });
  } catch (error) {
    res.status(500).json({ message: 'Erro no login', error });
  }
});

module.exports = router;

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Esquema do Usuário
const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  funcao: { type: String, required: true },
  aceitouTermos: { type: Boolean, required: true },
  imagem: { type: String, default: 'https://via.placeholder.com/40' }
});

// Método para comparar senha
usuarioSchema.methods.validarSenha = function(senha) {
  return bcrypt.compareSync(senha, this.senha);
};

// Criptografando a senha antes de salvar o usuário
usuarioSchema.pre('save', function(next) {
  if (this.isModified('senha')) {
    this.senha = bcrypt.hashSync(this.senha, 10);
  }
  next();
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;

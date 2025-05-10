const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  conteudo: { type: String, required: true },
  imagemUrl: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', messageSchema);

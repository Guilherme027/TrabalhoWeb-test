const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  selecaoCombobox: { type: String, required: true },
  escolhaRadio: { type: String, required: true },
  opcoesCheckbox: [{ type: String }] // múltiplas opções marcadas
});

module.exports = mongoose.model('Form', formSchema);

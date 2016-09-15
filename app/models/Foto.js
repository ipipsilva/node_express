var mongoose = require('mongoose');

var fotoSchema = new mongoose.Schema({
    nome: {type: String},
    descricao: {type: String},
    url: {type: String}
});

var Foto = mongoose.model('Foto', fotoSchema);

module.exports = Foto;

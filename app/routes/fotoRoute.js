var express = require('express');
var Foto = require('../models/Foto.js');
var connection = require('../config/database.js');

var fotoRoute = function(router) {

    router.route('/').get( function(req, res){
        Foto.find({})
        .exec(function(err, fotos) {
            if(err) {
                console.log('Erro ao acessar as fotos! Erro: ' + err);
            } else {
                res.render('pages/index', {'fotos': fotos });
            }
        });
    });

    router.route('/').post( function(req, res) {

        var nome = req.body.nome;
        var descricao = req.body.descricao;
        var url = req.body.url;

        var foto = new Foto({"nome": nome, "descricao": descricao, "url": url});
        foto.save(function(err){
            if(err) res.send('Erro ao salvar foto! Erro: ' + err);
            res.redirect('/');
        });
    });

    router.route('/detalhe/:id').get(function(req, res) {
        var query =  {'_id' : req.params.id};
        Foto.find(query, function(err, foto) {
            if (err)
              console.log(err);
            else {
              console.log('Foto recebida: ' + foto);
              res.render('pages/detalhe', {foto: foto});
            }
        });
    });
};

module.exports = fotoRoute;

var express = require('express');
var Foto = require('../models/Foto');
var connection = require('../config/database.js');

var fotoRoute = function(router) {

    router.route('/').get( function(req, res){
        Foto.find({}).sort([['nome', 'ascending']])
        .exec(function(err, fotos) {
            if(err) {
                console.log('Erro ao acessar as fotos! Erro: ' + err);
            } else {
                res.render('pages/index', {'fotos': fotos});
            }
        });
    });

    router.route('/').post( function(req, res) {

        var id = req.body.id;
        var nome = req.body.nome;
        var descricao = req.body.descricao;
        var url = req.body.url;

        if(id) {
            var fotoUpdate = {"nome": nome, "descricao": descricao, "url": url};
            Foto.update(id, fotoUpdate, function(err){
                if(err) console.log('Erro ao atualizar a foto! Erro: ' + err);
                res.redirect('/');
            });
        } else {
            var foto = new Foto({"nome": nome, "descricao": descricao, "url": url});
            foto.save(function(err){
                if(err) res.send('Erro ao salvar foto! Erro: ' + err);
                res.redirect('/');
            });
        }
    });

    router.route('/detalhe/:id').get(function(req, res) {
        var query =  {'_id' : req.params.id};
        Foto.findOne(query, function(err, foto) {
            if (err) console.log('Erro ao recuperar os dados da foto! Erro: ' + err);
            res.render('pages/detalhe', {'foto':foto});
        });
    });

    router.route('/delete/:id').get(function(req, res) {
        var query = {"_id":req.params.id};
        Foto.remove(query, function(err){
            if(err) console.log('Erro ao deletar a foto! Erro: ' + err);
            res.redirect('/');
        });
    });
};

module.exports = fotoRoute;

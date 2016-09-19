var express = require('express');

var escolaRoute = function(router) {

    router.route('/escola').get(function(req, res) {
        res.render('pages/escola');
    });
};

module.exports = escolaRoute;

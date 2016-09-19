var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var connection = require('./app/config/database.js');
var fotoRoute = require('./app/routes/fotoRoute.js');
var escolaRoute = require('./app/routes/escolaRoute.js');

app.use('/pages', express.static('pages'));
app.use('/assets', express.static('assets'));

app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//conexão com banco
var uri = process.env.MONGODB_URI || 'mongodb://localhost/fotoapp2';
connection.connect(uri);

/*app.get('/', function(req, res) {
    res.render('pages/index');
});*/

app.get('/cadastro', function(req, res) {
    res.render('pages/cadastro');
});

fotoRoute(app);
escolaRoute(app);

var port = process.env.PORT || 3000;

var server = app.listen(port, function(req, res) {
    console.log('Servidor rodando na porta: ' + port);
});

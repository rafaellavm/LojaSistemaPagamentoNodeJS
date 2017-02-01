var express = require('express');
//pacote para carregar as rotas
var load = require('express-load');
//carrevar o body parser
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function() {
    var app = express();
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    //use recebe funcoes que vao ser aplicadas ao request pela ordem, então ele tem que vir antes do load das rotas
    //urlencoded: é o formato que o formulário envia os dados para o nosso servidor por default
    app.use(bodyParser.urlencoded({extended:true}));

    //pra aceitar json
    app.use(bodyParser.json());

    app.use(expressValidator());

    //aqui a gente informa quais arquivos vão ser carregados por ele
    //é necessário indicar a pasta 'routes'. Assim tudo que está nessa pasta vai ser carregado dentro da 'app'
    //também vamos carregar tudo que está dentro da pasta 'infra' com o 'then()'
    //'carregue tudo que está dentro de routes, infra e coloque no app'
    //cmd: indica a partir de qual pasta começa a procurar
    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);

    return app;
};


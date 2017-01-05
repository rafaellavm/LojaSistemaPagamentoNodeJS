var express = require('express');

//pacote para carregar as rotas
var load = require('express-load');

module.exports = function() {

    var app = express();


    app.set('view engine', 'ejs');
    app.set('views', './app/views');

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


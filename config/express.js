var app = require('express')();

//var app = express();
//set(): definir variáveis pra dentro do express
app.set('view engine', 'ejs');
app.set('views','./app/views');

//setando a pasta de views

module.exports = function () {
    return app;
}

var app = require('express')();

//var app = express();
//set(): definir variáveis pra dentro do express
app.set('view engine', 'ejs');

//setando a pasta de views
app.set('views','./app/views');

module.exports = function () {
    return app;
}

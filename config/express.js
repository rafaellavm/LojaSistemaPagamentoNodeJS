var app = require('express')();

//var app = express();
//set(): definir variáveis pra dentro do express
app.set('view engine', 'ejs');

module.exports = function () {
    return app;
}

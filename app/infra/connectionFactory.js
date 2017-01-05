//importando o mysql
var mysql = require('mysql');

var connectMYSQL = function() {

    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        port: '3306',
        database: 'lojasistemapagamento'
    });
}

//wrapper (função que 'embrulha' outra função)
//assim só vai ocorrer chamada ao banco se for solicitado
module.exports = function(){

    return connectMYSQL;
}

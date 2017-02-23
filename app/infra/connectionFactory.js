//importando o mysql
var mysql = require('mysql');

var connectMYSQL = function () {

    //se vc não tiver criado nenhuma variávem de ambiente
    if (!process.env.NODE_ENV) {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            port: '3306',
            database: 'lojasistemapagamento'
        });
    } 
    //senão pega referencia do banco de teste
    if (process.env.NODE_ENV == 'teste') {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            port: '3306',
            database: 'lojasistemapagamento_teste'
        });
    }

}

//wrapper (função que 'embrulha' outra função)
//assim só vai ocorrer chamada ao banco se for solicitado
module.exports = function () {

    return connectMYSQL;
}
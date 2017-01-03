//importando o mysql
var mysql = require('mysql');

module.exports = function () {

    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        port: '3306',
        database: 'lojasistemapagamento'
    });
}

//configuração de rota

module.exports = function (app) {
    app.get('/produtos', function (req, res) {

        //conexão com o mysql
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            port: '3306',
            database: 'lojasistemapagamento'
        });
        connection.query('SELECT *FROM livros', function(err, results){
            res.send(results);
        });
        connection.end();

        //chamando pela pasta
        //res.render('produtos/lista');
    });
}

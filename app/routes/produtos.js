//importando o mysql
var connectionFactory = require('../infra/connectionFactory');

module.exports = function (app) {
    app.get('/produtos', function (req, res) {

        var connection = connectionFactory();

        connection.query('SELECT *FROM livros', function(err, results){
            //coloca o resultado na variável (chave) 'lista' pra ser chamado lá na página
            res.render('produtos/lista', {lista:results});
        });
        connection.end();
    });
}

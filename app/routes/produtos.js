module.exports = function (app) {
    app.get('/produtos', function (req, res) {

        //o express load cria objetos das pastas carregadas
        var connection = app.infra.connectionFactory();

        connection.query('SELECT *FROM livros', function(err, results){
            //coloca o resultado na variável (chave) 'lista' pra ser chamado lá na página
            res.render('produtos/lista', {lista:results});
        });
        connection.end();
    });
}

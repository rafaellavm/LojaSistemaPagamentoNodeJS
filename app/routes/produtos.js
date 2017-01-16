module.exports = function (app) {

    app.get('/produtos', function (req, res) {

        //o express load cria objetos das pastas carregadas
        var connection = app.infra.connectionFactory();
        var produtosBanco = new app.infra.ProdutosDAO(connection);

        produtosBanco.lista(function(err, results){
            //coloca o resultado na variável (chave) 'lista' pra ser chamado lá na página
            res.render('produtos/lista', {lista:results});
        });
        connection.end();
    });

    //mesma coisa que dizer: "toda vez que eu digitar /form vc execute essa função associada a esse endereço"
    app.get('/produtos/form', function(req,res){
        res.render('produtos/form');
    });

    /* app.get('/produtos/remove', function (req, res) {

        //o express load cria objetos das pastas carregadas
        var connection = app.infra.connectionFactory();
        var produtosBanco = app.infra.produtosBanco(connection);

        var produto = produtosBanco.carrega(id, calback){

            if (produto){
                produtosBanco.remove(produto, callback);
            }
        });
        connection.end();
    });*/
}




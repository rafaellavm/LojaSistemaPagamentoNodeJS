module.exports = function (app) {

     app.get('/produtos', function (req, res) {
        //o express load cria objetos das pastas carregadas
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function (err, results) {
            res.format({
                html: function(){
                    res.render('produtos/lista', {lista: results});
                },
                json: function(){
                    res.json(results);
                }
            })
        });
        connection.end();
     });
     
     //mesma coisa que dizer: "toda vez que eu digitar /form vc execute essa função associada a esse endereço"
    app.get('/produtos/form', function (req, res) {
        res.render('produtos/form', {errosValidacao: {}, produto: {}});
    });

    //form.ejs, salvando no formulário
    app.post('/produtos', function (req, res) {

        //os dados que foram enviados do formulário através de um post eles ficam todos dentro da propriedade body do seu request
        //o request é um objeto que vem do express, o express já fornece o conteúdo que vem do formulário
        var produto = req.body;

        //retorna uma validação para o título (express-validator)
        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('preco', 'Formato inválido').isFloat();

        //verifica se existe erros (express-validator)
        var erros = req.validationErrors();

        if(erros){
            //se o erro for um html (no caso de acesso pelo console cadastra-livros-terminal)
            res.format({
                html: function(){
                    res.status(400).render('produtos/form',{errosValidacao:erros, produto: produto});
                },
                json: function(){
                    res.status(400).json(erros);
                }
            });
            
            res.render('produtos/form',{errosValidacao:erros, produto: produto});
            return;
        }

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.salva(produto, function (erros, resultados) {
            console.log(erros);
            res.redirect('/produtos');
        });
    });




      /*--------------------------------------------------
    
    var listaProdutos = function (req, res) {
        //o express load cria objetos das pastas carregadas
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function (err, results) {
            //coloca o resultado na variável (chave) 'lista' pra ser chamado lá na página
            res.render('produtos/lista', {
                lista: results
            });
        });
        connection.end();
    };
     
     app.get('/produtos', listaProdutos);
    
    --------------------------------------------------*/





















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
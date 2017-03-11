module.exports = function (app) {
 
 app.get('/promocoes/form', function (req, res) {
        //o express load cria objetos das pastas carregadas
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function (err, results) {
           res.render('promocoes/form',{lista:results});
        });
        connection.end();
    });

     app.post('/promocoes', function (req, res) {

        //os dados que foram enviados do formulário através de um post eles ficam todos dentro da propriedade body do seu request
        //o request é um objeto que vem do express, o express já fornece o conteúdo que vem do formulário
        var promocao = req.body;

        console.log(promocao);
        res.redirect('promocoes/form');
     });
   
}
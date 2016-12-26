//configuração de rota

module.exports = function (app) {
    app.get('/produtos', function (request, response) {

        //chamando pela pasta
        response.render('produtos/lista');
    });
}

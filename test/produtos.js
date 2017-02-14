var http = require('http');
describe('ProdutosController', function () {

    //verificar se a nossa lisatagem se produz json está funcionando
    it('listagem json', function (funcaoFinalizacao) {
        var configuracoes = {
            hostname: 'localhost',
            port: 4000,
            path: '/produtos',
            headers: {
                'Accept': 'application/json'  
            }
        };

        http.get(configuracoes, function (res) {
            if(res.statusCode == 200){
                console.log('status está ok!');
            }
            if(res.headers['content-type'] == 'application/json; charset=utf-8'){
                console.log('Content-type está ok!');
            } 

            funcaoFinalizacao();
        });
    });
});
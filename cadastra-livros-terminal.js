var http = require('http');
var configuracoes = {
    hostname: 'localhost',
    port: 4000,
    method: 'post',
    path: '/produtos',
    headers: {
        'Accept': 'application/json',
        //'Accept': 'text/html'
        
        //assim pode RECEBER dados como json também
        'Content-type': 'application/json'
    }
};

var client = http.request(configuracoes, function(res){
    console.log(res.statusCode);
    res.on('data', function(body){
        console.log('Corpo: ' + body);
    });
});

var produto = {
    titulo: '',
    descricao: 'Node Javascript',
    preco: 100
}

client.end(JSON.stringify(produto));
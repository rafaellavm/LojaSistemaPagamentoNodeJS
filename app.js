var express = require('express');

var app = express();

//set(): definir variáveis pra dentro do express
app.set('view engine', 'ejs');

//configuração de rota
app.get('/produtos',function(request,response){
    
    console.log('listando...');

    //send(): método que envia um retorno direto pro cliente
    //response.send("<html><body><h1>Listagem de produtos</h1></body></html>");

    //chamando pela pasta
    response.render('produtos/lista');

});

app.listen(4000,function(){
   
    console.log("Servidor rodando...");
});

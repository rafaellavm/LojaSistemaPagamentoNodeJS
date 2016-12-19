var express = require('express');

var app = express();

//configuração de rota
app.get('/produtos',function(request,response){
    
    //send(): método que envia um retorno direto pro cliente
    response.send("<html><body><h1>Listagem de produtos</h1></body></html>");
});

app.listen(4000,function(){
   
    console.log("Servidor rodando...");
});
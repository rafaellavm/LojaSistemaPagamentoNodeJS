var app = require('./config/express')();

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

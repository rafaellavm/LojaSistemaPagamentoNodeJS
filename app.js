var app = require('./config/express')();

var rotasProdutos = require('./app/routes/produtos')(app);

app.listen(4000,function(){
   
    console.log("Servidor rodando...");
});

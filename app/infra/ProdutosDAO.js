function ProdutosDAO(connection){
    this.connection = connection;
}

ProdutosDAO.prototype.lista = function (callback) {
    this.connection.query('SELECT *FROM livros', callback);
}  

ProdutosDAO.prototype.salva = function (produto, callback) {
    this.connection.query('INSERT into livros set ?',produto, callback);
}    

module.exports = function () {

    return ProdutosDAO;
}

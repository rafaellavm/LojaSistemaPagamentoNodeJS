function ProdutosDAO(connection){
    this.connection = connection;
}

ProdutosDAO.prototype.lista = function (callback) {
    this.connection.query('SELECT *FROM livros', callback);
}    

module.exports = function () {

    return ProdutosDAO;
}

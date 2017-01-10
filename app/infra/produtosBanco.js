module.exports = function(){
	this.lista = function(connection,callback){
		connection.query('SELECT *FROM livros', callback);
	}

	return this;
}

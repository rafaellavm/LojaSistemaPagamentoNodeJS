//var http = require('http');
var express = require('../config/express')();
var request = require('supertest')(express);

describe('ProdutosController', function () {

    //verificar se a nossa lisatagem se produz json está funcionando
    it('listagem json', function (done) {
        request.get('/produtos')
        //ele espera (expect) que o retorno seja json e que seja status 200
        .set('Accept', 'application/json')
        .expect('Content-type',/json/)
        .expect(200, done);



    });
});




/*var http = require('http');
var assert = require('assert');

describe('ProdutosController', function () {

    //verificar se a nossa lisatagem se produz json está funcionando
    it('listagem json', function (done) {
        var configuracoes = {
            hostname: 'localhost',
            port: 4000,
            path: '/produtos',
            headers: {
                'Accept': 'application/json'  
            }
        };

        http.get(configuracoes, function (res) {
            //'eu espero que o status retornado seja 200'
            assert.equal(res.statusCode, 302);
            assert.equal(res.headers['content-type'], 'application/json; charset=utf-8');
            done();
        });
    });
});*/


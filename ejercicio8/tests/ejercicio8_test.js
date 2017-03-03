var assert = require('assert');
var app = require('../ejercicio8.js');

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
describe('saludo', function(){
    it('Debe devolver "Hello World" cuando recibe el parametro en', function(){
      assert.equal(app.saludo("en"),"Hello World")
    })
    it('Debe devolver "Hola Mundo" cuando recibe el parametro es', function(){
      assert.equal(app.saludo("es"),"Hola Mundo")
    })
    it('Debe devolver "Hallo Welt" cuando reciba el parametro de', function(){
      assert.equal(app.saludo("de"),"Hallo Welt")
    })


})

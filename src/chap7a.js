/*
    El objeto stuff toma el "objeto devuelto" o exportado
    lo que seria equivalente a module.export del modulo
    requerido
*/
var stuff = require('./chap7');

console.log(stuff.counter(['Shaun','Crystal','Ryu']));
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi,5));
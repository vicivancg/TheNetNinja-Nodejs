//Module patterns

var counter = function(arr){
    return "hay " + arr.length + " elementos en el array";
};

var adder = function(a,b){
    return 'La suma de los 2 numeros es ' + (a+b);
};

var pi = 3.142;

/*
    exportar los modulos como propiedades directamente
*/

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;

/*
    exportar los modulos desde las variables
*/

/*
module.exports.counter = function(arr){
    return "hay " + arr.length + " elementos en el array";
};

module.exports.adder = function(a,b){
    return 'La suma de los 2 numeros es ' + (a+b);
};

module.exports.pi = 3.142;
*/

/*
Declaración como clave/objetos en el objeto object
*/

module.exports = {
    counter:counter,
    adder:adder,
    pi:pi
}

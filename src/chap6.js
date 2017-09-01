//modules and require()

/*
    Declaramos una función en una variable llamada counter
    In: arr (array)
    Process: crear cadena informativa del numero de elementos
    Out: string
*/

var counter = function(arr){
    return "Hay " + arr.length +" elementos en el array";
};

/*
    exportación de l variable counter,para ser "requerida" por otro modulo
*/
module.exports = counter;
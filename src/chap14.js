// Readable Streams

// cuando recibamos información se podria considerar readable
// Cuando enviamos un writeable stream
//cuando son ambos es un duplex

var http = require('http');
var fs = require('fs');

/*
    se crea l stream con y sin encoding (utf8)
*/
//var myReadStream = fs.createReadStream(__dirname + '/../assets/reading.txt');
var myReadStream = fs.createReadStream(__dirname + '/../assets/reading.txt','utf8');

/*
    Como fs hereda de Event, se le pueden asignar listeners, y el evento
    data, el cual se dispara siempre que se recibe un chunk de información.

    el valor almacenado en chunk depende de  si el stream tiene encoding
    si no tiene devuelve el buffer, en caso contrario la cadena.

    este metodo es similar a readFile, con la diferencia de que se recibe
    por partes (chunks) y puede ser adquirida la información, sin que se
    haya cargado toda.
*/
myReadStream.on('data',function(chunk){
    console.log('new chunck received: ');
    console.log(chunk);
});
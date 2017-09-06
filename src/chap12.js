//Creating a server

//Modulo http.

var http = require('http');

/* Se invoca la función createServer() que tiene como callback 
   otra funcion que permite el uso de los objetos request y Response
   por medio de la propiedad url podemos obtener la ruta
   y por medio de writeHead() y end() del objeto response
   podemos poner los headers y el contenido respectivamente.
*/
var server = http.createServer(function(req,res){
    console.log('request was made: ' + req.url);
    res.writeHead(200,{'Content-Type':'text-plain'});
    res.end('Hey ninjas');
});

/*
    Finalmente ponemos el puerto y la dirección en el que
    el servidor va a escuchar.
*/

server.listen(3000,'127.0.0.1');
console.log('yo dawgs, now listening to port 3000');

//request = request + request headers

//response = response + response headers

/*
    responde heders

    - Content-TYpe
    - Status
*/
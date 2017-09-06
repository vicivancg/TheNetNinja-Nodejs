//Pipes

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('request was made: ' + req.url);
    res.writeHead(200,{'Content-Type':'text-plain'});
    /*
        En lugar de agregar un listener al evento data
        y escribir en un writeable stream, podemos
        utilizar la función pipe de un objeto readable
        stream, la cual recibe el writeable stream al
        que le pasará la información.

        el objeto response del callback de createServer,
        es un writeable stream, por lo que se puede pasar
        a la función pipe, y el uso de end() ya no es necesario.
    */
    var myReadStream = fs.createReadStream(__dirname + '/../assets/reading.txt','utf8');    
    myReadStream.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log('yo dawgs, now listening to port 3000');
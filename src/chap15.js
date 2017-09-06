//Writeable Stream

var http = require('http');
var fs = require('fs');
/*
    Se crea un stream de lectura y uno de escritura
*/
var myReadStream = fs.createReadStream(__dirname + '/../assets/reading.txt','utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/../assets/writeMe.txt');
/*
    Cada que se recibe un chunk, se va escribiendo a través del stream writeable
*/

myReadStream.on('data',function(chunk){
    console.log('New chunk received');
    myWriteStream.write(chunk);
});

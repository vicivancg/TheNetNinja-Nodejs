//Serving JSON

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('request was made: ' + req.url);
    /*
        El Content-Type será application/json y le pasamos al Readable Stream
        un objeto serializado utilizando JSON.stringify().
    */
    res.writeHead(200,{'Content-Type':'application/json'});
    var myObj = {
        name: 'Vic',
        job: 'Ninja',
        age: '29'
    };

    res.end(JSON.stringify(myObj));
});

server.listen(3000,'127.0.0.1');
console.log('yo dawgs, now listening to port 3000');
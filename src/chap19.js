//Basic Routing

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('request was made: ' + req.url);
    /*
        Evaluamos la ruta con req.url y de acuerdo a lo que tenga
        podemos escribir en el response una pagina web distinta
        y mandar un status-code distinto

        si la url es /home o / -> escribimos index.html

        si la url es /contact -> escribimos contact.html

        si la url es /api/ninjas -> mandamos una cadena en JSON 
        (Con el Content-Type: application/json)

        si la url es cualquier otra -> escribimos 404.html (status: 404)
    */
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/../assets/index.html','utf8').pipe(res);
    } else if(req.url === '/contact'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/../assets/contact.html','utf8').pipe(res);
    } else if(req.url === '/api/ninjas'){
        var ninjas = [{name: 'Kevin', age: 29}, {name: 'Melody', age: 29}];
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(ninjas));
    } else{
        res.writeHead(404,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/../assets/404.html','utf8').pipe(res);
    }
});

server.listen(3000,'127.0.0.1');
console.log('Yo dawgs, now listening to port 3000');
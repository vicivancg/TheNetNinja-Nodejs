//Route parameters

var express = require('express');

var app = express();

app.get('/',function(req,res){
    res.send('This is the home page');
});

app.get('/contact',function(req,res){
    res.send('This is the contact page');
});

/*
    Podemos enviar parametros utilizando /:parametro y podemos
    acceder a ellos con el objeto req (request) con su propiedad
    params:

    req.params.parametro
*/
app.get('/profile/:id',function(req,res){
    res.send('You requested to see a profile with the id of ' + req.params.id);
});

app.listen(3000);
//Introduction to express

/*
    Sistema de enrutado facíl y flexible
    Se integra con muchos motores de templates
    contiene un framework middleware
*/

/*
    Exportamos el modulo de express
*/
var express = require('express');

/*
    Inicializamos express,el require nos devuelve una función
    la cual invocamos y se la pasamos a la variable app
*/
var app = express();

/*
    Utilizamos la función get, para recibir un request por medio de GET
    y utilizamosun callback, req y res ahora tienen funciones añadidas
    por parte de express ademas de ser Streams.

    De acuerdo a cada endpoint, devolvemos una respuesta, 
    con la función send() de la response (res), lo cual
    simplifica mucho, ya que no tenemos que escribir los
    headers o crear los streams, gracias express !!
*/
app.get('/',function(req,res){
    res.send('This is the home page');
});

app.get('/contact',function(req,res){
    res.send('This is the contact page');
});

/*
    Escuchamos en el puerto 3000
*/

app.listen(3000);

/*
    Responding HTTP Methods

    GET - app.get('route',fn)
    POST - app.post('route',fn)
    DELETE - app.delete('route',fn)
*/
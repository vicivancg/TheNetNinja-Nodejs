//Templating engines

var express = require('express');

var app = express();

/*
    Definimos el engine que vamos a utilizar, en este caso
    el ligero y genial ejs, también debemos instalarlo con NPM

    npm install ejs
*/

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.sendFile('index.html',{root:'../assets'},function(err){
        console.log(err);
    });
});

app.get('/contact',function(req,res){
    res.sendFile('contact.html',{root:'../assets'});
});

/*
    Utilizamos la función render, y pasamos el nombre de la vista
    profile.ejs, que se encuentra en la carpeta views, esta carpeta
    esta definida por defecto en express, solo se debe crear en
    el directorio actual, la ruta se puede cambiar con:

    app.set('views', path.join(__dirname, '../views')) (not tested)

    Como segundo parametro se le mandan los datos que pueden ser
    objetos, arrays, etc. y que podrán ser accedidos desde la vista
    utilizando <%= %>
*/

app.get('/profile/:name',function(req,res){
    var data ={age:29, job:'ninja'};
    res.render('profile',{person:req.params.name, data:data});
});

app.listen(3000);
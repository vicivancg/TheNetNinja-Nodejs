//Serving Static files & middleware

var express = require('express');

var app = express();

app.set('view engine','ejs');
/*
    Utilizando la función use, estamoshaciendo uso del middleware
    de express, elprimer parametro es la ruta, con la cual buscará
    empatar, por ejemplo:

    /assets/
    /assets/styles.css
    /assets/holaMundo

    y la url que toma el request es lo siguiente de la parte que
    hace el match, por ejemplo:

    /assets/  -> url = /
    /assets/styles.css  -> url = /styles.css
    /assets/holaMundo  -> url = /holaMundo

app.use('/assets',function(req,res,next){
    console.log(req.url);
    next();
});
*/

/*
    express nos ayuda (gracias express! <heart>) con un middleware
    y la función static, que empata el endpoint y el path del
    recurso que queremos servir, a manera de url virtual.

    cuando solicitamos desde la vista (index2.ejs):

    <link href="/assets/styles.css" rel="stylesheet" type="text/css" />

    el request a la ruta /assets es traducido por la ruta de la carpeta
    permitiendo servir el archivo styles.css
*/

app.use('/assets', express.static(__dirname + '/../assets'));

app.get('/',function(req,res){
    res.render('index2');
});

app.get('/contact',function(req,res){
    res.render('contact');
});

app.get('/profile/:name',function(req,res){
    var data ={age:29, job:'ninja', hobbies:['eating','fighting','fucking coding']};
    res.render('profile3',{person:req.params.name, data:data});
});

app.listen(3000);
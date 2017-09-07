//Templating engines (Part 2)

var express = require('express');

var app = express();

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
    Le agregamos un arreglo a nuestra variable data, llamado hobbies
    el cual podemos recorrer con la funcion forEach() en la vista

*/
app.get('/profile/:name',function(req,res){
    var data ={age:29, job:'ninja', hobbies:['eating','fighting','fucking coding']};
    res.render('profile2',{person:req.params.name, data:data});
});

app.listen(3000);
//Partial Views

var express = require('express');

var app = express();

app.set('view engine','ejs');

/*
    Utilizamos EJS en todos los endpoints =)
*/
app.get('/',function(req,res){
    res.render('index');
});

app.get('/contact',function(req,res){
    res.render('contact');
});

app.get('/profile/:name',function(req,res){
    var data ={age:29, job:'ninja', hobbies:['eating','fighting','fucking coding']};
    res.render('profile3',{person:req.params.name, data:data});
});

app.listen(3000);
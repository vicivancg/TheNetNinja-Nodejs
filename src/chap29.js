//Query strings

/*
    Ejemplos:
    
    - mysite.com/blog/news/page=2.
    - Page = 2.
    - mysite.com/contact?person=ryu&dept=marketing.
    - Parse the request, and pull out the data.
*/

var express = require('express');

var app = express();

app.set('view engine','ejs');

app.use('/assets', express.static(__dirname + '/../assets'));

app.get('/',function(req,res){
    res.render('index2');
});

/*
    Podemos acceder al query string con la propiedad
    query del objeto req (request) y pasarlo al template
    como parametro.
*/
app.get('/contact',function(req,res){
    res.render('contact',{qs: req.query});
});

app.get('/profile/:name',function(req,res){
    var data ={age:29, job:'ninja', hobbies:['eating','fighting','fucking coding']};
    res.render('profile3',{person:req.params.name, data:data});
});

app.listen(3000);
//POST Requests

/*
    - POST is a request method.
    - It is in the body request.
    - POST requests, ask the server to accept/store data
    wich is enclosed in the body of the request.
    - Often used when submitting forms
*/

var express = require('express');

/*
    Importamos el modulo de body-parser
*/
var bodyParser = require('body-parser');

var app = express();

/*
    Declaramos el middleware para utilizar el cuerpo del
    POST request
*/

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine','ejs');

app.use('/assets', express.static(__dirname + '/../assets'));

app.get('/',function(req,res){
    res.render('index2');
});

app.get('/contact',function(req,res){
    res.render('contact',{qs: req.query});
});

/*
    pasamos el encoder a la función POST y accedemos a los
    datos por medio dela propiedad body del objeto req (request)
*/
app.post('/contact', urlencodedParser, function(req,res){
    console.log(req.body);
    res.render('contact-success',{data: req.body});
});

app.get('/profile/:name',function(req,res){
    var data ={age:29, job:'ninja', hobbies:['eating','fighting','fucking coding']};
    res.render('profile3',{person:req.params.name, data:data});
});

app.listen(3000);
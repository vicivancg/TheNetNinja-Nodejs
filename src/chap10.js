var fs = require('fs');

/*
    eliminar un archivo
*/

//fs.unlink('writeMe.txt');

/*
    crear carpeta de manera sincrona
*/

//fs.mkdirSync('stuff');

/*
    Eliminar carpeta de manera sincrona
*/

//fs.rmdirSync('stuff');

/*
    crear carpeta de manera asincrona y leer y escribir archivo
    (igualmente async)
*/

/*fs.mkdir('stuff',function(){
    fs.readFile('../assets/reading.txt','utf8',function(err,data){
        fs.writeFile('./stuff/writeMe.txt',data,function(){
            console.log('you have write '+data+' in stuff');
        });
    })
});*/

/*
    eliminar archivo de manera asincrona
*/

fs.unlink('./stuff/writeMe.txt',function(){
    fs.rmdir('stuff');
});

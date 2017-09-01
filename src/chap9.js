// reading and writing files

/*
    importación del modulo fs
*/
var fs = require('fs');

/*
    Lecutura y escritua sincrona
*/

//var readMe = fs.readFileSync('../assets/reading.txt','utf8');
//console.log(readMe);
//fs.writeFileSync('../assets/writeMe.txt',readMe);

/*
    Lecutura y escritua asincrona
*/

fs.readFile('../assets/reading.txt','utf8',function(err,data)
{
    console.log(data);
    fs.writeFile('../assets/writeMe2.txt',data);
});

console.log('test');
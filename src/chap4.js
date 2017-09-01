
/*
    uso de console que se encuentra en el objeto global object
*/

//console.log("Hey ninjas !!");

/*
    Función setTimeOut() en la cuan se ejecuta una instrucción despues
    de un tiempo
*/

/*setTimeout(function(){
    console.log ("han pasado 3 segundos");
},3000);*/

/*
    Función setInterval() en la cual se ejecuta una instrucción cada
    intervalo de tiempo, se a asignado a una variable, para limpiar
    dicho intervalo con clearInterval()
*/

var time = 0;
/*setInterval(function(){
    time += 2;
    console.log("han pasado " + time + " segundos");
},2000);*/

/*var timer = setInterval(function(){
    time += 2;
    console.log("han pasado " + time + " segundos");
    if(time > 5){
        clearInterval(timer);
    }
},2000);*/

/*
    uso de __dirname y __filename
*/
console.log(__dirname);
console.log(__filename);
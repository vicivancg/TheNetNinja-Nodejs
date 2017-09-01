//Event module

/*
    se hace un request del modulo events y se almacena en l variable events
*/

var events = require('events');

/*
    se crea un objeto del tipo EventEmitter
*/

var myEmitter = new events.EventEmitter();

/*
    se le añade un "listener" del evento "someEvent" y se declara
    una funcion como callback, que recibe un mensaje y lo muestra
*/
myEmitter.on('someEvent', function(mssg){
    console.log(mssg);
});

/*
    se emite el evento "someEvent" y se le pasa una cadena como parametro al callback
*/

myEmitter.emit('someEvent','El evento fue emitido');
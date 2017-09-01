//Event module 2

/*
    se importa el modulo events y el modulo util,
    el cual permite hacer herencia
*/
var events = require('events');
var util = require('util');

/*
    se crea un constructor de la clase Person,recibe como parametro
    el nombre y se lo asigna a su propiedad name
*/
var Person = function(name){
    this.name = name;
};

/*
    Con el objeto util, podemos establecer la herencia
    de EventEmiter a todos los objetos de la clase Person
    util.inherits(clase hija, clase padre)
*/

util.inherits(Person, events.EventEmitter);

/*
    Creamos 3 objetos de la clase Person y se insertan comoun array
    a la variable arrayPeople
*/

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');

var arrayPeople = [james,mary,ryu];

/*
    a cada objeto de se le asigna su listener del evento "speak"
*/
arrayPeople.forEach(function(person){
    if(person.name != 'mary'){
        person.on('speak',function(mssg){
            console.log(person.name+ ' said: ' + mssg);
        });
    }
});

/*
    Se emite el evento speak en los distintos objetos
    nota: aunque el evento de Mary se dispara, a la hora de asignar
    el listener hay una condicion:

        si el name es diferente de "mary", asigna el listener al objeto

    Por lo que a mary no se le asigno un listener para el evento "speak
*/
james.emit('speak',' Hey dudes !');
ryu.emit('speak','I want a curry !');
mary.emit('speak','hey mates !');
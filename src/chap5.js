//function expressions

//normal function statement

function sayHi(){
    console.log("Hi");
}

sayHi();

//function expression

var sayBye = function(){
    console.log("bye");
};

sayBye();

//passing a function as a parameter

/* se puede pasar la almacenada en la variable
   asi como la declaracion*/

function callFuncttion(fun)
{
    fun();
}

callFuncttion(sayHi);
callFuncttion(sayBye);
// Problem 1: Global variable naming conflicts
//script.js
var name = "Barış";

//app.js
var name = "Çınar";

console.log("== Global Variable Naming Conflict ==");
console.log('First Value => (var name = "Barış";) \nSecond Value => (var name = "Çınar";)\nResult => ' + name);

// Problem 2: Encapsulation

var Counter = {
    number: 0,
    increment: function () {
        return ++this.number
    },
    decrement: function () {
        return ++this.number
    }
}
console.log("== Encapsulation Problem ==")

console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.number = 9);

//Solution 1
console.log("== IIFE Private Members==");

//IIFE (Immediately Invoked Function Expression)
(function () {
    var name = "Barış";
    console.log(name);
})();

(function () {
    var name = "Umut";
    console.log(name);
})();

//Solution 2
var Module = (function () {
    //private members...
    let number = 13;
    let increment = () => {
        return ++number;
    };
    let decrement = () => {
        return --number;
    }
    return {
        //public members...
        increment
    }

})();

console.log("== IIFE Public Members ==");
console.log(Module.increment());
console.log(Module.increment());
console.log(Module.increment());


var FuncModule = (function(){
    let privateMethod = function(){

    };

    return{
        publicMethod: function(){

        }
    }
})();

FuncModule.publicMethod();
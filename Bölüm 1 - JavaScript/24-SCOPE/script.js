// global scope, alt scope'lardan erişilebilir.
var fName = "Barış";
const address = "Manisa"; // Uygulama içerisinde değiştirilmesini istemediğimiz değişkenleri bu şekil tanımlarız.

function print(){
    var age = 20;
    console.log(`Function Scope: ${age}`);
}
console.log(`Global Scope: ${fName}`);
//Function scope, global'den erişilemez!
/*
    -> console.log(`Local: ${age}`);
    -> ReferenceError: age is not defined.
*/

// if, for gibi blocklarda tanımlanan (var) değişkenler yeni bir scope oluşturmaz.

if(true){
    var fName = "Umut";
    console.log("If Scope:" + fName);
}

//TypeError: Assignment to constant variable.
address = "";
console.log("Global Scope: " + fName)

// let, const kullanılarak function'lar gibi scope oluşturma yapılır.
if(true){
    let fName = "Osman";
    console.log(fName);
}

console.log(fName);
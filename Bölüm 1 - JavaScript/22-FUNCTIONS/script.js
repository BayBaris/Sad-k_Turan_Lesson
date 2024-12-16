//Parametreli Fonksiyon...
function greeting(message){
    console.log(message);
}

greeting("Selam");
// greeting("Ben Adal");
// greeting("Bugün Minecraft'a 1.21 güncellemesi ile gelen");
// greeting("GYM modunu inceleyeceğiz!");

//return ile fonksiyona belli değerleri döndürebiliriz.
function calculateAge(birthdate){
    return new Date().getFullYear() - birthdate;
    // console.log(new Date().getFullYear() - birthdate);
}

let myAge = calculateAge(2000);

//
function howManyYearToRetıre(birthdate, name){
    let age = calculateAge(birthdate);
    let remainingYear = 65 - age;
    if (age < 65){
        console.log(`You've ${remainingYear} year(s) to be retiring ${name}!`);
    }
    else{
        console.log(`You're already retired ${name}!`);
    }
}

howManyYearToRetıre(2000,"Barış Karakaya");
for(let i = 0; i < 2; i++){
    console.log(i);
}

let numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.reverse();
let total = 0;

for(i = 0; i < numbers.length; i++){
    total += numbers[i];
}

total = 0;

//Array'in uzunluğu kadar bir döngüye girer ve index tutar. 
//(number = index numaraları)

for(let number in numbers){
    total += numbers[number];
}

//Array'in uzunluğu kadar bir döngüye girer ve değeri tutar.
//Index ile uğraşmamamızı sağlar.
//(num = tutulan değer)
for(let num of numbers){
    //console.log(num);
}

console.log("Totalof Numbers: " + total);

let user = {
    "name" : "Barış Karakaya",
    "username" : "baybarisk",
    "password" : "kjkszpj",
    "email" : "baybarisk@outlook.com"
}

for(let key in user){
    console.log(`${key} : ${user[key]}`);
}

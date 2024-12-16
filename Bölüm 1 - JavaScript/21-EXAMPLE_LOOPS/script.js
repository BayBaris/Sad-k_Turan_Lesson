let numbers = [1,5,7,15,3,25,12,4,22];

/*
    1) numbers listesindeki her bir elemanın karesini yazdırınız.
    2) numbers listesindeki hangi sayılar 5'in katıdır?
    3) numbers listesindeki çift sayıların toplamını bulunuz.
*/
let sqr2;
console.log("=== Question 1 ===");
for (let num of numbers){
    sqr2 = Math.pow(num,2);
    console.log(sqr2);
}
console.log("=== Question 2 ===");
for (let num of numbers){
    if (num % 5 == 0){
        console.log(num);
    }
}
console.log("=== Question 3 ===");
let sum = 0;
for (let num of numbers){
    if (num % 2 == 0){
        sum += num;
    }
}
console.log(sum);

let products = ["Iphone 12", "Samsung S20", "Iphone 13", "Samsung S22"];

/*
    4) products listesindeki tüm ürünleri büyük harfler ile yazdırınız.
    5) products listesinde, içinde samsung geçen kaç ürün vardır?
*/
console.log("=== Question 4 ===");
for(let product of products){
    console.log(product.toUpperCase());
}

console.log("=== Question 5 ===");
let count = 0;
for(let product of products){
    if(product.includes("Samsung")){
        count++;
    }
}
console.log(count);

let students = [
    {"name" : "Barış", "surname" : "Karakaya", "notes" : [35,60,60]},
    {"name" : "Atakan Kutay", "surname" : "oydan", "notes" : [80,70,80]},
    {"name" : "Selenay", "surname" : "Muğlalı", "notes" : [70,70,60]}
]
/*
    6) students listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.
    7) Tüm öğrencilerin not ortalaması kaçtır?
*/
console.log("=== Question 6 ===");

let stuNote = 0, avgStu = 0, noteCount = 0;
let allNote = 0, allAvg = 0;
for (let stu of students){
    //console.log(stu);
    for(let note of stu.notes){
        stuNote += note;
        noteCount++;
    }
    avgStu = (stuNote / noteCount).toFixed(2);
    console.log(`${stu.name}'s Average Note: ${avgStu}`);
    allNote += avgStu;
    if(avgStu < 55){
        console.log(`You're failed ${stu.name}!`)
    }
    else
    {
        console.log(`You're passed ${stu.name}!`)
    }
    stuNote = 0;
    noteCount = 0;
}
console.log("=== Question 7 ===");
allAvg = (allNote / students.length).toFixed(2);
console.log(allAvg);
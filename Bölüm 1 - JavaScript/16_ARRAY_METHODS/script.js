let students = ["Barış", "Atakan", "Selenay", "Baran", "Gökşen"];

result = students.length

//ARRAY => STRING

result = students.toString();
console.log("toString: " + result);
result = students.join(" ");
console.log("Join: " + result);

//DELETING ELEMENTS

result = students.pop();        //Son eleman silinir ve ekrana yazdırılır.
console.log("Pop: " + result);

result = students.shift();      //İlk eleman silinir ve ekrana yazdırılır.
console.log("Shift: " + result);
console.log(students);

//ADDING ELEMENTS

result = students.push("Berkan");       //Sona eleman ekler ve array uzunluğunu döndürür.
console.log("Pushed: " + result);       
result = students.unshift("Cennet");    //Başa eleman ekler ve array uzunluğunu döndürür.
console.log("Unshifted: " + result);
console.log(students);

let brands1 = ["Mazda", "Toyota", "Nissan", "Subaru"];
let brands2 = ["Koeninsegg", "Pagani"];
let brands3 = ["BMW", "Audi"];

//result = brands1.concat(brands2,brands3); //Bir veya daha fazla diziyi birleştirmemizi sağlar.
/*  .splice()
    Belirli bir indexten başlayarak dizideki elemanları silmeye ve eğer istenirse yeni elemanlar eklemeye yarar. 
    (DelteCount = 0 olursa eleman silinmez).
    Silinen elemanları döndürür.
*/
result = brands1.splice(0, 2, brands2); //İlk elemandan başlayarak 2 eleman sil ve 0. indexten başlayarak değerleri ekle.
result = brands1.splice(1, 0, "BMW", "Audi"); //Herhangi bir elemanı silme ve 1. indexten başlayarak değerleri ekle.
console.log("Spliced Elements: " +  result);
console.log(brands1);

let index = brands1.indexOf("BMW"); //Aranan elemanın index numarasını döndürür.    
result = brands1.includes("Mazda"); //Aranan elemanın var olup olmadığını döndürür. (Ture-False) 
console.log("IndexOf: " + index);
console.log("Includes: " + result);

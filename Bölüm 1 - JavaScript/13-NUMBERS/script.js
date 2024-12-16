let result;

result = 10;
result = "10";
result = Number("10");
result = parseInt("10");
result = parseFloat("10.6");
result = parseInt("10a4");  //İfadede sayı olan kısımları integer değere çevirir ve sonrasında gelen kısım sayı değilse geriye kalan kısım göz ardı edilir.
result = parseInt("a10");   //İfade sayı ile başlamadığı için NaN (Not a Number) döner.

result = isNaN("10");

let numberF = 15.12355467;

result = numberF.toPrecision(5); //Sayının 5 basamağını alır ve yuvarlama işlemi gerçekleştirir.
result = numberF.toFixed(5);     //Sayının ondalık kısımdan itibaren 5 basamağını alır ve yuvarlama işlemi gerçekleştirir.  

result = Math.round(2.4);     //Sayıyı en yakın tam sayıya yuvarlar. (Ondalık Kısım >=5 ise yukarı)
result = Math.ceil(2.2);      //Sayıyı yukarıya yuvarlar (3).  
result = Math.floor(2.6);     //Sayıyı aşağıya yuvarlar (2).  
result = Math.sqrt(25);       //Karekök hesaplaması yapar.  
result = Math.pow(2,3);       //Üstel hesaplama yapar. (2^3)  
result = Math.abs(-10);       //Mutlak değer alır.  
result = Math.min(4,6,8,3,9);
result = Math.max(4,6,8,3,9);
result = Math.floor(Math.random() * 100);

console.log(result);
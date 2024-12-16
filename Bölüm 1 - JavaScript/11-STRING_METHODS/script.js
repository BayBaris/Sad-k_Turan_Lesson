let courseName = "Web Development with Javascript ES7+";

let result;

result = courseName.toLowerCase(); //Tüm karakterleri küçültür.
result = courseName.toUpperCase(); //Tüm karakterleri büyültür.

result = courseName.length;

result = courseName.slice(3,19);
result = courseName.slice(-13,-9);

result = courseName.substring(3, 7);

result = courseName.trim(); // Baştaki ve Sondaki boşlukları sil.
result = courseName.trimEnd(); // Sondaki boşlukları sil.
result = courseName.trimStart(); // Baştaki boşlukları sil.

result = courseName.split(" ");
console.log(result);
result = courseName.replace("Web", "Unity").replace("Javascript ES7+","C#");
console.log(result);

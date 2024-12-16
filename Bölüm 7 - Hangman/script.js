const wordElement = document.getElementById("word");
const popup = document.getElementById("popup-container");
const message = document.getElementById("message-success");
const wrongLettersElement = document.getElementById("wrong-letters");
const items = document.querySelectorAll(".item");

function getRandomWord(){
    const words = ["java","javascript","python"];

    return words[Math.floor(Math.random() * words.length)];
}

const correctLetters = [];
const wrongLetters = [];
const selectedWord = getRandomWord();

function displayWord(){
    wordElement.innerHTML = `
    ${selectedWord.split("").map(letter =>
        `
            <div class="letter">
                ${correctLetters.includes(letter) ? letter : ""}
            </div>
        `
    ).join("")}`;

    /**
     * /\n/g ifadesi düzenli ifadeler (regular expressions) kullanılarak yazılmış bir modeldir. 
     * Bu tür ifadeler metin içindeki belirli desenleri tanımlamak, eşleştirmek ve manipüle etmek için kullanılır.
     * Açıklaması:
        * /: Düzenli ifadeyi başlatır ve bitirir.
        * \n: Yeni satır karakterini temsil eder (line feed).
        * g: Global bayrak; metindeki tüm eşleşmeleri bulur, sadece ilkini değil.
     */
    const output = wordElement.innerText.replace(/\n/g,"")
    if(output === selectedWord){
        popup.style.display = "flex";
        message.innerText = "Congratulations! You Made It.";
    }
}

function updateWrongLetters(){
    wrongLettersElement.innerHTML = `
        ${wrongLetters.length > 0? "<h3>Wrong Letters</h3>" : ""}
        ${wrongLetters.map(letter => `
                <span>${letter}</span>
            `)}
    `;

    items.forEach((item,index) => {
        const errorCount = wrongLetters.length;

        item.style.display = (index < errorCount) ? "block" : "none";
    })

    if(wrongLetters.length === items.length){
        popup.style.display = "flex";
        message.innerText = ":(((( You Failed:"
    }

}

window.addEventListener("keydown", function(e){
    if(e.keyCode >= 65 && e.keyCode <= 90){
        const letter = e.key;
        // findLetter(selectedWord, letter);
        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);
                displayWord();
            }
            else{
                console.log(`You already entered ${letter} letter`);
            }
            console.log(correctLetters);
        }
        else {
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);
                updateWrongLetters();
            }
            else{
                updateWrongLetters();
            }
            console.log(wrongLetters);
        }
    }
})

displayWord();



// My Method....
function findLetter(word, key) {
    // 'split' ile stringi bir karakter dizisine dönüştür.
    word.split('').forEach(function(letter) {
        if (letter == key) {
            correctLetters.push(letter);
            console.log(`Correct Letter: ${letter}`);
        }
    });

    let correctWord =  correctLetters.join("");
    if(correctWord == word){
        console.log(correctWord);
    }
}

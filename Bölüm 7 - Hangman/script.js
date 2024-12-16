// DOM Elements
const wordElement = document.getElementById("word");
const popup = document.getElementById("popup-container");
const message = document.getElementById("message-success");
const wrongLettersElement = document.getElementById("wrong-letters");
const items = document.querySelectorAll(".item");
const messageElement = document.getElementById("message");
const againButton = document.getElementById("play-again");

//Letters and Words
const correctLetters = [];
const wrongLetters = [];
let selectedWord = getRandomWord();

function getRandomWord() {
  const words = ["java", "javascript", "python"];

  return words[Math.floor(Math.random() * words.length)];
}

function displayWord() {
  wordElement.innerHTML = `
    ${selectedWord.split("").map((letter) =>
          `
            <div class="letter">
                ${correctLetters.includes(letter) ? letter : ""}
            </div>
        `
      ).join("")}`;

  const output = wordElement.innerText.replace(/\n/g, "");
  if (output === selectedWord) {
    popup.style.display = "flex";
    popup.children[0].style.backgroundColor = "green";
    message.innerText = "Congratulations! You Made It.";
  }
}

function updateWrongLetters() {
  wrongLettersElement.innerHTML = `
        ${wrongLetters.length > 0 ? "<h3>Wrong Letters</h3>" : ""}
        ${wrongLetters.map((letter) =>
            `
                <span>${letter}</span>
            `
        )}
    `;

  items.forEach((item, index) => {
    const errorCount = wrongLetters.length;

    item.style.display = index < errorCount ? "block" : "none";
  });

  if (wrongLetters.length === items.length) {
    popup.style.display = "flex";
    popup.children[0].style.backgroundColor = "red";
    message.innerText = ":(((( You Failed:";
  }
}

function displayMessage(letter) {
  messageElement.classList.add("show");
  messageElement.innerHTML = `
        <p>You Already Entered ${letter} Letter!</p>
    `;

  setTimeout(function () {
    messageElement.classList.remove("show");
  }, 2000);
}
//#region Eventler
window.addEventListener("keydown", function (e) {
  if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode == '222') {
    const letter = e.key;
    // findLetter(selectedWord, letter);
    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);
        displayWord();
      } else {
        // console.log(`You already entered ${letter} letter`);
        displayMessage(letter);
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);
        updateWrongLetters();
      } else {
        displayMessage(letter);
      }
    }
  }
});

againButton.addEventListener("click", function (e) {
  correctLetters.splice(0);
  wrongLetters.splice(0);

  selectedWord = getRandomWord();
  displayWord();
  updateWrongLetters();

  popup.style.display = 'none';
});

document.addEventListener("keypress", function(e) {
    // If the user presses the "Enter" key on the keyboard
    if(popup.style.display == "flex"){
        if (e.key === "r" || e.key === "R") {
            againButton.click();
        }    
    }
  });

//#endregion
displayWord();
const fromLang = document.getElementById("from-lang");
const toLang = document.getElementById("to-lang");

const btnTranslate = document.getElementById("btn-translate");
const fromText = document.getElementById("from-text");
const toText = document.getElementById("to-text");

const exchange = document.querySelector(".exchange");

const icons = document.querySelectorAll(".icons");
const btnText = document.querySelector(".btn-text");


const checkClicked = (buttonName) => {
    if(btnTranslate.classList.contains("clicked")){
        buttonName.textContent = "Translated";
    }
    else{
        buttonName.textContent = "Translate";
    }
}

for (let [key, value] of Object.entries(languages)) {
    let option = `<option value="${key}">${value}</option>`;
    fromLang.insertAdjacentHTML("beforeend", option);
    toLang.insertAdjacentHTML("beforeend", option);

    fromLang.value = "tr-TR";
    toLang.value = "en-GB";
}

btnTranslate.addEventListener("click", () => {
    let text = fromText.value;
    let fromL = fromLang.value;
    let toL = toLang.value;

    const url = `https://api.mymemory.translated.net/get?q=${text}!&langpair=${fromL}|${toL}`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            toText.value = data.responseData.translatedText;
        });
    
    btnTranslate.classList.add("clicked");
    checkClicked(btnText);

    setTimeout(()=>{
        btnTranslate.classList.remove("clicked");
        checkClicked(btnText);
    },2000)
});

exchange.addEventListener("click", () => {
    let text = fromText.value;
    fromText.value = toText.value;
    toText.value = text;

    let lang = fromLang.value;
    fromLang.value = toLang.value;
    toLang.value = lang;
});

for (let icon of icons) {
    icon.addEventListener("click", (element) => {
        const iconBtn = element.target.classList.contains("fa-copy");
        const elementId = element.target.id;
        if (iconBtn) {
            if (elementId == "from") {
                navigator.clipboard.writeText(fromText.value);
            } else {
                navigator.clipboard.writeText(toText.value);
            }
        } else {
            let uttterance;
            if (elementId == "from") {
                uttterance = new SpeechSynthesisUtterance(fromText.value);
                uttterance.lang = fromLang.value;
            } else {
                uttterance = new SpeechSynthesisUtterance(toText.value);
                uttterance.lang = toLang.value;
            }
            speechSynthesis.speak(uttterance);
        }
    });
}

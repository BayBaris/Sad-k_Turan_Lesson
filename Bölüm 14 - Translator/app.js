const fromLang = document.getElementById("from-lang");
const toLang = document.getElementById("to-lang");

const btnTranslate = document.getElementById("btn-translate");
const fromText = document.getElementById("from-text");
const toText = document.getElementById("to-text");

const exchange = document.querySelector(".exchange");

for (let [key, value] of Object.entries(languages)) {
    let option = `<option value="${key}">${value}</option>`;
    fromLang.insertAdjacentHTML("beforeend",option);
    toLang.insertAdjacentHTML("beforeend",option);


    fromLang.value = "tr-TR";
    toLang.value = "en-GB";
}

btnTranslate.addEventListener("click", () => {
    let text = fromText.value;
    let fromL = fromLang.value;
    let toL = toLang.value;

    const url = `https://api.mymemory.translated.net/get?q=${text}!&langpair=${fromL}|${toL}`;

    fetch(url)
    .then(res => res.json())
    .then(data => {
        toText.value = data.responseData.translatedText;
    })

})

exchange.addEventListener("click", () => {
    let text = fromText.value;
    fromText.value = toText.value;
    toText.value = text;

    let lang = fromLang.value;
    fromLang.value = toLang.value;
    toLang.value = lang;
})
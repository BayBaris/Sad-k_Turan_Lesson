const fromLang = document.getElementById("from-lang");
const toLang = document.getElementById("to-lang");

for (let [key, value] of Object.entries(languages)) {
    let option = `<option value="${key}">${value}</option>`;
    fromLang.insertAdjacentHTML("beforeend",option);
    toLang.insertAdjacentHTML("beforeend",option);


    fromLang.value = "tr-TR";
    toLang.value = "en-GB";
}
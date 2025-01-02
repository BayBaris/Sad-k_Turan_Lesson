"use-strict";
const apiKey = "8b0ce3f252584d3709ea1743";
const url = "https://v6.exchangerate-api.com/v6/" + apiKey;

const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");

const listOne = document.getElementById("list-one");
const listTwo = document.getElementById("list-two");

const amount = document.getElementById("amount");
const calculate = document.getElementById("calculate");
const result = document.getElementById("result");

const siteHeader = document.getElementById("site-header")

fetch(url + "/codes")
.then(res => res.json())
.then(data => {
    const items = data.supported_codes;
    let option;
    for(let item of items){
        option += `<option value="${item[0]}"> ${item[1]}</option>`;
    }
    listOne.innerHTML = option;
    listTwo.innerHTML = option;
})


calculate.addEventListener("click", () => {
    const curr1 = currencyOne.value;
    const curr2 = currencyTwo.value;
    const amnt = amount.value;

    fetch(url + "/latest/" + curr1)
    .then(res => res.json())
    .then(data => {
        const currRes = (data.conversion_rates[curr2] * amnt).toFixed(2);
        result.innerHTML= `
        <div class="card border-primary">
                        <div class="card-body text-center" style="font-size: 30px;">
                            ${amnt} ${curr1} = ${currRes} ${curr2}
                        </div>
                    </div>`
    })

})

siteHeader.addEventListener("click", (e) => {
    fetch(url + "/latest/" + "USD")
    .then(res => res.json())
    .then(data => {
        const currRes = (data.conversion_rates["TRY"]).toFixed(2);
        result.innerHTML= `
        <div class="card border-primary">
                        <div class="card-body text-center" style="font-size: 30px;">
                            ${1} ${"USD"} = ${currRes} ${"TRY"}
                        </div>
                    </div>`
    })

    e.preventDefault();
})
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");
const phone = document.getElementById("phone");

function checkEmail(input){
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if(re.test(input.value)){
    success(input);
  }else{
    error(input, "Email is not valid!")
  }
}

function error(input, message) {
  input.className = "form-control is-invalid";
  const div = input.nextElementSibling;
  div.innerText = message;
  div.className = "invalid-feedback";
  // console.log(`Please enter valid ${input.id} value!` );
}

function success(input) {
  input.className = "form-control is-valid";
}

function checkRequired(inputs) {
    inputs.forEach(function(input){
        if(input.value === ""){
            error(input, `${input.id} alanı boş bırakılamaz!`);
          }
          else{
            success(input);
          }
    })
}

function checkLength(input, minL, maxL){
    if(input.value.length < minL){
        error(input, `Minimum character value is ${minL}!`);
    }
    else if(input.value.length > maxL){
        error(input, `Your character limit (${input.value.length}) is over ${maxL}!`)
    }
    else{
        success(input);
    }
}

function checkPasswords(pass1,pass2){
    if(pass1.value !== pass2.value){
        error(pass2, "Passwords doesn't match!");
    }
    else{
        success(pass2);
    }
}

function checkPhone(input){
    var exp = /^\d{10}$/;
    if(!exp.test(input.value)){
        error(input,"Phone number is must be 10 character!");
    }
    else{
        success(input);
    }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([username,email,password,repassword]);
  checkEmail(email);
  checkLength(username, 6, 16);
  checkPasswords(password, repassword);
  checkPhone(phone);
});

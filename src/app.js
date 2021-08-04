let regexCard = /^[0-9]{13,16}$/;
let regexCVC = /^[\d]{3}$/;
let regNom = /[a-zA-Z]{3,}/;
let validname = false;

let form = document.querySelector("#formu");

function prevent (e) {
  e.preventDefault();
}

let send = document.querySelector("#submit");
send.addEventListener("click", (e)=>{
  ValidateName();
  if (validname == false){
    e.preventDefault();
  }else{
  console.log(validname);
}});

function ValidateName(){
  let name = document.querySelector("#name");
  let textName = name.value.trim();
  if(textName == "" || !regNom.test(textName)){
      name.classList.add("is-invalid");
      validname = false;
  }else{
      name.classList.add("is-valid");
      validname = true;
  }
}

function ValidateCardNumber() {
  let cardNumber = document.querySelector("#CardNumber");
  cardNumber.addEventListener("input", e => {
    let textCard = e.target.value.trim();
    if (textCard == "" || !regexCard.test(textCard)) {
      cardNumber.classList.add("is-invalid");
      cardNumber.classList.remove("is-valid");
      form.addEventListener("submit", prevent);
    } else {
      cardNumber.classList.remove("is-invalid");
      cardNumber.classList.add("is-valid");
      form.removeEventListener("submit", prevent);
    }
  });
}
function validateCVC (){
  let cvc = document.querySelector("#CVC");
  cvc.addEventListener("input",(e)=>{
      let textCVC = e.target.value.trim();
      if(textCVC == "" || !regexCVC.test(textCVC)){
          cvc.classList.add("is-invalid");
      }else{
          cvc.classList.remove("is-invalid");
          cvc.classList.add("is-valid");
      }
  });
}

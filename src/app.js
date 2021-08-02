let regexCard = /^[0-9]{13,16}$/;
let regexCVC = /^[\d]{3}$/;
let regNom = /[a-zA-Z]{3,}/;

function ValidateCardNumber() {
  let cardNumber = document.querySelector("#CardNumber");
  cardNumber.addEventListener("input", e => {
    let textCard = e.target.value.trim();
    // console.log(textCard);
    if (textCard == "" || !regexCard.test(textCard)) {
      cardNumber.classList.add("is-invalid");
      cardNumber.classList.remove("is-valid");
      formu.addEventListener("submit", prevenir);
    } else {
      cardNumber.classList.remove("is-invalid");
      cardNumber.classList.add("is-valid");
      formu.removeEventListener("submit", prevenir);
    }
  });
}

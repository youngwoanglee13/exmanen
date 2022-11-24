import sumar from "./sumador";

const first = document.querySelector("#mensaje");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(first.value);


  //div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

import publicar from "./sumador";

const first = document.querySelector("#mensaje");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(first.value);

  div.innerHTML = div.innerHTML+ "<p>" + publicar(first.value) + "</p>";
 
});

import publicar from "./sumador";

const first = document.querySelector("#mensaje");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#observaciones");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(first.value);
  if(publicar(first.value)!="error-publicacion"){
    div.innerHTML = div.innerHTML+ "<p>" + publicar(first.value) + "</p>";
  }else{
    
  }

  
});

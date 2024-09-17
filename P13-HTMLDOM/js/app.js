const textField = document.getElementById("text0");
textField.innerHTML = multiplyBySelf(4);


const headerText5 = document.getElementById("header5");

headerText5.innerHTML = "THIS IS MA WEBSITE"
headerText5.style.color = "blue"


const button0 = document.getElementById("button0");

button0.addEventListener("click", () => {
  yourFunctionHere();});


function multiplyBySelf(numberToMultiply)  {
  return numberToMultiply * numberToMultiply;

}


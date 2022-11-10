"use strict";

let { name } = document.forms[0].elements;

/////////////////////
//FOCUS se lanza cuando hacemos foco en el campo

function Focus(e) {
  console.log("foco en el input");
}

name.addEventListener("focus", Focus);

//Blur
//Se lanza cuando pierde el foco
function blur(e) {
  console.log("blur");
}
name.addEventListener("blur", blur);
//Change
//Pierde el foco y el valor ha cambiaro

function handleChange(e) {
  console.log("holi");
}

name.addEventListener("change", handleChange);

//Input
//Cada vez que cambia el valor

function input(e) {
  console.log("cambio");
}

name.addEventListener("input", input);

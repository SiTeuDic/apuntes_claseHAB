"use strict";

let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let password = document.querySelector("#password");
let button = document.querySelector("button");
let reset = document.querySelector("[type='reset']");

console.log(nameInput, button, password);
////Establecer el valor de un atributo

button.setAttribute("disabled", true); //si no lo tiene se lo pone, con atributos booleanos el valor es true

password.setAttribute("type", "text");

// Comprobar si tiene el atributo.

console.log(nameInput.hasAttribute("required"));

// Eliminar el atributo

reset.removeAttribute("disabled");

/////////////////////

function togglePassView() {
  if (password.getAttribute("type") === "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
}

function checkForm() {
  // Si no hay nada escrito en los inputs, su calue es string vacio que es falsy
  if (nameInput.value && emailInput.value && password.value) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", true);
    console.log("faltan campos");
  }
}

// atributtos personalizados
// DATASET

//leer
let parrafo = document.querySelector("p");
console.log(parrafo);

console.log(parrafo.dataset);
console.log(parrafo.dataset.author);

let { author, hora } = parrafo.dataset;
console.log(hora, author);

parrafo.textContent = `Parrafo escrito por ${author} a las ${hora}`;

//escribir
let ahora = new Date();
parrafo.dataset.hora = `${ahora.getHours()}:${ahora.getMinutes}`; //"21:50";//Si esta lo cambia

parrafo.dataset.ubi = "Santiago de compostela"; //si no esta lo añade

let { hora: hora2, ubi } = parrafo.dataset;

parrafo.textContent = `Parrafo escrito por ${author2} a las ${hora2}, en ${ubi}`;

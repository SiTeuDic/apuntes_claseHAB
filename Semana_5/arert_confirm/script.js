"use strict";

//ALERT
//Muestra un aviso que bloquea la pag hasta que el usr lo cirre

alert("holi");

//confirm
// muesta un aviso que bloquea la pag y ofrece dos opciones cancelar o aceptar
// si acepta es true si no es false

let confirmacion = confirm("Aceptas continuar bajo tu propio riesgo");

console.log(confirmacion);

if (confirmacion) {
  console.log("el usiario puede continuar");
} else {
  console.log("Cerrando pagina");
}

let seguir;
do {
  let seguir = confirm("seguir?");
} while (seguir);

/////////////77
// prompt
// muestra un aviso que bloquea la pagina con un campo de entrada, el valor sera el que introduzca el usuario
//si no se introduce nada es "" | si se cancela es null
let nombre = prompt("Introduce tu nombre");
console.log(nombre);
let edad = prompt("Introduce tu edad");

while (isNaN(edad)) {
  edad = prompt("Introduce tu edad");
}

"use strict";

// setTimeOut
// Recibe dos argumentos:
// 1 callback
// 2 un numero (tiempo en milisegundos)
// Ejecuta el callback cuando haya pasado el tiempo.

function saludar() {
  console.log("hola");
}

setTimeout(saludar, 1000);

setTimeout(() => console.log("adios"), 2000);

// Desactivar un timeout:
function explotar() {
  console.log("BOOOM!!!");
}

let bomba = setTimeout(explotar, 3000); //debe estas en una variable

clearTimeout(bomba); //funcion para desactivar, recibe en la variable en la que guardamos el timeout

console.log("final");

setTimeout(() => {
  console.log("1");
  setTimeout(() => console.log("2"), 1000);
}, 4000);

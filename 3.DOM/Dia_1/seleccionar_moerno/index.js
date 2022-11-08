"use strict";
// SELECIONAR ELEMENTOS

// Un elemento (querySelector)
//SOlo selecciona el primer elemento que encuentre

let pUnico = document.querySelector("#unico"); //por id
let parrafo = document.queryCommandValue("p"); //por etiqueta
let especial = document.queryCommandValue(".especial"); //por etiqueta
let pBody = document.querySelector("body>p");
console.log(pUnico);

console.log(parrafo);

console.log(especial);

console.log(pBody);

//////////////////////
// Varios elementos

let parrafos = document.querySelectorAll("p");

console.log(parrafos);

let especiales = document.querySelectorAll(".especial");

console.log(especiales);

let enBody = document.querySelectorAll("body > p");

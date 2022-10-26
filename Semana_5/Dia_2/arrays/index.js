"use strict";

// ARRAYS
// Estructura ordenafa de elementos
// Dichos elementos pueden ser de culquier tipo (incluido funciones arrays y objetos)

let nombre = "Nacho";

function sayHi() {
  console.log("HI");
}
let miArray = [
  "hola",
  27,
  true,
  null,
  nombre,
  ["rojo", "verde", "azul"],
  sayHi,
];

console.log(miArray);

// El nombre de los elementos de dentro del array es nombreArray[posicion]

console.log(miArray[1]);
console.log(miArray[0]);
console.log(miArray[5]);
console.log(miArray[5][1]);
console.log(miArray[6]);
miArray[6]();

////////////////////
console.log("");
// Cómo crear un array vacio

let miArrayVacio = Array();
console.log(miArrayVacio);

let miArrayVacio2 = [];
console.log(miArrayVacio2);

// crear un array con huecos

let miArrayConHuecos = Array(3);

console.log(miArrayConHuecos);

let miArrayConHuecos2 = [, , ,];
console.log(miArrayConHuecos2);

// crear un array con cosa

let miArrayConCosas = Array("rojo", "verde", "azul");
let miArrayConCosas2 = ["rojo", "verde", "azul"];

console.log(miArrayConCosas2);
console.log(miArrayConCosas);

// rellenar un array

miArrayConHuecos.fill("hola");

console.log(miArrayConHuecos);

// /////////////////////////////
console.log("");
// Cambiar una posicion

console.log(miArrayConCosas[2]);

miArrayConCosas[2] = "amarillo";

console.log(miArrayConCosas);

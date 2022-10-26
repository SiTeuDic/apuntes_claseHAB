"use strict";
let str1 = "hola";
let str2 = "hola";

console.log(str1 === str2);

//LOS ARRAYS SON PUNTEROS
let colores = ["rojo", "verde", "azul"];
// colores !== ["rojo", "verde", "azul"]
// coleres === A32AF (espacio en la memoria)

let colores2 = ["rojo", "verde", "azul"];
// colores2 === F23R2
console.log(colores === colores2);

// No podemos compararlos directamente

//////////////////////
// Clonar un array sin clonar el puntero,seran los array con el mismo contenido pero no el mismo array

/////Operador scread (...)
console.log(...colores);

let clonColores = [...colores];

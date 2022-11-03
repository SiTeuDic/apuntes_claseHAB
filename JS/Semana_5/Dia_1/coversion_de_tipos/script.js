"use strict";

// normalmente podemos dejar que js se encargue de convertir los tipos a los que necesite
// podemos convertir lo que quetamos mediante conctuctores

console.log(String(3));
console.log(Boolean(3));
console.log(Number("2"));

// otras formas de convertir

console.log(parseInt("6"));
console.log(-"-4");

///Comprobar si un dato es un numero o convertible

let num = 4;
let numStr = "4";

let str = "hola";

//funfion isNaN(valor)
// Si es un numero o convertible es false
// Si no es  responde true

console.log(isNaN(num));

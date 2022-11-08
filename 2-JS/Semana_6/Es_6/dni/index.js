"use strict";

const letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

function validateDNI(strDNI) {
  let DNI = strDNI.split("-");
  let leterbynum = DNI[0] % 23;
  if (DNI[1] === letras[leterbynum]) {
    console.log("El DNI introducido es valido");
  } else {
    console.log("puto sin papeles");
  }
}

validateDNI("21697469-M");

/* 
Tienes que crear una función en el archivo index.js de la derecha que reciba un DNI completo con este formato: 00000000-T (la letra puede ser mayúscula o minúscula) y debe hacer las siguientes comprobaciones:

  Lo que se ha introducido es un String con 10 caracteres (los 8 números, el guión y la letra).

  Si separamos el String por el guión tendremos dos partes:

  La primera parte (antes del guion) debe tener 8 números.

  La segunda parte (después del guion) debe ser un único caracter y no un número.

  La letra (segunda parte) debe ser la correcta según el algoritmo explicado anteriormente.

  Si se cumplen todas las comprobaciones, se mostrará un mensaje en consola indicando que es un DNI válido.

  Si alguna de las comprobaciones falla, lanzará un Error de JavaScript  que diga "Se ha producido un error:" y el mensaje correspondiente. Para esto tienes que usar throw y el objeto Error de JavaScript.






*/

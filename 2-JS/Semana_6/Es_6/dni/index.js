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

/* function inputErrors(strDNI) {
  let dniCheked = strDNI.split("-");
  try {
    //comprobar que son 9 numeros
    if (dniCheked[0].length !== 8 || isNaN(dniCheked[0])) {
      throw new Error(
        "El DNI introducido no es valido: Por favor introduce 8 dijitos"
      );
    } else if (!isNaN(dniCheked[1])) {
      throw new Error(
        "El DNI no es valido: Por Favor despues del '-' es necesario introducir una letra"
      );
    } else {
      return dniCheked;
    }
  } catch (e) {
    console.error(`Error: ${e.message}`);
  }
}

function validateDNI2(dniCheked) {
  // console.log(leterbynum);
  // console.log(letras[leterbynum]);
  // console.log(dniCheked[1]);
  // console.log(dniCheked);
  try {
    let leterbynum = dniCheked[0] % 23;
    if (dniCheked[1] !== letras[leterbynum]) {
      throw new Error(
        "El DNI introducido no es valido: Por favor comprueba que el número y la letra introducidos son correctos"
      );
    } else {
      console.log("El DNI introducido es valido");
    }
  } catch (e) {
    console.error(`Error: ${e.message}`);
  }
}

validateDNI2(inputErrors("21697s69-M")); */

function validateDNI(strDNI) {
  let dniCheked = strDNI.split("-");
  let leterbynum = dniCheked[0] % 23;
  try {
    //comprobar que son 9 numeros + letra
    if (dniCheked[0].length !== 8 || isNaN(dniCheked[0])) {
      throw new Error(
        "El DNI introducido no es valido: Por favor introduce 8 dijitos"
      );
    } else if (!isNaN(dniCheked[1])) {
      throw new Error(
        "El DNI no es valido: Por Favor despues del '-' es necesario introducir una letra"
      );
    } else if (dniCheked[1] !== letras[leterbynum]) {
      throw new Error(
        "El DNI introducido no es valido: Por favor comprueba que el número y la letra introducidos son correctos"
      );
    } else {
      console.log("El DNI introducido es válido");
    }
  } catch (e) {
    console.error(`Error: ${e.message}`);
  }
}

validateDNI("21697462-M");

/* Tienes que crear una función en el archivo index.js de la derecha que reciba un DNI completo con este formato: 00000000-T (la letra puede ser mayúscula o minúscula) y debe hacer las siguientes comprobaciones:

  Lo que se ha introducido es un String con 10 caracteres (los 8 números, el guión y la letra).

  Si separamos el String por el guión tendremos dos partes:

    a.La primera parte (antes del guion) debe tener 8 números.

    b.La segunda parte (después del guion) debe ser un único caracter y no un número.

  La letra (segunda parte) debe ser la correcta según el algoritmo explicado anteriormente.


  Si se cumplen todas las comprobaciones, se mostrará un mensaje en consola indicando que es un DNI válido.

  Si alguna de las comprobaciones falla, lanzará un Error de JavaScript  que diga "Se ha producido un error:" y el mensaje correspondiente. Para esto tienes que usar throw y el objeto Error de JavaScript. */

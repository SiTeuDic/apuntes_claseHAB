"use strict";

// Concatenación

let str1 = "hola";
let str2 = "puto";

console.log(str1 + str2);

// crear 2 variables edad (mumber) y nombre (string)
// sacar por consola soy [] y tengo [] años

let edad = 26;
let nombre = "Nacho";

console.log(
  "Soy " +
    nombre +
    " y tengo " +
    edad +
    " años" +
    "dentro de un año tendré " +
    (edad + 1)
);

let numero1 = 4;
let numero2 = 8;

//operadores arigmeticos

// suma +
console.log("SUMA");

console.log("numero1 + numero2");
console.log(numero1 + numero2);
console.log(numero1 + 4);
console.log(4 + 4);

// resta
console.log("RESTA");
console.log("numero1 - numero2");
console.log(numero1 - numero2);

// Multiplicacion
console.log("Multiplicacion");
console.log("numero1 * numero2");
console.log(numero1 * numero2);

// Division
console.log("division");
console.log("numero1 / numero2");
console.log(numero1 / numero2);

// potencias
console.log("potencias");

console.log("numero1 ** numero2");
console.log(numero1 ** numero2);

// modulo (nos devielve el resto)
console.log("Modulo");
console.log("numero1 % numero2");
console.log(numero1 % numero2);

////////////////////////////
console.log("");
console.log("numero1 y numero2:");
console.log(numero1, numero2);

///////////////////////////

//REASIGNACION (los operantes de la izq tiene ser variable)

console.log("REASIGNACÓN");

// suma +=
console.log("SUMA +=");

numero1 += 2;
console.log(numero1);

// resta -=
console.log("Resta -=");
numero1 -= 2;
console.log(numero1);

// UNARIOS

console.log("unarios");

//Ascendentes
console.log(++numero2); //suma 1 en esta linea
console.log(numero2++); //suma 1 en la linea siguiente

// Decrecientes
console.log(--numero2); //resta 1 en esta linea
console.log(numero2--); //resta 1 en la linea siguiente

/*
puntos++ // puntos = puntos + 1
puntos+=5 // puntos = puntos + 5
puntos*=2 // puntos = puntos * 2
*/

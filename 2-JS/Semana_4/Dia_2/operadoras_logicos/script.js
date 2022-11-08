"use strict";

// OPERADORES RELACIONALES Y LÓGICOS
// El resultado siempre es un booleano
let puntos = 3;
let miString = "holi";
// IGUALDAD (estricta) (===)
console.log("===");
console.log(puntos === 3); //true
console.log(miString === "adios"); //falso
console.log("0" === 0); //false

// Desigualdad (!==)
console.log("!==");
console.log(puntos !== 3); //false
console.log(miString !== "adios"); //true
console.log("0" !== 0); //true

// Mayor estricto (>)
console.log(">");
console.log(puntos > 2); //true
console.log(miString > "adios"); //true utiliza el codigo ASCII
console.log(puntos > 3); //false por que es igual no mayor

//Mayor o igual (>=)
console.log(">=");

console.log(puntos > 2); //true
console.log(puntos >= 3); //true

//Menor estricto
console.log("<");
console.log(puntos < 2); //false
console.log(miString < "adios"); //false
console.log(puntos < 3); //false por que es igual no mayor

//menor estricto
console.log("<=");

console.log(puntos < 2); //false
console.log(puntos <= 3); //true

//OPERADORES LOGICOS
// El resultaso siemrpe es booleano
console.log("LOGICOS");

// And &&
console.log("And &&");
console.log(true && true);
console.log(true && false);

console.log(puntos > 5 && puntos < 10);

// OR (||)
console.log("OR (||)");
console.log(puntos > 18 || puntos === 3);

//negacion !
console.log("negacion (!)");
// devolver el valor vuleano contrario

console.log(!true); //false

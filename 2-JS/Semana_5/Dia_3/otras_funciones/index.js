"use strict";

/* nombreDeLa();
function nombreDeLa(parametros) {
  //logica
  console.log("esto es una declaracion de funcion");
} */

///////////////////
// expresion de funcion

let expresion = function nombreDeLa(parametros) {
  //logica
  console.log("esto es una declaracion de funcion");
};
expresion();

// /////////////////////
//arrow function
/* 
(parametros => {
       -logica
       return opcionas
})



(parametros) => resultado (si no ponemos llaves tiene return implicito)

 */

let arrowFunction = (parametros) => {
  console.log("esto es una arrowFunction");
};

arrowFunction();

let sumar = (a, b) => a + b;

console.log(sumar(2, 5));

//////////////

function calcular(operacion, numA, numB) {
  return operacion(numA, numB);
}

console.log(calcular(sumar, 2, 3));

console.log(calcular((a, b) => a - b, 5, 2));

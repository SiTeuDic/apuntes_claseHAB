"use strict";

// callBack

// Es una foncien que se pasa como argumetno de otra, sera esta otra funcion la encargade de ejecutar el callback

function suma(numA, numB) {
  return numA + numB;
}

suma(3, 4); //llamada
suma; //funcion

console.log(suma(2, 4));
console.log(suma);

// Funcion que recibe un callback
function calcular4y8(operacion) {
  return operacion(4, 8);
}

// si le paso como callback algo que no sea una funcion, da error

// console.log(calcular("restar", 8, 4));

console.log(calcular4y8(suma));

const resta = (a, b) => a - b;

console.log(calcular4y8(resta));
console.log(calcular4y8((a, b) => a * b));

////////////////////

function test(callback) {
  return callback("Nacho", 26);
}
let repetir = (str, num) => str.repeat(num);

let checkAge = (name, age) => {
  if (age > 18) {
    return `${name} es mayor`;
  } else {
    return `${name} es menor`;
  }
};

console.log(test(repetir));
console.log(test(checkAge));

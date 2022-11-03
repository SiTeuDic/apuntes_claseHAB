"use strict";

function suma(a, b) {
  return a + b;
}

console.log(suma(3, 2));

// arrow

const sumaArrow = (a, b) => {
  // logica
  return a + b;
};

function ejecutar(callback) {
  callback(4, 5);
}

const resta = (a, b) => a - b;

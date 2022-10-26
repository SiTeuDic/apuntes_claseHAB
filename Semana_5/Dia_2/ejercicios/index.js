"use strict";

// Crea una foncion que reciba dos arrays y devuelva true si tiene exactamente si tiene el mimo contenido y el mismo orden y false si no

let arr1 = ["rojo", "azul", "verde"];
let arr2 = ["rojo", "azul", "verde"]; //true
let arr3 = ["rojo", "amarillo", "verde"]; //False
let arr4 = ["rojo", "azul", "verde", "amarillo"];

function compararArr(arrA, arrB) {
  if (arrA.length === arrB.length) {
    for (let i = 0; i < arrA.length; i++) {
      if (arrA[i] === arrB[i]) return true;
    }
  }
  return false;
}

console.log(compararArr(arr1, arr4));

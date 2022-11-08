"use strict";
let numeros = [4, 8, 9, 2, 15];
///////////////MAP///////

// devuelve un nuevo array con la misma cantidad de elemento que el original
// en cada posicion habra los que devuelva el callback para el elemento corraspondiente

function duplicar(num) {
  return num * 2;
}

const duplicados = numeros.map(duplicar);

console.log(duplicados);

const sonPares = numeros.map((num) => num % 2 === 0);
console.log(sonPares);

console.log(numeros.map((num) => "hola"));

////////////////

function customMap(callback, array) {
  let newArray = [];
  for (const elemento of array) {
    let resultadoCB = callback();
    newArray.push(resultadoCB);
  }

  return newArray;
}

console.log(customMap(duplicar, numeros));

// ///////////////////////////

let usuarios = [
  {
    nombre: "nacho",
    Edad: 28,
  },
  {
    nombre: "Maria",
    Edad: 22,
  },
  {
    nombre: "SKYY",
    Edad: 23,
  },
  {
    nombre: "Paco",
    Edad: 3,
  },
  {
    nombre: "Ana",
    Edad: 17,
  },
];

function edad(user) {
  if (user.Edad > 18) {
    return "mayor";
  } else {
    return "menor";
  }
}

let edades = usuarios.map(edad);

console.log(edades);

let nombres = usuarios.map((usuario) => usuario.nombre);

console.log(nombres);

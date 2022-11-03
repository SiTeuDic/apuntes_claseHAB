"use strict";

// every
// devuelve true si el callback devuelve true TODOS los elementos.

const animales = [
  "perro",
  "gato",
  "conejo",
  "loro",
  "delfin",
  "koala",
  "gato",
  "caballo",
  "gato",
];

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
    Edad: 8,
  },
  {
    nombre: "Ana",
    Edad: 17,
  },
];

let numeros = [4, 8, 9, 2, 15];

console.log(numeros.every((num) => num % 2 === 0));

console.log(animales.every((animal) => animal.length > 3)); //Tienen más de tres letras?

console.log(usuarios.every((usuario) => usuario.Edad > 5)); //Tienen más de 5 años?

//////////////¿Cómo funciona every?

function myEvery(callback, array) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i)) {
      return false;
    }
  }
  return true;
}

console.log(myEvery((num) => num % 2 === 0, numeros));

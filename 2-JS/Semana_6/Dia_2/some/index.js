"use strict";

// devuelve true si al callback devuelve true en algun elemento

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
  "pez",
];

let usuarios = [
  {
    nombre: "nacho",
    Edad: 28,
  },
  {
    nombre: "Maria",
    Edad: 22,
    mascota: "Gato",
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

let numeros = [4, 9, 2, 8, 15];

console.log(numeros.some((num) => num % 2 === 0));

console.log(numeros.some((num, i) => num === i));

console.log(animales.some((animal) => animal === "serpiente"));

console.log(usuarios.every((usuario) => usuario.mascota)); //Tienen más de 5 años?

//////////////¿Cómo funciona some?

function mySome(callback, array) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      return true;
    }
  }
  return false;
}

console.log(mySome((num) => num % 2 === 0, numeros));

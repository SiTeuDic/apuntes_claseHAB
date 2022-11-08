"use strict";
// FIND
// Devulve un elemento del array: el primero que devulve true en el callback

// devuelve el ELEMENTO

const animales = ["perro", "gato", "conejo"];

let usuarios = [
  {
    id: 0,
    nombre: "Nacho",
    Edad: 28,
  },
  {
    id: 1,
    nombre: "Maria",
    Edad: 22,
  },
  {
    id: 2,
    nombre: "SKYY",
    Edad: 23,
  },
  {
    id: 3,
    nombre: "Paco",
    Edad: 3,
    mascota: "gato",
  },
  {
    id: 4,
    nombre: "Ana",
    Edad: 17,
  },
];

let numeros = [4, 8, 9, 2, 15];

let primerPar = numeros.find((num) => num % 2 === 0);

console.log(primerPar);

let impar = numeros.find((num) => num % 2 !== 0);

console.log(impar);

console.log(animales.find((animal) => animal[0] === "p"));

console.log(usuarios.find((usuario) => usuario.id === 3));

/////////¿Cómo funfiona find?

function myFind(callback, array) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      return array[i];
    }
  }
}

console.log(myFind((usuario) => usuario.id === 3, usuarios));

"use strict";

// FILTER

// Devuelve un nuevo array con los mismos elementos que el original o menos
// si el callback devuelve true el elemeto estara en el nuevo array si no  no
// Espera un funcion de devuelva true or false
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

let numeros = [4, 8, 9, 2, 15];

function esPar(num) {
  return num % 2 === 0;
}

let pares = numeros.filter(esPar);

console.log(pares);

let impares = numeros.filter((num) => !esPar(num));
console.log(impares);

// /////////////////////////

function filterAdult(usuario) {
  return usuario.Edad >= 18;
}

let adultos = usuarios.filter(filterAdult);

console.log(adultos);

let adultos2 = usuarios.filter((user) => user.Edad >= 18);

console.log(adultos2);

let nombresAdultos = adultos.map((adulto) => adulto.nombre);
console.log(nombresAdultos);

//////////////////¿Cómo funciona filter?/////////////

function myFilter(callback, array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

let pares2 = myFilter(esPar, numeros);

console.log(pares2);

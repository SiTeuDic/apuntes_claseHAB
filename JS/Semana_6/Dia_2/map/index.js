"use strict";

// Map
// nos devuelve un nuevo array igual de largo que el origunal y en cala posicion mete lo que devulve el callback al aplicarlo a cada elemento del original

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

function unoMas(num) {
  return num + 1;
}

let masUno = numeros.map(unoMas);
console.log(masUno);

const nombres = usuarios.map((usuario) => usuario.nombre);

console.log(nombres);

// admite un segundo parametro para el indice.

const lista = animales.map((animal, i) => `${i} - ${animal}`);

console.log(lista);

console.log(usuarios.map((user, i) => "Un usuario"));

function sumar(a, b) {
  return a + b;
}

console.log(numeros.map((num) => sumar(num, 2)));

// copia con map

let usuariosCopia = usuarios.map((usuario, i) => {
  usuario.indice = i;
  return { ...usuario, indice: i };
});
// cuando añadimos algo al objeto si va detras sobreescribe todo y si va delante no

console.log(usuariosCopia);
console.log(usuarios);

usuariosCopia[1].nombre = "LUis";

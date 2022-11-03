"use strict";

// reduce
// devuelve un unico valor, lo que quede en el acumulador al final
// el callback recive  dos argumentos :el acumulador y el valor actual
// aplicara a cada elemento al callback y guardará el resultado en el acumulador
// admite un segundo parametro que es el acumulador
const animales = ["perro", "gato", "conejo"];

let usuarios = [
  {
    nombre: "Nacho",
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

function reducer(acc, current) {
  return acc + current;
}

let total = numeros.reduce(reducer);

console.log(total);

let iniciales = animales.reduce((acc, el) => acc + el[0], "");
console.log(iniciales);

let edadTotal = usuarios.reduce((acc, user) => acc + user.Edad, 0);

console.log(edadTotal);

function getInitials(acc, user) {
  acc[user.nombre] = user.nombre[0];
  return acc;
}

let iniciales2 = usuarios.reduce(getInitials, {});

console.log(iniciales2);

///////////////¿Comó funciona reduce?//////////

function myReduce(callback, array, init) {
  let acc = init ?? array[0];

  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i], i);
  }
  return acc;
}

let total2 = myReduce(reducer, numeros);

console.log(total2);

"use strict";

// sort
// ordena el array original según el resultado del callback

// el callback recive dos elemento a y b del array debe devolver un numero mayor menot o igual a 0
// si el numero es mayor que 0 a despues que b , si es menor que cero b va despues que a y si el numero es cero se queda igual

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

function porDefectoStr(a, b) {
  return a - b;
}

console.log(numeros.sort(porDefectoStr));
console.log(numeros.sort()); //ordena como si fueran strings
console.log(animales.sort()); //ordena alfabeticament
console.log(animales.sort((a, b) => a.length - b.length));

console.log(numeros.sort((a, b) => b - a));

console.log(usuarios.sort((a, b) => a.Edad - b.Edad));

function ordenar(a, b) {
  if (a.nombre > b.nombre) {
    return 1;
  } else if (a.nombre < b.nombre) {
    return -1;
  } else {
    return 0;
  }
}

console.log(usuarios.sort(ordenar));

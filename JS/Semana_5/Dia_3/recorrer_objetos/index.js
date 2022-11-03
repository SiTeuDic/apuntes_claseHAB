"use strict";

///////////////////////////
// RECORRER OBJETO

let mascotas = {
  buffy: "perro",
  nymeria: "gato",
  marcos: "gato",
  yoda: "perro",
};

// NO podemos recorrer diractamente el obgeto, primero hay que convertirlo a array

// Objec.keys(objeto)
// devuelde un array con las claves del objeto

let nombresMascotas = Object.keys(mascotas);

console.log(nombresMascotas);

// Object.value

let especieMascotas = Object.values(mascotas);

console.log(especieMascotas);

// Object.entries

console.log(Object.entries(mascotas));

// For

for (let i = 0; i < nombresMascotas.length; i++) {
  console.log(nombresMascotas[i]);
  console.log(mascotas[nombresMascotas[i]]);
}
console.log("////////////////////////////////");
/////////////////////////
// for.... in

for (const key in mascotas) {
  console.log(key);
}

/* let perros = 0;
let gatos = 0;

for (const key in mascotas) {
  if (mascotas[key] === "perro") {
    perros++;
  } else if (mascotas[key] === "gato") {
    gatos++;
  }
}

console.log(perros);
console.log(gatos);

 */

function contar(animal, obj) {
  let counter = 0;
  for (const key in obj) {
    if (obj[key] === animal) {
      counter++;
    }
  }
  return counter;
}

console.log(contar("perro", mascotas));

let numeros = {
  a: 5,
  b: 6,
};

"use strict";

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
console.log(animales);

////////////////// NO MODIFICAN//////////////////////////
// .legth
// es una propiedad devuelve la cantidad de elementos del array

console.log(animales.length);

//////////////////

// .indexOff(el)
// Devuelve el indice de la primera aparicion de del elemento

console.log(animales.indexOf("gato"));
// si no lo encuentra nos devuelve -1
console.log(animales.indexOf("camello"));
// admite un segundo parametro para decirle donde empezar a buscar
console.log(animales.indexOf("gato", 2));

/////////////////////

// .lastIndexOff(el)
// Empezando a buscar por el final

console.log(animales.lastIndexOf("gato"));
// si no lo encuentra nos devuelve -1

// admite un segundo parametro para decirle donde empezar a buscar
console.log(animales.lastIndexOf("gato", 7));

///////////////////////

// .join(separador)
// Devuelve un string concatinando todos los elementos del array con el separador en medio

console.log(animales.join()); //con una coma
console.log(animales.join("")); //pega todos los elementos
console.log(animales.join(", ")); //añade ", " en el medio

///////////////////////////
// .slice(start, end)
// devuelve una copia del un fragmento del array empezando en el aray (incluido) y terminando en el final (no incluido)

console.log(animales.slice(2, 6));
// Si no indicamos el final va hasta el final
console.log(animales.slice(6));

/////////////
// Includes(el)
// Devuelve rue si el srray incluye el elemento false si no

console.log(animales.includes("koala"));
console.log(animales.includes("camello"));

//////////////////MODIFICAN//////////////

// push(el)
// añade elementos al final

animales.push("mariposa");
animales.push("nutria", "ballena");

console.log(animales);

// unShift(el)
//añade elementos al principo

animales.unshift("elefante", "oso");

console.log(animales);

// pop()
// elimina y devuelve el ultimo elemento

const ultimo = animales.pop();

console.log(animales);
console.log(ultimo);

// shift()
// elimina y devuelve el primer elemento

animales.shift();
console.log(animales);

const primero = animales.shift();
console.log(animales);
console.log(primero);

// .reverse()
// le de la vuelta

animales.reverse();
console.log(animales);

// splice(start, cantidad)
//elimina y devuelve  un array un fragmento del array empezando en el start con la cantidad de elementos indicada

const trozo = animales.splice(2, 3);
console.log(trozo);
console.log(animales);

// permite añadir un tercer parametro que seran los elementos que sustituiran al trozo

animales.splice(2, 3, "periquito", "raton");
console.log(animales);

// permite poner cosas por medio
// poniendo de cantidad 0

animales.splice(4, 0, "culebra");
console.log(animales);

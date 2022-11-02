"use strict";

let frutas = [
  "fresa",
  "pera",
  "manzana",
  "pera",
  "manzana",
  "pera",
  "manzana",
  "pera",
  "fresa",
  "manzana",
  "fresa",
];

// indexOF(item)

// nos devuelve el primer indice del elemento

console.log(frutas.indexOf("pera"));
console.log(frutas[1]);
console.log(frutas.indexOf("limon"));
// si el indice es menor a 0 es que no esta lo que buscamos
// acepta un sagundo parametro que es el punto de inicio
console.log(frutas.indexOf("pera", 2));

// .lastIndexOf(item)

// lo mismo, pero empezando a mirar la posicion por el final

console.log(frutas.lastIndexOf("pera"));
console.log(frutas.lastIndexOf("pera", 2));

// //////////////////
// pop()
// elimina y devuelve el ultimo elemento del array

let ultimo = frutas.pop();
console.log(frutas);
console.log(ultimo);

///////////////7
// shift()
// Elimina y devulve el primer elemento del array

let primero = frutas.shift();

console.log(frutas);
console.log(primero);

/////////////
// reverse()
// le da la vuelta al array

frutas.reverse();
console.log(frutas);

// /////////////////
// .join()
// devuelve el strind de conectar todos los elementos

console.log(frutas.join());
console.log(frutas.join(", "));

////////////////////
// .slice(principio, fin)
// Devuelve un array cuyo contenido será una copia de los elementos entre el principio(incluido) y el final (no incluido)

console.log(frutas.slice(1, 3));

////////////////
// .splice(principio, cantidad, nuevo_item)
//Elimina y devuelve la cantidad de elementos en forma de array que le indiquemos desde el punto de inicio que indiquemos.
// opcionalmente podemos añadir un tercer parametro o mas con para añadri nuevos elementos en el punto de inicio indicado.
console.log(frutas);

let trozo = frutas.splice(1, 2);

console.log(frutas);
console.log(trozo);

frutas.splice(1, 3, "fresa");

console.log(frutas);

frutas.splice(1, 0, "piña", "papaya");

console.log(frutas);

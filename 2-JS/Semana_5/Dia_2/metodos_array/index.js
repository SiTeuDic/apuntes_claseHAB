"use strict";

let miArray = ["rojo", "verde", "azul"];

//LENGTH (es una propiedad)
//La longitud del array
console.log(miArray.length);

//PUSH
// Añade uno o varios elementos al final de array

miArray.push("amarillo", "naranja");

console.log(miArray);
console.log(miArray.length);

/* miArray.push(prompt("Introduce un color"));

console.log(miArray);
 */

///////////////////////
// UNSHIFT
// Añade elementos al principo del array
// devuelve el nuevo length

miArray.unshift("Granate");
console.log(miArray);

//////////////
// RECORRER UN ARRAY

// Bucle for cuando nos interesa el indice

for (let i = 0; i < miArray.length; i++) {
  console.log(i);
  console.log(miArray[i]);
}

//Crea un array con edades y un bucle que la recorra y diga si son mayores o menores de edad

///for....of

/* for (const elemento of array) {
    codigo que se ejecuta por cada elemento
} */

for (const color of miArray) {
  console.log(color);
}

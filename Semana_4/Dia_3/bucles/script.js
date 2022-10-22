"use strict";

//BUCLES

//for

/* for(inicializador; condición; modificacion){
    codigo que se repite
}

for(let i; = 0; i < vueltas; i++){
    codigo que se repite
}

*/

let vueltas = 5;

for (let i = 0; i < vueltas; i++) {
  console.log("vuelta");
}
for (let i = 0; i < vueltas; i++) {
  console.log("Vuelta", i);
}

for (let i = 0; i < vueltas; i++) {
  if (i % 2 === 0) {
    console.log(i, "es par");
  } else {
    console.log(i, "es impar");
  }
}

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}

let elementos = 4;
let lista = ["patatas", "huevos", "azucar", "pan"];

for (let i = 0; i < elementos; i++) {
  console.log("Creando li: ", lista[i]);
}
console.log("");
console.log("/////EJERCICIOS/////");

console.log("");

/* mostrar una cuenta atras de 20 a 10 */
console.log("Ejercicio 1");

for (let i = 20; i > 10; i--) {
  console.log(i);
}

console.log("");

// mostrar por consola una cuenta de 10 en 10 hasta 100
console.log("Ejercicio 2");

for (let i = 10; i <= 100; i += 10) {
  console.log(i);
}
console.log("");

// Ejercicio: Crear las tablas de multiplicar con el buble for .(ANIDAR)
console.log("Ejercicio 3");

console.log("TABLAS DE MULTIPLICAR");

for (let i = 1; i <= 10; i++) {
  console.log("Tabla del ", i);
  for (let j = 0; j <= 10; j++) {
    console.log(i * j);
  }
}

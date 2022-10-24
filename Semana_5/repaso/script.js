"use strict";

//BUCLES

// for

let vueltas = 10;

for (let i = 0; i < vueltas; i++) {
  console.log(`Vuelta: ${i}`);
}

console.log("");
//while

let continuar = true;
let counter = 0;

while (continuar) {
  console.log(`Vuelta ${counter}`);
  counter++;

  let aleatorio = Math.random();
  console.log(aleatorio);

  if (aleatorio > 0.7) {
    continuar = false;
  }
}

/////////////////
//do ..... while

/* 

do{
    codigo que se rrepite almenos una vez
}while(condition)



*/

// si llega hasta aqui continuar es false
console.log("");
console.log(continuar);

do {
  console.log("esto se ejecuta una vez si la condicion es false");
  console.log("se seguiria repitiendo si la condicion fuera true");
} while (continuar);

let contador = 0;
do {
  console.log(contador);
  contador++;
} while (contador < 5);

console.log("");
console.log("EJEMPLO");
let fotos = [1, 2, 3, 4];
let nfoto = 0;
// sectiton > article > figure > (imd, figcaption);

do {
  console.log("creando section");
  console.log("creando article");
  console.log("creando figure");
  console.log("...");

  console.log(`foto: ${fotos[nfoto]}`);
  console.log("");
  nfoto++;
} while (nfoto < fotos.length);
{
}

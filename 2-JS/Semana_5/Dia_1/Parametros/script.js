"use strict";

// Cuando necesitamos usar dentro de una funcion datos externos o que cambien, usamos parametros

function pescar(cebo) {
  switch (cebo) {
    case 1:
      return "lubina";
    case 2:
      return "Salmón";
    case 3:
      return "trucha";
    default:
      return "nada";
  }
}
let miCebo = 3;
console.log(`Has pescado ${pescar(1)}`);
console.log(`Has pescado ${pescar(2)}`);
console.log(`Has pescado ${pescar(3)}`);
console.log(`Has pescado ${pescar(miCebo)}`);

function multiplicar(numA, numB) {
  return numA * numB;
}

// en la llamada se dan los argumentos, que se cambian por los parametros
console.log(multiplicar(2, 4));

function presentar(nombre, edad) {
  console.log(`Hola me llamo ${nombre} y tengo ${edad} años`);
}
// Lo que importa es el nombre

presentar("Nacho", 26);
presentar(26, "Nacho");

console.log("");
console.log("");

////////////////

function checkAge(age) {
  if (isNaN(age)) {
    console.log("dato invalido");
    return;
  }

  if (age >= 18) {
    console.log("mayor");
  } else {
    console.log("menor");
  }
}

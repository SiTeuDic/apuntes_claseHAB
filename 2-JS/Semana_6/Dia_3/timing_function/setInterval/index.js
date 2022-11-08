"use strict";

// setInterval
// recibe dos argumentos
// 1- callback
// 2 un numero (tiempo en milisegundos)
// Llama al callback cada vez que pasa el tiempo

function saludar() {
  console.log("hola");
  //   no deberiamos meter un intervalo dentro de otro
}

setInterval(saludar, 5000);
setInterval(() => console.log("adios"), 10000);

// Desactivar un intervalo

function explotar() {
  console.log("BOOOM");
}

let bomba = setInterval(explotar, 3000); //debe tener nombre

// clearInterval(bomba); nunca empieza

setTimeout(() => clearInterval(bomba), 10000); //para a laos 10 segundos

// Desactivar despues de un numero de veces

let counter = 0; //Necesitamos seguimiento de las veces
let intervalo; //creamos ala variable para tenerla disponible

function veces() {
  console.log(counter);
  counter++; ///aumentamos las veces

  if (counter >= 5) {
    clearInterval(intervalo);
    console.log("paro");
  }
}

intervalo = setInterval(veces, 1000);

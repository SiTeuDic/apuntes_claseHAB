"use strict";
//  no quedo contento con la cantidad de else if que necesito.
function quiz() {
  alert("Voy a pensar un numero del 0 al 100.¿Crees que lo podrás acertarlo?")
  let numGanador = getRandomNumber(0, 100);
  let finJuego = true;
  
  while (finJuego) {
    let numJugador = prompt("Introduce un numero del 0 al 100");
    if (numGanador > numJugador) {
      alert("El numero en el que estoy pensando es mayor");
    } else if (numGanador < numJugador) {
      alert("El numero en el que estoy pensando es menor");
    } else if (numGanador == numJugador) {
      //tengo que poner esta concion si no al meter cualquier caracter que no sea un numero me los da por valido.
      alert("HAS ACERTADO!!!");
      finJuego = false;
    }
  }
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

quiz();
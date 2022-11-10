"use strict";
//Seleccionamos todas las celdas
let notas = document.querySelectorAll("td");

// notas.style.backgroundColor = "red";

//recorremos las celdas y por cada una..
for (let i = 0; i < notas.length; i++) {
  //Si la nota es mayor o igual a 5 el fondo es verde
  if (notas[i].textContent >= 5) {
    notas[i].style.backgroundColor = "green";
    //si no el color de fondo es rojo
  } else {
    notas[i].style.backgroundColor = "red";
  }
}

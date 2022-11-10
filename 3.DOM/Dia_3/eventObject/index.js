"use strict";

let titulo = document.querySelector("h1");

console.log(titulo);

function click(e) {
  console.log(e);
  //comprobar si se esta pulsando una tecla
  if (e.ctrlKey) {
    console.log("pulsando tecla especial");
  }
  if (e.altKey) {
    console.log("pulsando alt");
  }
}
titulo.addEventListener("click", click);

////////////////////////////////////
///Eventos de taclado

function handleKeyDown(e) {
  console.log(e);
  if (e.code === "KeyD") {
    console.log("presionaste la d");
  }
  if (e.key === "D") {
    console.log("D");
  }
}

document.addEventListener("keydown", handleKeyDown);

///////////////////////////////
//Target: el elemento que lanza el evento

// seleccionamos los elementos
let lis = document.querySelectorAll("li");

//Creamos la gunfion generia, será la misma para todos los elementos
function handleUlClick(e) {
  //El li que activa el evento es el target del evento
  let li = e.target;
  //Si no tiene el atributo data-count, se lo añadimos iniciandolo en uno
  if (!li.dataset.count) {
    li.dataset.count = 1;
  } else {
    //si lo tinene lo aumentamos
    li.dataset.count++;
  } //cambiamos el texto
  li.textContent = `${li.dataset.count} clicks`;
}

for (const li of lis) {
  li.addEventListener("click", handleUlClick);
}

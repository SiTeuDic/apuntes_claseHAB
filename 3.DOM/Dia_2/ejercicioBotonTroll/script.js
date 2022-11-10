"use strict";

//Al hacer click al botón, saldra un mensaje por consola

//Una vez conseguido esto, hay que hacer que sea imposible darle click: al poner e ratón encima, se escapará

//Nunca debe salirse de la ventana

//BONUS: cada vez que se mueva, su fondo cambiará aleatoriamente

let boton = document.querySelector("div");

function encima(e) {
  let posicionX = Math.floor(Math.random() * 500);
  let posicionY = Math.floor(Math.random() * 500);
  boton.setAttribute(posicionX);
  boton.setAttribute(posicionY);
  console.log("encima");
}

function onclick(e) {
  console.log("click!!");
}

function move(e) {}

boton.addEventListener("click", onclick);

boton.addEventListener("mouseenter", encima);

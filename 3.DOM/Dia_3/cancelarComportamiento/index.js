"use strict";

//Evitar comportamiento por defecto
//Algunos eventos en ciertos elementos tienen comportamiento por defecto
//Por ejemplo click en encalces

let enlaces = document.querySelectorAll("a");
console.log(enlaces);

//Se puede evitar con e.preventDefaul()

function noevento(e) {
  e.preventDefault();
  console.log("cancelando");
  let enlace = e.target;
  let text = enlace.textContent;
  let url = enlace.getAttribute("href");
  let continuar = confirm(`seguro que quieres ir a ${text}`);
}

for (const enlace of enlaces) {
  enlace.addEventListener("click", noevento);
}

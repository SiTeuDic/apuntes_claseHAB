"use strict";

//Crear elementos

//1.Crear

let titulo = document.createElement("h1");
console.log(titulo);
let header = document.createElement("header");

//2.Modificar el elemento

titulo.textContent = "Este titulo fue creado con js";
console.log(titulo);

//Añadir elementos a otros

header.append(titulo);

//Añadirlo al DOM
///////(primero seleccionamos algo)

let body = document.querySelector("body");
//Añadir
body.prepend(header); //añade al principio de su padre

///////////
//Crear elementos en blucle
//ceramos contenedor
let lista = ["lechuga", "pan", "leche"];
//metemos elementos en el contenedor
let ul = document.createElement("ul");
for (const elemet of lista) {
  let li = document.createElement("li");
  li.textContent = elemet;
  ul.append(li);
}
//añadimos el contenedor al DOM
body.append(ul);

//Fragment
// cuando no podemos llenar el contenedor antes de añadirlo porque ya esta en el DOM, usamos el fragment

let fragment = document.createDocumentFragment();

for (let elemet of lista) {
  let li = document.createElement("li");
  li.textContent = elemet;
  fragment.append(li);
}

let ol = document.querySelector("ol");

ol.append(fragment);

//Añadir algo por medio del DOM
let newEl = document.createElement("p");
newEl.textContent = "Esteparrafo va por medio";

//tenemos que tener seleccionado el elemento que vaya despues del elemento que queremos añadir

body.insertBefore(newEl, ul);
/* FALTA INFO MIRAR APUNTES */

////////////////////////////////
///ELIMINAR ELEMENTOS

let pBorar = document.querySelector("p#borrar");
//metodo antiguo
///pBorar.parentElement.removeChild(pBorar);

pBorar.remove();

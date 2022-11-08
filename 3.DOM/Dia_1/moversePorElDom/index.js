"use strict";

// MOVERSE CON EL DOM

let main = document.querySelector("main");
console.log(main);

// Con nodos

let nodosHijos = main.childNodes;
console.log(nodosHijos);

let primerNodohijo = main.firstChild;
console.log(primerNodohijo);

let nodoHermanoAnterior = main.previousSibling;

let nodoHermanoSiguiente = main.previousSibling;

/////////////////Directamente elementos

let elementosHijos = main.children;

let primerElementoHijo = main.firstElementChild;

let ultimoElemento = main.lastElementChild;

let elementoHermanoAnterior = main.previousElementSibling;
let elementoHermanoSiguiente = main.nextElementSibling;

let elementoPadre = main.parentElement;

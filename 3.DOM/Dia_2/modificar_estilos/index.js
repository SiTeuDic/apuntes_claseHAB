"use strict";

let titulo = document.querySelector("h1");

console.log(titulo);

// !!! ojo !! La propiedad style refleja el atributo de stylr en linea, no en externas o en la etiqueta style.

// leer todos los estilos
console.log(titulo.style);

// leer el valor del color
console.log(titulo.style.color);

//////////////////
// la propiedad style se utuliza para dar estilo

// Establecer una sola propiedad
titulo.style.color = "magenta";
titulo.style.backgroundColor = "black";

// Establecer varias a la vez
// Sustituye todo el contenido el atributo style (los estilos externos se mantienen)
titulo.style.cssText = "font-family: sans-serif;border: 1px solid black";

//////////////////////
// Si queremos saber que estilos se estan aplicando....

let estilosTitulo = window.getComputedStyle(titulo);

console.log(estilosTitulo.color);

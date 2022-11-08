"use strict";

// MODIFICAR CONTENIDO

// TEXTO
// textContent

let user = {
  nombre: "Nacho",
};

let titulo = document.querySelector("h1");

console.log(titulo.textContent); //leer

let textoOriginal = titulo.textContent;

titulo.textContent = `Hola ${user.nombre}`;

let p = document.querySelectorAll("p");

console.log(p[0].textContent); //saca el texto limpio , sin etiquetas

p[0].textContent = `Este parrafo tiene una parte importante `;

// html
//INTERNO (innerHtml)
let htmlOriginal = p[1].innerHTML;
console.log(htmlOriginal);
//saca todo, hasta las etiquetas

p[1].innerHTML = `He modificado <strong> este texto</strong>`;

//externo (outerHTLM)

console.log(p[2].outerHTML); //saca el html incluido la etiqueta

p[2].outerHTML = `He modificado <strong> este texto</strong>`; //SE interpreta como html pero reemplaza el elemento entero, no el contenido.

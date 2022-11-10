"use strict";

//EVENT BuBBLING
// por defecto todeol los evento que lance un elemento, iran escalando por todos sus padres

let titulo = document.querySelector("h1");
let htlm = document.querySelector("html");
let header = document.querySelector("header");
let body = document.querySelector("body");

titulo.addEventListener("click", () => console.log("click h1"));

header.addEventListener("click", () => console.log("click header"));

htlm.addEventListener("click", () => console.log("click html"));

body.addEventListener("click", () => console.log("click body"));

//////////////
//Se puede evitar que se propage hacia arriba con e.stopPropagation()

let h2 = document.querySelector("h2");
let main = document.querySelector("main");

h2.addEventListener("click", () => console.log("click h2"));

function handleMain(e) {
  e.stopPropagation();
  console.log("click en el main");
}

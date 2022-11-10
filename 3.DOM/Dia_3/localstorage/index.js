"use strict";

//Local storage
//Mini base de datos del navegador

//CON STRINGS
// JS los guarda como strings

//Escribir
localStorage.setItem("test", "hola");

let input = document.querySelector("input");
let button = document.querySelector("button");
let buttonDelate = document.querySelector("#delate");
let buttonClean = document.querySelector("#clean");

function guardar() {
  localStorage.setItem("input", input.value);
  input.value = " ";
}

console.log(input, button);

button.addEventListener("click", guardar);

///Leer(siempre devuelve strings)
let test = localStorage.getItem("test");

let inputStorage = localStorage.getItem("input");

console.log(test, inputStorage);

//Borrar
function Delete() {
  localStorage.removeItem("test");
}

buttonDelate.addEventListener("click", Delete);

function clean() {
  //borrar todo
  localStorage.clear();
}

buttonClean.addEventListener("click", clean);

/////////////////////
//elementos complejos
//hay que guardarlos como string(json)

//escribir
let miobj = {
  nombre: "nacho",
  edad: 20,
};

//Convierto a string

let miobjStr = JSON.stringify(miobj);
//guardo ese objeto
localStorage.setItem("obj", miobjStr);
console.log(miobjStr);

let miArray = ["rojo", "verde", "azul"];

localStorage.setItem("array", JSON.stringify(miArray)); //En un solo paso

//Leer

let objStorageStr = localStorage.getItem("obj");

let objStorage = JSON.parse(objStorageStr); //convierto de nuevo a objeto

let arrayStorage = JSON.parse(localStorage.getItem("array"));

console.log(arrayStorage);

"use strict";

// localStorage.setItem("listacompra", JSON.stringify(["lechuga", "tomates"]));

let input = document.querySelector("input");
let button = document.querySelector("button");

let lista = [];
//leo los datos del local storage

let sevedLista = localStorage.getItem("listacompra");
//

if (sevedLista) {
  let lista = JSON.parse(sevedLista);
}
console.log(lista);

function save() {
  //añado a la lista
  lista.push(input.value);
  //limpio el campo
  input.value = "";

  //convierto la lista a string
  let listaStr = JSON.stringify(lista);
  //lo guar en el localstorage
  localStorage.setItem("listacompra", listaStr);
  console.log(lista);
}

button.addEventListener("click", save);

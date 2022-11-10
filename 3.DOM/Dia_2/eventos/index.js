"use srtict";

let boton = document.querySelector("button");
//Metodo antiguo (mala practica)

boton.onclick = () => console.log("Click!");

//Metodo moderno: event listeners
//(escuchadores de evento)

boton.addEventListener("click", () => console.log("Click!"));

//funcion con nombre
function holi() {
  console.log("holi");
}

boton.addEventListener("click", holi);

// Cuando la funcion tiene combre se le puede quitar

boton.removeEventListener("click", holi);

///////////////////////

function handlemaouse(e) {
  console.log("raton encima");
}

boton.addEventListener("mouseenter", handlemaouse);

/////////

function handlekey(e) {
  if (e.code === "keyP") {
    console.log("has persionado la L o la p");
  }
}

document.addEventListener("keydown", handlekey);

"use strict";

//Leer formulario

////Seleccionar formularios

let [form] = document.forms;

//Eleccionar elementos dentro del form

console.log(form.elements);

let { name, email, check } = form.elements;

console.log(name, email, check);

function leerForm() {
  e.preventDefault();

  console.log(name.value);
  console.log(email.value);

  console.log(check.checked);

  name.value = "";
  email.value = "";
  check.checked = false;
}

///gestionar el evento submit ( envio )del formulario

form.addEventListener("submit", leerForm);

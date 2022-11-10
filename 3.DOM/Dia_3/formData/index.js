"use strict";

//Form Data

//permite crear un "objeto" a partir de un formulario

let [form] = document.forms;
console.log(form);

function leerForm(e) {
  e.preventDefault();

  let data = new FormData(form);

  console.log(data.get("name"));

  //añadir pares clave valor
  data.append("fecha", new Date());
  for (let el of data) {
    console.log(el.values);
  }
}

form.addEventListener("submit", leerForm);

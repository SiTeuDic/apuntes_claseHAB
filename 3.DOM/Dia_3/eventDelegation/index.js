"use strict";

//Cuando queremos que muchos elementos ejecuten la misma funcion para el mismo evento,podemos ahorrar recursosasociando el evento al padre, asi sera solo uno

// seleccionamos el padre de los elementos
let ul = document.querySelector("ul");

//Creamos la gunfion generia, será la misma para todos los elementos
function handleliClick(e) {
  //cuando rrecurimos al event delegation es comprobar que el target es lo que queremos
  //el metodo matches recive un selector y devulve true si elelemento seria sellecionado por ese selector
  if (e.target.matches("li")) {
    /*   //El li que activa el evento es el target del evento
  let li = e.target;
  //Si no tiene el atributo data-count, se lo añadimos iniciandolo en uno
  if (!li.dataset.count) {
    li.dataset.count = 1;
  } else {
    //si lo tinene lo aumentamos
    li.dataset.count++;
  } //cambiamos el texto
  li.textContent = `${li.dataset.count} clicks`; */
  }
}

ul.addEventListener("click", handleliClick);

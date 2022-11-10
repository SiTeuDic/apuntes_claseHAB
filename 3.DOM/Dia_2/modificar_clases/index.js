"use strict";

let titulo = document.querySelector("h1");

///CLASES (propiedad classlist)
console.log(titulo.classList);
//especia de array con todas las clases
//Añadir clases

titulo.classList.add("dos", "tres");

//Quitar clases

titulo.classList.remove("uno");

//alternar clase
// si la tiene se la quita , ai no la tiene se la pone

titulo.classList.toggle("uno");
// no la tenia, se la pone
titulo.classList.toggle("dos");
// la tenia ,se la quita

// Comprobar si tiene la clase

console.log(titulo.classList.contains("tres"));

//reemplazar clases

titulo.classList.replace("tres", "dos");
// cambiamos la clase tres por la dos

titulo.classList.replace("cuatro", "tres");
//no se aplica la tres por que no tiene la cuatro

//////////////////////////
// Reemplazar todo el contenido del atributo class

titulo.className = "tres dos";

titulo.className = "uno"; //asi da igual lo que tenga que sobreescribira la indicada.

titulo.className = ""; //asi borramos todas las clases

"use strict";

////////////////////
//OBJETOS
// Igual quelos arrays son estructuras que contienen una losta de datos, a diferencia de los arrays no tienen orden
// lo que tienen son nombres llamados claves

/* 
{
    clave: valor,
    clave2: valor2,
    clave3: valor3
}
*/
// Los valores pueden ser cualquier cosa, strings, funciones,arrays, objetos
// cuando son datos se llaman propiedades cuando son funciones se llaman métodos.

// Las claves no deverian empezar por numero

let usuario = {
  nombre: "Nacho",
  edad: 26,
  email: "siteudic@gmail.com",
  saludar: function () {
    console.log("hola");
  },
  coloresFavoritos: ["negro", "rojo"],
  mascota: {
    nombre: "carbonilla",
    especie: "gato",
    color: "gris",
  },
};

console.log(usuario);

//////////////
//Acceder a los datos del objeto

//Sintaxis del punto
// Para usarla, devemos utilizar la clave litaral.

console.log(usuario.edad);
console.log(usuario.nombre);
console.log(usuario.email);

usuario.saludar();

console.log(usuario.mascota);
console.log(usuario.mascota.nombre);

//////////////////////////////
//Sintaxis de corchetes
// En los corchetes ponemos una expresion , JS la evalua y busca la clave que coincida

console.log(usuario["nombre"]);

let clave = "edad";

console.log(usuario[clave]);

///////////////////////////////
// MODIFICAR uN VALOR

usuario.edad = 29;

console.log(usuario.edad);

///////////////////////////
// AÑADIR UN VALOR

usuario.ciudad = "Compostela";

//Eliminar un valor

delete usuario.email;

console.log(usuario);

"use strict";

// Atrapar errores
// try - catch

function saltaError() {
  try {
    console.log("holi");
    console.log(vsriableQueNoExiste); //ERROR, debajo de un error no ejecuta endro del try
  } catch (error) {
    console.error(error.message);
  }
}

saltaError();

// Fianlly
// cuando hay un trozo de codigo que queremos que se ejecute al final haya error o no, lo ponemos en el finally

let conexion;

function obtenerDatos() {
  try {
    conexion = true;
    console.log(conexion);
    console.log("abrir conexion ");
    console.log("pedir datos");
    console.log("mandar datos");
  } catch (error) {
    console.error(error.message);
  } finally {
    //funcione o falle la peticion, queremos cerrar la conexion
    conexion = false;
    console.log(conexion);
  }
}

obtenerDatos();
/* 
let usuario = {
  //   name: "Nacho",
};

function saludar(usuario) {
  try {
    console.log(usuario.name[0]);
    console.log(`hola ${usuario.name}`);
  } catch (e) {
    console.log("No hay usuario");
  }
} 


saludar(usuario);
*/
// LAnzar errores:
// trhow

let usuario = {
  //   name: "Nacho"
};

function saludar(user) {
  try {
    if (!user || !usuario.name) {
      throw new Error("No hay usuario");
    }
    console.log(`hola ${user.name}`);
  } catch (e) {
    console.error(e.message);
  }
}

saludar(usuario);

console.log("final");

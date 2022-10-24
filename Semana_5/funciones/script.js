"use strict";

// DECLARACIÓN DE FUNCIONES

/* 
function nombre(parametros1, parametro2...(opcional)){

}

function name(params) {
    
}
*/

function saludar() {
  console.log("hola");
  console.log("buenos dias!");
}

// LLAMADA A LA FUNCIÓN
/* 
nombre(arg1,...)
*/

saludar();

let hora = 11;

if (hora <= 12) {
  saludar();
}

//DEVOLVER VALOR

/* 

function nombre(parm1,...){

    return valor
    //en cuanto se ejecura un return la funcion para
}


*/

function miNumeroFav() {
  console.log("esto se ejecuta ");
  return 2 + 2;
  console.log("esto no se ejecuta ");
}

console.log(`Mi numero favorito es el  ${miNumeroFav()}`);

// Las finciones deverian ser puras

// IMPURAS
// Modifican los datos de fuera y/o devuelven distintos datos con la misma entrada
let num = 2;

function duplicar() {
  num *= 2;
  return num;
}

console.log(duplicar());
console.log(num);
console.log(duplicar());

function aleatorio() {
  return Math.random();
}

console.log(aleatorio());
console.log(aleatorio());

function aleatorioMulti(num) {
  return Math.random() * num;
}
console.log(aleatorioMulti(10));
console.log(aleatorioMulti(10));

// PURAS:
// Misma entrada misma salida
// No modifican nada de fuera (generan datos nuevos)

num = 2;

function multiplicar(a, b) {
  return a * 2;
}

// podemos llamar a funciones dentro de otras

function multiplicar(a, b) {
  return a * b;
}

function triplicar(num) {
  return multiplicar(num, 3);
}

console.log(triplicar(3));

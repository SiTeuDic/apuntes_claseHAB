"use strict";
//IF

/*
if(condición){
    codigo que se ejecuta
}
*/

// IF ELSE
/*
if (condition) {
    codigo que se ejecuta
}else{
    codigo que se ejecuta si la condicion no se cumple

}
*/

let edad = 16;

if (edad >= 18) {
  console.log("eres mayor de edad");
} else {
  console.log("eres menor de edad");
}

//IF ... Else IF
/*
if (condition1) {
    se ejecuta si la condition1 se cumple
}else if (condition2) {
    se ejecuta si la condition2 se cumple perola ucondition1 no 
    
} else
    se ejecuta si ninguna de las anteriorese seejecuta
*/

if (edad >= 18) {
  console.log("eres mayor de edad");
} else if (edad >= 16) {
  console.log("tiene 16 o mas");
} else {
  console.log("eres menor de edad");
}
//multiples condiciones

if (edad >= 18 && edad === 18) {
  //........
}

//encadendo IFs
// encadenado mal
/*
if (condition) {
} else {
    if (condition) {
    
    }else
    if (condition) {
        
        }else
    
}

 */

/////////////////////////////
//condicional en vase al valor directo

let mascota = "serpiente";
// if (macota === "perro") {
//   console.log("guau");
// } else if (mascota === "gato ") {
//   console.log("Miau");
// }

// SWITCH
/*
switch (variable) {
  case value:
    se ejecuta si el value1e1 === variable

    break;
  case value2:
    se ejecuta si el value1e2 === variable

    break;

  default:
    se ejecuta si variable no coincide con ningun value
    break;
}
 */

switch (mascota) {
  case "perro":
    console.log("guau");
    break;
  case "gato":
    console.log("miauuurr");
    break;
  case "pajaro":
    console.log("piiiioooorr");
    break;
  default:
    console.log("ladra tu puto");
    break;
}

var foo = 5;
var output = "Salida: ";
switch (foo) {
  case 10:
    output += "¿Y ";
  case 1:
    output += "Cuál ";
    output += "Es ";
  case 2:
    output += "Tu ";
  case 3:
    output += "Nombre";
  case 4:
    output += "?";
    console.log(output);
    break;
  case 5:
    output += "!";
    console.log(output);
    break;
  default:
    console.log("Por favor, selecciona un valor del 1 al 5.");
}

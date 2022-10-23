"use strict";

let nombre = "Marta";
let edad = 27;

let edadDescInfantil = 12;
let edadDescJuvenil = 30;
let edadDescJubilados = 60;

////////////IF | ELSE  IF | ELSE///////////

if (edad <= edadDescInfantil) {
  console.log(
    "A " + nombre + " le corresponde el descuento infantil(menores de 12 años)"
  );
} else if (edad <= edadDescJuvenil && edad > edadDescInfantil) {
  console.log(
    "A " + nombre + " le corresponde el descuento juvenil(menores de 30 años)"
  );
} else if (edad >= edadDescJubilados) {
  console.log(
    "A " +
      nombre +
      " le corresponde el descuento de jubilados (mayores de 60 años)"
  );
} else {
  console.log("A " + nombre + " no le corresponde ningun descuento");
}

/////////////SWICHT//////////////////

/* switch (edad) {
  case edad :
    break;

  default:
    break;
} */

"use strict";

let alarma = ", CUCÚ!";
let numAlarma = "";

// Bucle principal
for (let i = 0; i < 24; i++) {
  if (i >= 8 && i < 13) {
    for (let j = 0; j < i; j++) {
      // Suma a numAlarma las veces que se repita el bucle (empieza recorriendolo 8 veces)
      numAlarma += alarma;
    }
    console.log("Son las " + i + ":00" + numAlarma);
    // Establace el numAlarmas a 0 (vacia el string)
    numAlarma = "";
  } else if (i >= 13 && i < 23) {
    for (let j = 12; j < i; j++) {
      //Suma a numAlarma las veces que se repita el bucle (empieza con valir 12 así en la primera vulta llegara a ser igual que i)( se "desfasa" el bucle para que coincida con la hora en formato 12h)
      numAlarma += alarma;
    }
    console.log("Son las " + i + ":00" + numAlarma);
    // Establace el numAlarmas a 0 (vacia el string) si no la depuro lo que hace es sumar con la estring antigua(osea que a la segunda vuelta tendra el valor antiguo)
    numAlarma = "";
  } else {
    console.log("Son las " + i + ":00");
  }
}

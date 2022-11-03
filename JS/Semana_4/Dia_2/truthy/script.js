"use strict";

// FALSY
// su valor  booleano es false
// si se convierte (con boolean(valor) o coercion de tipos) va a covertirse en false

//0, undefined, null, NaN, false

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// TRUTHY
// su valor  booleano es true
// si se convierte (con boolean(valor) o coercion de tipos) va a covertirse en true

//Todo lo demas
console.log(Boolean(1));
console.log(Boolean(" "));

"use strict";

let miString = "Esto es una string.";

// LENGTH
// Es un propiedad
// indica cuantos caracteres tiene es string

console.log(miString.length);

// .toLowerCase()
// Devuelve una copia del string en minusculas

console.log(miString.toLocaleLowerCase());

// .toUppercase
// Devuelve una copia del string en mayuscula

console.log(miString.toLocaleUpperCase());

let password = "hola";

// Estos metodos son muy utiles si queremos hacer comparaciones de strings sin que importen las maúsculas

/////////////////

// .Indexof(str)
// Devuelve el indice de la primera aparicion de la substring en la string

console.log(miString.indexOf("s"));
console.log(miString.indexOf("str"));

// Si no lo encuentra nos devuelve -1
console.log(miString.indexOf("paco"));

// Admite un segundo parametro para indicar donde empezar a buscar.

console.log(miString.indexOf("s", 2));

// .lastIndexOf()
// empezando a buscar por el final

console.log(miString.lastIndexOf("str"));
// si no lo encuentra devuelve -1

console.log(miString.lastIndexOf("s", 3));

// .repeat()
// devuelve un strung a partir de la repeticion de la original el numero de veces indicado

console.log(miString.repeat(3));

// .replace(substr, newSubstr)
// Devuelve una string cambiando la pripera aparición del primer argomento por el segundo

console.log(miString.replace("str", "uto"));
console.log(miString.replace("string.", ""));
// tambien vale para eliminar cosas de la string.

// .replaceAll(substr, newSubstr)
// cambia todas las coincidencias.

console.log(miString.replaceAll("st", ""));

// .siplit(separador)
// divide la string por el separacor y devuelve un array con los trozos, es separador se elimina.

console.log(miString.split()); //Devuelve un array con la string entera
console.log(miString.split("")); //Devuelve un array con todos los caracteres
console.log(miString.split(" ")); //Devuelve un array con la string con cadauna de las palabras sin espacios

// .slice(start,end)
// Devuelve una substrin de la priginal, empezando en el start y acabando en el end(no incluido)

console.log(miString.slice(3, 9));
// si no indicamos fin va hasta el final.
console.log(miString.slice(9));

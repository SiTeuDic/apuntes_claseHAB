const names = [
  "A-Jay",
  "Manuel",
  "Manuel",
  "Eddie",
  "A-Jay",
  "Su",
  "Reean",
  "Manuel",
  "A-Jay",
  "Zacharie",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];

let newArray = [];

names.forEach((name) => {
  if (!newArray.includes(name)) {
    newArray.push(name);
  }
});

console.log(newArray);

// La funcion anterior es practicamente copiada de internet, se que no esta mal, aún asi os dejo mis intentos para los veais,el principal problema que encontraba es que en el nuevo array entraba el valor de indice con lo que solo me entraban numeros.

/* function eliminarDuplicados(array) {
  for (const name in array) {
    if (!newArray.includes(name)) {
      newArray.push(name);
    }
  }
}

eliminarDuplicados(names);
console.log(newArray);
 */

"use strict";

let notas = document.querySelectorAll("td");

// notas.style.backgroundColor = "red";

console.log(notas);

for (let i = 0; i < notas.length; i++) {
  if (notas[i].textContent >= 5) {
    notas[i].style.backgroundColor = "green";
  } else if (notas[i].textContent < 5) {
    notas[i].style.backgroundColor = "red";
  }
}

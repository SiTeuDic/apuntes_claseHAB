"use strict";

// Crea una funcion que reciba un numero como parametro y devuelva si es par o false si es impar

// 8 -> true || 3 -> false

function esPar(a) {
  /* if (a % 2 === 0) {
    return true;
  }
  return false; */
  return a % 2 === 0;
}

console.log(esPar(3));
console.log(esPar(8));

// Crea una funcion que reciba dos numeros como parametros, devuelve true si el primero es divisible entre el segundo
// Un numero es sivisible entre otro si al dividirlo no da resto
// 9, 3 -> true
// 8,3 -> false
console.log("");

function dividir(a, b) {
  /*  if (a % b === 0) {
    return true;
  } else {
    return false;
  } */
  return a % b === 0;
}

console.log(dividir(6, 2));

// Crea una funcion que reciba un numero y devuelva true si es primo y false si no
// un numero es primo si no es divisible entre ningun numero entre 2 y el anterior a si mismo
// siMismo = a % 2;
// anterior = a % (a -= 1);

// Damos por hecho que no va a recibir numeros inferiores a 2
// 13 -> true
// 14 -> false

// function primo(a) {
//   if (a % 2 !== 0 && a % (a -= 1) !== 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(primo(11));
console.log("");

function primo(a) {
  for (let i = 2; i < a; i++) {
    // console.log(i);
    if (a % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(primo(23));

console.log("");

// Crea una funcion que reciba un numero como parametro y saque por consola todos los numeros primos hasta el incluido
// 15 -> 2, 3, 5, 7, 11, 13

function primo2(i, a) {
  for (i; i <= a; i++) {
    if (primo(i)) {
      console.log(i);
    }
  }
}

primo2(13, 23);

console.log("");

/* 
// Numero aleatorio(0 a 1 no incluido)
Math.random()


*/

console.log(Math.random());

// Nuemro aleatorio de 0 a X (con decimales)

console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.random() * 15);

// Nuemro de 0 a x redondeado(no es preciso)

console.log(Math.round(Math.random() * 10));
console.log(Math.round(Math.random() * 100));

//Entre un minimo y un maximo(con decimales)

// (Math.random() * (max - min)) + min

console.log(Math.random() * (15 - 5) + 5);

// Entre un minimo y un maximo sin decimales

console.log(Math.round(Math.random() * (100 - 5)) + 5);

console.log("");
function aleatorioRango(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

console.log(aleatorioRango(20, 30));

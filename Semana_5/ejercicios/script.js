"use strict";

// Crea una funcion que reciba un numero como parametro y devuelva si es par o false si es impar

// 8 -> true || 3 -> false

function esPar(a) {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(esPar(3));

// Crea una funcion que reciba dos numeros como parametros, devuelve true si el primero es divisible entre el segundo
// Un numero es sivisible entre otro si al dividirlo no da resto
// 9, 3 -> true
// 8,3 -> false

function dividir(a, b) {
  if (a % b === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(dividir(6, 2));

// Crea una funcion que reciba un numero y devuelva true si es primo y false si no
// un numero es primo si no es divisible entre ningun numero entre 2 y el anterior a si mismo

function primo(a) {
  let siMismo = a % 2;
  let otros = a % (a -= 1);
  if (a % 2 !== 0 && a % (a -= 1) !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(primo(3));
// Damos por hecho que no va a recibir numeros inferiores a 2
// 13 -> true
// 14 -> false
// Crea una funcion que reciba un numero como parametro y saque por consola todos los numeros primos hasta el incluido
// 15 -> 2, 3, 5, 7, 11, 13

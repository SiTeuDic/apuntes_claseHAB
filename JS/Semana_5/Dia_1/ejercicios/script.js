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
    for(let i = 2; i < (a - 1); i++){
      // console.log(i);
        if(a%i === 0){
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
  for(i; i <= a; i++){
    if(primo(i)){
      console.log(i);
    } 
  } 
}

primo2(13, 23)
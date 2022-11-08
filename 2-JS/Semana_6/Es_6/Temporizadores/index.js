/* "use strict";



Crea un programa que imprima en la consola cada 5 segundos el tiempo que ha pasado desde la ejecución del mismo. Formatea el tiempo para que se muestren los segundos, los minutos, las horas y los días desde la ejecución.



Ejemplo de lo que debería imprimir en la consola:

...
Han pasado 0 días, 0 horas, 1 minuto y 20 segundos desde la ejecución del programa
Han pasado 0 días, 0 horas, 1 minuto y 25 segundos desde la ejecución del programa
...

Haz que el texto que imprima respete los singulares y plurales (ej: 1 minuto, 30 segundos).

Ten en cuenta que por la forma que funcionan los temporizadores y las fechas en JavaScript puede que tengas alguna desviación de +/- 1 segundo. No te preocupes por eso.

Cuando tengas eso hecho crea una función que se encargue de parar el temporizador anterior después de un tiempo arbitrario.

Esta función recibirá 2 parámetros: un número y una letra: D, H, M o S (correspondiente a Días, Horas, Minutos o Segundos). Estos parámetros determinarán el tiempo que tardará la función en parar el temporizador inicial (ej. los parámetros 2, "M" harán que el temporizador se pare a los 2 minutos).

Cuando pare el temporizador debe mostrar un mensaje en la consola indicando que se paró.
 */

/* 
1- fucion que imprima cada 5 segundos el tiempo que ha pasado desde su inicio
2-formatear a dias horas minutos y segundos
3- funcion que para el temporizador
4 - recibe u numero y una letra D H M o S
(2, M) lo parará despues de 2 minutos
5- mensaje que ha parado despues de X tiempo 

 */

/* let mainInterval = setInterval(main, 5000);
let counterS = 0;
let counterM = 0;
let counterH = 0;
let counterD = 0;
let run = true;
function main() {
  counterS += 5;
  if (counterS > 60) {
    counterS = 0;
    counterM += 1;
  } else if (counterM > 60) {
    counterM = 0;
    counterH += 1;
  } else if (counterH > 24) {
    counterH = 0;
    counterD += 1;
  }
  console.log(
    `Han pasado ${counterD} dias, ${counterH} horas , ${counterM} minutos y  ${counterS} segundos desde la ejecucion del programa`
  );
}

function stopInterval(num, x) {
  if (counterS === num) {
    stopInterval(mainInterval);
    run = false;
    console.log("aaaaaaaaaaaa");
  }
}

stopInterval(15, "S");
 */

let secCounter = 26000000000;

function intervalFunc() {
  secCounter++;

  if (secCounter % 5 === 0) {
    format(secCounter);
  }
}

function format(sec) {
  let segundos = sec % 60;
  let minutosT = Math.floor(sec / 60);
  let minutos = minutosT % 60;
  let horasT = Math.floor(minutosT / 60);
  let horas = horasT % 24;
  let dias = Math.floor(horas / 24);

  console.log(
    `Han pasado ${dias} dias, ${horas} hora${plural(
      horas
    )}, ${minutos} minuto${plural(
      minutos
    )} y ${segundos} segundos desde la ejecucion del programa.`
  );
}

setInterval(intervalFunc, 500);

function plural(num) {
  return num !== 1 ? "s" : "";
}

function parar(numero, letra) {
  setTimeout(() => clearInterval(intervalFunc));
}

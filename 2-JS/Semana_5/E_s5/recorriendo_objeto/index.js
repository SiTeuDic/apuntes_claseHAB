"use strict";

const people = {
  Maria: 20,
  Ana: 14,
  Luis: 16,
  Pepe: 35,
  Manuel: 50,
  Teresa: 12,
  Daniel: 27,
  Irene: 23,
  Alex: 10,
};

for (const name in people) {
  esMayor(name, people[name]);
}

function esMayor(name, age) {
  if (age >= 18) {
    console.log(`${name} es mayor de edad`);
  } else {
    console.log(`${name} es menor de edad`);
  }
}

/* function esMayorDeEdad(name, age) {
    name = people.key(i)
    age = people.value(i)
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
    }
} */

/* for (const edad in people) {
  if (Object.values(people[edad]) > 18) {
  }
  console.log(`${name} es menor de edad`);
} */

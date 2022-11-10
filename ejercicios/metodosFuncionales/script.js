/**
 * Utiliza los métodos funcionales de array para resolver las siguientes propuestas:
 *
 *  - 1. Obtén la suma total de todas las edades de las personas.
 *  - 2. Obtén la suma total de todas las edades de las personas francesas.
 *  - 3. Obtén un array con el nombre de todas las mascotas.
 *  - 4. Obtén un array con las personas que tengan gato.
 *  - 5. Obtén un array con los coches de los españoles.
 *  - 6. Obtén un array con las personas que tengan un coche de la marca Ford.
 *  - 7. ¡Bonus point! Obtén un array con todas las personas en el que cada persona tenga toda
 *       la info de su coche. Ejemplo a continuación:
 *
 *      [
 *          {
 *               name: 'Berto',
 *               country: 'ES',
 *               age: 44,
 *               car: {
 *                  id: 'LU9286V',
 *                  brand: 'Citroen',
 *                  model: 'Xsara'
 *               },
 *               pet: {
 *                   name: 'Moon',
 *                   type: 'perro'
 *               }
 *           },
 *           (...)
 *      ]
 *
 *  Tip: en algún caso es probable que el método "nombreArray.find()" te sea de ayuda.
 *
 */

"use strict";

const persons = [
  {
    name: "Berto",
    country: "ES",
    age: 44,
    car: "LU9286V",
    pet: {
      name: "Moon",
      type: "perro",
    },
  },
  {
    name: "Jess",
    country: "UK",
    age: 29,
    car: "GB2913U",
    pet: {
      name: "Kit",
      type: "gato",
    },
  },
  {
    name: "Tom",
    country: "UK",
    age: 36,
    car: "GB8722N",
    pet: {
      name: "Rex",
      type: "perro",
    },
  },
  {
    name: "Alexandre",
    country: "FR",
    age: 19,
    car: "FT5386P",
    pet: {
      name: "Aron",
      type: "gato",
    },
  },
  {
    name: "Rebeca",
    country: "ES",
    age: 32,
    car: "MD4578T",
    pet: {
      name: "Carbón",
      type: "gato",
    },
  },
  {
    name: "Stefano",
    country: "IT",
    age: 52,
    car: "LP6572I",
    pet: {
      name: "Bimbo",
      type: "perro",
    },
  },
  {
    name: "Colette",
    country: "FR",
    age: 22,
    car: "FU8929P",
    pet: {
      name: "Amadeu",
      type: "gato",
    },
  },
];

const cars = [
  {
    id: "LU9286V",
    brand: "Citroen",
    model: "Xsara",
  },
  {
    id: "GB2913U",
    brand: "Fiat",
    model: "Punto",
  },
  {
    id: "GB8722N",
    brand: "Opel",
    model: "Astra",
  },
  {
    id: "FT5386P",
    brand: "Ford",
    model: "Focus",
  },
  {
    id: "MD4578T",
    brand: "Opel",
    model: "Corsa",
  },
  {
    id: "LP6572I",
    brand: "Ford",
    model: "Fiesta",
  },
  {
    id: "FU8929P",
    brand: "Fiat",
    model: "Uno",
  },
];

console.log("1. Obtén la suma total de todas las edades de las personas.");
const totalEdad = persons.reduce((acc, person) => acc + person.age, 0);

console.log(totalEdad);

console.log(
  "2. Obtén la suma total de todas las edades de las personas francesas."
);

const edadFranceses = persons
  .filter((person) => person.country === "FR")
  .reduce((acc, person) => acc + person.age, 0);

console.log(edadFranceses);

console.log("3.Obtén un array con el nombre de todas las mascotas.");
const mascotas = persons.map((person) => person.pet.name);

console.log(mascotas);

console.log("4. Obtén un array con las personas que tengan gato.");
const personasGato = persons.filter((person) => person.pet.type === "gato");

console.log(personasGato);

console.log("5.Obtén un array con los coches de los españoles.");
const personasEspanolas = persons
  .filter((person) => person.country === "ES")
  .map((person) => person.car);

const coches = cars.filter((car) => personasEspanolas.includes(car.id));

console.log(coches);

console.log(
  "6. Obtén un array con las personas que tengan un coche de la marca Ford."
);
const cochesFord = cars
  .filter((car) => car.brand === "Ford")
  .map((car) => car.id);

const personasFord = persons.filter((person) =>
  cochesFord.includes(person.car)
);

console.log(personasFord);

console.log(
  "7. ¡Bonus point! Obtén un array con todas las personas en el que cada persona tenga toda la info de su coche"
);
/* 

 let coches2 = cars.filter((car)=> car.id).map((car)=> car.id)

const personasCoche = persons.includes((person)=> {
}


console.log(coches2);
console.log(personasCoche); */

let personasCoches = persons.map((person) => {
  return { ...person, car: cars.find((car) => car.id === person.car) };
});

console.log(personasCoches);

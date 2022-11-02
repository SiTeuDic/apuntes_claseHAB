"use strict";

const pizzas = [
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",
  "tropical",
];

function combine(pizzas) {
  const combinations = [];
  for (let i = 0; i < pizzas.length; i++) {
    const element = pizzas[i];
    for (let i = 1; i < pizzas.length; i++) {
      const element2 = pizzas[i];
      if (element !== element2) {
        combinations.push(element + " y " + element2);
      }
    
    }
  }

  return combinations;
}

console.log(combine(pizzas));

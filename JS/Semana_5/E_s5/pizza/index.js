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
    for (let j = i + 1; j < pizzas.length; j++) {
      const element2 = pizzas[j];
      if (element !== element2) {
        combinations.push(element + " y " + element2);
      }
    }
  }

  return combinations;
}

console.log(combine(pizzas))

/*
0-1
0-2
0-3
0-4
0-5
1-2
1-3
1-4
1-5
2-3
2-4
2-5
3-4
3-5
4-5
*/

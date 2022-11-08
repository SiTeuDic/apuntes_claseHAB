"use strict";

// puntuaciones primera ronda

const firstRound = [
  { team: "Toros Negros", scores: [1, 3, 4, 2, 10, 8] },
  { team: "Águilas Plateadas", scores: [5, 8, 3, 2, 5, 3] },
  { team: "Leones Carmesí", scores: [5, 4, 3, 1, 2, 3, 4] },
  { team: "Rosas Azules", scores: [2, 1, 3, 1, 4, 3, 4] },
  { team: "Mantis Verdes", scores: [1, 4, 5, 1, 3] },
  { team: "Ciervos Celestes", scores: [3, 5, 1, 1] },
  { team: "Pavos Reales Coral", scores: [2, 3, 2, 1, 4, 3] },
  { team: "Orcas Moradas", scores: [2, 3, 3, 4] },
];

function getRanking() {
  for (let i = 0; i < firstRound.length; i++) {
    let puntuacion = firstRound[i].scores;
    let puntuacionTotal = puntuacion.reduce((acc, num) => acc + num);
    firstRound[i].totalScore = puntuacionTotal;
  }
  let ordenado = firstRound.sort((a, b) => b.totalScore - a.totalScore);
  console.log(
    `El mejor equipo es ${ordenado[0].team} con un total de ${ordenado[0].totalScore} puntos`
  );
  console.log(
    `El peor aquipo es ${ordenado[ordenado.length - 1].team} con un total de ${
      ordenado[ordenado.length - 1].totalScore
    } puntos`
  );
}
getRanking();

const fs = require("fs"); // es una dependencia internal, Javascript ya la conoce, no hay que instalarla

const fileContent = fs.readFileSync("./tdf_winners.csv", "utf8");
const lines = fileContent.split("\n");

function getTotalDistance(yearlyData) {
  let total = 0;

  for (let i = 1; i < yearlyData.length; i++) {
    const fields = yearlyData[i].split(",");
    const currentDistance = fields[4];

    if (currentDistance === undefined) {
      continue;
    }

    total += parseInt(current);
  }

  return total;
}

function getTotalDistanceFunctional(yearlyData) {
  const distanceExists = (line) => line[4] !== undefined;

  const total = yearlyData
    .slice(1)
    .map((line) => line.split(","))
    .filter(distanceExists)
    .map((line) => parseInt(line[4]))
    .reduce((curr, acc) => curr + acc, 0);

  return total;
}

getTotalDistanceFunctional(lines);
//console.log(getTotalDistanceFunctional(lines))

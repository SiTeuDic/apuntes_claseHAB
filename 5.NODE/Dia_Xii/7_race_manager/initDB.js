require("dotenv").config();

const { getConnection } = require("./db");
// const { formatDateToDB } = require("./helpers");
// const { random } = require("lodash");

let connection;

async function main() {
  try {
    // Conseguir conexión a la base de datos
    connection = await getConnection();

    // Borrar las tablas si existen
    console.log("Borrando tablas");
    await connection.query("DROP TABLE IF EXISTS RaceParticipant");
    await connection.query("DROP TABLE IF EXISTS Participants");
    await connection.query("DROP TABLE IF EXISTS Races");

    // Crear las tablas de nuevo
    console.log("Creando tablas");

    await connection.query(`
      CREATE TABLE Participants (
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50) NOT NULL,
        surname VARCHAR(50) NOT NULL,
        gender VARCHAR(50) NOT NULL,
        year DATE NOT NULL
      );
    `);

    await connection.query(`
    CREATE TABLE Races (
      id INTEGER PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(50) NOT NULL,
      type VARCHAR(50) NOT NULL,
      category VARCHAR(50) NOT NULL,
      year DATE NOT NULL
    );
  `);

    await connection.query(`
  CREATE TABLE RaceParticipant(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    id_race INT NOT NULL,
     FOREIGN KEY (id_race) REFERENCES Races(id),
    id_participant INT NOT NULL,
     FOREIGN KEY (id_participant) REFERENCES Participants(id),
     paid BOOLEAN DEFAULT FALSE NOT NULL
  );
`);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Todo hecho, liberando conexión");
    if (connection) connection.release();
    process.exit();
  }
}

main();
//tipo nombre categoria id fecha

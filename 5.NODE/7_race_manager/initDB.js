require("dotenv").config();
const bcrypt = require("bcrypt");

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
    await connection.query("DROP TABLE IF EXISTS users");

    // Crear las tablas de nuevo
    console.log("Creando tablas");

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
  CREATE TABLE users(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(120) NOT NULL UNIQUE,
    password VARCHAR(150) NOT NULL,
    role ENUM('admin','user') default 'user',
    name VARCHAR(50) NOT NULL,
    surname VARCHAR(50) NOT NULL,
    gender VARCHAR(50) NOT NULL,
    year DATE NOT NULL
    );
    `);
    await connection.query(`
  CREATE TABLE RaceParticipant(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    id_race INT NOT NULL,
     FOREIGN KEY (id_race) REFERENCES Races(id),
    id_user INT NOT NULL,
     FOREIGN KEY (id_user) REFERENCES users(id),
     paid BOOLEAN DEFAULT FALSE NOT NULL
  );
`);

    const email = "admin@gmail.com";
    const password = "admin1234";
    const cryptPass = await bcrypt.hash(password, 10);

    await connection.query(`INSERT INTO users
          (email,password, role,name, surname, gender, year) 
          VALUES ("${email}","${cryptPass}", 'admin', 'nacho', 'bordera', 'xx', '1996-06-16')`);
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

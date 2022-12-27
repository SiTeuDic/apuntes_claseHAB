"use strict";

const getDB = require("./db");

let connection;

async function main() {
  try {
    connection = await getDB();

    //Crear bbdd
    console.log("CREATING DARABASES");
    await connection.query("CREATE SCHEMA IF NOT EXISTS `web`");
    //Borrar las tablas si existen
    await connection.query("USE web;");
    await connection.query("DROP TABLE IF EXISTS likes");
    await connection.query("DROP TABLE IF EXISTS photos");
    await connection.query("DROP TABLE IF EXISTS users");

    //Crear las tablas
    console.log("CREATING TABLES");

    await connection.query(`
    CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    registration_date DATE NOT NULL,
    avtive BOOLEAN NOT NULL
  );
`);

    await connection.query(`
    CREATE TABLE photos (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    photo_file_name VARCHAR(30) NOT NULL,
    creation_date DATE NOT NULL
  
 );
`);

    await connection.query(`
    CREATE TABLE likes(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    photo_id INT NOT NULL,
    FOREIGN KEY (photo_id) REFERENCES photos(id),
    creation_date DATE NOT NULL

);
`);
    console.log("DONE, RESELE CONNECTION");
  } catch (error) {
    console.error(error);
  } finally {
    if (connection) {
      connection.release();
    }
    process.exit();
  }
}
main();

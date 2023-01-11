const bodyParser = require("body-parser");
const { getConnection } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

let connection;

/* este endpoint es para devolver una lista
con las carreras disponibles
esta lista de carreras tendremos que obtenerla de una bbdd
query para obtener la lista de carreras ==> */
const getRaces = async (req, res) => {
  connection = await getConnection();
  try {
    const races = await connection.query(`SELECT * FROM Races;`);
    console.log(races);
    res.send([races[0]]);
  } catch (error) {
    console.log(error);
    res.status(500).send;
  } finally {
    connection.release();
  }
};
/*  Este endpoint es para crear carreras
 nos deben pasar información para poder crear una carrera
 y guardarla en bbdd. La función donde
 se ejecuta el código necesario se llama "controlador"
 Una carrera puede estar definida por:
    - un nombre
    - un tipo (ciclismo, atletismo)
    - categoria
 req.body es un JSON donde vienen las variables
 que necesitamos para crear la carrera */
const createRace = async (req, res) => {
  let connection = await getConnection();

  const category = req.body.category;
  const type = req.body.type;
  const name = req.body.name;
  const year = req.body.year;
  console.log("POST /races");
  console.log(category, type, name, year);

  if (
    category === undefined ||
    type === undefined ||
    name === undefined ||
    year === undefined
  ) {
    res.status(400).send();
    return;
  }

  // una vez que tenemos las tres variables que nos hacen falta,
  // las metemos en bbdd
  // query para crear una carrera (insert into...)
  try {
    await connection.query(`INSERT INTO Races
      (name, type,category, year) 
      VALUES ("${name}","${type}","${category}","${year}")`);
    res.status(201).send();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  } finally {
    connection.release();
  }
};
/*  este endpoint es para dar de alta un participante en una carrera
 ej.: /races/123/participant
 Obtengo información de la carrera a la que este participante se está apuntando
obtengo información del participante */

const checkPaid = async (req, res) => {
  // espero que en el body me venga un campo paid=false|true
  const raceId = req.body.raceId;
  const id = req.body.id;
  try {
    const races = await connection.query(
      `SELEC * FROM Races WHERE id=${raceId}`
    );

    if (races[0].length === 0) {
      res.status(404).send();
      return;
    }
    const participant = await connection.query(
      `SELEC * FROM Participants WHERE id=${id}`
    );
    if (participant[0].length === 0) {
      res.status(404).send();
      return;
    }

    //query para inscribir a un participante (crear una entrada en la tabla RaceParticipant)

    // TODO: Hacer la query que actualizar el campo paid en la
    // tabla que relaciona Race y Participant
    await connection.query(
      `INSERT INTO RaceParticipant (id_race, id_participant) values (${id_race}, ${id} )`
    );
    res.status(201).send();
  } catch (error) {
    res.status(500).send();
  } finally {
    connection.release();
  }

  res.send(200);
};
const addParticipantToRace = async (req, res) => {
  const raceId = req.params.raceId;
  const id = req.body.id;
  if (id === undefined) {
    res.status(400).send("Missing participant id");
  }
  let connection = await getConnection();
  /* Conectarse a la bbdd para combrobar que race id existe
  si no existe devolverá un array vacío
   */
  try {
    const races = await connection.query(
      `SELECT * FROM Participants WHERE id=${id}`
    );
    if (race[0].length === 0) {
      res.status(404).send();
    }
    await connection.query(
      `INSERT INTO RaceParticipant (id_race, id_participant) VALUES ("${raceId}", "${id}")`
    );
    res.status(201).send();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  } finally {
    connection.release();
  }
};
const listParticipantsFromRace = async (req, res) => {
  const raceId = req.params.raceId;
  let connection = await getConnection();

  try {
    const participants = await connection.query(`
          select Participants.gender, Participants.name, Participants.surname, RaceParticipant.paid
          from RaceParticipant inner join Participants   
          where id_race=${raceId};
      `);
    res.send(participants[0]);
  } catch (err) {
    console.log("ERROR: ", err);
    res.status(500).send();
  } finally {
    connection.release();
  }
};

module.exports = {
  getRaces,
  createRace,
  addParticipantToRace,
  listParticipantsFromRace,
  checkPaid,
};

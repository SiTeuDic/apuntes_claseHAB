const bodyParser = require("body-parser");
const { getConnection } = require("./db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

let connection;

/* este endpoint es para devolver una lista
con las carreras disponibles
esta lista de carreras tendremos que obtenerla de una bbdd
query para obtener la lista de carreras ==> */
const get_races = async (req, res) => {
  let connection = await getConnection();
  try {
    const races = await connection.query(`SELECT * FROM Races;`);
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
const create_race = async (req, res) => {
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
const create_participant = async (req, res) => {
  let connection = await getConnection();
  const name = req.body.name;
  const year = req.body.year;
  const surname = req.body.surname;
  const gender = req.body.gender;

  if (
    name === undefined ||
    year === undefined ||
    surname === undefined ||
    gender === undefined
  ) {
    res.status(400).send();
    return;
  }

  try {
    await connection.query(`INSERT INTO Participants
      (name, surname,gender, year) 
      VALUES ("${name}","${surname}","${gender}","${year}")`);
    res.status(201).send();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  } finally {
    connection.release();
  }
};
// conectarme a la bbdd y comprobar que la carrera raceId existe
//si existe devolverá un array con algona entrada
// <pendiente>

const get_participants = async (req, res) => {
  let connection = await getConnection();
  try {
    const participants = await connection.query(`SELECT * FROM Participants;`);
    res.send([participants[0]]);
  } catch (error) {
    console.log(error);
    res.status(500).send;
  } finally {
    connection.release();
  }
};

const registerUser = async (req, res) => {
  //1.obtener los datos del usuario
  //(username, password, <otros>)
  const email = req.body.email;
  const password = req.body.password;

  //TODO: validar con JOI
  if (email === undefined || password === undefined) {
    //podríamos comprobar que la password tiene tudas lasd¡ restricciones deseadas.
    res.status(400).send();
  }

  //2.cifrar la pass antes de merta en la base de datos
  const cryptPass = await bcrypt.hash(password, 10);

  //3.meter los datos en la bbdd con la contraseña cifrada
  let connection;

  try {
    connection = await getConnection();

    await connection.query(`INSERT INTO users
      (email,password) 
      VALUES ("${email}","${cryptPass}")`);
    res.status(201).send();
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  } finally {
    connection.release();
  }
  //4.cerrar la conexion
  res.send();
};

const loginUser = async (req, res) => {
  //1.obtener los parámatros del body(email, pass)
  const email = req.body.email;
  const password = req.body.password;
  //2.comprobar  si los datos son correctos
  //select * from users where email = ${email}
  let connection;

  try {
    connection = await getConnection();

    const [user] = await connection.query(
      `select * from users where email = "${email}"`
    );
    //comporbar que el email esta en la bbdd
    if (user.length === 0) {
      res.status(403).send("Unknown email...");
      return;
    }

    const match = await bcrypt.compare(password, user[0].password);
    //comparar la password que me pasan es correcta
    if (!match) {
      res.status(403).send("Incorrect password...");
      return;
    }
    //3. generar un token
    const jsonToken = {
      email: email,
      rol: "user",
    };
    const token = jwt.sign(jsonToken, process.env.JWT_SECRET);

    res.status(201).send(token);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  } finally {
    connection.release();
  }
};
const check_paid = async (req, res) => {
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

module.exports = {
  get_races,
  create_race,
  create_participant,
  check_paid,
  get_participants,
  registerUser,
  loginUser,
};

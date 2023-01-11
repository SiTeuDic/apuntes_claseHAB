const { getConnection } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const getParticipants = async (req, res) => {
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

const createParticipant = async (req, res) => {
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
  const { email } = req.body;
  const { password } = req.body;
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
    //es un json libre se codifica y despues de decodifica es interesante poner
    //el rol que cumple el usiario

    const jsonToken = {
      email: email,
      role: user[0].role,
    };
    console.log("[LOGIN][ERROR]", jsonToken);
    const token = jwt.sign(jsonToken, process.env.JWT_SECRET);

    res.json(token).send();
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  } finally {
    connection.release();
  }
};

module.exports = {
  createParticipant,
  getParticipants,
  loginUser,
  registerUser,
};

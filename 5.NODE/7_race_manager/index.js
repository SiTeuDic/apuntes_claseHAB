const express = require("express");
const bodyParser = require("body-parser");
const controler = require("./controlles");
const app = express();
const jwt = require("jsonwebtoken");

// Vamos a configurar un middleware para leer fácilmente
// las variables del body, que las usaremos en los endpoints
// de tipo POST

//console.log("Entorno: ", process.env);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const isAuthenticated = (req, res, next) => {
  // la responsabilidad de esta middelware es comporbar
  //que el usurio esta registrado,
  //¿Quien es el usuario?
  const token = req.headers.authorization;
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    res.status(401).send();
    return;
  }
};

//enpoin para crear usuario
app.post("/login", controler.loginUser);
app.post("/register", controler.registerUser);
app.get("/races", controler.get_races);
app.get("/participants", controler.get_participants);
app.post("/participants", controler.create_participant);
app.post("/races", isAuthenticated, controler.create_race);
// app.post("/races/:raceId/participant", controler.create_participant);
// crear un endpoint para indicar que el participante ha pagado
app.put("/races/:raceId/participant/:participantId/paid", controler.check_paid);

app.get("/", function (req, res) {
  console.log("estoy en la función controllador de GET /");
  res.send("Hello World");
});

app.listen(8888);

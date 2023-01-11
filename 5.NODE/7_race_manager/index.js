const express = require("express");
const bodyParser = require("body-parser");
const {
  createParticipant,
  getParticipants,
  loginUser,
  registerUser,
} = require("./controllers/participants");
const {
  getRaces,
  createRace,
  checkPaid,
  addParticipantToRace,
} = require("./controllers/race");
const { isAuthenticated, isAdmin } = require("./middlewere/permisions");
const app = express();

// Vamos a configurar un middleware para leer fácilmente
// las variables del body, que las usaremos en los endpoints
// de tipo POST

//console.log("Entorno: ", process.env);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//enpoin para crear usuario
app.post("/login", loginUser);
app.post("/register", registerUser);
app.get("/participants", getParticipants);
app.post("/participants", isAuthenticated, createParticipant);
app.get("/races", getRaces);
app.post("/races", isAuthenticated, isAdmin, createRace);
//endpoint para inscribir a un usuario en una carrera
//hace falta que quien haga la peticion sea el mismo usuario
app.post(
  "/races/:raceId/participant",
  isAuthenticated,
  /* isSameUser, */ addParticipantToRace
);
// crear un endpoint para indicar que el participante ha pagado
app.put(
  "/races/:raceId/participant/:participantId/paid",
  isAuthenticated,
  /* isAdmin, */ checkPaid
);

app.get("/", function (req, res) {
  console.log("estoy en la función controllador de GET /");
  res.send("Hello World");
});

const port = 6666;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

const express = require("express");
const bodyParser = require("body-parser");
const controler = require("./controlles");
const app = express();

// Vamos a configurar un middleware para leer fácilmente
// las variables del body, que las usaremos en los endpoints
// de tipo POST

//console.log("Entorno: ", process.env);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log("Este es un middleware que se ejecuta para todos los endpoints");

  next();
});

app.get("/races", controler.get_races);
app.get("/participants", controler.get_participants);
app.post("/participants", controler.create_participant);
app.post("/races", controler.create_race);
// app.post("/races/:raceId/participant", controler.create_participant);
// crear un endpoint para indicar que el participante ha pagado
app.put("/races/:raceId/participant/:participantId/paid", controler.check_paid);

app.get("/", function (req, res) {
  console.log("estoy en la función controllador de GET /");
  res.send("Hello World");
});

app.listen(8888);

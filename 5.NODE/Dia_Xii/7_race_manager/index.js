const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Vamos a configurar un middleware para leer fácilmente
// las variables del body, que las usaremos en los endpoints
// de tipo POST

console.log("Entorno: ", process.env);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log("Este es un middleware que se ejecuta para todos los endpoints");

  next();
});

app.get("/races", async function (req, res) {
  // este endpoint es para devolver una lista
  // con las carreras disponibles

  // esta lista de carreras tendremos que obtenerla de una bbdd

  // TODO: hacer query para obtener la lista de carreras
  await connection.query(`SELECT * FROM Races`);
  res.send(["carrera infantil 100 metros", "carrera popular 10km"]);
});

app.post("/races", async function (req, res) {
  // Este endpoint es para crear carreras
  // nos deben pasar información para poder crear una carrera
  // y guardarla en bbdd. La función donde
  // se ejecuta el código necesario se llama "controlador"

  // Una carrera puede estar definida por:
  //    - un nombre
  //    - un tipo (ciclismo, atletismo)
  //    - categoria

  // req.body es un JSON donde vienen las variables
  // que necesitamos para crear la carrera
  const category = req.body.category;
  const type = req.body.type;
  const name = req.body.name;

  console.log("POST /races");

  if (category === undefined || type === undefined || name === undefined) {
    res.status(400).send();
    return;
  }

  // una vez que tenemos las tres variables que nos hacen falta,
  // las metemos en bbdd
  // TODO: query para crear una carrera (insert into...)
  await connection.query(`INSERT INTO Races
  (name, type,category, year) 
  VALUES ("carrra popular", "sub-16", "trail montaña", "2020/05/12" )`);

  res.send("");
});

app.post("/races/:raceId/participant", function (req, res) {
  // este endpoint es para dar de alta un participante en una carrera
  // ej.: /races/123/participant
  // Obtengo información de la carrera a la que este participante se está apuntando
  const raceId = req.params.raceId;

  // obtengo información del participante
  const name = req.body.name;
  const year = req.body.year;
  const id = req.body.id;

  // comprobamos que los parámetros del body son válidos
  if (name === undefined || year === undefined || id === undefined) {
    res.status(400).send();
    return;
  }

  // conectarme a la bbdd y comprobar que la carrera raceId existe
  // <pendiente>
  let exists = true; // variable fake -> está pendiente obtenerlo de bbdd

  if (!exists) {
    res.status(404).send();
    return;
  }

  // Código para insertar en la bbdd
  // TODO: query para inscribir a un participante (crear una entrada en la tabla RaceParticipant)

  res.send("");
});

// crear un endpoint para indicar que el participante ha pagado
app.put("/races/:raceId/participant/:participantId/paid", (req, res) => {
  // espero que en el body me venga un campo paid=false|true
  const paid = req.body.paid;

  // TODO: Hacer la query que actualizar el campo paid en la
  // tabla que relaciona Race y Participant

  res.send(200);
});

app.get("/", function (req, res) {
  console.log("estoy en la función controllador de GET /");
  res.send("Hello World");
});

app.listen(5500);

const express = require("express");
const app = express();

//middleware
app.use(function (req, res, next) {
  res.header();
});

//Definir los distintos endpoints
//cada endpoint define una tura y un controlador
app.get("/docs/api", function (req, res) {
  res.send("documentación de la api");
});
app.get("/docs", function (req, res) {
  const { type } = req.query;

  console.log(req.query);
  //http://localhost:3000/docs?type=user
  //http://localhost:3000/docs?type=tech

  if (type === "user") {
    res.send("USUARIO");
  } else if (type == "tech") {
    res.send("documentación tech");
  } else {
    res.status(404).send();
  }
  //tambien se podria degfiner de la siguiente forma, no es mejor ni mero solo es decision del equipo de trabajo
  /*
  app.get("/docs/user", function (req, res) {
  res.send(respuesta);
});

  */
});
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);

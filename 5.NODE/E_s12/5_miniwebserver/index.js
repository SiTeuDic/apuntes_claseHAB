const express = require("express");
const cors = require("cors");
const app = express();

//TODO: try cath en todas las funciones
const get_time = (req, res) => {
  const time = new Date();
  const hourMin = time.getHours() + ":" + time.getMinutes();
  res.json(`La hora actual es: ${hourMin}`);
};

const get_directory = (req, res) => {
  const directory = process.argv[1];
  res.json(`La ruta del codigo es: ${directory}`);
};

// middleware para CORS
app.use(cors());

app.use((req, res, next) => {
  console.log(`URL: ${req.url}`);
  console.log(`METHOD: ${req.method}`);
  next();
});



//throw new Error(...) en los podibles errores de los controladores, que que se encarga de enviar el error es el midelware que acabamos de crear
//el controlador tiene nqque tener un try catch para poder recoger el error y mandarlo con la llamada a la siguiente funcion next(err)
//el midelware tiene que estas despues de las controladores
/*const laFuncion = (req, res, next) => {
    try {
        if(... = undefined)
        const error = thow ner Error('el error')
        error.htmlStatus = (codigo del error) 404
    } catch(err) {
        next(err)
}
};
*/


// definir los distintos endpoints
// cada endpoint define una ruta y un controlador

app.get("/time", get_time);
app.get("/directory", get_directory);
app.get("/error-forzado", (req, res, next) => {
  return next(new Error("Este es un error generado intencionadamente"));
});

app.use((error, req, res, next)=>{
  console.log(error.message);
  res.status(500).send("Algo salió mal")
})

app.use(function( req, res, next) {
  res.status(404).send('Page not found');
});
app.listen(8888);

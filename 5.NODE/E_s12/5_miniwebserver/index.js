const express = require('express')
const cors = require('cors')

const app = express()

const controllers = require('./controllers')

// middleware para CORS
app.use(cors())

app.use((req, res, next) => {
    
    console.log(`URL: ${req.url}`);
    console.log(`METHOD: ${req.method}`);
    next()
})
const error = (err, req, res, next) => {
    console.error(err);
     res.status(404).send('Page not found');
  };

// definir los distintos endpoints
// cada endpoint define una ruta y un controlador
app.get('/time',error, controllers.get_time)
app.get('/directory',error , controllers.get_directory)
app.get('/error-forzado', (req, res, next) => {
    return next(new Error('Este es un error generado intencionadamente'))
});





app.listen(8888)

const jwt = require("jsonwebtoken");
require("dotenv").config();

const isAuthenticated = (req, res, next) => {
  // la responsabilidad de esta middelware es comporbar
  //que el usurio esta registrado,
  //¿Quien es el usuario?
  const token = req.headers.authorization;

  try {
    /*    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    //creo el atributo de rol en req para poder mandarselo a los siguientes middleware
    //lo puedan leres en req.rol
    req.role = decodedToken.role;
    
    next(); */
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log("[ISAUTHENTICATE][ERROR]", decodedToken);

    // creo el atributo "role" en "req" para que los siguiente middlewares
    // lo reciban. Ej.: el middleware isAdmin puede leer el role en req.role
    req.role = decodedToken.role;

    console.log(`[isAuthenticated] ${req} authenticated ok`);
    next();
  } catch (error) {
    res.status(401).send();
    return;
  }
};
const isAdmin = async (req, res, next) => {
  console.log("[ISaDMIN][ERROR]", req.role);
  if (req.role === "admin") {
    next();
  } else {
    res.status(401).send();
  }
};
const isSameUser = async (req, res, next) => {};
module.exports = {
  isAuthenticated,
  isAdmin,
};

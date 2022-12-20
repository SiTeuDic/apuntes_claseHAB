const fs = require("fs/promises");

//funcion ruta existe
async function pathExists(path) {
  try {
    await fs.access(path);
  } catch (error) {
    throw new Error(`La ruta ${path} no existe`);
  }
}

//funcion que crea una ruta en dico si no existe
async function createPathIfNotExists(path) {
  try {
    await fs.access(path);
  } catch (error) {
    await fs.mkdir(path);
  }
}

module.exports = {
  pathExists,
  createPathIfNotExists,
};

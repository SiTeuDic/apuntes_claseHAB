//tranformar una imagen en 200px (miniatura), 500px(medio), tamaño medio en blanco y negro
const path = require("path");
const fs = require("fs/promises");
const sharp = require("sharp");
const [ image ] = process.argv.slice(2)

console.log("IMAGE PROCESSOR")
//TODO: añadir validacion de que es una imagen
//TODO: crear una carpeta son se almacenen las imagenes 
// si no existe 
const imageTransform = async (image) =>{
try {
    console.log("WORKING ON IT...");
    const inputPath = path.resolve(__dirname, image )
    const imagePath = await fs.readdir(__dirname)
    
    const image200px = await sharp(inputPath).resize(200);
     const image500px = await sharp(inputPath).resize(500);
     const imageBnW =  await sharp(inputPath).toColourspace("b-w");
     await image200px.toFile(path.resolve(__dirname, `processed200px_${image}`));
     await image500px.toFile(path.resolve(__dirname, `processed500px_${image}`));
     await imageBnW.toFile(path.resolve(__dirname, `processedBnW_${image}`));
    console.log("DONE");
} catch (error) {
    console.log(`ERROR: ${error}`);
}

}

imageTransform(image)
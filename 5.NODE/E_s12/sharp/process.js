const minimist = require("minimist");
const args = minimist(process.argv.slice(2));
const chalk = require("chalk");
const path = require("path");
const fs = require("fs/promises");
const { pathExists, createPathIfNotExists } = require("./helpers");
const sharp = require("sharp");

console.log(chalk.blue(`Welcome to Image Process v1.0 `));
console.log();

const processImages = async ({ inputDir, outputDir, watermark, resize }) => {
  try {
    const inputPath = path.resolve(__dirname, inputDir);
    const outputPath = path.resolve(__dirname, outputDir);
    let watermarkPath;
    //inputDir existe
    await pathExists(inputPath);
    //crear si no existe outputdir
    await createPathIfNotExists(outputPath);
    //si existe watermark comprobar que el archivo watermark exixte
    if (watermark) {
      watermark = path.resolve(__dirname, watermark);
    }
    if (watermarkPath) {
      await pathExists(watermarkPath);
    }
    //leer los conteniodos de inputdir
    const inputFiles = await fs.readdir(inputPath);
    //Quedarme solo con los archivos que sean imagenes
    const imageFiles = inputFiles.filter((file) => {
      const validExtensions = [".jpg", ".jpeg", ".gift", ".png", ".webp"];
      return validExtensions.includes(path.extname(file).toLowerCase());
    });
    //recorrer tada la lista de archivos y :
    for (const imageFile of imageFiles) {
      console.log(chalk.blue(`Procesando imagen: ${imageFile}`));
      const imagePath = path.resolve(inputPath, imageFile);
      const image = sharp(imagePath);
      //--si existe resize redimensionar cada una de las imagenes
      if (resize) {
        image.resize(resize);
      }
      //guardar las imagenes con otro nobre en ouputPath
      await image.toFile(path.resolve(outputPath, `processed_${imageFile}`));
      //-- si existe watermark ponersela
      if (watermark) {
        image.composite([
          {
            input: watermarkPath,
            top: 20,
            left: 20,
          },
        ]);
      }
    }
  } catch (error) {
    console.error(chalk.red(error.message));
    process.exit(1);
  }
};

const { inputDir, outputDir, watermark, resize } = args;

if (!inputDir || !outputDir) {
  console.error(
    chalk.red("Los argumentos --inputDir y --ouputDir son obligatorios")
  );
  process.exit(1);
}
if (!watermark && !resize) {
  console.error(
    chalk.red("Es necesario que exista un argumento --watermark o --resize")
  );
  process.exit(1);
}

console.log(chalk.greenBright("Empezamos a procesar las imagenes..."));
console.log();

processImages({ inputDir, outputDir, watermark, resize });

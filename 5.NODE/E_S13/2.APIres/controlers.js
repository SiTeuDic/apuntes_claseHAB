const { compileFunction } = require("vm");
const fs = require("fs").promises;
const joi = require("@hapi/joi");
//Me hubiera gustado poder formatear la forma de formatear la fecha de una forma más intuitiva,
// el formato MM/DD/YYYY no me parece nada intuitivo, lo único que se me ha ocurrido es pasar en
// el error el formato esperado por joi,un saludo.
const getdata = async () => {
  try {
    const data = JSON.parse(
      await fs.readFile("data.json", { encoding: "utf8" })
    );
    return data;
  } catch (error) {
    return [];
  }
};
const addEvent = async (req, res) => {
  try {
    const event = req.body.event;
    const date = req.body.date;
    const eventObj = { date, text: event };
    const data = await getdata();

    const schema = joi.object().keys({
      event: joi.string().required(),
      date: joi.date().required(),
    });
    const validation = schema.validate(req.body);

    if (validation.error) {
      throw new Error(validation.error.message);
      // res.status(400).send(validation.error.message);
      return;
    }

    data.push(eventObj);
    await fs.writeFile("data.json", JSON.stringify(data));

    res.status(201).send("Evento creado con exito.");
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .send(`${error.message}, event must be string, date format MM/DD/YYY`);
  }
};

const getEvents = async (req, res) => {
  try {
    const data = await fs.readFile("data.json", { encoding: "utf8" });
    if (!data?.length) {
      res.send("No hay eventos guardados");
      return;
    }

    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getEvents,
  addEvent,
};

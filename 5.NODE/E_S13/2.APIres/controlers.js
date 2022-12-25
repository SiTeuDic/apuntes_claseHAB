const { text } = require("body-parser");
const { compileFunction } = require("vm");
const fs = require("fs").promises;

const addEvent = async (req, res) => {
  const event = req.body.event;
  const date = req.body.date;
  const eventObj = { date, text: event };
  const data = JSON.parse(await fs.readFile("data.json", { encoding: "utf8" }));

  try {
    if (event === undefined || date === undefined) {
      res.status(400).send();
      return;
    }
    data.push(eventObj);
    res.status(201).send("Evento creado con exito.");
    dataStr = JSON.stringify(data);
    await fs.writeFile("data.json", JSON.stringify(data));
  } catch (error) {
    console.log(error);
    res.status(500).send();
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
    console.log(error);
    res.status(500).send();
  }
};

module.exports = {
  getEvents,
  addEvent,
};

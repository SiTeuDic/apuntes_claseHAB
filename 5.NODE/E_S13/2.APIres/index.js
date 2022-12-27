const express = require("express");
const cors = require("cors");
const app = express();
const controlers = require("./controlers");
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/list", controlers.getEvents);
app.post("/new", controlers.addEvent);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

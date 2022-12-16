/**
 * Aplicación que permita gestionar una lista de tareas
 *
 * Uso:
 *     node index.js --add "descripción de la tarea"
 *     node index.js --done <id de la tarea>
 *     node index.js --list
 *      --remove <id de la tarea>
 */

const { Command } = require("commander");
const fs = require("fs").promises;

const program = new Command();

const getLastId = async () => {
  const tasks = await fs.readFile("./tasks.txt", "utf8");
  const lastLine = tasks
    .split("\n")
    .filter((line) => line.trim().length !== 0)
    .slice(-1);

  if (lastLine.length === 0) {
    return 0;
  }
  const lastId = parseInt(lastLine[0].split(" ")[0]);

  return lastId;
};

const markAsDone = async (taskId) => {
  const tasksInText = await fs.readFile("./tasks.txt", "utf8");

  const listOfTasks = tasksInText.split("\n").map((line) => line.split(" "));

  for (let task of listOfTasks) {
    if (task[0] === taskId) {
      task[1] = "DONE";
      break;
    }
  }

  updatedTasks = listOfTasks.map((line) => line.join(" "));

  fs.writeFile("./tasks.txt", updatedTasks.join("\n"));
};
const listTasks = async () => {
  const tasks = await fs.readFile("./tasks.txt", "utf8");

  console.log(tasks);
};
const addTask = async (taskText) => {
  //<id>< estate>< text>
  const lastId = await getLastId();
  const taskLine = `${lastId + 1} PENDING ${taskText}`;
  await fs.appendFile("./tasks.txt", taskLine + "\n");
};

program
  .option("--add <char>", "descripccíon de la tarea")
  .option("--done <number>", "marcar una tarea como hecha")
  .option("--list", "listar las tareas");
program.parse(process.argv);

const option = program.opts();

if (option.add !== undefined) {
  addTask(option.add);
} else if (option.done !== undefined) {
  markAsDone(option.done);
} else if (option.list !== undefined) {
  listTasks();
}

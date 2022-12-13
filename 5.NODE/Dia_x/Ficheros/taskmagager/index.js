const { command, program } = require("commander");
const fs = require("fs").promises;
const progam = new command();

const addTask = async (taskText) => {
  //<id>< estate>< text>
  const taskLine = `123 PENDING ${taskText}`;
  await fs.appendFile("./tasks.txt", taskLine + "\n");
};

program
  .option("--add <char>", "descripccíon de la tarea")
  .option("--done <number>", "mascar una tarea como hecha")
  .option("--add", "listar las tareas");
program.parse(process.argv);

const option = progam.opts();

if (option.add !== undefined) {
  addTask(option.add);
}

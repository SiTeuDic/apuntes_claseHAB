const fs = require('fs').promises

const listTasks = async () => {
  const tasks = await fs.readFile('./tasks.txt', 'utf8')

  return tasks
    .split("\r\n")
    .filter(line => line.length !== 0)
  };

  const addTask = async (taskText) => {
    //<id>< estate>< text>
    const lastId = await getLastId();
    const taskLine = `${lastId + 1} PENDING ${taskText}`;
    await fs.appendFile("./tasks.txt", taskLine + "\n");
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
  

  module.exports = {
    getLastId,
    markAsDone,
    addTask,
    listTasks
  }
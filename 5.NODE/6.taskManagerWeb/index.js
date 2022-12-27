const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')

const taskManager = require('./utils/index')

const app = express()

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

/*
--Listar tareas pendientes ✔️
--Añadir tareas
--Marcar como hechas
--Borrar tareas 
*/ 
const getTasks = async(req, res) =>{
    try {
        const tasks = await taskManager.listTasks()
        res.json(tasks)
        
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error")
    }

}

const newTask = async(req, res) => {
    const { text } = req.body
    if (text === undefined) {
        res.status(400).send("Missing mandatory argument") 
        console.log(text);
        return
    }
    if (text.length < 3) {
        res.status(400).send('Invalid text length')
        return
    }
    await taskManager.addTask(text)
}

app.get("/tasks", getTasks)
app.post("/tasks", newTask)

app.listen(3000)
//TODO: hay que hacer la seccion de ayuda y en cada funcion meter un trycatch para controlar los posible errores
//ERRORES fasltan data | formato de fecha invalido ...
const { Command } = require("commander");
const minimist = require("minimist");
const fs = require("fs");
const program = new Command();
const  argv = require('minimist')(process.argv.slice(2))
const path = require("path")

program
    .option("--date <char>", "Día del evento")
    .option("--event <char>", "Descripción del evento")
    .option("--listEvents", "Listar los eventos");
program.parse(process.argv);
const option = program.opts();
const dataPath = path.resolve(__dirname,"event.json" )

console.log(dataPath);
function getdata(){
    const exists = fs.existsSync(dataPath)
    if (exists) {
        const data = fs.readFileSync("event.json" )
        return JSON.parse(data)
    }else{
        return []
    }
}


const addEvent  =   ( ) => {
const {date, event} = argv
     let newEvent = {date, text: event} ;
     console.log(newEvent);
const data = getdata()
console.log(data);
     data.push(newEvent)

    // let newEventText = JSON.parse(newEvent) 
    // console.log(newEvent); 
     fs.writeFileSync("./event.json", JSON.stringify(data));
 
 }
//todo: las fechas tiene que salir ordenadoas por
const listEvents =  () => {
    const data =  fs.readFileSync("./event.json", "utf8");
    const events = JSON.parse(data)
    for (const event of events) {
        console.log(`📆 ${ event.date}: ${event.text}`);
    }

}

if(option.date !== undefined && option.event !== undefined){
    addEvent(option.date, option.event )
}
if(option.listEvents !== undefined){
    listEvents();
}

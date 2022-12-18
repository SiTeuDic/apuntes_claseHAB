/*
llamada = --date 2022/12/25 --event "Día de navidad"
guardar los datos en una archivo json
listar los eventos
📆 2023/01/01: Año nuevo
*/
const { Command } = require("commander");
const fs = require("fs");
const program = new Command();

program
    .option("--date <char>", "Día del evento")
    .option("--event <char>", "Descripción del evento")
    .option("--listEvents", "Listar los eventos");
program.parse(process.argv);
const option = program.opts();





let newEvent =  {
    "date": option.date,
    "event": option.event
}

console.log(newEvent);



//TODO: Buscar como formatear bien un JSON 
const addEvent  =   (newEvent) => {
 try {
    const eventsdata =  fs.readFileSync("./event.json", "utf8");
    const event = JSON.parse(eventsdata)
    console.log(event);
    
    const eventospasadosastring = JSON.stringify(event)
     eventsdata.push(newEvent)
   console.log(eventsdata);
    

    
// //   fs.writeFileSyinc("./event.json", eventsdata, "utf-8");
 } catch (err) {
    console.log(err);

    
 }
}





//TODO: Formatear la salida (pendiente de un formateo correcto de la entrada)
const listEvents =  () => {
    const data =  fs.readFile("./event.json", "utf8");
    const events = JSON.parse(data)
  console.log( events);
 // console.log(`📆 ${ events.events.date}: ${events.events.event}`);
}







if(option.date !== undefined && option.event !== undefined){
    addEvent(option.date, option.event )
    console.log(option.date, option.event);
}
if(option.listEvents !== undefined){
    listEvents();
}

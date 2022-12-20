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










//leer el documeto si contiene algo, meterlo en un array, hacerle push del nuevo objeto y volver ha escribirlo
//TODO: Buscar como formatear bien un JSON 

const addEvent  =   () => {

    let newEvent =  {
        "date": option.date,
        "event": option.event
        }
    const eventStr = JSON.stringify(newEvent)
    const data =  fs.readFileSync("./event.json", "utf8");
 

     if (data) {
        //  const events = JSON.parse(data)
        //  console.log(`Dara ahora es; ${events}`);
         //let dataStr = JSON.stringify(data) "{\"date\":\"2022/12/25\",\"event\":\"Día de Navidad\"}"
        
         let pataca = [data]
         console.log(pataca);
         pataca.push(eventStr)
         let patacaStr = JSON.stringify(pataca)
    //     console.log(dataStr);
        fs.wFileSync("./event.json", patacaStr, "utf-8");
     }else{
         fs.writeFileSync("./event.json", eventStr, "utf-8");
    //     console.log(eventStr);
           
  }
 }

const listEvents =  () => {
    const data =  fs.readFileSync("./event.json", "utf8");
    const events = JSON.parse(data)
    for (const event of events) {
        console.log(`📆 ${ event.date}: ${event.event}`);
    }

}







if(option.date !== undefined && option.event !== undefined){
    addEvent(option.date, option.event )
    console.log(option.date, option.event);
}
if(option.listEvents !== undefined){
    listEvents();
}

const get_docs_by_type = (req, res) => {
    // localhost:8888/docs/tech
    // localhost:8888/docs/user
    const { type } = req.params
    const { length } = req.query

    if (type === 'user') {
        let datos = []

        for (let i=0; i< length; i++) {
            datos.push(`[${i}] documentación usuario`)
        }
        res.json(datos)
    } else if (type === 'tech') {
        let datos = []

        for (let i=0; i< length; i++) {
            datos.push(`[${i}] documentación técnica`)
        }
        res.json(datos)
    } else {
        res.status(404).send('No se encuentra la página solicitada')
    }
}

const get_time = (req, res) => {
    const time = new Date()
    const hourMin = time.getHours() + ":"  + time.getMinutes()
    res.json(`La hora actual es: ${hourMin}`)
}



const get_directory = (req, res) => {
    const directory = process.argv[1]
    res.json(`La ruta del codigo es: ${directory}`)
}

module.exports = {
    get_docs_by_type,
    get_time,
    get_directory,
    
}
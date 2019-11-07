const Registro = require('../models/registro')

//GET ALL
const getAll = (req, res) =>{
     Registro.find((err, registros) => {
         if(err) return res.status(500).json({mensaje: "Error"})
         return res.status(200).json(registros)
     })
    
}

//GET ONE BY ID
const getOneById = (req, res) =>{
    Registro.findById(req.params.id, (err, registros) =>{
        if(err) return res.status(500).json({mensaje: "Error"})
        return res.status(200).json(registros)
    })
}

//POST
const insert = async (req, res) =>{
    let registro = new Registro({
        carnet: req.body.carnet,
        schedule: req.body.schedule,
        isLate: req.body.isLate
    })
    await registro.save()
    res.status(201).json({
        mensaje: "hola"
    })
    
}

//PUT
const update = (req, res) =>{
    
}

//DELETE
const erase = (req, res) =>{
    
}

module.exports = {
    getAll,
    getOneById,
    insert,
    update,
    erase
}
const Mongoose = require('mongoose')

const RegistroSchema = Mongoose.Schema({
    carnet: {
        type: String,
        required: true
    },
    schedule: String,
    isLate: Boolean
})


module.exports = Mongoose.model('registro', RegistroSchema)

const  mongoose  = require('mongoose')

let database = 'LaboJueves'
let host = 'localhost'
let port = '27017'
let uri = `mongodb://${host}:${port}/${database}`

const connect = ()=>{
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => {
        console.log('Db connected')
    })
    .catch( (err) => {
        console.log(err)
    })
}

mongoose.Promise = global.Promise

module.exports = { connect }


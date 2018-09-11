const mysqlConnection = require('./connection')
const usuarioSetup = require('./models/usuario')

function setup(){
    const db = mysqlConnection()

    usuarioSetup(db)
}

setup()
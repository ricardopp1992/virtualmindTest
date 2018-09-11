const mysql = require('mysql')
let pool

module.exports = function connection(){
    if(!pool){
        pool =  mysql.createPool({
            host : 'localhost',
            user : 'ricardopp',
            password : '19881607',
            database : 'database-test'
        })
    }

    return pool
}


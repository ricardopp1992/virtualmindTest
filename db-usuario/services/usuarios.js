const mysqlConnection = require('../connection')
const db = mysqlConnection()

function UsersServices(){
    
    function selectUser(handleData){
        db.getConnection((err, connection) => {
            connection.query('SELECT * FROM users', (err, rows, field) => {
                if(!err){
                    handleData(null, rows)
                }else {
                    console.log('error')

                }
            })
        })
    }

    function selectSingleUser(id, handleDataa){
        db.getConnection((err, connection) => {
            connection.query(`SELECT * FROM users WHERE id=${id}`, (err, rows) => {
                if(!err){
                    handleDataa(rows)
                }else{
                    console.log(err)
                }
            })
        })
    }

    function createUser(newUser){
        db.getConnection((err, connection) => {
            connection.query(`INSERT INTO users (nombre, apellido, contraseña)`+
                    `VALUES ("${newUser.nombre}", "${newUser.apellido}", "${newUser.contraseña}")`, (err, res) => {
                        if(err) throw err
                        
                        console.log('a record inserted' + res.affectedRows)
            })
        })   
    }

    function updateUserById(user){
        db.getConnection((err, connection) => {
            connection.query(`UPDATE users SET nombre="${user.nombre}", apellido="${user.apellido}" WHERE id=`+ user.id, (err, res) => {
                if(err) throw err
                console.log(res)
            })
        })
    }

    return {
        selectUser,
        selectSingleUser,
        createUser,
        updateUserById
    }
}

module.exports = UsersServices


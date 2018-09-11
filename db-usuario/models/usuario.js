
module.exports = function setupUsuario(db){
    db.getConnection((err, connection) => {
        connection.query('CREATE TABLE IF NOT EXISTS users (id int AUTO_INCREMENT, nombre varchar(25), apellido varchar(25), contraseña varchar(25), PRIMARY KEY (id))', (err, res) => {
            if(err) throw err
            
            if(res.warningCount){
                console.log('Table \"users\" already exists')
            }else{
                console.log('users has been created successfully')
            }

        connection.release()
        })
    })
}

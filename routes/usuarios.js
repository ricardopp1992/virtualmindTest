const express = require('express')
const routes = express.Router()
const Users = require('../db-usuario/services/usuarios')

routes.get('/usuario', (req, res) => {
    res.render('../views/usuario.pug', {title : 'ABM de usuario'})

})

routes.get('/usuario/id/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    Users().selectSingleUser(id, (data) => {
        res.send(data)
    })
})

routes.post('/usuario/create', (req, res) => {
    nombre = req.body.name
    apellido = req.body.lastname
    contraseña = req.body.password
    
    Users().createUser({nombre, apellido, contraseña})
})

routes.post('/usuario/update/:id', (req, res) => {
    const user = {
        nombre : req.body.name,
        apellido : req.body.lastname,
        id : req.params.id
    }

    Users().updateUserById(user)
    
})

module.exports = routes
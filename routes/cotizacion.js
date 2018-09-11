const express = require('express')
const cotizacion = express.Router()

cotizacion.get('/dolar/quote', (req, res) => {
    const actualDate = new Date().toDateString().substring(3)
    res.render('../views/index', {title : 'la cotización del día '+ actualDate})
    

})


cotizacion.get(['/pesos/quote', '/real/quote'] , (req, res) => {
    res.status(501).send('not implemented')

})

module.exports = cotizacion
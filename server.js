const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// settin
app.set('port', 8000)
app.set('view engine', 'pug')
app.use(express.static('public'))

// middleware
app.use(express.json())
// app.use(express.urlencoded({extended : true}))

//Routes
app.use(require('./routes/cotizacion'))
app.use(require('./routes/usuarios'))

// Starting server
app.listen(app.get('port'), () => {
    console.log('listen on port ' + app.get('port'))
})
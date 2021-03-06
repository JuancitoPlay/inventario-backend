const express = require('express')
const app = express()
const usuario = require('./routers/usuario')
const proveedor = require('./routers/proveedor')
const almacen = require('./routers/almacen')
const articulo = require('./routers/articulo')
const inventario = require('./routers/inventario')
const log = require('./routers/log')
const menu = require('./routers/menu')
const token = require('./routers/token')
const movimiento = require('./routers/movimiento')
const bodyParser = require('body-parser')
const rutasCliente = require('./clientRoutes')
const http = require('http')
const cors = require('cors')
const bearerToken = require('express-bearer-token')
const Database = require('../../database')
const db = new Database()
db.setup()
app.set('view engine', 'pug')
app.use(cors())

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bearerToken())

app.use(bodyParser.json())
app.use('/api/usuario', usuario)
app.use('/api/proveedor', proveedor)
app.use('/api/almacen', almacen)
app.use('/api/articulo', articulo)
app.use('/api/inventario', inventario)
app.use('/api/token', token)
app.use('/api/menu', menu)
app.use('/api/movimiento', movimiento)
app.use('/api/log', log)
app.get(rutasCliente, (req, res) => {
  res.render('index')
})

module.exports = http.createServer(app)

const express = require('express')
const router = express.Router()
const Database = require('../../../database')
const db = new Database()

router.post('/crear', (req, res) => {
  db.crearAlmacen(req.body.almacen)
  .then(almacen => {
    res.status(201)
    .json(almacen.get({plain: true}))
  })
  .catch(e => {
    res.status(500).json(e)
  })
})

router.get('/buscar', (req, res) => {
  db.buscarAlmacen(req.query.almacen)
  .then(almacen => res.status(200).json(almacen.get({plain: true})))
  .catch(error => res.status(500).json(error))
})

router.put('/deshabilitar', (req, res) => {
  db.deshabilitarAlmacen(req.body.almacen)
  .then(almacen => {
    res.status(200).json(almacen.get({plain: true}))
  })
  .catch(error => {
    res.status(500).json(error)
  })
})

router.put('/modificar', (req, res) => {
  db.modificarAlmacen(req.body.almacenViejo, req.body.almacenNuevo)
  .then(almacen => {
    res.status(200).json(almacen.get({plain: true}))
  })
  .catch(error => {
    res.status(500).json(error)
  })
})

router.get('/buscaralmacenes', (req, res) => {
  db.buscarAlmacenes(req.query.almacenes)
  .then(almacenes => res.status(200).json(almacenes))
  .catch(error => {
    console.log(error)
    res.status(500).json(error)
  })
})

module.exports = router

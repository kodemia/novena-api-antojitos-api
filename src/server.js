// Definición del servidor

const express = require('express')

const tacosRouter = require('./routes/tacos')

const app = express()

app.use(express.json())

// aqui se monta nuestro router
app.use('/tacos', tacosRouter)

app.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'antojitos APIv1'
  })
})

module.exports = app

// cada que quiero crear un endpoint nuevo el proces es:
// 1.- asegurarnos de tener nuestro modelo (acceso a datos) si no existe pues lo creamos
// 2.- Crear el (o los) caso de uso necesarios para esa acción
// 3.- Crear nuestro endpoint y conectarlo al (o los) casos de uso correspondientes

// RETO BACKEND
// API DE MEDIUM
// GET /entries
// GET /entries/:id
// POST /entries
// PATCH /entries/:id
// DELETE /entries/:id
//
// Modelo de Entry
// Title: String
// fecha: Date -> Discovery
// readTime: number
// description: String
// isFav: Bool
// img: String
// author: String
//
// Criterios
// Implementar clean architechture
// Debe usar standard y nodemon
// Debe usar dotenv para las vars de entorno
//
// Bonus
// Conectar su API a su front de medium

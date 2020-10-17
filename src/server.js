// Definición del servidor

const express = require('express')

const tacosRouter = require('./routes/tacos')

const app = express()

app.use(express.json())

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

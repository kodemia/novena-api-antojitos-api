// Este archivo se encarga de levantar todos los servicios

// el dotenv debe ser la primer linea en ejecutarse
require('dotenv').config()

// equivalente
// const dotenv = require('dotenv')
// dotenv.config()

console.log('env: ', process.env.DB_USER)

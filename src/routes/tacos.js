
const express = require('express')

const tacos = require('../usecases/tacos')

const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const allTacos = await tacos.getAll()

    response.json({
      success: true,
      message: 'All tacos',
      data: {
        tacos: allTacos
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.get('/:id', (request, response) => {

})

router.post('/', async (request, response) => {
  try {
    const {
      type,
      price,
      isChido
    } = request.body

    if (!type) throw new Error('Type is required')
    if (!price) throw new Error('Prices is required')
    if (isChido == null) throw new Error('isChido is required')

    const newTaco = await tacos.create({ type, price, isChido })

    response.json({
      success: true,
      message: 'Taco created',
      data: {
        taco: newTaco
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const deletedTacos = await tacos.deleteById(id)

    response.json({
      success: true,
      message: 'taco deleted',
      data: {
        taco: deletedTacos
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const newDataTaco = request.body

    const tacoUpdated = await tacos.updateById(id, newDataTaco)

    response.json({
      success: true,
      message: 'taco updated',
      data: {
        taco: tacoUpdated
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router
// exportamos nuestro router PERO FALTA MONTARLO

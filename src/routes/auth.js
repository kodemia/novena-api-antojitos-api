
const express = require('express')
const users = require('../usecases/users')

const router = express.Router()

router.post('/signup', async (request, response) => {
  try {
    const { email, password } = request.body

    const userCreated = await users.signup(email, password)

    response.json({
      success: true,
      message: 'user created',
      data: {
        userCreated
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.get('/users', async (request, response) => {
  try {
    const allUsers = await users.getAll()
    response.json({
      success: true,
      message: 'all users',
      data: {
        users: allUsers
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.post('/login', async (request, response) => {
  try {
    const { email, password } = request.body

    const token = await users.login(email, password)

    response.json({
      success: true,
      message: 'logged in',
      data: {
        token
      }
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: error.message
    })
  }
})

module.exports = router

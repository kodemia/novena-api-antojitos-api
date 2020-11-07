
const Users = require('../models/users')

const bcrypt = require('../lib/bcrypt')

// signup
async function signup (email, password) {
  const user = await Users.findOne({ email })

  if (user) throw new Error('User is already registered')

  const hash = bcrypt.hash(password)
  return Users.create({ email, password: hash })
}

async function login (email, password) {
  const user = await Users.findOne({ email })
  if (!user) throw new Error('Invalid data')

  const isValidPassword = bcrypt.compare(password, user.password)
  if (!isValidPassword) throw new Error('Invalid data')

  return isValidPassword
}

function getAll () {
  return Users.find()
}

// login

module.exports = {
  signup,
  getAll,
  login
}

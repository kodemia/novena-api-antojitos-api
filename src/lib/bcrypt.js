
const bcrypt = require('bcrypt')

const salt = 10

function hash (plainText) {
  return bcrypt.hashSync(plainText, salt)
}

function compare (plainText, hash) {
  return bcrypt.compareSync(plainText, hash)
}

module.exports = {
  hash,
  compare
}

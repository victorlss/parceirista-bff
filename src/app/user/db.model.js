const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: { type: String },
  address: { type: String },
  bithday: { type: Date },
  cpf: { type: String },
  cnpj: { type: String },
  email: { type: String },
  telefone: { type: String },
  userType: { type: String }
})

module.exports = mongoose.model('users', userSchema, 'users')

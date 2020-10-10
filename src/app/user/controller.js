const userSchema = require('./db.model')

const getAll = async () => {
  const users = await userSchema.find()
  return { users }
}

const getProfessionals = async () => {
  const users = await userSchema.find({ userType: 'professional' })
  return { users }
}

const getBusinnesses = async () => {
  const users = await userSchema.find({ userType: 'business' })
  return { users }
}

module.exports = { getAll, getProfessionals, getBusinnesses }

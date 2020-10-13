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

const getUser = async (userId) => {
  const user = await userSchema.findOne({ _id: userId })
  return user
}

const createUser = async (user) => {
  const newUser = await userSchema.create(user)
  return newUser._id
}

const deleteUser = async (userId) => {
  await userSchema.deleteOne({ _id: userId })
}

module.exports = {
  getAll,
  getProfessionals,
  getBusinnesses,
  getUser,
  createUser,
  deleteUser
}

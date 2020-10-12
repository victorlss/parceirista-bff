const userSchema = require('../user/db.model')

const index = async () => {
  return { message: 'Users' }
}

const login = async (data) => {
  console.log(data)
  const user = await userSchema.findOne({ email: data.username })
  console.log(user)
  return user
}

const logout = async () => {
  // TODO logout stuffs
}

module.exports = { index, login, logout }

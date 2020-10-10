const index = async () => {
  return { message: 'Login' }
}

const login = async (user) => {
  const payload = [
    {
      userId: 0,
      name: 'Fulano de Tal'
    }
  ]
  return { payload }
}

const logout = async (user) => {
  return true
}

module.exports = { index, login, logout }

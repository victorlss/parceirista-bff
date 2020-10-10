const index = async () => {
  return { message: 'Users' }
}

const getProfessionals = async (type) => {
  const payload = [
    {
      userId: 0,
      name: 'Joao Designer'
    }
  ]
  return { payload }
}

const getBusinnesses = async (type) => {
  const payload = [
    {
      userId: 1,
      name: 'Bolo no Potão'
    }
  ]
  return { payload }
}

const getUser = async (userId) => {
  const payload = {
    userId: 1,
    name: 'Bolo no Potão'
  }
  return { payload }
}

module.exports = { index, getProfessionals, getBusinnesses, getUser }

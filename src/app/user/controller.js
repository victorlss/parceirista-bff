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
    name: 'Emerson Contador'
  }
  return { payload }
}

const createCard = async (card) => {
  const payload = {
    cardId: 1,
    number: '5555 5555 5555 5555 5555 '
  }
  return { payload }
}

module.exports = { index, getProfessionals, getBusinnesses, getUser, createCard }

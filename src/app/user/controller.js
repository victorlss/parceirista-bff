const token = require('./getnet/token')
const credit = require('./getnet/credit')

const index = async () => {
  return { message: 'Payment' }
}

const getProfessionals = async (type) => {
  const payload = [
    {
      userId: 0,
      name: "Joao Designer"
    }
  ];
  return { payload }
}

const getBusinnesses = async (type) => {
  const payload = [
    {
      userId: 1,
      name: "Bolo no Potão"
    }
  ];
  return { payload }
}

module.exports = { index, getProfessionals, getBusinnesses }

const index = async () => {
  return { message: 'Services' }
}

const getContracts = async (userId) => {
  const payload = [
    {
      contractId: 0,
      name: 'Criar Logomarca com Fulano de Tal',
      business: {
        businessId: 0,
        name: 'Bolo no Potao'
      },
      professional: {
        professionalId: 1,
        name: 'Joao Designer'
      }
    }
  ]
  return { payload }
}

const getContract = async (contractId) => {
  const payload = {
    contractId: 0,
    name: 'Criar Logomarca com Fulano de Tal',
    business: {
      businessId: 0,
      name: 'Bolo no Potao'
    },
    professional: {
      professionalId: 1,
      name: 'Joao Designer'
    }
  }

  return { payload }
}

const createContract = async (contract) => {
  // TODO Creation stuff
  const payload = {
    contractId: 0
  }
  return { payload }
}

const createPayment = async (contract) => {
  // TODO Creation stuff
  const payload = {
    paymentId: 0
  }
  return { payload }
}

const deleteContract = async (contracId) => {
  // TODO Remove stuff

  return true
}

module.exports = { index, getContracts, getContract, createContract, deleteContract, createPayment }

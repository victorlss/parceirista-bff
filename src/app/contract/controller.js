const contractSchema = require('./db.model')

const index = async () => {
  return { message: 'Services' }
}

const getContracts = async (userId) => {
  const contracts = await contractSchema.find({ $or: [{ businessId: userId }, { professionalId: userId }] })
  return { contracts }
}

const getContract = async (contractId) => {
  const contract = await contractSchema.find({ _id: contractId })
  return { contract }
}

const createContract = async (contract) => {
  const newContract = await contractSchema.create(contract)
  return newContract._id
}

const deleteContract = async (contractId) => {
  await contractSchema.deleteOne({ _id: contractId })
}

module.exports = {
  index,
  getContracts,
  getContract,
  createContract,
  deleteContract
}

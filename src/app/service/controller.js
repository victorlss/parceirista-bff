const serviceSchema = require('./db.model')
const userSchema = require('../user/db.model')

const index = async () => {
  return { message: 'Login' }
}

const getServices = async (serviceId) => {
  const services = await serviceSchema.find({ serviceId: serviceId })
  for (const service of services) {
    service.set('professional', await userSchema.findById(service.professionalId), { strict: false });
  }
  return { services }
}

const createService = async (service) => {
  const newService = await serviceSchema.create(service)
  return newService._id
}

const getByProfessionalId = async (professionalId) => {
  const services = await serviceSchema.find({ professionalId })
  for (const service of services) {
    service.set('professional', await userSchema.findById(service.professionalId), { strict: false });
  }
  return { services }
}

module.exports = { index, createService, getServices, getByProfessionalId }

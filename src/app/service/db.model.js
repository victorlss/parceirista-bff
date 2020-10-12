const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
  serviceId: { type: String },
  professionalId: { type: String },
  description: { type: String },
  deliveryDeadInDays: { type: Number },
  paymentDeadInDays: { type: Number }
}, { timestamps: true })

module.exports = mongoose.model('service', serviceSchema, 'services')

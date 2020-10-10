const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
  serviceId: { type: String },
  professionalId: { type: String },
  description: { type: Number },
  deliveryDeadInDays: { type: String },
  paymentDeadInDays: { type: String }
}, { timestamps: true })

module.exports = mongoose.model('service', serviceSchema, 'services')

const mongoose = require('mongoose')
const Schema = require('mongoose')

const contractSchema = new mongoose.Schema({
  serviceId: { type: String },
  businessId: { type: String },
  professionalId: { type: String },
  fee: { type: Number },
  discount: { type: String },
  deliverAt: { type: String },
  deliveredAt: { type: String },
  services: [{ type: Schema.Types.ObjectId, ref: 'service' }]
}, { timestamps: true })

module.exports = mongoose.model('contract', contractSchema, 'users')

const mongoose = require('mongoose')

const contractSchema = new mongoose.Schema({
  serviceId: { type: String },
  businessId: { type: String },
  professionald: { type: String },
  fee: { type: Number },
  discount: { type: String },
  deliverAt: { type: String },
  deliveredAt: { type: String }
}, { timestamps: true })

module.exports = mongoose.model('contract', contractSchema, 'users')

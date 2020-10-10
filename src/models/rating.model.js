const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
  contractId: { type: String },
  businessId: { type: String },
  professionalId: { type: String },
  rating: { type: Number }
}, { timestamps: true })

module.exports = mongoose.model('rating', ratingSchema, 'ratings')

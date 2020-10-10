const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
  userId: { type: String },
  paymentResponse: {
    payment_id: { type: String },
    seller_id: { type: String },
    amount: { type: Number },
    currency: { type: String },
    order_id: { type: String },
    status: { type: String },
    received_at: { type: Date },
    credit: {
      delayed: { type: Boolean },
      authorization_code: { type: Date },
      authorized_at: { type: Date },
      reason_code: { type: Number },
      reason_message: { type: String },
      acquirer: { type: String },
      soft_descriptor: { type: String },
      brand: { type: String },
      terminal_nsu: { type: Date },
      acquirer_transaction_id: { type: String },
      transaction_id: { type: String }
    }
  }

}, { timestamps: true })

module.exports = mongoose.model('payment', paymentSchema, 'payments')

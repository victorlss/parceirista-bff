const paymentSchema = require('./db.model')
const token = require('../payment/getnet/token')
const credit = require('../payment/getnet/credit')

const index = async () => {
  return { message: 'Payments' }
}

const getPayments = async (userId) => {
  const payments = await paymentSchema.find({ userId: userId })
  return { payments }
}

const createPayment = async (userId, paymentRequest) => {
  const cartonToken = await token.tokenizeCarton(paymentRequest.credid_card.number)

  const payload = {
    seller_id: '7abf410c-2b3b-4403-8221-f35e68a3582e',
    amount: paymentRequest.amount.toString(),
    order: {
      order_id: '12345'
    },
    customer: {
      customer_id: userId,
      billing_address: {}
    },
    device: {},
    shippings: [
      {
        address: {}
      }
    ],
    credit: {
      delayed: false,
      save_card_data: false,
      transaction_type: 'FULL',
      number_installments: 1,
      card: {
        number_token: cartonToken,
        cardholder_name: paymentRequest.credid_card.cardholder_name,
        expiration_month: paymentRequest.credid_card.expiration_month.toString(),
        expiration_year: paymentRequest.credid_card.expiration_year.toString()
      }
    }
  }

  const paymentResponse = await credit.payWithCreditCard(payload)
  const payment = await paymentSchema.create({
    userId,
    paymentResponse
  })

  return { payment }
}

module.exports = { index, createPayment, getPayments }

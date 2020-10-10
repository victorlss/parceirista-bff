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

const createPayment = async (userId, payment) => {
  const cartonToken = await token.tokenizeCarton(payment.credid_card.number)

  const payload = {
    seller_id: '7abf410c-2b3b-4403-8221-f35e68a3582e',
    amount: payment.amount.toString(),
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
        cardholder_name: payment.credid_card.cardholder_name,
        expiration_month: payment.credid_card.expiration_month.toString(),
        expiration_year: payment.credid_card.expiration_year.toString()
      }
    }
  }

  const paymentResponse = await credit.payWithCreditCard(payload)
  paymentSchema.create({
    userId,
    paymentResponse
  })

  return { paymentMessage: payment, paymentMessageResponse: paymentResponse }
}

module.exports = { index, createPayment, getPayments }

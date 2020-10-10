const token = require('./payment/getnet/token')
const credit = require('./payment/getnet/credit')

const index = async () => {
  return { message: 'Users' }
}

const getProfessionals = async (type) => {
  const payload = [
    {
      userId: 0,
      name: 'Joao Designer'
    }
  ]
  return { payload }
}

const getBusinnesses = async (type) => {
  const payload = [
    {
      userId: 1,
      name: 'Bolo no Potão'
    }
  ]
  return { payload }
}

const getUser = async (userId) => {
  const payload = {
    userId: 1,
    name: 'Emerson Contador'
  }
  return { payload }
}

const createPayment = async (payment) => {
  // TODO: Receive data from post body
  const cartonToken = await token.tokenizeCarton('5155901222280001')

  const payload = {
    seller_id: '7abf410c-2b3b-4403-8221-f35e68a3582e',
    amount: '1000',
    order: {
      order_id: '12345'
    },
    customer: {
      customer_id: '12345',
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
        cardholder_name: 'JOAO DA SILVA',
        expiration_month: '12',
        expiration_year: '21'
      }
    }
  }

  const paymentMessage = await credit.payWithCreditCard(payload)
  return { paymentMessage }
}

const createCard = async (card) => {
  const payload = {
    cardId: 1,
    number: '5555 5555 5555 5555 5555 '
  }
  return { payload }
}

module.exports = { index, getProfessionals, getBusinnesses, getUser, createPayment, createCard }

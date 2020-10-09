const apiClient = require('./apiClient')
const authentication = require('./authentication')

const payWithCreditCard = async (payload) => {
  const token = await authentication.getToken()

  const client = apiClient.getInstance(
    'application/json',
    `${token.token_type} ${token.access_token}`)

  const promise = await client.request({
    url: '/v1/payments/credit',
    method: 'post',
    data: payload
  })

  return promise.data
}

module.exports = { payWithCreditCard }

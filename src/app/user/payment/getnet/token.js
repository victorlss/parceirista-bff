const apiClient = require('./apiClient')
const authentication = require('./authentication')

const tokenizeCarton = async (cardNumber) => {
  const token = await authentication.getToken()

  const client = apiClient.getInstance(
    'application/json',
    `${token.token_type} ${token.access_token}`)

  const promise = await client.request({
    url: '/v1/tokens/card',
    method: 'post',
    data: {
      card_number: cardNumber
    }
  })

  return promise.data.number_token
}

module.exports = { tokenizeCarton }

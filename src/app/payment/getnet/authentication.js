const apiClient = require('./apiClient')

const getToken = async () => {
  const basicAuthString = Buffer
    .from(`${process.env.GETNET_API_CLIENT_ID}:${process.env.GETNET_API_CLIENT_SECRET}`)
    .toString('base64')

  const api = apiClient.getInstance(
    'application/x-www-form-urlencoded',
    `Basic ${basicAuthString}`)

  const promise = await api.request({
    url: '/auth/oauth/v2/token',
    method: 'post',
    data: 'scope=oob&grant_type=client_credentials'
  })

  return promise.data
}

module.exports = { getToken }

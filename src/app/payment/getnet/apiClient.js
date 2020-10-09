const axios = require('axios')
const axiosRetry = require('axios-retry')

const getInstance = (contentType, authorization) => {
  const retryConfig = {
    retries: 3,
    shouldResetTimeout: true
  }

  const client = axios.create({
    baseURL: process.env.GETNET_API_URL,
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': contentType,
      Authorization: authorization
    },
    timeout: process.env.GETNET_API_TIMEOUT
  })

  axiosRetry(client, retryConfig)
  return client
}

module.exports = { getInstance }

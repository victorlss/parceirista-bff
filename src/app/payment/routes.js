const express = require('express')
const controller = require('./controller')
const resolver = require('../../utils/router-handler.utils')

const router = express.Router()

router.post('/', async (request, response, next) => {
  await resolver.handle(response, next, async () => await controller.createPayment(request.body))
})

module.exports = router

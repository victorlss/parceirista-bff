const express = require('express')
const controller = require('./controller')
const resolver = require('../../utils/router-handler.utils')

const router = express.Router()

router.get('/:id', async (request, response, next) => {
  await resolver.handle(response, next, async () => await controller.getPayments(request.params.id))
})

router.post('/:id', async (request, response, next) => {
  await resolver.handle(response, next, async () => await controller.createPayment(request.params.id, request.body))
})

module.exports = router

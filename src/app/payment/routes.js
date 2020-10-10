const express = require('express')
const controller = require('./controller')
const resolver = require('../../utils/router-handler.utils')

const router = express.Router()

router.get('/', async (request, response, next) => {
  await resolver.handle(response, next, async () => await controller.index())
})

router.post('/', async (request, response, next) => {
  await resolver.handle(response, next, async () => await controller.payWithCreditCard())
})

module.exports = router

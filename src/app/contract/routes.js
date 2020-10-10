const express = require('express')
const controller = require('./controller')
const resolver = require('../../utils/router-handler.utils')

const router = express.Router()

router.get('/user/:id', async (request, response, next) => {
  await resolver.handle(response, next, async () => await controller.getContracts(request.params.id))
})

router.get('/:id', async (request, response, next) => {
  await resolver.handle(response, next, async () => await controller.getContract(request.params.id))
})

router.post('/', async (request, response, next) => {
  await resolver.handle(response, next, async () => await controller.createContract(request.body))
})

router.delete('/', async (request, response, next) => {
  await resolver.handle(response, next, async () => await controller.deleteContract(request.body))
})

module.exports = router

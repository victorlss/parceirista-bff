const express = require('express')
const controller = require('./controller')
const resolver = require('../../utils/router-handler.utils')

const router = express.Router()

router.get('/:id', async (request, response, next) => {
  await resolver.handle(response, next, async () => controller.getServices(request.params.id))
})

router.post('/', async (request, response, next) => {
  await resolver.handle(response, next, async () => await controller.createService(request.body))
})

router.get('/professional/:id', async (request, response, next) => {
  await resolver.handle(response, next, async () => controller.getByProfessionalId(request.params.id))
})

module.exports = router

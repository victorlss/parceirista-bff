const express = require('express')
const controller = require('./controller')
const resolver = require('../../utils/router-handler.utils')

const router = express.Router()

router.get('/', async (request, response, next) => {
  await resolver.handle(response, next, async () => await controller.getAll())
})

router.get('/professional', async (request, response, next) => {
  await resolver.handle(response, next, async () => await controller.getProfessionals())
})

router.get('/business', async (request, response, next) => {
  resolver.handle(response, next, async () => await controller.getBusinnesses())
})

module.exports = router

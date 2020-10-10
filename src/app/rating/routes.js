const express = require('express')
const controller = require('./controller')
const resolver = require('../../utils/router-handler.utils')

const router = express.Router()

router.get('/:id', async (request, response, next) => {
  await resolver.handle(response, next, async () => await controller.getRatings(request.params.id))
})

router.post('/:id', async (request, response, next) => {
  await resolver.handle(response, next, async () => await controller.createRating(request.params.id, request.body))
})

router.delete('/:id', async (request, response, next) => {
  await resolver.handle(response, next, async () => await controller.deleteRating(request.params.id))
})

module.exports = router

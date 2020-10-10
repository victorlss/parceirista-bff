const express = require('express')
const controller = require('./controller')
const resolver = require('../../utils/router-handler.utils')

const router = express.Router()

router.post('/login', async (request, response, next) => {
  await resolver.handle(response, next, async () => await controller.login(request.body))
})

router.post('/logout', async (request, response, next) => {
  await resolver.handle(response, next, async () => await controller.logout())
})

module.exports = router

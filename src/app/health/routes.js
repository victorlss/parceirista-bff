const express = require('express')
const controller = require('./controller')
const resolver = require('../../utils/router-handler.utils')

const router = express.Router()

router.get('/', async (request, response, next) => {
  resolver.handle(response, next, async () => controller.index())
})

module.exports = router

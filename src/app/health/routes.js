const express = require('express')
const controller = require('./controller')

const router = express.Router()

router.get('/', async (request, response, next) => {
  try {
    response.send(await controller.index())
  } catch (e) {
    next(e)
  }
})

module.exports = router

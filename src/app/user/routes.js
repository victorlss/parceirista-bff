const express = require('express')
const controller = require('./controller')

const router = express.Router()

router.get('/users', async (request, response, next) => {
  try {
    response.send(await controller.index())
  } catch (e) {
    next(e)
  }
})

router.get('/users/professional', async (request, response, next) => {
  try {
    response.send(await controller.getProfessionals())
  } catch (e) {
    next(e)
  }
})

router.get('/users/business', async (request, response, next) => {
  try {
    response.send(await controller.getBusinnesses())
  } catch (e) {
    next(e)
  }
})

module.exports = router

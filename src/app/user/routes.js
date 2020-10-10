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

router.get('/professional', async (request, response, next) => {
  try {
    response.send(await controller.getProfessionals())
  } catch (e) {
    next(e)
  }
})

router.get('/business', async (request, response, next) => {
  try {
    response.send(await controller.getBusinnesses())
  } catch (e) {
    next(e)
  }
})

module.exports = router

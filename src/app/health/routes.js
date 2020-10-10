const express = require('express')

const router = express.Router()
const now = Date(Date.now())

router.get('/', async (request, response, next) => {
  try {
    response.send(`Deployed at: ${now}`)
  } catch (e) {
    next(e)
  }
})

module.exports = router

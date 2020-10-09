const express = require('express')
const health = require('./../app/health/routes')
const payment = require('./../app/payment/routes')

const router = express.Router()
router.use('/health', health)
router.use('/payment', payment)

module.exports = router

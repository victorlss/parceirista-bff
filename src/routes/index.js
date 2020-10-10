const express = require('express')
const health = require('./../app/health/routes')
const payment = require('./../app/payment/routes')
const user = require('./../app/user/routes')

const router = express.Router()
router.use('/health', health)
router.use('/payment', payment)
router.use('/user', user)

module.exports = router

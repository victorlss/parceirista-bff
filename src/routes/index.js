const express = require('express')
const health = require('./../app/health/routes')
const user = require('./../app/user/routes')
const contract = require('./../app/contract/routes')
const rating = require('./../app/rating/routes')
const payment = require('./../app/payment/routes')
const service = require('./../app/service/routes')
const auth = require('./../app/auth/routes')

const router = express.Router()
router.use('/health', health)
router.use('/users', user)
router.use('/contracts', contract)
router.use('/payments', payment)
router.use('/ratings', rating)
router.use('/services', service)
router.use('/auth', auth)

module.exports = router

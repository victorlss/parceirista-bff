const express = require('express')
const health = require('./../app/health/routes')
const user = require('./../app/user/routes')
const contract = require('./../app/contract/routes')
const login = require('./../app/login/routes')

const router = express.Router()
router.use('/health', health)
router.use('/users', user)
router.use('/contracts', contract)
router.use('/login', login)

module.exports = router

const express = require('express')
const { apiKey, permission } = require('../auth/checkAuth')

const router = express.Router()

// check apikey

router.use(apiKey)

// check permission

router.use(permission('0000'))

console.log("abc")

router.use('/v1/api/shop', require('./access'))




module.exports = router

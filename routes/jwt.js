const express = require('express')
const router = express.Router()
const tokenRouter = require('../controllers/jwt')

router.get('/sign-token', tokenRouter.sign)
router.post('/verify-token', tokenRouter.verify)

module.exports = router;
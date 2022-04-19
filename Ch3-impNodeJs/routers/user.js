const express = require('express')
const router = express.Router()
//const userController = require('../controllers/user')
const authChecker = require('../lib/authentication-checker')

router.use(authChecker.isUserAuthenticated)
router.use( (req,res,next) => {
  req.app.set('layout', 'layouts/user')  
  next()
})

router.get('/', userController.index )
router.get('/profile', userController.profile )

module.exports = router
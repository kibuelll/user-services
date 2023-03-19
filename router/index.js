const router = require('express').Router()
const UserController = require('../controllers/index')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.post('/sign-up',UserController.createUser)
router.post('/login',UserController.login)
router.get('/my-profile',authentication,authorization,UserController.myProfile)
router.get('/auth-request',UserController.authRequest)

module.exports = router
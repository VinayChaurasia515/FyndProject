const express=require('express')
const UserController=require('./user.controller')
let router=express.Router()

router.post('/register',UserController.register)
router.post('/login',UserController.login)
router.get('/verify',UserController.verify)

module.exports=router
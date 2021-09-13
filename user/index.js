const express=require('express')
const UserController=require('./user.controller')
let router=express.Router()


router.post('/register',UserController.register)
router.post('/login',UserController.login)
router.post('/allusers',UserController.allusers)
router.get('/verify',UserController.verify)

module.exports=router
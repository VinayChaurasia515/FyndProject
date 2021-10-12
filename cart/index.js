const express = require('express')
const CartController = require('./cart.controller')
const AuthService = require('../auth.service')

let router = express.Router()

router.get('/getallproduct', AuthService.isloggedin, CartController.getallproduct)

//   IN BELOW ROUTES HAVE SOME PROBLEM .   pLEASE SEND IDEA OR REFERANCE CODE
router.post('/addtocartbyproductid', AuthService.isloggedin, CartController.addtocartbyproductid)


module.exports = router
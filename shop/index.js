const express = require('express')
const ShopController = require('./shop.controller')
const AuthService = require('../auth.service')
const multer = require('multer')

let router = express.Router()
console.log('............Cover index..........')
router.post('/addproduct', AuthService.isloggedin, AuthService.isAdmin, ShopController.addproduct);

router.get('/getallproduct', AuthService.isloggedin, AuthService.isAdmin, ShopController.getallproduct);
router.get('/getallproductbybrand', AuthService.isloggedin, AuthService.isAdmin, ShopController.getallproductbybrand)
router.get('/getproductbyid', AuthService.isloggedin, AuthService.isAdmin, ShopController.getproductbyid)

//router.get('/productdetails/:productid', AuthService.isloggedin, AuthService.isAdmin, ShopController.getbyproductid)

router.put('/updateproductdetailsbyid', AuthService.isloggedin, AuthService.isAdmin, ShopController.updateproductbyid);

//router.delete('/deleteproduct', AuthService.isloggedin, AuthService.isAdmin, ShopController.deleteproduct);
router.delete('/deleteproductbyid', AuthService.isloggedin, AuthService.isAdmin, ShopController.deleteproductbyid);

// //router.post('/addimage',ProductController.setkey, ProductController.addimage)
// //router.post('/addvideo',ProductController.addvideo)

module.exports = router
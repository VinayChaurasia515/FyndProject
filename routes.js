const express=require('express')

let router=express.Router()

let userroutes=require('./user')
router.use('/user',userroutes)

// let shoproutes=require('./shop/index')
// router.use('/shop',shoproutes)


// let cartroutes=require('./cart')
// router.use('/cart',cartroutes)

module.exports=router
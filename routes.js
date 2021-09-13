const express=require('express')

let router=express.Router()

let userroutes=require('./user')
router.use('/user',userroutes)

let productroutes=require('./product')
router.use('/productName',productroutes)

// let coverroutes=require('./cover')
// router.use('/cover',coverroutes)

// let searchroutes=require('./search')
// router.use('/searach',searchroutes)

module.exports=router 
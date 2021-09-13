const express=require('express')
const CoverController=require('./cover.controller')

let router=express.Router()
console.log('............Cover index..........')
router.post('/addcover',CoverController.addcover)
router.post('/getallcover',CoverController.addcover)
//router.post('/addvideo',CoverController.addvideo)



module.exports=router 
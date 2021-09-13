const express=require('express')
const SearchController=require('./serach.controller')
let router=express.Router()


router.post('/addvideo',SearchController.store)

module.exports=router
const express=require('express')
let router=express.Router()



router.post('/productName',function(req,res){
    console.log('.............')
    res.send("BMW")       
})

module.exports=router 
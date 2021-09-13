const express=require('express')
const routes=require('./routes')
const bodyparser=require('body-parser')
const Mongoose=require('mongoose')
const fs = require("fs");
const multer=require('multer')
const path=require('path')


const dburl='mongodb://localhost:27017/fyndnodedb'

const Port=process.env.PORT || 9000
const server=express()

Mongoose.connect(dburl).then(function(){
    console.log('connected to database')
    server.listen(Port,function(){
        console.log("server is runnindg ...",Port)
    })
}, function(error){
    console.log('error in connecting to data base in mongodb')
})

server.set("view engine","ejs")
server.use(bodyparser.json())
server.use(routes)

/////////////////////////

/*
const storage=multer.diskStorage({
    destination:'./upload/videos',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload=multer({
    storage:storage
})

server.post('/addvideo',upload.single('video'),(req,res)=>{
  //  console.log(req.body)
    console.log(req.file) 
})

*/
const UploadService =require('./upload.service')
const multer = require('multer')
const fs = require('fs')


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        if(!fs.existsSync("./uploads")){
            fs.mkdirSync("./uploads")
        }
        cb(null, './uploads')
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
        details = file
    }
})

const upload = multer({storage: storage})

const uploadImage = (req, res) => {
    console.log("vinay")
    console.log(details.originalname)
    console.log(details)
    UploadService.upload(details.originalname).then((data) => {
        console.log("urlinbhgyhg")
        // res.render('home',{url})
        res.send({imageurl:data.url})
    }).catch(() => {
        res.send({message: "unable to upload upload image"})
    })
}


module.exports = {
    uploadImage,
    upload
}
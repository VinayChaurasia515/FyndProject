const express = require('express')
let router = express.Router()
const UploadController = require('./upload.controller')

router.post('/image',UploadController.upload.single('file'),UploadController.uploadImage)

module.exports = router
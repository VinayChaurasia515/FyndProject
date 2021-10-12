var cloudinary = require('cloudinary').v2
const path = require("path")

const upload = (filename) => {
    return new Promise((resolve, reject) => {
        cloudinary.config({
            cloud_name:"dvrkjdqpz",
            api_key:"186113342544761",
            api_secret:"HkWR9N-t37cfWpRiaAwg3nJPqWY"
        })

        console.log("uploading....")
        console.log("/uploads" + filename)
        var filePaths = path.resolve("uploads/" + filename)
        console.log(filePaths)
        cloudinary.uploader.upload(filePaths, {
            resource_type:"image"
        }).then((data) => {
            console.log("uploaded")
            console.log(data)
            resolve(data)
        }).catch((err) => {
            console.log(err)
            reject()
        })
       
    })
}

module.exports = {
    upload 
}
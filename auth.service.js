const Jwt=require('jsonwebtoken')
const { callbackPromise } = require('nodemailer/lib/shared')


exports.createToken=function(payload,callback){
  //  console.log('data token :: ')
    Jwt.sign(payload,"mysecretkey",{expiresIn:'1h'},function(error,token){
        if(error){
            console.log('data token :: ')
            callback(error,null)
        }
        else{
           // console.log('data toke ',error)
           // console.log('data toke ',token)
            callback(null,token)
        }
    })
}

exports.verifyToken=function(token,callback){
    console.log("here we will verify token from mail")
    Jwt.verify(token,"mysecretkey",function(error,payload){
        if(error){
            callback(error,null)
        }
        else{
            callback(null,payload)
        }
    })
}

exports.isloggedin=function(req,res,next){
    var token=req.get("authtoken")
    console.log('Token    :::    ',token)
    Jwt.verify(token,"mysecretkey",function(error,payload){
        if(error){
            res.status(401).send({
                error:"UnAuthorized"
            })
        }
        else{
            next()
        }
    })
}

exports.isAdmin=function(req,res,next){
    var token=req.get("authtoken")
    Jwt.verify(token,"mysecretkey",function(error,payload){
        if(error){
            res.status(401).send({
                error:"UnAuthorized token"
            })
            console.log("error in verify token")
        }
        else{
            if(payload.role=="admin"){
             next()
            }
             else{
                res.status(401).send({
                    error:"UnAuthorized admin" 
                     
             })
             console.log("error in admin ")
        }
    }
    })
}
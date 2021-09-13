var UserModel=require('./user.model')

exports.addUser=function(data){
    return new Promise(function(resolve,reject){
        //actual logic for register
        var userdata=new UserModel(data)
        userdata.save().then(function(result){
            console.log('user added into users collection ',result)
            if(result){
               resolve()
            }
            else{
                reject()
            }           
        },function(error){
            console.log('error in adding user to collection', error)
            if(error.code==11000)
            reject('Duplicate')
        })
    })
}

exports.findUser=function(data){
    var query={
        email:data.email,
        password:data.password
    }

    return new Promise(function(resolve,reject){
        //actual logic for login
        userModel.findOne().then(function(result){
            console.log('user login into users collection ',result)
            resolve(result)
        },function(error){
            console.log('error in login to collection', console.error)
            reject()
        })
    })
}

exports.verifyUser=function(email){
    //verify the token first from  the payload of the toke we will extract email of
    //the user to which token was sign
    return new Promise(function(resolve,reject){
        var findQuery={
            email:email
        }
        var updateQuery={
            $set:{
                verified:true
            }
        }
        UserModel.findOneAndUpdate(findQuery,updateQuery).then(function(result){
            console.log("result of verifying user in db is ",result)
            resolve()
        },function(error){
            console.log("error of verifying user in db is ", error)
            reject()
        })

    })    
}

exports.findUser=function(data){
    var query={
        email:data.email,
        password:data.password
    }

    return new Promise(function(resolve,reject){
        UserModel.findOne(query).then(function(result){
            console.log("result of find user ", result)
            resolve(result)
        },function(error){
            reject()
        })
    })
}

exports.deleteUser=function(data){
    return new Promise(function(resolve,reject){
        var query={
            email:data.email
        }
        UserModel.remove(query).then(function(result){
            console.log("rusult of removing user from db ", result)
            resolve()
        },function(error){
            console.log("Error of removing user from db ", result)
            //error()
            reject()
        })
    })
}
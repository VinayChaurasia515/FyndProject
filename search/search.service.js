var UserModel=require('./search.model')

exports.addVideo=function(data){
    return new Promise(function(resolve,reject){
        var videodata=new UserModel(data)
        videodata.save().then(function(){
            console.log('video added into collection')
            resolve()
        },function(error){
            console.log('error in adding to collection', console.error)
            reject()
        })
    })
}
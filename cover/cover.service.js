const CoverModel=require('./cover.model')

exports.addCover=function(data){
    console.log('............Cover Service..........')
    return new Promise(function(resolve,reject){
        var coverdata=new CoverModel(data)
        coverdata.save().then(function(result){
            console.log('Cover Information added to DB',result)
            resolve()
         // res.render('coverdetails',{data:result})
        },function(error){
            console.log('Error in Cover Information added to DB',result)
            reject()
        })
    })
}
exports.getallCover=function(data){
    return new Promise(function(resolve,reject){
        var 
    })
}

// exports.addVideo=function(data){
//     console.log('............Cover Viedo Service..........')
//     return new Promise(function(resolve,reject){
//         var coverdata=new CoverModel(data)
//         coverdata.save().then(function(result){
//             console.log('Cover Information added to DB',result)
//             resolve()
//         },function(error){
//             console.log('Error in Cover Information added to DB',result)
//             reject()
//         })
//     })
// }
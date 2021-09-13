const CoverService = require('./cover.service')

exports.addcover = function (req, res) {
    console.log('............Cover Controller..........')
    console.log('Cover Properties   ::: ', req.body)
    console.log('............calling addCover()..........')

    CoverService.addCover(req.body).then(function () {
        console.log('............Cover Controller data added to DB..........')
        res.send({
            "Message" :"data added to DB"
        })
    })
}


exports.getallCover=function(req,res){
    console.log('.............controller- Getting all cover............')
    console.log(req.body)
    CoverService.getallcover(req.body).then(function(){
        console.log('see all cover :: ')
        res.send({
            "Message":"see all cover in console"
        })
    })
}

// exports.addvideo=function(req,res){
//     console.log('............Cover Viedo Controller..........')
//     console.log('Cover Properties   ::: ', req.body)
//     console.log('............calling addCover()..........')
//     CoverService.addVideo(req.body).then(function(){
//         console.log('............Cover Viedo Controller..........')
//         console.log('Cover Properties   ::: ', req.body)
//     })
// }
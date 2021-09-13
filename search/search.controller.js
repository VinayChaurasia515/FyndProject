const Searchservice = require('./search.service')


exports.store = function (req, res) {
    console.log('data received  :: ', req.file)

    Searchservice.addVideo(req.body).then(function () {
        res.send({
            message: "Video stored"
        })
        
    }, function (error) {
        res.status(500).send({
            error: "Internal Servers Error in Searchservice"
        })
    })
}
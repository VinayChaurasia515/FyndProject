const multer = require('multer')
const ShopService = require('./shop.service')

exports.addproduct = function (req, res) {
    //  console.log('Request Properties   ::: ', req)
    console.log('Cover Properties   ::: ', req.body)

    ShopService.addProduct(req.body).then(function (result) {
        res.send({
            "Message": "product added to DB",
            "Product": result
        })
    }).catch(function (err) {
        res.send({
            "Messages": err
        })
    })
}

exports.getallproduct = function (req, res) {
    // console.log(req.body)
    ShopService.getallproduct().then((data)=> {
        res.send({
            "Message": "see all Product",
            "Message1": data
        })
    }).catch((err) =>{
        res.send({
            "Message": err
        })
    })
}

exports.getallproductbybrand = function (req, res) {
    console.log('query url :: ',req.query)
    ShopService.getallproductbybrand(req.query).then(function (data) {
        res.send({
            "Message": `All  product  in console`,
            "Message1": data
        }).catch(() => {
            res.send({
                "message": "Error occured in creating cover"
            })
        })
    })
}

exports.getproductbyid = function (req, res) {
    console.log('query url :: ',req.query)
    ShopService.getproductbyid(req.query).then(function (data) {
        res.send({
            "Message": `All  product  in console`,
            "Message1": data
        }).catch(
            res.send({
                "message": "Error occured in creating cover"
            })
        )
    })
}

exports.updateproductbyid = (req, res) => {
    console.log('product body   ::: ', req.body);       //  {"brand" : "vinay1"}
    console.log('product query   ::: ', req.query);     //  { coverid: 'coverId_dmv0z79bskuj1c1hm' }
    console.log('product params   ::: ', req.params);   //  {}

    ShopService.updateProductbyid(req.query, req.body).then(function (result) {
        res.send({
            "Message": "product ed to DB",
            "Product": result
        })
    }).catch(function (err) {
        res.send({
            "Messages": err
        })
    })

}

exports.deleteproduct = function (req, res) {
    ShopService.deleteProduct().then((result) => {
        res.send({
            "Message": "product deleteded from DB",
            "Product": result
        })
    }).catch((err) => {
        res.send({
            "Messages": err
        })
    })
}

exports.deleteproductbyid = function (req, res) {
    console.log(req.query)
    ShopService.deleteProductbyid(req.query).then((result) => {
        res.send({
            "Message": "product deleteded from DB",
            "Product": result
        })
    }).catch((err) => {
        res.send({
            "Messages": err
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


///notes::crowns
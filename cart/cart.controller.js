const CartService = require('./cart.service')


exports.getallproduct = (req,res) => {
    CartService.getallproducts().then( (result)=> {
        res.send({
            "All Product List ": result
        })
    }).catch((noProductFound) => {
        res.send({
             "Message": noProductFound
        })
    })
}

exports.addtocartbyproductid=(req,res)=>{
    console.log('Query params url   :::  ',req.query)
    CartService.addtocart(req.query).then( (result)=> {
        res.send({
            "All Product List ": result
        })
    }).catch((noProductFound) => {
        res.send({
             "Message": noProductFound
        })
    })
}
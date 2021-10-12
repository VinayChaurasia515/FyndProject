const CartModel = require('./cart.model')
const ShopModel = require('../shop/shop.model')

// exports.addcart=(data)=>{
//     console.log('............Cover Service..........')
//     return new Promise(function(resolve,reject){
//         var cartdata=new CartModel(data)
//         cartdata.save().then(function(result){
//             console.log('Cover Information added to DB',result)
//             if(result){
//                 resolve()
//             }else{
//                 reject()
//             }
//          // res.render('coverdetails',{data:result})
//         },function(error){
//             console.log('Error in Cover Information added to DB',result)
//             reject()
//         })
//     })
// }

exports.getallproducts = () => {
    return new Promise(function (resolve, reject) {
        ShopModel.find().then(function (result) {
            console.log('All Product Information ::: ', result)
            if (result) {
                resolve(result)
            } else {
                reject('No Product Found')
            }
            // res.render('coverdetails',{data:result})
        }, function (error) {
            console.log('Error in Cover Information added to DB', result)
            reject()
        })
    })
}

// exports.addtocart = (data) => {
//     return new Promise(function (resolve, reject) {
//         //first check 'data'(product) available or not in shop
//         console.log('add to cart ----  ',data)
//         console.log('add to cart ----  ',data.productid)
//         ShopModel.find(data)
//             .then((result) => {
//                 console.log('data  :::::    ',data)
//                 console.log('All Product count ::: ', result.length)
//                 console.log('All Product Information ::: ', result)
//                 if (result.length == 1) {
//                     //check 'data'(product) available or not in cart
//                     console.log('data  :::::    ',result.title)
//                     console.log('data  :::::    ',result.brand)
//                     console.log('data  :::::    ',result.model)
//                     var query={
//                         "title":result.title,
//                         "brand":result.brand,
//                         "model":result.model
//                     }
//                     CartModel.find(result)
//                     .then((result1) => {
//                         console.log('Product already available in cart. So Increase th quantity of product')
//                         console.log('Product quantity in cart :: ',result1.length)
                        
//                         CartModel.findOneAndUpdate({data},{$inc:{quantity:1}})
//                         .then((result)=>{
//                             if(result){
//                                 console.log('product quantity is increased :: ',data)
//                                 resolve(data)
//                             }
//                             else{
//                                 reject('Error :: product quantity is not increasing')
//                             }
//                         })
//                     })
//                     .catch(()=>{
//                         CartModel.insertMany(result)
//                         .then(() => {
//                             console.log("New Product added to cart")
//                             resolve(result)
//                         })
//                         .catch((error) => {
//                             console.log(error)
//                             reject('Wrong Product ID')
//                         })

//                     })
//                 }
//             })
//             .catch((error) => {
//                 console.log('Error  ::: invalid productid for getting collections from shop', error)
//                 reject()
//             })
//     })


//     // res.render('coverdetails',{data:result})
//     // },function(error){
//     //     console.log('Error in Shop Product Information added to cart collections',result)
//     //     reject()
//     // })
//     // })
// }


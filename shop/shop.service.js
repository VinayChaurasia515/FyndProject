//const { JsonWebTokenError } = require('jsonwebtoken')
const ShopModel = require('./shop.model')
const server = require('../server')
const excel = require('./jsontoexcel')


// exports.addProduct = function (data) {
//     return new Promise(function (resolve, reject) {
//         var productdata = new ShopModel(data)
//         productdata.save().then(function (result) {
//             console.log('Product Information added to DB', result)
//             if (result) {
//                 resolve(result)
//             } else {
//                 reject("Product Information Not added to DB")
//             }
//             // res.render('coverdetails',{data:result})
//         }, function (error) {
//             console.log('Error in Product Information added to DB', result)
//             reject('Error in Product Information added to DB')
//         })
//     })
// }
exports.addProduct = (data) => {
    return new Promise(function (resolve, reject) {
        var productdata = new ShopModel(data)
        console.log('++++++', data)
        console.log('**********', data.brand)
        console.log('=============')
        // var query={
        //     "brand" : "LAVA"
        // }
        // var query=data
        var query = {
            "title": data.title,
            "brand": data.brand,
            "model": data.model
        }
        //console.log(ShopModel.find(a))
        ShopModel.find(query).then((result) => {
            console.log('length of array  :: ', result.length)
            console.log('Finding existing data  :: ', result)
            if (result.length == 0) {
                console.log('new product adding')
                productdata.save().then(function (result) {
                    console.log('Product Information added to DB', result)
                    if (result) {
                        resolve(result)
                    } else {
                        reject("Product Information Not added to DB")
                    }
                    // res.render('coverdetails',{data:result})
                }, function (error) {
                    console.log('Error in Product Information added to DB', result)
                    reject('Error in Product Information added to DB')
                })
            }
            else {
                console.log('Already product available therefore Update the quantity of product')
                console.log(data.price)
                ShopModel.findOneAndUpdate({"title":data.title,"brand": data.brand,"model": data.model}, { $inc: { quantity: 1 }, $set: { price: data.price } }).then(function (result) {
                    
                    if (result) {
                        console.log('Product Information added to DB', data)
                        resolve(data)
                    } else {
                        reject("Product Information Not added to DB")
                    }
                    // res.render('coverdetails',{data:result})
                }, function (error) {
                    console.log('Error in Product Information added to DB', result)
                    reject('Error in Product Information added to DB')
                })
            }
        })
        console.log('=============')
    })
}

exports.getallproduct = function () {
    return new Promise(function (resolve, reject) {
        ShopModel.find().then((result) => {
            if (result) {
            //    console.log('generate excel sheet  ', result)
            //    excel.convertJsonToExcel(result);
            console.log('All Product of Shop  :::  ', result)
                resolve(result)
            } else {
                reject("Error :: Shop's Product finding")
            }
        }, (error) => {
            console.log('Error: Not Getting Shop Information', result)
            reject()
        })
    })
}

exports.getallproductbybrand=function(data){
    console.log('service query url :: ',data)
    // var a={
    //     "title":"iPhone"
    // }
    return new Promise(function(resolve,reject){
        ShopModel.find(data).then(function(result){
            if(result){
                resolve(result)
            }else{
                reject()
            }
        },function(error){
            console.log('Error: Not Getting Product Information  :::  ',result)
            reject()
        })
    })
}

exports.getproductbyid=function(data){
    console.log('service query url :: ',data)
    return new Promise(function(resolve,reject){
        ShopModel.find(data).then(function(result){
            if(result){
                resolve(result)
            }else{
                reject()
            }
        },function(error){
            console.log('Error: Not Getting Product Information  :::  ',result)
            reject()
        })
    })
}

exports.updateProductbyid = (data1, data2) => {
    return new Promise(function (resolve, reject) {
        //   db.shops.findOneAndUpdate({"coverid":"coverId_dmv0z79bskuj1c1hm"},{$set:{"brand":"vinay"}})
        console.log('service product query ::: ', data1);       // { productid: 'productId_dmv0z7v4kukupmr7' }
        console.log(typeof(data1))
        console.log('service product body  ::: ', data2);       // { brand: 'vinay1' }

        var jsonData1 = JSON.stringify(data1);
        console.log('jsonData1  ::  ', jsonData1); 
        console.log(typeof({"productid":"productId_dmv0z7v4kukupmr7"}))
                               //{"productid":"productId_dmv0z7v4kukupmr7"}
        // var jsonData2 = JSON.stringify(data2);
        // console.log('jsonData2  ::  ', jsonData2);                        //{"brand":"vinay1"}
        // console.log('$$$$$$', data2.brand)
        

        //   ShopModel.findByIdAndUpdate(jsonData1,{jsonData2}).then((result)=>{
        //     ShopModel.findOneAndUpdate(jsonData1,{$set:jsonData2}).then((result)=>{
      //  ShopModel.findOneAndUpdate({ "productid": "productId_dmv0z7v4kukupmr7" }, { $set: { "brand": "vaibhav1" }},{new :true} ).then((result) => {
       ShopModel.findOneAndUpdate(data1,{$set:data2},{new :true}).then((result)=>{
      //   Shopmodel.findOneAndUpdate(jsonData1,{$set:jsonData2},{new:true}).then((result)=>{
            if (result) {
                console.log("updated ::: ", result)
                resolve(result)
            } else {
                reject("Error :: product not found")
            }
        }, (error) => {
            console.log('Error: Not Getting Shop Information ', result)
            reject()
        })
    });
}

exports.deleteProduct = (data) => {
    return new Promise(function (resolve, reject) {
        ShopModel.findOneAndRemove().then(function (result) {
            console.log('vinay2')
            console.log('Product Information deleted from DB', result)
            if (result) {
                console.log('vinay3')
                resolve(result)
            } else {
                console.log('vinay4')
                reject("Product not deleted from DB")
            }
            // res.render('coverdetails',{data:result})
        }, function (error) {
            console.log('Error in Product Information added to DB', result)
            reject('Error in Product Information added to DB')
        })
    })
}

exports.deleteProductbyid = (data) => {
    return new Promise(function (resolve, reject) {
        ShopModel.findOneAndRemove(data).then(function (result) {
            console.log('Product Information deleted from DB', result)
            if (result) {
                console.log('vinay3')
                resolve(result)
            } else {
                console.log('vinay4')
                reject("Product not deleted from DB")
            }
            // res.render('coverdetails',{data:result})
        }, function (error) {
            console.log('Error in Product Information added to DB', result)
            reject('Error in Product Information added to DB')
        }
        )
    })
}

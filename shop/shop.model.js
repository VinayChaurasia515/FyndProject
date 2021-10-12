const Mongoose = require('mongoose')
const uniqid=require('uniqid')


console.log('............Product Model..........')
const ProductSchema = new Mongoose.Schema({
  productid: { type: String, unique: true, required: true, default: uniqid("productId_") },
  title: { type: String, required: true },
  brand: { type: String },
  price: { type: Number, required: true },
  color: { type: String },
  description: { type: String },
  model: { type: String },
  ram:{type: String},
  rom:{type: String},
  battery:{type: String},
  rating: { type: String, default: 0 },
  material: { type: String },
  type: { type: String },
  quantity: { type: Number, default: 1 },
  image: { type: String },
  images: { type: String }
})
const Shopmodel = Mongoose.model("shop", ProductSchema)
module.exports = Shopmodel

// const GetAllDataSchema=new Mongoose.Schema({
//   coverid: { type: String, unique: true, required: true, default: uniqid("coverId_") },
//   title: { type: String, required: true },
//   price: { type: Number, required: true },
//   color: { type: String },
//   description: { type: String },
//   model: { type: String },
//   rating: { type: String, default: 0 },
//   material: { type: String },
//   company: { type: String },
//   type: { type: String },
//   quantity: { type: Number, default: 1 }
// })
// //module.exports = mongoose.model('cover', GetAllDataSchema);
// const GetAllDataModel=Mongoose.model("covers",GetAllDataSchema)
// module.exports = GetAllDataModel
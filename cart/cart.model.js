const Mongoose = require('mongoose')
const uniqid=require('uniqid')

console.log('............Cover Model..........')
const CartSchema = new Mongoose.Schema({
  productid: { type: String, unique: true, required: true, default: uniqid("coverId_") },
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
const Cartmodel = Mongoose.model("carts", CartSchema)
module.exports = Cartmodel
const Mongoose = require('mongoose')
const uniqid=require('uniqid')


console.log('............Cover Model..........')
const CoverSchema = new Mongoose.Schema({
  coverid: { type: String, unique: true, required: true, default: uniqid("coverId_") },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  color: { type: String },
  description: { type: String },
  model: { type: String },
  rating: { type: String, default: 0 },
  material: { type: String },
  company: { type: String },
  type: { type: String },
  quantity: { type: Number, default: 1 },
  image: { type: String },
  images: { type: String }
})

const Covermodel = Mongoose.model("cover", CoverSchema)

module.exports = Covermodel
const Mongoose=require('mongoose')

const VideoSchema=new Mongoose.Schema({
    // email:{type:String, unique:true,required:true},
    // password:{type:String,required:true},
    // image:{type:String},
    // verified:{type:Boolean,default:false},
    // createddate:{type:Date,default:new Date()},
    // role:{type:String,default:'user'}

    video:{type:video}
})

const Videomodel=Mongoose.model("videos",UserSchema)

module.exports=Videomodel
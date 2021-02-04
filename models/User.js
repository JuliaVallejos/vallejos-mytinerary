const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    lastName:{type:String, required:true},
    username: {type:String, required:true},
    userPic: {type:String, required:true},
    country: {type:String, required:true},
    password: {type:String, required:true},
    rol:{type:String,required:false,default:'nonAdmin'}
})

const User = mongoose.model('user',userSchema)

module.exports = User
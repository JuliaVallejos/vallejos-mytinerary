const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    lastName:{type:String, required:true},
    username: {type:String, required:true},
    userPic: {type:String, required:false,default: 'https://definicion.mx/wp-content/uploads/2013/11/usuario.jpg'},
    country: {type:String, required:true},
    password: {type:String, required:true},
    rol:{type:String,required:false,default:'nonAdmin'},
    googleUser:{type:Boolean, required:false,default:false}
})

const User = mongoose.model('user',userSchema)

module.exports = User
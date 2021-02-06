const mongoose = require('mongoose')
const itinerarySchema = new mongoose.Schema({
    
    title: {type:String, required:true},
    idCity: {type:mongoose.Schema.ObjectId,ref:'city',required:true},
    userName: {type:String, required:true},
    userPic: {type:String, required:true},
    duration: {type:Number, required:true},
    price: {type:Number,required:true},
    likes: {type:Number,required:false,default:0},
    hashtags: {type:[String],required:true},
    activities: {type:[{
        activityName:String,
        activityPic:String
    }],required:true},
    comments: {type:[{
        name: String,
        userPic: String,
        comment: String,
    }],required:false}

})

const Itinerary = mongoose.model('itinerary',itinerarySchema)

module.exports = Itinerary
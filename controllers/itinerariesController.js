const Itinerary = require('../models/Itinerary')

const itinerariesController={
    /* agrega itinerario  */
    addItinerary:(req,res) =>{
        const {title,idCity,userName,userPic,duration,price,likes,hashtags,activities,comments} = req.body
        const newItinerary = new Itinerary({title,idCity,userName,userPic,duration,price,likes,hashtags,activities,comments})
        newItinerary.save()
        .then(newItinerary => res.json({success:true, response: newItinerary}))
        .catch(error => res.json({success:false,error}))
    },
    deleteItinerary: (req,res) =>{
        const id= req.params.idItinerary
        Itinerary.findOneAndRemove({_id:id})
        .then(message => res.json({success: true, message: "Itinerary removed"}))
        .catch(error => res.json({success:false,error}))

    },
    allItineraries: (req,res) =>{
        const id= req.params.idCity
        Itinerary.find({idCity:id}).populate('idCity').populate('comments.idUser')
        .then(response => res.json({success:true,response}))
        .catch(error=> res.json({success:true, error}))
    },
    addComment:(req,res) =>{
       const idItinerary= req.params.idItinerary
       console.log(req.body)
       const newComment = {
           idUser:req.user._id,
           comment:req.body.newComment}
   
      
        Itinerary.findOneAndUpdate({_id:idItinerary},{ $push: { 'comments': newComment}},{new:true})
        .then( itinerary =>{
            
            res.json({success:true,message:'Comment added',itinerary})
        } )
        .catch(error => 
            {         res.json({success:false,error})})

    },
    deleteComment:(req,res) =>{
        const idItinerary= req.params.idItinerary
        const idComment=req.params.idComment
        Itinerary.findOneAndUpdate({_id:idItinerary},{ $pull: {comments: {_id:idComment}}},{new:true}) 
        .then( itinerary => res.json({success:true,message:'Comment deleted',itinerary}))
        .catch(error => res.json({success:false,error}))

    },
   editComment:(req,res) =>{
   
        const idItinerary= req.params.idItinerary
        const idComment=req.params.idComment
        const editedComment = req.body.editedComment
       
        Itinerary.findOneAndUpdate({_id:idItinerary,'comments._id':idComment},{ $set: {'comments.$.comment':editedComment}},{new:true}) 
        .then( itinerary => res.json({success:true,message:'Comment edited',itinerary}))
        .catch(error => res.json({success:false,error}))

    }
    
    
}

module.exports = itinerariesController
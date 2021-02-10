const Itinerary = require('../models/Itinerary')

const itinerariesController={
    /* agregar itinerario  */
    addItinerary:(req,res) =>{
        const {title,idCity,userName,userPic,duration,price,likes,hashtags,activities,comments} = req.body
        const newItinerary = new Itinerary({title,idCity,userName,userPic,duration,price,likes,hashtags,activities,comments})
        newItinerary.save()
        .then(newItinerary => res.json({success:true, response: newItinerary}))
        .catch(error => res.json({success:false,error}))
    },
    /* borrar itinerario */
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
    /* agregar comentario */
    addComment:(req,res) =>{
       const idItinerary= req.params.idItinerary
       const newComment = {
           idUser:req.user._id,
           comment:req.body.newComment}
   
      
        Itinerary.findOneAndUpdate({_id:idItinerary},{ $push: { 'comments': newComment}},{new:true}).populate('idCity').populate('comments.idUser')
        .then( itinerary =>{
            
            res.json({success:true,message:'Comment added',itinerary})
        } )
        .catch(error => 
            {  res.json({success:false,error})})

    },
    /* borrar comentario */
    deleteComment:(req,res) =>{
    
        const idItinerary= req.params.idItinerary
        const idComment=req.params.idComment
        Itinerary.findOneAndUpdate({_id:idItinerary},{ $pull: {comments: {_id:idComment}}},{new:true}).populate('idCity').populate('comments.idUser')
        .then( itinerary => res.json({success:true,message:'Comment deleted',itinerary}))
        .catch(error => res.json({success:false,error}))

    },
    /* modificar comentario */
   editComment:(req,res) =>{
   
        const idItinerary= req.params.idItinerary
        const idComment=req.params.idComment
        const editedComment = req.body.editedComment
       
        Itinerary.findOneAndUpdate({_id:idItinerary,'comments._id':idComment},{ $set: {'comments.$.comment':editedComment}},{new:true}).populate('idCity').populate('comments.idUser')
        .then( itinerary => res.json({success:true,message:'Comment edited',itinerary}))
        .catch(error => res.json({success:false,error}))

    },
    addLike : (req,res) =>{
        const idItinerary = req.params.idItinerary
        const idUser = req.body.idUser
        Itinerary.findOneAndUpdate({_id:idItinerary},{$push: { 'likes': idUser}},{new:true}).populate('idCity').populate('comments.idUser')
        .then( itinerary =>{
            
            res.json({success:true,message:'Like added',itinerary})
        } )
        .catch(error =>   res.json({success:false,error}))

    },
    removeLike: (req,res) =>{
        
        const idItinerary = req.params.idItinerary
        const idUser = req.body.idUser
        
        Itinerary.findOneAndUpdate({_id:idItinerary},{$pull: {likes: idUser}},{new:true}).populate('idCity').populate('comments.idUser')
        .then( itinerary =>{
            
            res.json({success:true,message:'Like deleted',itinerary})
        } )

        .catch(error =>   res.json({success:false,error}))
    }
    
}

module.exports = itinerariesController
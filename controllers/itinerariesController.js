const Itinerary = require('../models/Itinerary')

const itinerariesController={
    /* agrega itinerario  */
    addItinerary:(req,res) =>{
        const {title,userName,userPic,duration,price,likes,hashtags,activities,comments} = req.body
        const idCity = req.params.idCity
        const newItinerary = new Itinerary({title,idCity,userName,userPic,duration,price,likes,hashtags,activities,comments})
        newItinerary.save()
        .then(newItinerary => res.json({success:true, response: newItinerary}))
        .catch(error => res.json({success:false,error}))
    },
    deleteItinerary: (req,res) =>{
        const id= req.params.idItinerary
        Itinerary.findOneAndRemove({_id:id})
        .then(response => res.json({success: true, message: "Itinerary removed"}))
        .catch(error => res.json({success:false,error}))

    },
    allItineraries: (req,res) =>{
        const id= req.params.idCity
        console.log(id)
        Itinerary.find({idCity:id})
        .then(response => res.json({success:true,response}))
        .catch(error=> res.json({success:true, error}))
    }
}

module.exports = itinerariesController
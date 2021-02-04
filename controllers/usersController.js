const jwq = require('jsonwebtoken')
const  User = require('../models/User')

const usersController={
    /* agrega itinerario  */
    newUser:(req,res) =>{
        const {username,password,name,lastName,userPic,country} = req.body
        const newItinerary = new User({username,password,name,lastName,userPic,country})
        newUser.save()
        .then(newUser => res.json({success:true, response: newUser}))
    }}

module.exports = usersController
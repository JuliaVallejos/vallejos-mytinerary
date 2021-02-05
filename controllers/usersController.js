const jwq = require('jsonwebtoken')
const  User = require('../models/User')

const usersController={
    /* agrega nuevo usuario */
    newUser:(req,res) =>{
        const {username,password,name,lastName,userPic,country} = req.body
        const newUser = new User({username,password,name,lastName,userPic,country})
        newUser.save()
        .then(newUser => res.json({success:true, response: newUser}))
        .catch(error =>console.log(error))
    }}

module.exports = usersController
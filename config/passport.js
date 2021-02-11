const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/User')

module.exports= passport.use(new jwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY
}, async (payload,done) =>{
    try{
        const user = await User.findById(payload._doc._id)
            if(!user){
              
                return done(null,false)
            }else{
               
                return done(null,user)
            } 
    }catch(error) {
      
        return done(error,false)
    }
}))
   

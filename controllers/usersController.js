const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const usersController={
    /* agrega nuevo usuario */
    newUser:(req,res) =>{
        const {username,password,name,lastName,userPic,country} = req.body
        User.findOne({username:username})
        .then(usedMail => {
            if(usedMail){
                res.json({success:false,errores:{details:[{message:'This username has already been used'}]}})
            }else{
                const encryptedPassword = bcryptjs.hashSync(password, 10)
                const newUser = new User({username,password:encryptedPassword,name,lastName,userPic,country})
                newUser.save()
               
                .then(newUser =>{
                    console.log(newUser)
                    var token = jwt.sign({...newUser}, process.env.SECRET_KEY, {})
                    res.json({success:true, response:{name: newUser.name,userPic:newUser.userPic,token}})})
                .catch(error => res.json({success:false,error}))
            }})
        .catch(error => res.json({success:false,error}))
       
    },
    login: (req,res) =>{
        const {username,password} = req.body
        User.findOne({username:username})
        .then( userExists => 
            {if(!userExists){
           return  res.json({success:false,errores:{details:[{message:'Wrong username or password '}]}})
            }
            const passwordTrue = bcryptjs.compareSync(password, userExists.password)
            if(!passwordTrue){
                return res.json({success:false,errores:{details:[{message:'Wrong username or password '}]}})
            }
            var token = jwt.sign({...userExists}, process.env.SECRET_KEY, {})
            return res.json({success: true, response: {name: userExists.name,userPic: userExists.userPic,token}})
        
        })
    },
    login_LS: (req,res) =>{
      
            return res.json({success: true, response: {name: req.user.name,userPic: req.user.userPic,token:req.body.token}}) 
        
    }
}
module.exports = usersController
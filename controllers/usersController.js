const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const usersController={
    /* agrega nuevo usuario */
    newUser:(req,res) =>{
        const {username,password,name,lastName,userPic,country,googleUser} = req.body
        User.findOne({username:username})
        .then(usedMail => {
            if(usedMail){
                res.json({success:false,errores:{details:[{message:'This username has already been used'}]}})
            }else{
                const encryptedPassword = bcryptjs.hashSync(password, 10)
                const newUser = new User({username,password:encryptedPassword,name,lastName,userPic,googleUser,country})
                newUser.save()
               
                .then(newUser =>{
                    var token = jwt.sign({...newUser}, process.env.SECRET_KEY, {})
                    res.json({success:true, response:{_id:newUser._id,name: newUser.name,userPic:newUser.userPic,token}})})
                .catch(error => res.json({success:false,error}))
            }})
        .catch(error => res.json({success:false,error}))
       
    },
    login: (req,res) =>{
        const {username,password,login_google} = req.body
        User.findOne({username:username})
        .then( userExists => {
            
            if(!userExists){
                return  res.json({success:false,errores:{details:[{message:'Wrong username or password '}]}})
            }
            const passwordTrue = bcryptjs.compareSync(password, userExists.password)
            if(userExists.googleUser===true && !login_google){
                return res.json({success:false,errores:{details:[{message:'You must Login with Google'}]}})
            }
            if(!passwordTrue){ 
                return res.json({success:false,errores:{details:[{message:'Wrong username or password '}]}})
            }
            
            var token = jwt.sign({...userExists}, process.env.SECRET_KEY, {})
            return res.json({success: true, response: {_id:userExists._id,name: userExists.name,userPic: userExists.userPic,token}})
        
        })
    },
    login_LS: (req,res) =>{
        if(req.user){
            return res.json({success: true, response: {_id:req.user._id,name: req.user.name,userPic: req.user.userPic,token:req.body.token}}) 
        } else{
            res.json({success:false,error})
        }    
            

    },
    all_users: (req,res) =>{
        User.find()
        .then( data =>{
            return res.json({success:true,data})
        })
        .catch(error =>{
            res.json({success:false,error})
        })
        
    },
    delete_user: (req,res) =>{
        const id= req.params.id
        User.findOneAndDelete({_id: id})
        .then( UserRemoved =>{
            return res.json({success:true,response: UserRemoved, message :'User Removed'})
             })
        .catch(error =>{
            return res.json({success:false,error})}
        )}
}
module.exports = usersController
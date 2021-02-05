const Joi = require('joi')

const validator = {
    validAccount: (req,res,next) =>{
        const schema =Joi.object({
            username: Joi.string().trim().required().email({tlds:{allow:false}}),
            password:Joi.string().trim().required().pattern(/(?=.*\d)/).min(5),
            name: Joi.string().trim().required().min(2).max(12),
            lastName:Joi.string().trim().required().min(2).max(25),
            userPic: Joi.string().uri(),
            country:Joi.string().required(),
            rol: Joi.string().trim(),
            googleUser:Joi.boolean()
        })
        const validation = schema.validate(req.body, {abortEarly:false})
        if (!validation.error){
            next()
        }else{
            res.json({success:false,errores:validation.error})
        }
    }
}

module.exports = validator
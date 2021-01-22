const City = require('../models/City')

const citiesController = {

    addCity: (req,res)=>{
        const {cityName,cityPic,cityCountry} = req.body
        const cityNew = new City({cityName,cityPic,cityCountry})
        cityNew.save()
        .then(addedCity => {
            return res.json({success: true, response: addedCity})})
        .catch(error =>{
            return res.json ({success: false, error})
        })
    },
    allCities: (req,res) => {
       City.find()
        .then(data =>{
            return res.json({success:true,response:data})
        .catch(error =>{
            return res.json({success:false, error})
        })
           
    })
},
itinerariesCity: (req,res) =>{
    const id= req.params.id
    City.findOne({
        _id:id
    })
    .then(data =>{
        return res.json({success:true,response:data})})
    .catch(error =>{
        return res.json({success:false, error:'No results found'})})
}
}
module.exports = citiesController
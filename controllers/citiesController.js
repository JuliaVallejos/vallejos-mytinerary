const City = require('../models/City')
const data = [
    {_id:'1',
    cityName:'Rome',
    cityPic: '../assets/roma.jpg'},
    {_id:'2',
    cityName:'Athens',
    cityPic: '../assets/atenas.jpg'},
    {_id:'3',
    cityName:'Paris',
    cityPic: '../assets/paris.jpg'},
    {_id:'4',
    cityName:'Prague',
    cityPic: '../assets/prague.jpg'},
    {_id:'5',
    cityName:'Istanbul',
    cityPic: '../assets/istanbul.jpg'}
]

const citiesController = {

    addCity: (req,res)=>{
        const {cityName,cityPic,cityCountry} = req.body
        const cityNew = new City({
            cityName: cityName,
            cityPic: cityPic,
            cityCountry: cityCountry
        })
        cityNew.save()
        .then(addedCity => {
            return res.json({success: true, response: addedCity})})
        .catch(error =>{
            return res.json ({success: false, error:error})
        })
    },
    allCities: (req,res) => {
       City.find()
        .then(data =>{
            return res.json({success:true,response:data})
        .catch(error =>{
            return res.json({success:false, error:error})
        })
           
    })
},
itinerariesCity: (req,res) =>{
    const id= req.params.id
    City.findOne({
        _id:id
    })
    .then(data =>{
        return res.json({success:true,response:data})
    .catch(error =>{
        return res.json({success:false, error:error})
    })
       
})
}
}
module.exports = citiesController
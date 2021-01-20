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
    allCities:(req,res) => {
        res.json({
            response:data
    })
},
itinerariesCity: (req,res) =>{
    const id= req.params.id
    data.map(city =>{
        
        if (city._id===id){
            res.json({
                response:city
            })
        }
    })
}
}
module.exports = citiesController
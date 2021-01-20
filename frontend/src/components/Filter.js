/* import React, {useState} from 'react'

 */
const Filter = (arrayCities) =>{
    /* console.log(arrayCities)
const [newCities,setNewCities] = useState([])
console.log(newCities)

    const filterCities = (arrayCities)=>{
    
    const city_search= document.querySelector('#search').value
    const filteredCities = arrayCities.map(city =>{
        console.log(city)
    return city.cityName.toUpperCase().indexOf(city_search.toUpperCase())=== 0 })
   setNewCities(filteredCities)
    

} */
    return(
        <>
        <h6>Find your City</h6>
        <input id='search' type='text' placeholder='Search' /* onKeyUp={filterCities} */></input>
        </>

    )
    

}

export default Filter
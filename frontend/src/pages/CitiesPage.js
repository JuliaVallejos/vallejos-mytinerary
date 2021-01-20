import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import CitiesList from '../components/CitiesList'

const CitiesPage= (props) =>{
    const [cities,setCities]= useState([])
    const [newCities,setNewCities] = useState([])

    const filterCities = ()=>{
        const city_search= document.querySelector('#search').value
        const filteredCities = cities.filter(city =>{
        return city.cityName.toUpperCase().indexOf(city_search.toUpperCase())=== 0 })
        setNewCities(filteredCities)
        }

    useEffect(() => {
        fetch('http://localhost:4000/api/cities')
        .then(response =>response.json())
        .then (data => {
            setCities(data.response)
            setNewCities(data.response)
            })
         
    }, [])
   
    return(
         
        <div className="cities">
            <h3>Cities Page</h3>
            <h6>Find your City</h6>
            <input id='search' type='text' placeholder='Search' onChange={filterCities} ></input>
            <CitiesList cities={newCities}/>
            <Link to='/'><button>Back to Home</button></Link>
        </div>

    )
}

export default CitiesPage
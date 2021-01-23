import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import CitiesList from '../components/CitiesList'
import Header from '../components/Header'
const CitiesPage= (props) =>{
    const [cities,setCities]= useState([])
    const [newCities,setNewCities] = useState([])
    const [results,setResults] = useState(true)
    const [load,setLoad]=useState()

    

    useEffect(() => {
        setLoad(true)
        fetch('http://localhost:4000/api/cities')
        .then(response =>response.json())
        .then (data => {
            setCities(data.response)
            setNewCities(data.response)
            setLoad(false)
         
            })      
    }, [])
    useEffect(() => {
     window.scrollTo(0, 0)
    }, [])
   

    const filterCities = ()=>{
        const no_results=
        {cityName:'No results found. Try again!',
        cityPic: './assets/no_results.jpg',
        results:false}
        const city_search= document.querySelector('#search').value
        const filteredCities = cities.filter(({cityName}) => cityName.toUpperCase().indexOf(city_search.toUpperCase().trim())=== 0)
      if (filteredCities.length!==0){
        setNewCities(filteredCities)
        setResults(true)
      }else{
          setNewCities([no_results])
          setResults(false)
      }
     
    }
     return(
         <>
         <Header/>
        <div className="cities_page">
            <h3>Cities</h3>
            <input id='search' type='text' placeholder='Find your City!' onChange={filterCities} ></input>
            {load && <h1 className='loading'>Loading...</h1>}
            <CitiesList cities={newCities} results={results} setLoad={setLoad}/>
            <Link to='/'><button className="back">Back to Home</button></Link>
        </div>
        </>

    )
}

export default CitiesPage
import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'

const Itineraries = (props) =>{
    
    const [city,setCity]= useState({})
    useEffect(() => {
        const id = props.match.params.id 
        fetch(`http://localhost:4000/api/itineraries/${id}`)
        .then(response =>response.json())
        .then (data => setCity(data.response))
 
    }, [])

 
    return(
        
        <div className='city_itineraries'>
            <div style={{
                backgroundImage:`url(${city.cityPic})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                width:'40vw',
                height:'20vh',
            }}>
            <h5>{city.cityName}</h5>
            </div>
            <h2>No itineraries yet
                
            </h2>
            <Link to='/cities'>
            <button>Back to cities</button>
            </Link>

        </div>
    )

}

export default Itineraries
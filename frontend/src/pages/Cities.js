import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Filter from '../components/Filter.js'



const Cities= (props) =>{
    const [cities,setCities]= useState([])
    useEffect(() => {
        fetch('http://localhost:4000/api/cities')
        .then(response =>response.json())
        .then (data => setCities(data.response))
       
        
    }, [])
   
    return(
        <div className="cities">
            
            <h3>Cities Page</h3>
            <Filter/> 
            {
            cities.map(({cityPic,cityName,_id},index) => {
            return (
               
               
                <Link key={`${index}city`} to ={`/itineraries/${_id}`}>
                <div  className='city' style={{
                    backgroundImage:`url(${cityPic})`,
                    backgroundSize: 'cover',
                  
                }}>
                    <h4>{`${cityName}`}</h4>
                </div>
                </Link>
                 
            ) })}
        </div>

    )
}

export default Cities
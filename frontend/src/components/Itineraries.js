import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import LittleHeader from './LittleHeader'

const Itineraries = (props) =>{
    const id = props.match.params.id 
    
    const [city,setCity]= useState({})
    useEffect(() => {
        fetch(`http://localhost:4000/api/itineraries/${id}`)
        .then(response => response.json())
        .then (data => {
            if(data.success){
                setCity(data.response)
        }else{
            alert(data.error)
            props.history.push('/cities')
            }
        })

    },[id])

 
    return(
        <div className='itineraries_page'>
            <LittleHeader banner={city.cityPic}/>
            <div className='city_itineraries' style={{
                    backgroundImage:`url(${city.cityPic})`,
                    backgroundSize:'cover',
                    backgroundPosition:'center'}}>
                <div style={{
                    /* backgroundImage:`url(${city.cityPic})`,
                    backgroundSize:'cover',
                    backgroundPosition:'center', */
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
        </div>
    )

}

export default Itineraries
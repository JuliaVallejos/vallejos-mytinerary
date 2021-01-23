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

    },[id,props.history])
    useEffect(() => {
        window.scrollTo(0, 0)
       }, [])
      

 
    return(
       
        <div className='itineraries_page'>
            <LittleHeader/>
            <h3>Itineraries</h3>
            <div className='city_itineraries' style={{
                    backgroundImage:`url(${city.cityPic})`,
                    backgroundSize:'cover',
                    backgroundPosition:'center'}}>
              
                <h5>{city.cityName}</h5>
                <div className='itineraries'>
                    <h4>No itineraries yet. Make one!</h4>
                </div>
                <Link to='/cities'>
                <button className="back">Back to cities</button>
                </Link>

            </div>
        </div>
       
    )

}

export default Itineraries
import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import LittleHeader from './LittleHeader'

/* componente de la página Itineraries */

const Itineraries = (props) =>{
    const id = props.match.params.id 
    
    const [city,setCity]= useState({})
    const [load,setLoad]=useState()

    useEffect(() => {
        setLoad(true)
        fetch(`http://localhost:4000/api/itineraries/${id}`)
        .then(response => response.json())
        .then (data => {
            if(data.success){
                setCity(data.response)
                setLoad(false)
        }else{
        /* si el fetcheo falla redirecciona a Cities */
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
              
              <h5>{load ? 'Loading...' : city.cityName}</h5>
                <div className='itineraries'>
                    <h4>No itineraries yet. Make one!</h4>
                </div>
                <Link to='/cities'>
                <button className="back">Back to Cities</button>
                </Link>

            </div>
        </div>
       
    )

}

export default Itineraries
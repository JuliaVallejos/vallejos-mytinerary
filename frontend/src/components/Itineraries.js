import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import LittleHeader from './LittleHeader'
import ItinerariesList from './ItinerariesList'
import {connect} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'
import itinerariesActions from '../redux/actions/itinerariesActions'
/* componente de la página Itineraries */

const Itineraries = (props) =>{
    const id = props.match.params.id 
   const {getCityById,itinerariesByCity,city,itinerariesList} = props

    useEffect(() => {
        getCityById(id)
        itinerariesByCity(id)

    },[id,getCityById,itinerariesByCity])
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
              
              <h5>{props.city.cityName}</h5>
              
                <div className='itineraries'>
                    {console.log(itinerariesList)}
                    {itinerariesList===[]&& <h4>No itineraries yet. Make one!</h4>}
                    <ItinerariesList itinerariesList={itinerariesList}/>

                </div>
                <div className='buttons'>
                    <Link to='/cities'>
                    <button className="back">Back to Cities</button>
                    </Link>
                    <Link to='/'>
                    <button className="back">Back to Home</button>
                    </Link>
                </div>
            </div>
        </div>
       
)}
const mapStateToProps = state =>{
    return {
        city: state.city.singleCity,
        itinerariesList: state.itinerary.itineraries

    }
}
const mapDispatchToProps = {
        getCityById: citiesActions.getCityById,
        itinerariesByCity : itinerariesActions.itinerariesByCity
        
    }

export default connect(mapStateToProps,mapDispatchToProps)(Itineraries)
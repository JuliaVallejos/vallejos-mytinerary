import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import SecondHeader from './SecondHeader'
import ItinerariesList from './ItinerariesList'
import {connect} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'
import itinerariesActions from '../redux/actions/itinerariesActions'
import PulseLoader from "react-spinners/PulseLoader"

/* componente de la página Itineraries */

const Itineraries = (props) =>{
    const id = props.match.params.id 
    const {getCityById,itinerariesByCity,city,itinerariesList,loading,setLoading} = props
 
    useEffect(() => {
        setLoading(true)
        getCityById(id)
        itinerariesByCity(id)
        
    },[id,getCityById,itinerariesByCity,setLoading])

    useEffect(() => {
        window.scrollTo(0, 0)
       }, [])
       

    return(
       
        <div className='itineraries_page'>
            <SecondHeader />
            <h3>Itineraries</h3>
            {(city && itinerariesList )?
            <div className='city_itineraries' style={{
                    backgroundImage:`url(${city.cityPic})`,
                    backgroundSize:'cover',
                    backgroundAttachment:'fixed',
                    backgroundPosition:'center'}}>
              
              <h5>{props.city.cityName}</h5>
              
                <div className='itineraries'>
                {loading===true ? <PulseLoader loading={loading}  color={'brown'} size={25}/>:
                    itinerariesList.length===0 ? <h4>No itineraries yet. Make one!</h4> : <ItinerariesList itinerariesList={itinerariesList}/>}
                </div>
                <div className='buttons'>
                    <Link to='/cities'>
                    <button className="back">Back to Cities</button>
                    </Link>
                    <Link to='/'>
                    <button className="back">Back to Home</button>
                    </Link>
                </div>
            </div> : <div className='itineraries'> <h1 className='error'>Please go Back to Home or Cities</h1></div>}
        
        </div>
       
)}
const mapStateToProps = state =>{
    return {
        city: state.city.singleCity,
        itinerariesList: state.itinerary.itineraries,
        loading:state.itinerary.loading
    }
}
const mapDispatchToProps = {
        getCityById: citiesActions.getCityById,
        itinerariesByCity: itinerariesActions.itinerariesByCity,
        setLoading: itinerariesActions.setLoading
    }

export default connect(mapStateToProps,mapDispatchToProps)(Itineraries)
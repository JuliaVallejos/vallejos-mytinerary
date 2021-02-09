import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import CitiesList from '../components/CitiesList'
import Header from '../components/Header'
import {connect} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'
import NoResults from '../components/NoResults'
import PulseLoader from "react-spinners/PulseLoader";

/* pagina Cities */
const CitiesPage= (props) =>{

 const {getCities,filterCities,newCities,loading,setLoading} = props
 

    useEffect(() => {
        setLoading(true)
        getCities()
    },[setLoading,getCities]) 

    useEffect(() => {
        window.scrollTo(0, 0)
       }, [])
       
       const readInput = e =>{
           const citySearch=e.target.value
           filterCities(citySearch)
       }
      return(
         <>
         
         <Header/>
        <div className="cities_page">
            <h3>Cities</h3>
            <input id='search' type='text' placeholder='Find your City!' onChange={readInput} ></input>
            {(loading && newCities.length===0)&&<PulseLoader loading={loading}  color={'brown'} size={20}/>}
            <CitiesList cities={newCities} />
            {(newCities.length===0 && loading===false)&& <NoResults/>}
            <Link to='/'><button className="back">Back to Home</button></Link>
        </div>
        </>
    )}

 const mapStateToProps = state =>{
     return{
       
         newCities : state.city.filteredCities,
         loading:state.city.loading
     }

 }
 const mapDispatchToProps ={
     getCities: citiesActions.getCities,
     filterCities: citiesActions.filterCities,
     setLoading: citiesActions.setLoading
 }


export default connect(mapStateToProps,mapDispatchToProps)(CitiesPage)
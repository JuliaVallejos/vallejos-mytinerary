import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import CitiesList from '../components/CitiesList'
import Header from '../components/Header'
import {connect} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'


const CitiesPage= (props) =>{
    /* const city_search= document.getElementById('search').value
  */
 const {getCities,filterCities,cities} = props
    useEffect(() => {
        getCities() 
        window.scrollTo(0, 0)
    },[getCities]) 
   
      return(
         <>
         <Header/>
        <div className="cities_page">
            <h3>Cities</h3>
            <input id='search' type='text' placeholder='Find your City!' onChange={()=> filterCities(this.value)} ></input>
            {/* {load && <h1 className='loading'>Loading...</h1>} */}
            <CitiesList cities={cities} /* results={results} setLoad={setLoad} *//>
            <Link to='/'><button className="back">Back to Home</button></Link>
        </div>
        </>
    )}

 const mapStateToProps = state =>{
     return{
         cities: state.city.cities,
         newCities : state.city.filteredCities
     }

 }
 const mapDispatchToProps ={
     getCities: citiesActions.getCities,
     filterCities: citiesActions.filterCities
 }


export default connect(mapStateToProps,mapDispatchToProps)(CitiesPage)
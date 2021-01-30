import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import CitiesList from '../components/CitiesList'
import Header from '../components/Header'
import {connect} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'
import NoResults from '../components/NoResults'


const CitiesPage= (props) =>{

 const city_search= document.querySelector('#search')
/*  const [loading,setLoading] = useState(true) */
 const {getCities,filterCities,newCities,loading,setLoading} = props

    useEffect(() => {
        setLoading(true)
        getCities() 
    },[setLoading,getCities]) 

    useEffect(() => {
        window.scrollTo(0, 0)
       }, [])
       
      return(
         <>
         
         <Header/>
        <div className="cities_page">
            <h3>Cities</h3>
            <input id='search' type='text' placeholder='Find your City!' onChange={()=> filterCities(city_search.value)} ></input>
            {(loading && newCities.length===0)&&<h2 className='loading'>...Loading...</h2>}
            
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
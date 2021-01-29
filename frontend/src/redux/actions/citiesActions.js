import axios from 'axios'


const citiesActions={
    getCities: () => {
        return async (dispatch,getstate) => {
            const data = await axios.get('http://localhost:4000/api/cities')
            dispatch({type:'ALL_CITIES', payload:data.data.response})  
        }},
    filterCities: (dispatch,getstate,city_search,cities) =>{
   
      console.log(cities)
    const no_results=[
            {cityName:'No results found. Try again!',
            cityPic: './assets/no_results.jpg',
            results:false}]
            
            const filteredCities = cities.filter(({cityName}) => cityName.toUpperCase().indexOf(city_search.toUpperCase().trim())=== 0)
          if (filteredCities.length!==0){
              dispatch({type:'FILTER_CITIES', payload:filteredCities})
          }else{
            dispatch({type:'FILTER_CITIES', payload:no_results})  
          }
         
        },
        getCityById: (idCity) => {
            return async (dispatch,getstate) => {
                const data = await axios.get(`http://localhost:4000/api/cities/${idCity}`)
                dispatch({type:'SINGLE_CITY', payload:data.data.response})  
            }},
   
  
}
export default citiesActions


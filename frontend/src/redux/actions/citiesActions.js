import axios from 'axios'


const citiesActions={
    getCities: () => {
        return async (dispatch,getstate) => {
            const data = await axios.get('http://localhost:4000/api/cities')
            dispatch({type:'ALL_CITIES', payload:data.data.response})  
        }},
    filterCities: city_search =>{
      return async (dispatch,getstate) =>{
        dispatch({type:'FILTER_CITIES', payload:city_search})
          
      }},
    getCityById: idCity => {
            return async (dispatch,getstate) =>{
              dispatch({type:'SINGLE_CITY', payload:idCity})
         
       }},
    setLoading: (load) => {
        return async (dispatch,getstate) => {
           
            dispatch({type:'LOADING', payload:load})  
        }},
   
  
}
export default citiesActions


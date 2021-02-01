import axios from 'axios'


const citiesActions={
    getCities: () => {
        return async (dispatch,getstate) => {
          try{
            const data = await axios.get('http://localhost:4000/api/cities')
            dispatch({type:'ALL_CITIES', payload:data.data.response})}
          catch(error){
            setTimeout(function(){
              alert('Error, back to Home')
              window.location.href ='/'
            },4000)
           
          }
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


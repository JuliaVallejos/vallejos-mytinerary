import axios from 'axios'
import Swal from 'sweetalert2'

const citiesActions={
  /* obtener todas las ciudades */
    getCities: () => {
        return async (dispatch,getstate) => {
          try{
            const data = await axios.get('http://localhost:4000/api/cities')
            dispatch({type:'ALL_CITIES', payload:data.data.response})
            return data.data.response}
          catch(error){
            setTimeout(function(){
              Swal.fire('Error, back to Home')
              window.location.href ='/'
            },4000)
           
          }
        }},
        /* agregar city */
    addCity: newCity =>{
      return async (dispatch,getstate) =>{
        try{
          const data= await axios.post('http://localhost:4000/api/cities',newCity)
         
          dispatch({type:'NEW_CITY',payload:data.data})
          return data
        }catch(error){
          
          return error
        }
      }
    },
      /* filtro de búsqueda */
    filterCities: city_search =>{
      return async (dispatch,getstate) =>{
        dispatch({type:'FILTER_CITIES', payload:city_search})
          
      }},
      /* obtener ciudad por id */
    getCityById: idCity => {
            return async (dispatch,getstate) =>{
              dispatch({type:'SINGLE_CITY', payload:idCity})
       }},
       /* preloader */
    setLoading: (load) => {
        return async (dispatch,getstate) => {
           
            dispatch({type:'LOADING', payload:load})  
        }},
   
  
}
export default citiesActions


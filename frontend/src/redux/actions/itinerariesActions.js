import axios from 'axios'

const itinerariesActions={
    /* ver todos los itinerarios de una ciudad */
    itinerariesByCity:(idCity)=>{
            return async (dispatch,getstate) => {
            try{
                const data = await axios.get(`http://localhost:4000/api/${idCity}/itineraries`)
                dispatch({type:'ALL_CITY_ITINERARIES', payload:data.data.response})}
            catch(error){
                setTimeout(function(){
                    alert('Error, back to Home')
                    window.location.href ='/'
                  },5000)
                }  
            }},
    /* preloader */
    setLoading: (load) => {
        return async (dispatch,getstate) => {
            
            dispatch({type:'LOADING', payload:load})  
        }},
           
          
}
export default itinerariesActions
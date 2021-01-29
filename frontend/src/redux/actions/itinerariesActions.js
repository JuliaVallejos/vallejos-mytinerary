import axios from 'axios'

const itinerariesActions={
    itinerariesByCity:(idCity)=>{
            return async (dispatch,getstate) => {
                const data = await axios.get(`http://localhost:4000/api/${idCity}/itineraries`)
                dispatch({type:'ALL_CITY_ITINERARIES', payload:data.data.response})  
            }}
}
export default itinerariesActions
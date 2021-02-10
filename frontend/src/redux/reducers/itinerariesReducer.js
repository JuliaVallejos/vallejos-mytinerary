const initialState ={
    itineraries:[],
    newItineraries:[],
    loading:''
    
}

function itinerariesReducer(state= initialState, action){
    switch (action.type){
        case 'ALL_CITY_ITINERARIES':

            /*obtener todos los itinerarios de una ciudad */
            return{
                ...state,
                itineraries:action.payload,
                newItineraries:action.payload,
                loading:false   
            }
        case 'LOADING':
            /* preloader */
            return{
                ...state,
                loading:action.payload
            }  
        case 'CHANGES':
           console.log(action.payload._id) 
            return {
                ...state,
                loading:false,
                newItineraries: state.newItineraries.map(itinerary => itinerary._id===action.payload._id ? itinerary=action.payload : itinerary)
              /* si el id del itinerario coincide con el del itinerario modificado se actualiza, sino se devuelve el itinerario como estaba */
            }
        default:
           
            return state

    }

}

export default itinerariesReducer
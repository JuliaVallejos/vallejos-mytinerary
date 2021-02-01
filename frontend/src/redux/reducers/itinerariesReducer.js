const initialState ={
    itineraries:[],
    loading:''
    
}

function itinerariesReducer(state= initialState, action){
    switch (action.type){
        case 'ALL_CITY_ITINERARIES':
            /*obtener todos los itinerarios de una ciudad */
            return{
                ...state,
                itineraries:action.payload,
                loading:false   
            }
        case 'LOADING':
            /* preloader */
            return{
                ...state,
                loading:action.payload
            }  
        default:
            return state

    }

}

export default itinerariesReducer
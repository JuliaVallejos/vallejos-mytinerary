
const initialState ={
    itineraries:[]
}

function itinerariesReducer(state= initialState, action){
    switch (action.type){
        case 'ALL_CITY_ITINERARIES':
            //obtener todas las cities//
            return{
                ...state,
                itineraries:action.payload
            }
           
            break
        default:
            return state

    }

}

export default itinerariesReducer


const initialState ={
    cities:[],
    filteredCities:[],
    singleCity:{}
}

function citiesReducer(state= initialState, action){
    switch (action.type){
        case 'ALL_CITIES':
            /* obtener todas las cities*/
            return{
                ...state,
                cities:action.payload
            }
            break;
          /*   filtrar cities */
        case 'FILTER_CITIES':
            console.log('filter')
            return{
                ...state,
                filteredCities:action.payload
            }
            break;
            case 'SINGLE_CITY':
                /* obtener city por id */
                return{
                    ...state,
                    singleCity:action.payload
                }
               
                break
    
    
        default:
            return state

    }

}

export default citiesReducer
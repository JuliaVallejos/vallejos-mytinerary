const initialState ={
    loggedUser:null
}
 function usersReducer(state= initialState,action){
    switch (action.type) {
        case 'NEW_USER':
            return{
                ...state,
                loggedUser:action.payload
            }
        default:
            return state


}}

export default usersReducer

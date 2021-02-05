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
        case 'LOGIN':
        return state
        case 'LOGOUT':
           
            return{
                ...state,
                loggedUser:null
            }
        default:
            return state


}}

export default usersReducer

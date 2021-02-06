const initialState ={
    loggedUser:null
}
 function usersReducer(state= initialState,action){
    switch (action.type) {
        
        case 'LOGIN':
          
            localStorage.setItem('name',action.payload.name)
            localStorage.setItem('userPic',action.payload.userPic)
            localStorage.setItem('token',action.payload.token)
        return {
            ...state,
            loggedUser:action.payload
        }
       
        case 'LOGOUT':
            localStorage.clear()
           
            return{
                ...state,
                loggedUser:null
            }
        case 'NEW_COMMENT':
            return state
        default:
            return state


}}

export default usersReducer

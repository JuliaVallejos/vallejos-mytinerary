const initialState ={
    loggedUser:null,
    loggedUserId:''
}
 function usersReducer(state= initialState,action){
    switch (action.type) {
        
        case 'LOGIN':
         
            localStorage.setItem('name',action.payload.name)
            localStorage.setItem('userPic',action.payload.userPic)
            localStorage.setItem('token',action.payload.token)
        return {
            ...state,
            loggedUser:action.payload,
            loggedUserId: action.payload._id
         
        }
       
        case 'LOGOUT':
            localStorage.clear()
           
            return{
                ...state,
                loggedUser:null,
                loggedUserId:''
            }
        case 'NEW_COMMENT':
            return state
      
        default:
            return state


}}

export default usersReducer

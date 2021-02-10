const initialState ={
    loggedUser:null,
    itineraryModified:{}
    
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
        
        }
       
        case 'LOGOUT':
            localStorage.clear()
           
            return{
                ...state,
                loggedUser:null
                
            }
      
      
        default:
            return state


}}

export default usersReducer

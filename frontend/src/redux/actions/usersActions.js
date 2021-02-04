import axios from 'axios'


const usersActions={
    newUser: () => {
        return async (dispatch,getstate) => {
          try{
            const data = await axios.post('http://localhost:4000/api/user')
            dispatch({type:'ALL_CITIES', payload:data.data.response})}
          catch(error){
            setTimeout(function(){
              alert('Error, back to Home')
              window.location.href ='/'
            },4000)
           
          }
        }},
    
    setLoading: (load) => {
        return async (dispatch,getstate) => {
           
            dispatch({type:'LOADING', payload:load})  
        }},
   
  
}
export default usersActions


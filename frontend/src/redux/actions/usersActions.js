import axios from 'axios'

const usersActions={
   createNewUser: newUser => {
        return async (dispatch,getstate) => {
          try{
            const data = await axios.post('http://localhost:4000/api/user/register',newUser)
            if (data.data.success){
              dispatch({type:'NEW_USER', payload:data.data.response})
              return data.data.response
            } else{
            return data.data
            }
        }catch(error){
          console.log(error)
        }}},

    login_user:()=>{
      return async (dispatch,getstate) => {
      dispatch({type:'LOGIN', payload:''})
    }},
    logout_user:()=>{
      return async (dispatch,getstate) => {
      dispatch({type:'LOGOUT', payload:''})
    }}
   
}
export default usersActions


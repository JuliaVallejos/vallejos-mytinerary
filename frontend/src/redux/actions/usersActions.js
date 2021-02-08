import axios from 'axios'
import Swal from 'sweetalert2'

const usersActions={
   createNewUser: newUser => {
        return async (dispatch,getstate) => {
          try{
            const data = await axios.post('http://localhost:4000/api/user/register',newUser)
            if (data.data.success){
              dispatch({type:'LOGIN', payload:data.data.response})
              return data.data.response
            } else{
            return data.data
            }
        }catch(error){
          const data ={errores:{details:[{message:'An error occurred'}]}}
          return data
        }}},

    login_user:newUser=>{
      return async (dispatch,getstate) => {
        try{
          const data = await axios.post('http://localhost:4000/api/user/login',newUser)
          if (data.data.success){
            
            dispatch({type:'LOGIN', payload:data.data.response})
            return data.data.response
          } else{
          
          return data.data
          }
      }catch(error){
        const data ={errores:{details:[{message:'An error occurred'}]}}
        return data
      }}},
      login_LS: (token) =>{
        return async (dispatch,getState) =>{
          try{
          const data = await axios.post('http://localhost:4000/api/user/verification',{token},{
            headers:{
              Authorization: `Bearer ${token}`
            }

          })
          if (data.data.success){
            dispatch({type:'LOGIN', payload:data.data.response})
          }
          
        } catch(error){
          if(error.response.status===401){
            localStorage.clear()
            Swal.fire('You are not authorized')
            const backToHome ='/'
            return backToHome
          }
        }
          
        }
      },
    logout_user:()=>{
      return async (dispatch,getstate) => {
      dispatch({type:'LOGOUT', payload:''})
    }},
   
    add_comment: (newComment,idItinerary) =>{
      return async (dispatch,getstate) => {
       const token = getstate().user.loggedUser.token
       
        try{
          const data = await axios.put(`http://localhost:4000/api/itineraries/${idItinerary}`,{newComment},
          {
            headers:{
              Authorization: `Bearer ${token}`
            }})
          
          if (data.data.success){
            dispatch({type:'NEW_COMMENT', payload:''})
            return data
          }
          
        } catch(error){
          console.log(error)
          const data ={errores:{details:[{message:'An error occurred'}]}}
          return data

        }
       
      }},
    editComment: (idItinerary,idComment,editedComment) =>{
        return async (dispatch,getstate) => {
          try{
            
            const data = await axios.put(`http://localhost:4000/api/itineraries/${idItinerary}/${idComment}`,{editedComment})
            if (data.data.success){
              dispatch({type:'NEW_COMMENT', payload:''})
              return data
            }  
        } catch(error){
          const data ={errores:{details:[{message:'An error occurred'}]}}
          return data
        }
        
      }},
      deleteComment: (idItinerary,idComment)=>{
        return async (dispatch,getstate) => {
          try{
          const data = await axios.delete(`http://localhost:4000/api/itineraries/${idItinerary}/${idComment}`)
          if (data.data.success){
            dispatch({type:'DELETE_COMMENT', payload:''})
            return data
          }  }  
       catch(error){
          
          const data ={errores:{details:[{message:'An error occurred'}]}}
          return data
         
      }}}
}
export default usersActions


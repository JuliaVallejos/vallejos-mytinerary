import axios from 'axios'
import Swal from 'sweetalert2'

const itinerariesActions={
    /* ver todos los itinerarios de una ciudad */
    itinerariesByCity:(idCity)=>{
            return async (dispatch,getstate) => {
            try{
                const data = await axios.get(`https://mytinerary-api.herokuapp.com/api/${idCity}/itineraries`)
                dispatch({type:'ALL_CITY_ITINERARIES', payload:data.data.response})}
            catch(error){
                setTimeout(function(){
                    Swal.fire('Error, back to Home')
                    window.location.href ='/'
                  },5000)
                }  
            }},
    /* preloader */
    setLoading: (load) => {
        return async (dispatch,getstate) => {
            
            dispatch({type:'LOADING', payload:load})  
        }},
    
add_comment: (newComment,idItinerary) =>{
    return async (dispatch,getstate) => {
       
        const token = getstate().user.loggedUser? getstate().user.loggedUser.token : ''
        
        try{
        const data = await axios.post(`https://mytinerary-api.herokuapp.com/api/itineraries/${idItinerary}`,{newComment},
        {
            headers:{
            Authorization: `Bearer ${token}`
            }})
        
        if (data.data.success){
            dispatch({type:'CHANGES', payload:data.data.itinerary})
            return data
        }
          
    } catch(error){
      
    if(error.response)
      {if(error.response.status===401){
       
       const data = {error:'Please Login to Comment'}
       
        return data}
      }else {
      return error}
    }
    }},
    editComment: (idItinerary,idComment,editedComment) =>{
        return async (dispatch,getstate) => {
        try{
            
            const data = await axios.put(`https://mytinerary-api.herokuapp.com/api/itineraries/${idItinerary}/${idComment}`,{editedComment})
            if (data.data.success){
            dispatch({type:'CHANGES', payload:data.data.itinerary})
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
        const data = await axios.delete(`https://mytinerary-api.herokuapp.com/api/itineraries/${idItinerary}/${idComment}`)
        if (data.data.success){
            dispatch({type:'CHANGES', payload:data.data.itinerary})
            return data
        }  }  
        catch(error){
        
        const data ={errores:{details:[{message:'An error occurred'}]}}
        return data
        
    }}},
    setLike: (idItinerary,bool) =>{
        return async (dispatch,getstate) =>{
        const idUser = getstate().user.loggedUser._id
        if (bool==='true')
            try{
            const data = await axios.post(`https://mytinerary-api.herokuapp.com/api/likes/${idItinerary}`,{idUser})
            if (data.data.success){
               
                dispatch({type:'CHANGES', payload:data.data.itinerary})
                return data
            }}  
            catch(error){
            return error
        }else  {
       
            try{
            
            const data = await axios.delete(`https://mytinerary-api.herokuapp.com/api/likes/${idItinerary}`,{data:{idUser}})
            if (data.data.success){
               
                dispatch({type:'CHANGES', payload:data.data.itinerary})
                return data
            }}  
            catch(error){
            return error
            }
        }
    }
    
          
}}
export default itinerariesActions
import {connect} from 'react-redux'
import Swal from 'sweetalert2'
import {useState} from 'react'

import itinerariesActions from '../redux/actions/itinerariesActions'

const SingleComment = (props) =>{
  
    const {idUser,comment,_id} = props.single_comment
    const [edit,setEdit] = useState(false)
    const [editedComment,setEditedComment] = useState(comment)

   const delete_comment = async ()=>{
    Swal.fire({
        title: 'Are you sure?',
        width:'300',
     
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async (result) => {
        if (result.isConfirmed) {
            const data = await props.deleteComment(props.idItinerary,_id)
            if(data.data.errores){
                Swal.fire('Error')
            }
          
        }
      })
      
   }
  const readInput= ()=>{
      setEditedComment(document.getElementById('edited_comment').value)
  }
    const send_new_comment = async () =>{
        
        const data = await props.editComment(props.idItinerary,_id,editedComment)
       if(data.data.errores){
        Swal.fire('Error')
     }else{
        setEdit(false)
    } } 

    
    return(
            <div className='single_comment'>
                <div className='user_comment'>
                    <div style={{backgroundImage:`url(${idUser.userPic})`}}></div>
                    
                    <p>{`${idUser.name} ${idUser.lastName} said:`}</p>
                    
                </div>
                <div className='controls'>
                    {!edit?<p>{comment}</p>: <div className='edit_comment'><textarea col='2' onChange={readInput} id='edited_comment' value={editedComment}/><button className='fas fa-share' onClick={send_new_comment}><span>Send</span></button></div>}
                   {props.loggedUser && props.loggedUser._id===idUser._id && 
                   <div className='btn_controls'>
                       <button onClick={delete_comment} className='far fa-trash-alt'></button>
                       <button onClick={()=>setEdit(true)} className="fas fa-edit"></button>
                    </div>}
                    
                </div>
            </div>
        
         
    )

}
const mapStateToProps = state => {
    return {
        loggedUser : state.user.loggedUser,
       
}}
const mapDispatchToProps = {
   
    editComment: itinerariesActions.editComment,
    deleteComment : itinerariesActions.deleteComment,
   
}
export default connect(mapStateToProps,mapDispatchToProps)(SingleComment)
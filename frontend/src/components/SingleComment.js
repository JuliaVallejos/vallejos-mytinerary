import {connect} from 'react-redux'
import Swal from 'sweetalert2'
import {useState} from 'react'
import usersActions from '../redux/actions/usersActions'
import itinerariesActions from '../redux/actions/itinerariesActions'

const SingleComment = (props) =>{
    const {name,userPic,comment,_id} = props.single_comment
    const [edit,setEdit] = useState(false)
    const [editedComment,setEditedComment] = useState(comment)

   const delete_comment = async ()=>{
       const data = await props.deleteComment(props.idItinerary,_id)
       if(data.data.errores){
        Swal.fire('Error')
    }else{
       props.itinerariesByCity(props.singleCity._id)
    }
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
        props.itinerariesByCity(props.singleCity._id)
    } } 

    
    return(
            <div className='single_comment'>
                <div className='user_comment'>
                    <img src={userPic} alt='user_pic'/>
                    <p>{`${name} said:`}</p>
                    
                </div>
                <div className='controls'>
                    {!edit?<p>{comment}</p>: <div><input onChange={readInput} id='edited_comment' value={editedComment}/><button onClick={send_new_comment}>Send</button></div>}
                    <div className='btn_controls'>
                       <i onClick={delete_comment} className='far fa-trash-alt'></i>
                       <i onClick={()=>setEdit(true)} className="fas fa-edit"></i>
                    </div>
                    
                </div>
            </div>
        
         
    )

}
const mapStateToProps = state => {
    return {
        loggedUser : state.user.loggedUser,
        singleCity :state.city.singleCity
    }
}
const mapDispatchToProps = {
    editComment: usersActions.editComment,
    deleteComment : usersActions.deleteComment,
    itinerariesByCity:itinerariesActions.itinerariesByCity
}
export default connect(mapStateToProps,mapDispatchToProps)(SingleComment)
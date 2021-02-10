import SingleComment from './SingleComment'
import Swal from 'sweetalert2'
import {useState} from 'react'
import {connect} from 'react-redux'
import itinerariesActions from '../redux/actions/itinerariesActions'


const ActivitiesAndComments = (props) =>{
   
    const {activities,comments,idItinerary,loggedUser,add_comment} = props
    const [valueInput,setValueInput] = useState('')

    const readInput = e =>{
        setValueInput(e.target.value)
    }

    const post_comment = async (e) =>{
        e.preventDefault()
        if(valueInput===''){
            Swal.fire('Please comment something')
    }else{
        const data = await add_comment(valueInput,idItinerary)
        
        if(data.data.errores){
            Swal.fire('Error')
        }else{
           setValueInput('')
        }}
    }
    return(
        <div className='more_info'>
            <h5>Activities</h5>
            <div className='activities_list'>
                
                    {activities.map(activity =>{
                        return(
                            <div key={activity._id} className='activity' style={{
                                backgroundImage:`url(${activity.activityPic})`,
                                backgroundSize: 'cover',
                            }}>
                                <h6>{activity.activityName}</h6>
                            </div>
                        )
                    })}
            </div>
            <h5>Comments</h5>
            <div className='comments'>
                {comments.map(comment => {
                    return(
                        <SingleComment key={comment._id} single_comment={comment} idItinerary={idItinerary}/> 
                    )
                })}
                {loggedUser?
                <div className='commentary'><input className='input_comment' value={valueInput} onChange={readInput} type='text' placeholder='Comment here'></input> <button type='submit' onClick={post_comment} className="fas fa-share"><span>Send</span></button></div>:
                <p className='guest'>Please Login to comment</p>}
            </div> 
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        loggedUser : state.user.loggedUser,
      
    }
    
}
const mapDispatchToProps = {
    add_comment :itinerariesActions.add_comment
 
}
export default connect(mapStateToProps,mapDispatchToProps)(ActivitiesAndComments)
import SingleComment from './SingleComment'
import Swal from 'sweetalert2'
import {useState} from 'react'
import {connect} from 'react-redux'
import usersActions from '../redux/actions/usersActions'

const ActivitiesAndComments = (props) =>{
    
    const {activities,comments,idItinerary,loggedUser,add_comment} = props
    const [update,setUpdate] = useState(false)
   
    const post_comment = async () =>{
        const comment = document.getElementById('input_comment')
      
        const data = await add_comment(comment,idItinerary)
        if(data.errores){
            Swal('Error')
        }else{
           Swal('Comment Added')
           setUpdate(!update)
        }
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
                    <SingleComment key={comment._id} single_comment={comment}/> 
                )
            })}
            <div className='commentary'><input className='input_comment' id='input_comment' type='text' placeholder={loggedUser? 'Comment here': 'Please Login to comment'}></input><i onClick={post_comment}className="fas fa-share"></i></div>
        </div> 
       </div>
    )
}

const mapStateToProps = state =>{
    return {
        loggedUser : state.user.loggedUser
    }
    
}
const mapDispatchToProps = {
    add_comment : usersActions.add_comment
}
export default connect(mapStateToProps,mapDispatchToProps)(ActivitiesAndComments)
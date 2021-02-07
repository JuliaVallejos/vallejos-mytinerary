import SingleComment from './SingleComment'
import Swal from 'sweetalert2'
import {connect} from 'react-redux'
import itinerariesActions from '../redux/actions/itinerariesActions'
import usersActions from '../redux/actions/usersActions'

const ActivitiesAndComments = (props) =>{
   
    const {activities,comments,idItinerary,loggedUser,add_comment} = props

    const post_comment = async () =>{
    const newComment = {
            name: loggedUser.name,
            userPic:loggedUser.userPic,
            comment:document.getElementById('input_comment').value
    }
    
        const data = await add_comment(newComment,idItinerary)
        
        if(data.data.errores){
            Swal.fire('Error')
        }else{
           document.getElementById('input_comment').value=''
           props.itinerariesByCity(props.singleCity._id)
          
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
                    <SingleComment key={comment._id} single_comment={comment} idItinerary={idItinerary}/> 
                )
            })}
            {loggedUser?
            <div className='commentary'><input className='input_comment' id='input_comment' type='text' placeholder='Comment here'></input> <i onClick={post_comment} className="fas fa-share"></i></div>:
            <p className='guest'>Please Login to comment</p>}
        </div> 
       </div>
    )
}

const mapStateToProps = state =>{
    return {
        loggedUser : state.user.loggedUser,
        singleCity :state.city.singleCity
    }
    
}
const mapDispatchToProps = {
    add_comment : usersActions.add_comment,
    itinerariesByCity:itinerariesActions.itinerariesByCity
   
}
export default connect(mapStateToProps,mapDispatchToProps)(ActivitiesAndComments)
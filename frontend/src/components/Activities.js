import SingleComment from './SingleComment'

const Activities = (props) =>{
    const {activities,comments} = props
   
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
            <div className='commentary'><input className='input_comment' type='text' placeholder='Please Login to comment'></input><i className="fas fa-share"></i></div>
        </div>
       </div>
    )

}

export default Activities
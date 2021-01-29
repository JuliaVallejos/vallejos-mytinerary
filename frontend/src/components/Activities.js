import Comment from './Comments'

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
        <Comment comments={comments}/>
       </div>
    )

}

export default Activities
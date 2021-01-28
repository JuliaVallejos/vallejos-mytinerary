
const Activities = (props) =>{
    const {activities,comments} = props
   
    return(
        <div className='more_info'>
       <h5>Activities</h5>
        <div className='activities_list'>
            
            {activities.map(activity =>{
                return(
                    <div className='activity' style={{
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
            {comments.map(({userName,userPic,comment},index) => {
                return(
                    <div key={index} className='single_comment'>
                        <div className='user_comment'>
                            <img src={userPic} alt='user_pic'/>
                            
                            <p>{`${userName} said:`}</p>
                        </div>
                   
                    <p>{comment}</p>
                    </div>
                )
            })}
        </div>
       </div>
    )

}

export default Activities
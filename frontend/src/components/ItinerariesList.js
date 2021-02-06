
import MoreInfo from './MoreInfo'

const ItinerariesList = (props) =>{
 
   return(
       
            <div className='itineraries_list'>
                { props.itinerariesList.map(({_id,title,userName,userPic,likes,duration,price,hashtags,activities,comments}) => {
                return (
                    
                    <div key={_id} className='single_itinerary'>
                        
                        <h5>{title}</h5>
                        <div className="center_itinerary">
                            <div className='user'>
                                <div  className='user_pic' style={{
                                    backgroundImage:`url(${userPic})`,
                                    backgroundSize: 'cover',
                                }}> </div>
                                <h6>{`${userName}`}</h6>
                            </div>
                            <div className="info">
                                <div className="info_data">
                                    <p>{`${likes} `}<i className="far fa-heart"></i></p>
                                    <p>{`Duration: ${duration} hs`}</p>
                                
                                </div>
                                <div className='info_data'>
                                    {hashtags.map((hashtag,index) => 
                                    {return (
                                        <p key={`${index}p`}>{`#${hashtag}`}</p>
                                    )})}
                                </div>
                            </div>
                        </div>
                        <MoreInfo activities={activities} comments={comments} idItinerary={_id}/>
                    </div>
                     
                ) })}
            
          </div>
        
            )  
}


export default ItinerariesList

import MoreInfo from './MoreInfo'


const ItinerariesList = (props) =>{
 
   return(
       
            <div className='itineraries_list'>
                { props.itinerariesList.map(({_id,title,userName,userPic,likes,duration,price,hashtags,activities,comments},index) => {
                return (
                    <div key={`${index}it`} className='single_itinerary'>
                        <h5>{title}</h5>
                        <div className="center_itinerary">
                            <div>
                                <div  className='user' style={{
                                    width:'6vw',
                                    height:'12vh',
                                    backgroundImage:`url(${userPic})`,
                                    backgroundSize: 'cover',
                                }}> </div>
                                <h6>{`${userName}`}</h6>
                            </div>
                            <div className="info">
                                <div className="info_data">
                                <p>{`${likes} `}<i className="far fa-heart"></i></p>
                                <p>{`Duration: ${duration} hs`}</p>
                                {'$'.repeat(price)}
                                </div>
                                <div className='info_data'>
                                {hashtags.map((hashtag,index) => {return (
                                    <p key={`${index}p`}>{`#${hashtag}`}</p>
                                )})}
                                </div>
                            </div>
                        </div>
                        <MoreInfo activities={activities} comments={comments}/>
                    </div>
                     
                ) })}
            
          </div>
        
            )  
}


export default ItinerariesList
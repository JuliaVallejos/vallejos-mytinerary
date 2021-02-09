import MoreInfo from './MoreInfo'
import {connect} from 'react-redux'
import usersActions from '../redux/actions/usersActions'
import itinerariesActions from '../redux/actions/itinerariesActions'

/* mapeo de itinerarios */
const ItinerariesList = (props) =>{

   
    const like_it = e =>{
        const idItinerary= e.target.id
        const bool = e.target.value
        console.log(bool)
      
       props.setLike(idItinerary,bool)
       .then( data =>{
        props.itinerariesByCity(props.singleCity._id)
        console.log(data.data.message)
       })
       .catch(error => console.log(error))
    }
  
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
                                   
                                    <p>{`${likes.length} `}<button id={_id} onClick={like_it} className={likes.includes(props.loggedUser._id)? 'fas fa-heart red' : 'far fa-heart'} value={likes.includes(props.loggedUser._id)? 'false' : 'true'}></button></p>
                                    <p>{`Duration: ${duration} hs`}</p>
                                    <p>{'$'.repeat(price)}</p>
                                
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
const mapStateToProps = state => {
    return{
        loggedUser:state.user.loggedUser,
        singleCity :state.city.singleCity
    }
}
const mapDispatchToProps = {
   setLike :usersActions.setLike,
   itinerariesByCity:itinerariesActions.itinerariesByCity
}

export default connect(mapStateToProps,mapDispatchToProps)(ItinerariesList)
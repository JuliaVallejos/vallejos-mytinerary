import MoreInfo from './MoreInfo'
import {connect} from 'react-redux'
import itinerariesActions from '../redux/actions/itinerariesActions'
import Swal from 'sweetalert2'

/* mapeo de itinerarios */
const ItinerariesList = (props) =>{
    
    const like_it = e =>{
        const idItinerary= e.target.id
        const bool = e.target.name
        
            props.setLike(idItinerary,bool)   
            .then( data =>{
        
                Swal.fire({
                    icon: 'success',
                    width: '200',
                    toast:'true',
                    title: data.data.message,
                    showConfirmButton: false,
                    timer: 1200
                }) 
                return false
            })
            .catch(error => {
                
                Swal.fire('An error ocurred')})
    }
  
   return(
       
            <div className='itineraries_list'>
         
                {props.itinerariesList.map(({_id,title,userName,userPic,likes,duration,price,hashtags,activities,comments}) => {
                  
                return (
                    
                    <div key={_id} className='single_itinerary'>
                        
                        <h5>{title}</h5>
                        <div className="center_itinerary">
                            <div className='user'>
                                <div  className='user_pic' style={{
                                    backgroundImage:`url(${userPic})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition:'center'
                                }}> </div>
                                <h6>{`${userName}`}</h6>
                            </div>
                            <div className="info">
                                <div className="info_data">
                                   
                                    <div className='likes'>
                                      
                                        <p>{`${likes.length} `}</p>
                                        {props.loggedUser? <button id={_id} onClick={like_it} className={likes.includes(props.loggedUser._id)? 'fas fa-heart red' : 'far fa-heart'} name={likes.includes(props.loggedUser._id)? 'false' : 'true'}></button> : <i className='far fa-heart'></i>}
                                    </div>
                                    <p>{`Duration: ${duration} hs`}</p>
                                    <p>{` $`.repeat(price)}</p>
                                
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
        itinerariesList:state.itinerary.newItineraries,
        loggedUser:state.user.loggedUser,
        singleCity :state.city.singleCity,
  
    }
}
const mapDispatchToProps = {
    setLoading:itinerariesActions.setLoading,
   setLike :itinerariesActions.setLike,
   disLike:itinerariesActions.disLike,
   itinerariesByCity:itinerariesActions.itinerariesByCity
}

export default connect(mapStateToProps,mapDispatchToProps)(ItinerariesList)
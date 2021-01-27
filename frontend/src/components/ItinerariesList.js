
import {useState,useEffect} from 'react'

const ItinerariesList = (props) =>{
    
    const id = props.idCity
    const [itinerariesList,setItinerariesList] = useState([])

    useEffect(() => {
       fetch(`http://localhost:4000/api/itineraries/all/${id}`)
       .then(response => response.json())
       .then( data =>{
       if(data.success){
           setItinerariesList(data.response)
       }else{
           console.log("error")
       }})
       
    }, [id])
   return(
            <div className='itineraries_list'>
                { itinerariesList.map(({title,userName,userPic,likes,duration,price,hashtags},index) => {
                return (
                    <div key={`${index}it`} className='single_itinerary'>
                        <h5>{title}</h5>
                        <div className="center_itinerary">
                            <div>
                                <div  className='user' style={{
                                    width:'5vw',
                                    height:'10vh',
                                    backgroundImage:`url(${userPic})`,
                                    backgroundSize: 'cover',
                                }}> </div>
                                <h6>{`${userName}`}</h6>
                            </div>
                            <div className="info">
                                <div className="info_data">
                                <p>{likes}<i class="far fa-heart"></i></p>
                                <p>{`${duration} hs`}</p>
                                {'$'.repeat(price)}
                                </div>
                                <div className='info_data'>
                                {hashtags.map(hashtag => {return (
                                    <p>{`#${hashtag}`}</p>
                                )})}
                                </div>
                            </div>
                        </div>
                        <button>View More</button>
                    </div>
                     
                ) })}
            
          </div>
            )
  
       
}

export default ItinerariesList
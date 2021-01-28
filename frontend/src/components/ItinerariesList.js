
import {useState,useEffect} from 'react'
import Activities from './Activities'

const ItinerariesList = (props) =>{
    const idCity = props.idCity
    const [itinerariesList,setItinerariesList] = useState([])
    const [moreInfo,setMoreInfo] = useState(true)


    useEffect(() => {
       fetch(`http://localhost:4000/api/${idCity}/itineraries`)
       .then(response => response.json())
       .then( data =>{
       if(data.success){
           setItinerariesList(data.response)
       }else{
           console.log("error")
       }})
       
    }, [idCity])
   return(
            <div className='itineraries_list'>
                { itinerariesList.map(({title,userName,userPic,likes,duration,price,hashtags,activities,comments},index) => {
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
                        <button onClick={()=> setMoreInfo(!moreInfo)}>{moreInfo ? 'View More' : 'View Less'}</button>
                        {!moreInfo && <Activities activities={activities} comments={comments}/>}
                    </div>
                     
                ) })}
            
          </div>
            )
  
       
}

export default ItinerariesList
import {useState} from 'react'
import ActivitiesAndComments from './ActivitiesAndComments'

const MoreInfo = (props) =>{
    const [moreInfo,setMoreInfo]=useState(true)
    const {activities,comments,idItinerary} = props
    return(
    <>   
        <button className='btn_info' onClick={()=> setMoreInfo(!moreInfo)}>{moreInfo ? 'View More' : 'View Less'}</button>
        {!moreInfo && <ActivitiesAndComments activities={activities} comments={comments} idItinerary={idItinerary}/>}
    </>
 )
}

export default MoreInfo
import {useState} from 'react'
import Activities from './Activities'

const MoreInfo = (props) =>{
    const [moreInfo,setMoreInfo]=useState(true)

    const {activities,comments} = props
    return(
    <>   
        <button className='btn_info' onClick={()=> setMoreInfo(!moreInfo)}>{moreInfo ? 'View More' : 'View Less'}</button>
        {!moreInfo && <Activities activities={activities} comments={comments}/>}
    </>
 )
}

export default MoreInfo
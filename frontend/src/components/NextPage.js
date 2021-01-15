import {Link} from 'react-router-dom'
import React from 'react'

const NextPage = () => {  
        return(
            <div className="next_page">
                
                <Link to='/cities'>
            
                <img src="./assets/departures2.jpg" alt="cities"/>
                
                </Link>
            </div>
        )
}
export default NextPage
   
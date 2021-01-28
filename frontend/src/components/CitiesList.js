
import {Link} from 'react-router-dom'
import NoResults from './NoResults'

const CitiesList = ({cities,results}) =>{
  
   return(
             <> {results ? 
            <div className='cities_list'>
                { cities.map(({cityPic,cityName,_id},index) => {
                return (
                 <Link key={`${index}city`} to={`/itineraries/${_id}`}>
                    <div  className='city' style={{
                        backgroundImage:`url(${cityPic})`,
                        backgroundSize: 'cover',
                    
                    }}>
                        <h4>{`${cityName}`}</h4>
                    </div>
                     </Link>
                     
                ) })} 
            </div> : <NoResults cities={cities}/> 
            }
           
            </>
            )
  
       
}

export default CitiesList

import {Link} from 'react-router-dom'
 /* mapeo de las ciudades */
const CitiesList = ({cities}) =>{
    
   return(
            <div className='cities_list'>
                
                {cities.map(({cityPic,cityName,_id},index) => {
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
            </div> 
)     
}

export default CitiesList
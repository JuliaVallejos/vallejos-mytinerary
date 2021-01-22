
import {Link} from 'react-router-dom'
import NoResults from './NoResults'


const CitiesList = ({cities}) =>{
    console.log(cities)
    if (cities[0]._id) {
         return(
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
            </div>)
    }else{
        return (
                <NoResults cities={cities}/>
                    )
        }
       
}

export default CitiesList
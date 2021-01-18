
const MapSlide = ({cities})=>{
    return(

        <div className='slides'>
                {cities.map((city,index) =>{
                    const photo = require(`../assets/${city.url}`)
                    
                    return(
                    <div className='photo_slide' key={`${index}_photo`} style={{
                        backgroundImage:`url(${photo.default})`,
                        backgroundSize:'cover',
                        backgroundPosition:'center',
                        width:'50%',
                        height:'50%'

                    }}>
                        <h1>{city.title}</h1>
                        
                    </div>
                    )})
                    }
        </div>)
}

export default MapSlide

const MapSlide = ({cities})=>{
    return(

        <div className='slides'>
                {cities.map((city,index) =>{
    
                    return(
                    <div className='photo_slide' key={`${index}_photo`} style={{
                        backgroundImage:`url(../assets/${city.url})`,
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
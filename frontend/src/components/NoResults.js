const NoResults = ({cities}) =>{
 
        return(

            <div className='cities_list'>
                {cities.map(({cityPic,cityName},index) => {
                return (
                    <div  className='city' style={{
                        backgroundImage:`url(${cityPic})`,
                        backgroundSize: 'cover',                  
                    }}>
                        <h4>{`${cityName}`}</h4>
                    </div>
                
                ) })}
                
            </div>)
  
}

export default NoResults
const NoResults = () =>{
 const no_results ={
     photo: '../assets/no_results.jpg',
     text: 'No results found'
 }
        return(

            <div className='cities_list'>
                    <div className='city' style={{
                        backgroundImage:`url(${no_results.photo})`,
                        backgroundSize: 'cover',                  
                    }}>
                        <h4>{no_results.text}</h4>
                    </div>
               
            </div>)
  
}

export default NoResults
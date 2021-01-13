const Slides = () =>{
    const cities = [
        {title:'Paris', url:'./assets/paris.jpg'},
        {title:'Roma', url:'./assets/roma.jpg'},
        {title:'Atenas', url:'./assets/atenas.jpg'},
        {title:'Estambul', url:'assets/estambul.jpg'}
    ]
    
    return(
        <div className="slides">
            {cities.map(city =>{
                return(
                <div style={{
                    backgroundImage:`url(${city.url})`,
                    backgroundSize:'cover',
                    backgroundPosition:'center',
                    width:'50%',
                    height:'50%'

                }}>
                    <h1>{city.title}</h1>
                    
                </div>
                )})}
       </div> 
    )
    

}
export default Slides
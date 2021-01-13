const PopularsMYtineraries = () =>{
    const cities= [
        {title: "Rome", img: "./assets/roma.jpg"},
        {title: "Paris", img: "./assets/paris.jpg"},
        {title: "Estambul", img: "./assets/estambul.jpg"},
        {title: "Atenas", img: "./assets/atenas.jpg"}

        ]
    return(
        <div className="cities">
            {cities.map((city,index)  =>{
                const img = city.img
                const title = city.title

            return(
                 <img key={index} src={img} alt={title}/>
            )
                     
           })}
        </div>

    )    
}
export default PopularsMYtineraries;
import Carousel from 'react-bootstrap/Carousel'
import MapSlide from './MapSlide'
import 'bootstrap/dist/css/bootstrap.min.css';


const CarouselCities = () =>{
    const citiesAsia = [
        {title:'New Delhi', url:'new-delhi.jpg'},
        {title:'Tokyo', url:'tokyo.jpg'},
        {title:'Dubai', url:'dubai.jpg'},
        {title:'Istanbul', url:'istanbul.jpg'}
    ]
    const citiesEurope = [
        {title:'Prague', url:'prague.jpg'},
        {title:'Rome', url:'rome.jpg'},
        {title:'Athens', url:'athens.jpg'},
        {title:'Paris', url:'paris.jpg'}
    ]
    const citiesAmerica = [
        {title:'Rio de Janeiro', url:'rio-de-janeiro.jpg'},
        {title:'Buenos Aires', url:'buenos-aires.jpg'},
        {title:'New York', url:'new-york.jpg'},
        {title:'Cancun', url:'cancun.jpg'}
    ]
    var continents = [{
      pictures: citiesAsia,
      title: 'Asia'}
      ,{pictures:citiesEurope,
        title:'Europe'}
        ,{pictures:citiesAmerica,
        title: "America"}]

    return ( 
       <div className="PopularMYtineraries">
           <h2>Popular Mytineraries</h2>
           <Carousel fade={true} interval={3000}>
            {continents.map((continent,index)=>{
               return (
                <Carousel.Item  key={`${index}_slide`} >
                    <MapSlide cities={continent.pictures} />
                    <Carousel.Caption>
                    <h2>{continent.title}</h2>
                    </Carousel.Caption>
                </Carousel.Item>
             )
            })}
            </Carousel>              
        </div>   
    )
}

export default CarouselCities;
import Carousel from 'react-bootstrap/Carousel'
import MapSlide from './MapSlide'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/section.css'

const CarouselCities = () =>{
    const citiesAsia = [
        {title:'New Delhi', url:'./assets/new-delhi.jpg'},
        {title:'Tokio', url:'./assets/tokio.jpg'},
        {title:'Dubai', url:'./assets/dubai.jpg'},
        {title:'Istanbul', url:'assets/istanbul.jpg'}
    ]
    const citiesEurope = [
        {title:'Paris', url:'./assets/paris.jpg'},
        {title:'Roma', url:'./assets/roma.jpg'},
        {title:'Atenas', url:'./assets/atenas.jpg'},
        {title:'Prague', url:'assets/prague.jpg'}
    ]
    const citiesAmerica = [
        {title:'Rio de Janeiro', url:'./assets/rio-de-janeiro.jpg'},
        {title:'Buenos Aires', url:'./assets/buenos-aires.jpg'},
        {title:'New York', url:'./assets/new-york.jpg'},
        {title:'Cancun', url:'assets/cancun.jpg'}
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
            {continents.map((continent)=>{
               return (
                <Carousel.Item >
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
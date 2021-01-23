import Header from '../components/Header'
import Slogan from '../components/Slogan'
import CarouselCities from '../components/CarouselCities'
import {useEffect} from 'react'


const HomePage = () =>{
    useEffect(() => {
        window.scrollTo(0, 0)
       }, [])
      
    
    return(
        <div className='home_page'>
            <Header/>
             <Slogan/>
            <CarouselCities/>
        </div>
    )
}

export default HomePage
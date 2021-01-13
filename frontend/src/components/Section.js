import {useState} from 'react'
import Subtitle from './Subtitle'

import CarouselCities from './CarouselCities'

import '../styles/section.css'

const Section = () =>{
    const [message, setMessage] = useState(false)
    const nextPage = () =>{
        setMessage(!message)
    
    }
    return(
        <section>
            <Subtitle/>
            <div className="message">
                <button onClick={nextPage}>Next Page</button>
                <p>{message && "Hi I'm a Message" }</p>
            </div>

         {/*    <div className="avion" style={{
                backgroundImage: 'url("./assets/avion.jpg")',
                width: '100px',
                backgroundColor:'red'
            }}></div> */}
            <CarouselCities/>
            {/* <Slides/> */}
         
        </section>
    )
}

export default Section
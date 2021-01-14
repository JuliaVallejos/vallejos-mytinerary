
import {useState} from 'react'; 

const NextPage = () => {
   const [message, setMessage] = useState(false)
    const nextPage = () =>{
         setMessage(!message) 
        alert("Page cities") 
    }   
        return(
            <div className="next_page">
                <button onClick={nextPage}><img src="./assets/avion.jpg"/></button>
         
            </div>
        )

}
export default NextPage
   

import{useState,useEffect} from 'react'

const Countries = (props) =>{
    const [countries,setCountries] = useState([])
    useEffect(() =>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data =>{
            setCountries(data)
        })
        
    },[])
    return(

      <select id="country" name="country" onChange={props.readForm}> 
        <option value='' >Country</option>
        {countries.map((country,index) =>{
            return (
            <option key={index} value={country.name}>{country.name}</option>
            )
        })}
             
        </select>
    )}
export default Countries
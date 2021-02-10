import React,{useState} from 'react'
import{connect} from 'react-redux'
import Swal from 'sweetalert2'
import Header from './Header'
import citiesActions from '../redux/actions/citiesActions'

const AddCity = (props) =>{
    const [error,setError]=useState()
  const [newCity,setNewCity] = useState({
           cityName:'',
           cityPic:'',
           cityCountry:''
        })
      

        const readForm = e =>{
            const property = e.target.name
            const value = e.target.value
            setNewCity({
                ...newCity,
                [property]:value
            })
        }
        const send_data = async e =>{
            e.preventDefault()
            const {cityName,cityPic,cityCountry} = newCity
            if(cityName ==='' || cityPic==='' || cityCountry===''){
                setError('All required(*) fields must be completed')
                return false
            }
        
            const data = await props.addCity(newCity)
        
            if(data.success){

                Swal.fire(`City Added`)
                props.history.push('/cities')
            }else{
                Swal.fire('An error ocurred')
            }
        
        }
        return(
            <div className='cities_page'>
                <Header/>
                <h3>Add City</h3>
                <form>
                        <label htmlFor='cityName'><i className="fas fa-map-signs"></i><input type='text' name='cityName' placeholder='City Name*' onChange={readForm}/></label>
                        <label htmlFor='cityPic'><i className="fas fa-camera"></i><input type='text'name='cityPic' placeholder='City Photo*' onChange={readForm}/></label>
                        <label htmlFor='cityCountry'><i className="fas fa-globe-americas"></i><input type='text'name='cityCountry' placeholder='Country*' onChange={readForm}/></label>
                        <button className='back' onClick={send_data} type='submit'>Submit</button>
                        {error&& <p>{error}</p>}
                    </form> 
            </div>
        ) 
    }
const mapDispatchToProps = {
    addCity :citiesActions.addCity
}
export default connect(null,mapDispatchToProps)(AddCity)
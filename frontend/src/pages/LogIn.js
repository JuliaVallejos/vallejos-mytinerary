import SecondHeader from '../components/SecondHeader'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import Swal from 'sweetalert2'
import {connect} from 'react-redux'
import usersActions from '../redux/actions/usersActions'

const LogIn = (props) => {
    const [loggedUser,setLoggedUser] = useState({
        username:'',
        password:''
    })
    const [errors,setErrors] = useState([])

    const readForm = e =>{
        const property = e.target.name
        const value = e.target.value
        setLoggedUser({
            ...loggedUser,
            [property]:value
        })
    }
    const send_data = async e =>{
        e.preventDefault()
        if(loggedUser.name==='' || loggedUser.password===''){
            setErrors([{message:'All fields must be completed'}])
            return false
        }
        const data = await props.login_user(loggedUser)
        if(data.errores){
            setErrors(data.errores.details)
        }else{
            setErrors([])
            Swal.fire(`Welcome ${data.name}`)
            props.history.push('/')
        }
    }
    return(
        <>
        <SecondHeader/>
        <div className='register'>
            <h3>Log In</h3>
            <form>
               <label htmlFor='username'><i className="fas fa-envelope"></i><input id='username' name='username' type='text' placeholder='Username(email)' onChange={readForm}/></label> 
               <label htmlFor='password'><i className="fas fa-lock"></i><input id='password'name='password' type='password' placeholder='Password' onChange={readForm}/></label>

                <button className='back' onClick={send_data} type='submit'>Log In</button>
                {errors&& errors.map((error,index) =>{
                        return ( <p key={index}>{error.message}</p>)
                    })}
                <Link to ='/register'><p>Don't have account? Create one!</p></Link>

            </form>
        </div>
        </>
    )
}

const mapDispatchToProps ={
    login_user : usersActions.login_user
}
export default connect(null,mapDispatchToProps)(LogIn)
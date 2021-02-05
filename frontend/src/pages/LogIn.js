import SecondHeader from '../components/SecondHeader'
import {Link} from 'react-router-dom'
import {useState} from 'react'

const LogIn = () => {
    const [loggedUser,setLoggedUser] = useState({})
    const send_data = e =>{
        e.preventDefault()

    }
    const readForm = e =>{
        const property = e.target.name
        const value = e.target.value
        setLoggedUser({
            ...loggedUser,
            [property]:value
        })
        console.log(loggedUser)
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
                <Link to ='/register'><p>Don't have account? Create one!</p></Link>

            </form>
        </div>
        </>
    )
}

export default LogIn
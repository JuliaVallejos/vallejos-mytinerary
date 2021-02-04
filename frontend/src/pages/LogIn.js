import SecondHeader from '../components/SecondHeader'
import {Link} from 'react-router-dom'

const LogIn = () => {
    const send_data = e =>{
        e.preventDefault()

    }

    return(
        <>
        <SecondHeader/>
        <div className='register'>
            <h3>Log In</h3>
            <form>
               <label htmlFor='username'><i className="fas fa-envelope"></i><input id='username' name='username' type='text' placeholder='Username(email)'/></label> 
               <label htmlFor='password'><i className="fas fa-lock"></i><input id='password'name='password' type='password' placeholder='Password'/></label>

                <button className='back' onClick={send_data} type='submit'>Log In</button>
                <Link to ='/register'><p>Don't have account? Create one!</p></Link>

            </form>
        </div>
        </>
    )
}

export default LogIn
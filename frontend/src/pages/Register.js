import Countries from '../components/Countries'
import SecondHeader from '../components/SecondHeader'
import {Link} from 'react-router-dom'

const Register = () => {
    const send_data = e =>{
        e.preventDefault()

    }

    return(
        <>
            <SecondHeader/>
            <div className='register'>
                <h3>Create an Account</h3>
                <form>

                    <label htmlFor='username'><i className="fas fa-envelope"></i><input id='username' name='username' type='text' placeholder='Username(email)'/></label> 
                    <label htmlFor='password'><i className="fas fa-lock"></i><input id='password'name='password' type='password' placeholder='Password'/></label>
                    <label htmlFor='name'><i className="far fa-user-circle"></i><input type='text' name='name' id='name' placeholder='Name'/></label>
                    <label htmlFor='lastname'><i className="fas fa-user-circle"></i><input type='text' name='lastname' id='lastname' placeholder='Last Name'/></label>
                    <label htmlFor='userpic'><i className="fas fa-camera"></i><input type='text'name='userpic' id='userpic' placeholder='User Photo'/></label>
                    <label htmlFor ='country'><i className="fas fa-globe-americas"></i><Countries/></label>
                    <button className='back' onClick={send_data} type='submit'>Submit</button>
                    <Link to ='/login'><p>Do you already have an account? Log in here</p></Link>

                </form>
            </div>
        </>
    )
}

export default Register
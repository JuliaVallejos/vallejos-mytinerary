import Countries from '../components/Countries'
import SecondHeader from '../components/SecondHeader'
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
                <input type='text' placeholder='Username'/>
                <input type='password' placeholder='Password'/>
                <input type='text' placeholder='Name'/>
                <input type='text' placeholder='Last Name'/>
                <input type='text' placeholder='User Photo'/>
                <Countries/>
                
               
                <button className='back' onClick={send_data} type='submit'>Submit</button>

            </form>
        </div>
        </>
    )
}

export default Register
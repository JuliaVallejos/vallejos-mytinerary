import Countries from '../components/Countries'
import SecondHeader from '../components/SecondHeader'
import {Link} from 'react-router-dom'
import React,{useState} from 'react'
import Swal from 'sweetalert2'
import {connect} from 'react-redux'
import usersActions from '../redux/actions/usersActions'

const Register = (props) => {

    const{createNewUser} = props
    const [newUser,setNewUser] = useState({
        username:'',
        password:'',
        name:'',
        lastName:'',
        userPic:'',
        country:''
    })
    const [errors,setErrors] = useState([])

    const readForm = e =>{
        const property = e.target.name
        const value = e.target.value
        setNewUser({
            ...newUser,
            [property]:value
        })
    }

    const send_data = async e =>{
        e.preventDefault()
        const {username,password,name,lastName,userPic,country} = newUser
        if(username==='' || password===''|| name ==='' || lastName==='' || userPic==='' || country===''){
            setErrors([{message:'All fields must be completed'}])
            return false
        }
    
        const data = await createNewUser(newUser)
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
                <h3>Create an Account</h3>
                <form>
                    <label htmlFor='username'><i className="fas fa-envelope"></i><input id='username' name='username' type='text' placeholder='Username(email)' onChange={readForm}/></label> 
                    <label htmlFor='password'><i className="fas fa-lock"></i><input id='password'name='password' type='password' placeholder='Password' onChange={readForm}/></label>
                    <label htmlFor='name'><i className="far fa-user-circle"></i><input type='text' name='name' id='name' placeholder='Name' onChange={readForm}/></label>
                    <label htmlFor='lastName'><i className="fas fa-user-circle"></i><input type='text' name='lastName' id='lastName' placeholder='Last Name' onChange={readForm}/></label>
                    <label htmlFor='userPic'><i className="fas fa-camera"></i><input type='text'name='userPic' id='userPic' placeholder='User Photo' onChange={readForm}/></label>
                    <label htmlFor ='country'><i className="fas fa-globe-americas"></i><Countries readForm={readForm}/></label>
                    <button className='back' onClick={send_data} type='submit'>Submit</button>
                   
                    {errors&& errors.map((error,index) =>{
                        return ( <p key={index}>{error.message}</p>)
                    })}
                    <Link to ='/login'><p>Do you already have an account? Log in here</p></Link>

                </form>
            </div>
        </>
    )
}

const mapDispatchToProps ={
    createNewUser : usersActions.createNewUser
}
export default connect(null,mapDispatchToProps)(Register)
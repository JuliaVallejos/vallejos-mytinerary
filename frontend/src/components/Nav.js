import {Link} from 'react-router-dom'
import React, {useState} from 'react'
import {connect} from 'react-redux'
import usersActions from '../redux/actions/usersActions'

const Nav = (props) =>{
    const photo = require("../assets/male-user.png")
    const {loggedUser,logout_user} = props
    const [openMenu,setOpenMenu]= useState(false) 
    return(
        <nav>
          <div className='nav_buttons'>
              {loggedUser&& <p>Hello {loggedUser.name}</p> }
            <div onClick={()=> setOpenMenu(!openMenu)} className='user_pic btn_dropdown' style={
                { backgroundImage:`url(${loggedUser? loggedUser.userPic : photo.default})`,backgroundSize:'cover',backgroundPosition:'center'}}></div>
            <div className='links'>
                <Link to='/'>
                <p>HOME</p>
                </Link>
                <Link to='/cities'>
                <p>CITIES</p>
                </Link>
            </div>  
           

          </div>
          {openMenu&& 
                    <div className='dropdown_content'>
                        <Link onClick={loggedUser&& logout_user} to='/login'><p>{loggedUser? 'Log Out' : 'Log In'}</p></Link>
                        <Link to='/register'><p>Register</p></Link>
                    </div>}
          
                
            
        </nav>
    )
}
const mapStateToProps = state =>{
    return{
    loggedUser : state.user.loggedUser
    }
}
const mapDispatchToProps={

    logout_user: usersActions.logout_user
}
export default connect(mapStateToProps,mapDispatchToProps)(Nav)
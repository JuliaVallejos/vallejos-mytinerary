import {Link} from 'react-router-dom'
import React, {useState} from 'react'

const Nav = () =>{
    const photo = require("../assets/male-user.png")
    const [openMenu,setOpenMenu]= useState(false) 
    return(
        <nav>
          <div className='nav_buttons'>
            <div onClick={()=> setOpenMenu(!openMenu)} className='user_pic' style={{ backgroundImage:`url(${photo.default})`,backgroundSize:'cover',backgroundColor:'white'}}></div>
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
                        <Link to='/login'><p>Log In</p></Link>
                        <Link to='/register'><p>Register</p></Link>
                    </div>}
          
                
            
        </nav>
    )
}
export default Nav
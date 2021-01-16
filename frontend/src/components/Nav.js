import {Link} from 'react-router-dom'
const Nav = () =>{
    const photo = require("../assets/male-user.png")
    return(
        <nav>
            <img src={photo.default} alt="user" style={
                {backgroundColor:'white',
                    borderRadius:'100%'}}></img>
            <Link to='/'>
            <p>HOME</p>
            </Link>
            <Link to='/cities'>
            <p>CITIES</p>
            </Link>
            <Link to='/'>
            <p>OTHER</p>
            </Link>
            
        </nav>
    )
}
export default Nav
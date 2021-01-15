import {Link} from 'react-router-dom'
const Nav = () =>{
    const photo = require("../assets/male-user.png")
    return(
        <nav>
            <img src={photo.default} alt="user" style={
                {backgroundColor:'white',
                    borderRadius:'100%'}}></img>
            <Link to='/'>
            <p>PAGE 1</p>
            </Link>
            <Link to='/'>
            <p>PAGE 2</p>
            </Link>
            <Link to='/'>
            <p>PAGE 3</p>
            </Link>
            
        </nav>
    )
}
export default Nav
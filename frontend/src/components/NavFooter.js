import {Link} from 'react-router-dom'
const NavFooter = () =>{
   
    return(
        <nav>
            <Link to='/'>
            <p>Home</p>
            </Link>
            <Link to='/cities'>
            <p>Cities</p>
            </Link>
            <Link to='/'>
            <p>Page 3</p>
            </Link>     
        </nav>
    )
}
export default NavFooter
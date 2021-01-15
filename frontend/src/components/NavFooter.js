import {Link} from 'react-router-dom'
const NavFooter = () =>{
   
    return(
        <nav>
            <h5>Nav Menu</h5>
            <Link to='/'>
            <p>Page 1</p>
            </Link>
            <Link to='/'>
            <p>Page 2</p>
            </Link>
            <Link to='/'>
            <p>Page 3</p>
            </Link>     
        </nav>
    )
}
export default NavFooter
import {Link} from 'react-router-dom'
const Logo = () =>{
    
    return(
        <Link to='/'>
            <div className='logo' style={{
                width:'45vw',
                height:'50%',
                backgroundImage:'url("./assets/logo.png")',
                backgroundSize:'45%',
                backgroundRepeat:'no-repeat',
                margin:'1% 6%'
            }}>
            
            </div>
        </Link>
    )
}
export default Logo
import Logo from './Logo'
import Nav from './Nav'


const LittleHeader = ({banner}) =>{

   
    return(
        <header style={{
            height:'35vh',
            /* backgroundImage:'linear-gradient(#b3d1d8,rgb(255,255,255)' */
            backgroundImage:`url(../assets/fondo_mapa3.jpg)`,
            backgroundSize:'contain'

        }}

        >
            <Logo />
            <Nav />
        </header>
    )
}
export default LittleHeader
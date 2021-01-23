import Logo from './Logo'
import Nav from './Nav'


const LittleHeader = () =>{

   
    return(
        <header style={{
            
            backgroundImage:`url(../assets/fondo_mapa3.jpg)`,
            backgroundSize:'contain'

        }}>
            <Logo />
            <Nav />
        </header>
    )
}
export default LittleHeader
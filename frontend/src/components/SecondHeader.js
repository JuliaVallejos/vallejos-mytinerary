import Logo from './Logo'
import Nav from './Nav'


const SecondHeader = () =>{

   
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
export default SecondHeader
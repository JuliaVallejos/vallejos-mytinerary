import Logo from './Logo'
import Nav from './Nav'


const LittleHeader = ({banner}) =>{

   
    return(
        <header style={{
            height:'30vh',
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
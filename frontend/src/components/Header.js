import Logo from './Logo'
import Nav from './Nav'
import '../styles/header.css'

const Header = () =>{
    return(
        <header>
            <h1>Soy el header</h1>
            <Logo />
            <Nav />
        </header>
    )
}
export default Header
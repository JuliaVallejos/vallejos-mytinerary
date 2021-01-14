const Nav = () =>{
    const photo = require("../assets/male-user.png")
    return(
        <nav>
            <img src={photo.default} alt="logo"></img>
            <p>Page 1</p>
            <p>Page 2</p>
            <p>Page 3</p>
            
        </nav>
    )
}
export default Nav
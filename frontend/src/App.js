import './styles/media.css'
import './styles/App.css';

import {Route,BrowserRouter,Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {useState} from 'react'
import HomePage from './pages/HomePage'
import CitiesPage from './pages/CitiesPage'
import Footer from './components/Footer'
import Itineraries from './components/Itineraries'
import AddCity from './components/AddCity'
import Register from './pages/Register'
import LogIn from './pages/LogIn'
import usersActions from './redux/actions/usersActions';

function App(props) {
  const {loggedUser,login_LS} = props
  const [renderAgain,setRenderAgain] = useState(false)
  var routes = null

  if(loggedUser){
    routes=
    <>
      <Route exact path='/' component={HomePage}/>
      <Route path='/cities' component={CitiesPage}/>
      <Route path='/itineraries/:id' component={Itineraries}/>
      <Route path='/addCity' component ={AddCity}/>
     

    </>
  }else if(localStorage.getItem('token')){
    login_LS(localStorage.getItem('token'))
    .then(backToHome => 
      {
        if(backToHome==='/'){
        setRenderAgain(!renderAgain)}
        
    })
    .catch(error => setRenderAgain(!renderAgain))
  }
  else {
    routes=
  <>
    <Route exact path='/' component={HomePage}/>
    <Route path='/cities' component={CitiesPage}/> 
    <Route path='/itineraries/:id' component={Itineraries}/> 
    <Route path='/register' component={Register}/>
    <Route path='/login' component={LogIn}/>
    
    
  </>}

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        {routes}
        </Switch>
        <Footer/>
      </BrowserRouter>
      
    </div>
  )
}
const mapStateToProps =state =>{
  return {
    loggedUser : state.user.loggedUser
  }}
  const mapDispatchToProps = {
    login_LS:usersActions.login_LS
  }

export default connect(mapStateToProps,mapDispatchToProps)(App)


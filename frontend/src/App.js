import './styles/media.css'
import './styles/App.css';

import {Route,BrowserRouter,Switch} from 'react-router-dom'
import HomePage from './pages/HomePage'
import CitiesPage from './pages/CitiesPage'
import Footer from './components/Footer'
import Itineraries from './components/Itineraries'
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/cities' component={CitiesPage}/>
        <Route path='/itineraries/:id' component={Itineraries}/>
        <Route path='/signup' component={Register}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

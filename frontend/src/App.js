import './styles/media.css'
import './styles/App.css';

import {Route,BrowserRouter,Switch} from 'react-router-dom'
import Header from './components/Header';
import HomePage from './pages/HomePage'
import Cities from './pages/Cities'
import Footer from './components/Footer'
import Itineraries from './components/Itineraries'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/cities' component={Cities}/>
        <Route path='/itineraries/:id' component={Itineraries}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

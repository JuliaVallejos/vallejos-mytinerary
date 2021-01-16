import './styles/media.css'
import './styles/App.css';

import {Route,BrowserRouter,Switch} from 'react-router-dom'
import Header from './components/Header';
import HomePage from './components/HomePage'
import Cities from './components/Cities'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/cities' component={Cities}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

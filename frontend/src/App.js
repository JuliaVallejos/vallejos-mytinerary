
import './App.css';
import {Route,BrowserRouter,Switch} from 'react-router-dom'
import Header from './components/Header';
import Section from './components/Section'
import Cities from './components/Cities'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
        <Route exact path='/' component={Section}/>
        <Route path='/cities' component={Cities}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

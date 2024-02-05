import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import './App.css';
import Value from './components/Value/Value';
import Contact from './components/Contact/Contact';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';
import What from './components/What/What';
import How from './components/How/How';
import Cor from './components/Cor/Cor';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Form from './components/Form/Form';
function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <div className="white-gradient"/>
          <Header/>
          <Hero/>
        </div>
        <What/>
        <How/>
        <Cor/>
        <Value/>
        <Contact/>
        <GetStarted/>
        <Footer/>
        {/* <Switch>
          <Route path='/submit-cv' component={Form}/>
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;

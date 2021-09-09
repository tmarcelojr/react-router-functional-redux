// imports
import { Switch, Route } from 'react-router-dom'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'
// pages
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Giphy from './Giphy'
// css
import '../App.css'

const App = () => {
  return (
    <div id="app">
    <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/giphy">
          <Giphy />
        </Route>
      </Switch>
    <Footer />
  </div>
  );
};

export default App;
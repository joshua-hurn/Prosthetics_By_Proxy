<<<<<<< HEAD
import React, { Component, Fragment } from 'react';
=======
import React, { Component } from 'react';
>>>>>>> 88dafb10a65ad7f31336c7b66f09203a6ea4bc16
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import LoginPage from "./pages/LoginPage.jsx";
import Donations from './pages/Donations.jsx';
import Select from './pages/Select.jsx';
import LowerLimbs from './pages/LowerLimbs.jsx';




class App extends Component {
  render() {
    return (
      <Router>
        <div className="ui container">
          <Route exact path="/" component = {Home}/>
          <Route exact path="/login" exact component = {LoginPage}/>
          <Route exact path= "/Donations" component = {Donations}/>
          <Route exact path= "/Select" component = {Select}/>
          <Route exact path= "/LowerLimbs" component = {LowerLimbs}/>
        </div>
      </Router>
<<<<<<< HEAD
=======
     
>>>>>>> 88dafb10a65ad7f31336c7b66f09203a6ea4bc16
    );
  }
}

<<<<<<< HEAD

=======
>>>>>>> 88dafb10a65ad7f31336c7b66f09203a6ea4bc16
export default App;

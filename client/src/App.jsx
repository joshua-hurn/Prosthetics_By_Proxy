import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import LoginPage from "./pages/LoginPage.jsx";
import Donations from './pages/Donations.jsx';
import ThankYou1 from './pages/ThankYou1.jsx';
import UpperLimbs from './pages/UpperLimbs';
import LowerLimbs from './pages/LowerLimbs.jsx';
import UserProfile from './pages/UserProfile';
import RegistrationPage from './pages/Registrationpage';
import AllParts from './pages/AllParts';
import FAQ from './pages/FAQ.jsx';



class App extends Component {

  render() {
    return (
      <Router>
        <div className="ui container">
          <Route exact path="/" component = {Home}/>
          <Route exact path="/login" exact component = {LoginPage}/>
          <Route exact path= "/register" exact component = {RegistrationPage}/>
          <Route exact path= "/Donations" component = {Donations}/>
          <Route exact path= "/ThankYou1" component = {ThankYou1}/>
          <Route exact path= "/UpperLimbs" component = {UpperLimbs}/>
          <Route exact path= "/LowerLimbs" component = {LowerLimbs}/>
          <Route exact path= "/AllParts" component = {AllParts}/>
<<<<<<< HEAD
          <Route exact path="/faq" component= {FAQ}/>
=======
          <Route exact path= "/user" component = {UserProfile}/> 
>>>>>>> 07572a14147da795186b7046cc3c81a9b5f0c8d1
        </div>
      </Router>
    );
  }
}

export default App;
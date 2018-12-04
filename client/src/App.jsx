import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import LoginPage from "./pages/LoginPage.jsx";
import Donations from './pages/Donations.jsx';
import Select from './pages/Select.jsx';
import LowerLimbs from './pages/LowerLimbs.jsx';
import UserProfile from './pages/UserProfile.jsx';




class App extends Component {
  render() {
    return (
      <Router>
        <div className="ui container">
          <Route exact path="/" component = {Home}/>
          <Route exact path="/Login" component = {LoginPage}/>
          <Route exact path="/User" component = {UserProfile}/>
          <Route exact path="/Donations" component = {Donations}/>
          <Route exact path="/Select" component = {Select}/>
          <Route exact path="/LowerLimbs" component = {LowerLimbs}/>
        </div>
      </Router>
    );
  }
}

export default App;

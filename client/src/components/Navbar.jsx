import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './Footer.jsx';




class Navbar extends Component {
    render() {
        return (

      <nav className="navbar navbar-dark bg-primary"> 
     
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  <div className="logo" id="logo"><img src="https://storage.pixteller.com/designs/designs-images/2018-12-03/10/logo-1-5c0596089c591.png"></img></div>
  
 
            <a className="navbar-brand" to="/"></a>
  <div className= "container">
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Make a Selection
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/UpperLimbs">Upper Limb</Link>
          <Link className="dropdown-item" to="/LowerLimbs">Lower Limb</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="/">Info for New Amputees</Link>
        </div>
        </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Donations">Donate</Link>
      </li>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="/">Disabled</Link>
      </li>
    </ul>
 
  </div>
  </div>
</nav>

        );
    }

}

export default Navbar;
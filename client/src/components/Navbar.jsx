import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './Footer.jsx';





class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand" to="/">Prosthetic By Proxy</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
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
          <Link className="dropdown-item" to="/Select">Upper Limb</Link>
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
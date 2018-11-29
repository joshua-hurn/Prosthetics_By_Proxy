import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Select extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title ="Make a Selection" subtitle ="See What's Available"/>
            
                <div className= "container">
 <h2>
 Welcome to PBP
</h2>
 <p>
    We have a selection of prosthetics from our authorized donars. 
</p>
</div>
< Footer />
            </div>
        );
    }
}
export default Select;
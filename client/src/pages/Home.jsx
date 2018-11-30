import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import {Link} from "react-router-dom";
import HomeCards from "../components/Cards/HomeCards.jsx";

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title ="Prosthetic By Proxy" subtitle ="Provider of Prosthetic Patient Needs"/>

            
                <div className= "container">
                
 <h2>
 Welcome to PBP
</h2>

 <p>
     If you are missing an arm or leg, an artificial limb can sometimes replace it. Our mission is to help you obtain a device, which is called a prosthesis, that can help you to perform daily activities such as walking, eating, or dressing. Artificial limbs give you the ability to live life as comfortably as before.
</p>
<Link to ="/login"> Login </Link>
<div>
    <HomeCards />
</div>

< Footer />
</div>
</div>

        );
    }
}
export default Home;
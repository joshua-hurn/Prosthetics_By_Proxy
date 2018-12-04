import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import UpperCards from '../components/Cards/UpperCards';

class UpperLimbs extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title ="Upper Limbs" subtitle ="See What's Available"/>
            
                <div className= "container">
 <h2>
 Welcome to PBP
</h2>
 <p>
    We have a selection of prosthetics from our authorized donars. 
</p>
</div>
<div>

<UpperCards />

</div>






< Footer />
            </div>
        );
    }
}
export default UpperLimbs;
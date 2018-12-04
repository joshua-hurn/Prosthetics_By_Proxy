import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import DonateForm from '../forms/DonateForm';

class Donations extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title="Donations" subtitle="Provider of Prosthetic Patient Needs" />

                <div className="container">
                    <h2>
                        Donate to PBP
</h2>
                    <p>
                        PBP happily accepts the following new prostheses as donations: Above-knee, below-knee, body harnesses, arm prostheses, prosthetic hands.
</p>
<div>
<DonateForm />
</div>
                </div>
                < Footer />
            </div>
        );
    }
}
export default Donations;
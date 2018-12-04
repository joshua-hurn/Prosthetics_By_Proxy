import React from 'react';
import RegistrationForm from "../forms/RegistrationForm";
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import Navbar from '../components/Navbar';
const RegistrationPage = () => (
    <div>
         <Navbar />
    <Jumbotron title="Register" subtitle="Provider of Prosthetic Patient Needs" />


< RegistrationForm/>
   
    < Footer />
</div>
);

export default RegistrationPage;
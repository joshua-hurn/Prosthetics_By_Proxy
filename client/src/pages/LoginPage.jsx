import React from 'react';
import LoginForm from "../forms/LoginForm";
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import Navbar from '../components/Navbar';
const LoginPage = () => (
    <div>
         <Navbar />
                <Jumbotron title="Login" subtitle="Provider of Prosthetic Patient Needs" />

<LoginForm />

    <Footer />
    </div>
);

export default LoginPage;
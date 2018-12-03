import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";

class UserProfile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Footer />
      </div>
    );
  }
}

export default UserProfile;

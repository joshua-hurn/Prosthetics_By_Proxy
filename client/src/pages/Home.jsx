import React, { Component } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Jumbotron from "../components/Jumbotron.jsx";
import { Link } from "react-router-dom";
import HomeCards from "../components/Cards/HomeCards.jsx";
import Carousel from "../components/Carousel.jsx";
// import Chatroom from "../Chatroom.jsx";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="d-flex justify-content-around align-items-center m-4">
          <button className="btn btn-secondary btn-lg" style={{ width: "250px" }}><Link className="text-white" to="/login" id="a1"> Login </Link></button>
          <button className="btn btn-secondary btn-lg" style={{ width: "250px" }}><Link className="text-white" to="/register" id="a1"> Register </Link></button>
        </div>

        <Jumbotron
          title="Prosthetic By Proxy"
          subtitle="Provider of Prosthetic Patient Needs"
        />

        <div className="container">
          <Carousel />
        </div>

        <h2 className="text-lg text- text-center m-3">Our Mission</h2>

        <p className="text-center">There are 2.1 million people living with limb loss in the USA, and that number is expected to double by 2050. 
        Currently, 185,000 people undergo an amputation each year and many of those individuals lack the luxury of a prosthesis. We are committed to 
        providing an exemplary service to an underserved community. If you are missing an arm or leg, an artificial limb could exponentially improve 
        your quality of life. <br/><br/>Our mission is to assist our consumers obtain a device, also referred to as a prosthetic, at an affordable 
        price. We are also devoted to making that process run smoothly. Our team has developed an interface that will allow a prospective consumer to 
        search for a compatible device, interact with the client directly, & secure a prostethic that fits within their budget. Our site also offers 
        plenty of insight to those that may have recently begun their journey. We pledge to always be considerate of the plight of the amputee 
        community & provide a service thats incomparable to any other initiative.
        </p>

        <div>
          <HomeCards />
        </div>
        <div>
          {/* <Chatroom /> */}
        </div>
        <Footer />
      </div>
    );
  }
}
export default Home;

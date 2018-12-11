import React, {Component} from 'react';
import ChatForm from "../forms/ChatForm.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Jumbotron from "../components/Jumbotron.jsx";
// import { Link } from "react-router-dom";


const Chatroom = () => (
    <div>
        <Navbar />
        <Jumbotron
          title="Chat Forum"
        />
    
        <div className="container">
          <h2>Welcome to PBP: Chat With Users</h2>
          <p>
            Chat with users to gain more information.
          </p>
</div>
 <ChatForm />
 <div>

  <div class="container">

 <div class="row d-flex justify-content-center">


   <div class="col-md-6">


     <div class="embed-responsive embed-responsive-16by9 mb-4">
       <iframe class="embed-responsive-item" src="https://video.nationalgeographic.com/video/i-didnt-know-that/00000144-0a26-d3cb-a96c-7b2f4d810000" allowfullscreen></iframe>
    </div>

   </div>

</div>
 </div>

 </div>
          
            <div>
            </div>
            <Footer />
          </div>
    
          );

 
export default Chatroom;

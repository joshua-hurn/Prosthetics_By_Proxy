import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import PrivateRoute from "../src/components/auth/privateRoute";
import "./App.css";
import Home from "./pages/Home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Donations from "./pages/Donations.jsx";
import ThankYou1 from "./pages/ThankYou1.jsx";
import ThankYou2 from "./pages/ThankYou2.jsx";
import UpperLimbs from "./pages/UpperLimbs";
import LowerLimbs from "./pages/LowerLimbs.jsx";
import UserProfile from "./pages/UserProfile";
import RegistrationPage from "./pages/Registrationpage";
import AllParts from "./pages/AllParts";
import FAQ from "./pages/FAQ.jsx";
import SinglePart from "./pages/SingleProsthetic";
import Logout from "./components/auth/logout";
import Chatroom from "./forms/ChatForm";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="ui container">
          <Route exact path="/" component={Home} />
          <Route exact path="/login" exact component={LoginPage} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/register" exact component={RegistrationPage} />
          <Route exact path="/Donations" component={Donations} />
          <Route exact path="/ThankYou1" component={ThankYou1} />
          <Route exact path="/ThankYou2" component={ThankYou2} />
          <Route exact path="/UpperLimbs" component={UpperLimbs} />
          <Route exact path="/LowerLimbs" component={LowerLimbs} />
          <Route exact path="/AllParts" component={AllParts} />
          <Route exact path="/FAQ" component={FAQ} />
          <Route exact path="/part/:id" component={SinglePart} />
          <Route exact path="/Chat" component = {Chatroom}/>
          <PrivateRoute exact path="/user/:id" component={UserProfile} />
        </div>
      </Router>
    );
  }
}

export default App;

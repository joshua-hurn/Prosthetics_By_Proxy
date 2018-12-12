import React, { Component } from "react";
import "./Jumbotron.css";
import { Link } from "react-router-dom";
import AuthButton from "./auth/authButton";

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="p-5" id="jumbotext">
          <h1 className="outline display-3 text-left" style={{ color: "darkred", fontWeight: "bold", fontFamily: "Bungee" }}>Prosthetic</h1>
          <h1 className="outline display-3 text-center" style={{ color: "black", fontWeight: "bold", fontFamily: "pacifico", width: "75%" }}>by proxy</h1>

        </div>
        <div className="d-flex justify-content-around align-items-center m-2">
          <AuthButton />
          <button className="btn btn-lg" style={{ backgroundColor: "darkred", width: "250px", borderRadius: ".5em", border: "black 3px solid" }}><Link className="" style={{ color: "white", fontWeight: "bold" }} to="/register" > R E G I S T E R </Link></button>
        </div><br /><br />
        <div className="d-flex justify-content-center align-items-bottom text-center">
          <p className="outlineblack lead" style={{ color: "white", fontWeight: "bold", zIndex: "99999" }}> {this.props.subtitle} </p>
        </div>

      </div>
    );
  }
}

export default Jumbotron;

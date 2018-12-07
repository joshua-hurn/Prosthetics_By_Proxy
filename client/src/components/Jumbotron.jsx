import React, { Component } from "react";
import "./Jumbotron.css";
import { Link } from "react-router-dom";


class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-3">{this.props.title}</h1>
          <p className="lead"> {this.props.subtitle} </p>
        </div>
        <div className="d-flex justify-content-around align-items-center m-2">
          <button className="btn btn-dark btn-lg" style={{ width: "250px", borderRadius: ".5em" }}><Link className="text-white bg-dark" to="/login" id="a1"> L o g i n </Link></button>
          <button className="btn btn-dark btn-lg" style={{ width: "250px", borderRadius: ".5em" }}><Link className="text-white bg-dark" to="/register" id="a1"> R e g i s t e r </Link></button>
        </div>

      </div>
    );
  }
}

export default Jumbotron;

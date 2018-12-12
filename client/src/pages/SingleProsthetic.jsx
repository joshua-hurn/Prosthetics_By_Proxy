import React, { Component } from "react";
import MapContainer from "../services/mapsContainer.jsx";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import "./SingleProsthetic.css";

class SingleProsthetic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prosthetic: {}
    };
  }

  async componentDidMount() {
    try {
      let id = this.props.match.params.id;
      let res = await fetch(`/api/prosthetics/${id}`);
      let prosthetic = await res.json();
      console.log(prosthetic);
      this.setState({ prosthetic });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="single-product-container">
        <Navbar />
        <Jumbotron
          title="Prosthetic By Proxy"
          subtitle="Provider of Prosthetic Patient Needs"
        />
        <div className="d-flex justify-content-center">
          <div className="singleCard p-2" style={{ background: "black", borderRadius: ".5em", border: "black solid 3px" }} >
            <div className="shadow">
              <div className="card-header text-center text-white font-weight-bold">
                Part Status: {this.state.prosthetic.part_status}
              </div>

              <div className="card-body text-center font-weight-bold">
                <h5 className="card-title font-weight-bold pb-1 outline redbungee" style={{ color: "darkred", borderBottom: "solid darkred 3px", fontSize: "24px" }}>
                  Brand: &nbsp;{this.state.prosthetic.brand}
                </h5>
                <p className="card-text text-white font-weight-bold">
                  PART TYPE: {this.state.prosthetic.part}
                </p>
                <img className="mb-2 product-image text-white font-weight-bold" src={this.state.prosthetic.prosthetic_image} alt="" />
                <p className="card-text text-white font-weight-bold">
                  LENGTH: {this.state.prosthetic.length}
                </p>
                <p className="card-text text-white font-weight-bold"> WIDTH: {this.state.prosthetic.width}</p>
                <p className="card-text text-white font-weight-bold">
                  QUALITY: {this.state.prosthetic.quality}
                </p>
                <p className="card-text text-white font-weight-bold">
                  WEIGHT: {this.state.prosthetic.weight}
                </p>
                <a href="#" className="btn btn-outline-danger">
                Reserve This Part
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Footer />
        </div>

      </div>
    );
  }
}

export default SingleProsthetic;

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
        <div className="container1">
          <div className="card product-card shadow rounded">
            <div className="card-header bg-secondary text-white">
              Part Status: {this.state.prosthetic.part_status}
            </div>

            <div className="card-body">
              <h5 className="card-title">
                Brand: {this.state.prosthetic.brand}
              </h5>
              <p className="card-text">
                Part type: {this.state.prosthetic.part}
              </p>
              <img className="product-image" src={this.state.prosthetic.prosthetic_image} alt="" />
              <p className="card-text">
                length: {this.state.prosthetic.length}
              </p>
              <p className="card-text"> width: {this.state.prosthetic.width}</p>
              <p className="card-text">
                weight: {this.state.prosthetic.weight}
              </p>
              <p className="card-text">
                quality: {this.state.prosthetic.quality}
              </p>
              <p className="card-text">
                weight: {this.state.prosthetic.weight}
              </p>
            </div>
          </div>
          <MapContainer className="map-element" style={{ width: "100%" }} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default SingleProsthetic;

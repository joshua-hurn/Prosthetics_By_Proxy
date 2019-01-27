import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import "./SingleProsthetic.css";
import * as categoryServices from "../services/categories";
import * as prostheticServices from "../services/prosthetics";
import SimpleMap from "../services/googleMaps";

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
      let prosthetic = await prostheticServices.one(id);
      let category_id = await categoryServices.one(prosthetic.category_id);
      prosthetic.part = category_id.name;
      this.setState({ prosthetic });
    } catch (e) {
      console.log(e);
    }
  }

  async handleReserve() {
    let id = this.props.match.params.id;
    let prosthetic = this.state.prosthetic;
    prosthetic.part_status = 1;
    try {
      let res = await prostheticServices.update(id, prosthetic);
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
          <div
            className="singleCard p-2"
            style={{
              background: "black",
              borderRadius: ".5em",
              border: "black solid 3px"
            }}
          >
            <div className="shadow">
              <div className="card-header text-center text-white font-weight-bold">
                Part Status:{" "}
                {this.state.prosthetic.part_status === 0 ? (
                  <span className="btn btn-success">Available!</span>
                ) : (
                  <span className="btn btn-success">Reserved</span>
                )}
              </div>

              <div className="card-body text-center font-weight-bold">
                <h5
                  className="card-title font-weight-bold pb-1 outline redbungee"
                  style={{
                    color: "darkred",
                    borderBottom: "solid darkred 3px",
                    fontSize: "24px"
                  }}
                >
                  Brand: &nbsp;{this.state.prosthetic.brand}
                </h5>
                <p className="card-text text-white font-weight-bold">
                  PART TYPE: {this.state.prosthetic.part}
                </p>
                <img
                  className="mb-2 product-image text-white font-weight-bold"
                  src={this.state.prosthetic.prosthetic_image}
                  alt=""
                />
                <p className="card-text text-white font-weight-bold">
                  LENGTH: {this.state.prosthetic.length}
                </p>
                <p className="card-text text-white font-weight-bold">
                  {" "}
                  WIDTH: {this.state.prosthetic.width}
                </p>
                <p className="card-text text-white font-weight-bold">
                  QUALITY: {this.state.prosthetic.quality}
                </p>
                <p className="card-text text-white font-weight-bold">
                  WEIGHT: {this.state.prosthetic.weight}
                </p>
                <Link
                  onClick={() => this.handleReserve()}
                  to="/ThankYou2"
                  className="btn btn-outline-danger"
                >
                  Reserve This Part
                </Link>

                <SimpleMap id="map"/>
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

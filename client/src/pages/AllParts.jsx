import React, { Component, Fragment } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Jumbotron from "../components/Jumbotron.jsx";
import ProstheticsCard from "../components/Cards/ProstheticsCard";
import * as prostheticsServices from "../services/prosthetics";
import * as categoryServices from "../services/categories";
import * as brandsServices from "../services/brands";
import Autosuggest from "react-autosuggest";
import "./AllParts.css";

class AllParts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prosthetics: [],
      displayProsthetics: [],
      suggestions: [],
      value: ""
    };
  }

  async componentDidMount() {
    try {
      let res = await fetch("/api/prosthetics");
      let prosthetics = await res.json();
      console.log(prosthetics);
      this.setState({ prosthetics });
    } catch (e) {
      console.log(e);
    }
  }

  renderProsthetics = () => {
    return this.state.prosthetics.map(prosthetic => {
      return <ProstheticsCard key={prosthetic.id} prosthetic={prosthetic} />;
    });
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <Jumbotron title="Full Selection" subtitle="See What's Available" />
        <div>
          <h2>Welcome to PBP</h2>
          <p>We have a selection of prosthetics from our authorized donors.</p>
        </div>
        <div className="container">
          <div className="row">{this.renderProsthetics()}</div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
export default AllParts;

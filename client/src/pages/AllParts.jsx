import React, { Component } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Jumbotron from "../components/Jumbotron.jsx";
import Dropdown from "../components/Dropdown.jsx";
import ProstheticsCard from "../components/Cards/ProstheticsCard";

class AllParts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prosthetics: []
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
      return (
        <ProstheticsCard
          key={prosthetic.id}
          id={prosthetic.id}
          brand={prosthetic.brand}
          height={prosthetic.height}
          weight={prosthetic.weight}
          prosthetic={prosthetic}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Dropdown />
        <Jumbotron title="Full Selection" subtitle="See What's Available" />

        <div className="container">
          <h2>Welcome to PBP</h2>
          <p>We have a selection of prosthetics from our authorized donars.</p>
        </div>
        <div className="prosthetics-container">{this.renderProsthetics()}</div>
        <Footer />
      </div>
    );
  }
}
export default AllParts;

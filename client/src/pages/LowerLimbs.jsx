import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import LowerCard from '../components/Cards/LowerCard';

class LowerLimbs extends Component {
  constructor(props) {
    super(props)
    this.state = {
        prosthetics: []
    };
  }
  async componentDidMount() {
    let res = await fetch('/api/prosthetics');
    let prosthetics = await res.json();
    console.log(prosthetics);
    this.setState({ prosthetics });
  } catch (e) {
      console.log(e);
  }

  renderProsthetics() {
    console.log(this.state)
    return this.state.prosthetics.map(prosthetic => {
        return <LowerCard key={prosthetic.id} prosthetic={prosthetic} />
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron
          title="Lower Limb Selection"
          subtitle="See What's Available"
        />

        <div className="container">
          <h2>Welcome to PBP</h2>
          <p>
            We have a selection of lower limb prosthetics from our authorized
            donars.
          </p>

          <div className="row">
                 {this.renderProsthetics()}
             </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default LowerLimbs;
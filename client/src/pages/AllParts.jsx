import React, { Component, Fragment } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Jumbotron from "../components/Jumbotron.jsx";
import ProstheticsCard from "../components/Cards/ProstheticsCard";
import * as prostheticsServices from "../services/prosthetics";
import * as categoryServices from "../services/categories";
import Autosuggest from "react-autosuggest";
import "./AllParts.css";

let data;

categoryServices.all().then(categories => data = categories).catch(e => console.log(e));

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  return inputLength === 0
    ? []
    : data.filter(
      lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue
    );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <span>{suggestion.name}</span>
);

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
      let prosthetics = await prostheticsServices.all();
      let displayProsthetics = prosthetics.filter(prosthetic => prosthetic.part_status === 0);
      displayProsthetics.reverse();
      this.setState({ displayProsthetics });
    } catch (e) {
      console.log(e);
    }
  }

  renderProsthetics = () => {
    return this.state.displayProsthetics.map(prosthetic => {
      return <ProstheticsCard key={prosthetic.id} prosthetic={prosthetic} />;
    });
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionSelected = async (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
    try {
      let res = await fetch(`/api/q/prosthetics/category/${suggestion.id}`);
      let prosthetics = await res.json();
      let displayProsthetics = prosthetics.filter(prosthetic => prosthetic.part_status === 0);
      displayProsthetics.reverse();
      this.setState({ displayProsthetics });
    } catch (e) {
      console.log(e);
    }
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "What type of prosthetic are you looking for?",
      value,
      onChange: this.onChange
    };

    return (
      <div>
        <Navbar />
        <Jumbotron title="Full Selection" subtitle="See What's Available" />
        <div className="m-5 text-center ">
          <h2 className="blackpacifico outline display-4">Welcome to PBP</h2>
          <h2 className="redbungee outline">We have a selection of prosthetics from our authorized donors.</h2>
          <Autosuggest
            suggestions={suggestions}
            onSuggestionSelected={this.onSuggestionSelected}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
        </div>
        <div className="container ">
          <div className="d-flex flex-wrap justify-content-center product-container" style={{ background: "linear-gradient(rgba(0,0,0, 0.55), rgba(0,0,0,0.55))", borderRadius: ".5em", border: "black solid 3px" }} >{this.renderProsthetics()}</div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default AllParts;

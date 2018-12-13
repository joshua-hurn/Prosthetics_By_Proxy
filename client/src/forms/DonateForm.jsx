import React from "react";
import * as categoryServices from "../services/categories";
import * as prostheticsService from '../services/prosthetics';
import "./DonateForm.css";
import { withRouter } from "react-router";

class DonateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: "",
      part: 0,
      length: "",
      width: "",
      weight: "",
      prosthetic_image: "",
      quality: "",
      categories: []
    };
  }

  async componentDidMount() {
    try {
      let categories = await categoryServices.all();
      this.setState({ categories });
    } catch (e) {
      console.log(e);
    }
  }

  async onDonate(e) {
    e.preventDefault();
    let myObject = {
      brand: this.state.brand,
      category_id: parseInt(this.state.part),
      length: parseInt(this.state.length),
      width: parseInt(this.state.width),
      weight: parseInt(this.state.weight),
      prosthetic_image: this.state.prosthetic_image,
      quality: this.state.quality,
    };

    try {
      let res = await prostheticsService.insert(myObject);
      this.props.history.push('/AllParts');
    } catch (error) {
      console.log(error);
    }
  }

  handleSelectChange(e) {
    this.setState({ part: e.target.value });
  }

  renderCategories() {
    return this.state.categories.map(category => {
      return <option value={category.id}>{category.name}</option>
    });
  }

  render() {
    return (
      <form>
        <div className="container w3-col l4 w3-center">

          <div className="form-group">
            <label className="killme">Prosthetic Brand</label>
            <input type="text" className="form-control" id="brand-input"
              placeholder="The brand of the prosthetic"
              value={this.state.brand}
              onChange={(e) => this.setState({ brand: e.target.value })} />
          </div>

          <div className="form-group">
            <label className="killme">Type of Part</label>
            <select
              value={this.state.part}
              onChange={(e) => this.handleSelectChange(e)}
              className="form-control"
              id="categorySelect">
              <option>Select a type ...</option>
              {this.renderCategories()}
            </select>
          </div>

          <div className="form-group">
            <label className="killme">Part Length</label>
            <input type="text" className="form-control" id="length-input"
              placeholder="Length in cm"
              value={this.state.length}
              onChange={(e) => this.setState({ length: e.target.value })} />
          </div>

          <div className="form-group">
            <label className="killme">Part Width</label>
            <input type="text" className="form-control" id="width-input"
              value={this.state.width}
              placeholder="Width in cm"
              onChange={(e) => this.setState({ width: e.target.value })} />
          </div>

          <div className="form-group">
            <label className="killme">Part Weight</label>
            <input type="text" className="form-control" id="weight-input"
              value={this.state.weight}
              placeholder="Weight in lbs"
              onChange={(e) => this.setState({ weight: e.target.value })} />
          </div>

          <div className="form-group">
            <label className="killme">Part Condition</label>
            <input type="text" className="form-control" id="condition-input"
              value={this.state.quality}
              placeholder="One or two word quality description"
              onChange={(e) => this.setState({ quality: e.target.value })} />
          </div>
          <div className="form-group">
            <label className="killme">Part Image</label>
            <input
              type="text"
              name="image-upload"
              id="uploadedfile"
              className="form-control"
              placeholder="Link a url to the picture"
              value={this.state.prosthetic_image}
              onChange={(e) => this.setState({ prosthetic_image: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-lg mx-auto btn-block mb-2"
            id="button"
            onClick={(e) => this.onDonate(e)}
          >
            Donate
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(DonateForm);

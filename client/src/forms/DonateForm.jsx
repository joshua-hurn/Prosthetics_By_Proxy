import React from "react";
import * as prostheticsService from "../services/prosthetics";
import "./DonateForm.css";
import { withRouter } from "react-router";

class DonateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: " ",
      part: " ",
      placement: " ",
      length: " ",
      width: " ",
      weight: " ",
      prosthetic_image: " ",
      quality: " ",
      urls: " "
    };
  }

  handleBrandChange = e => {
    this.setState({ brand: e.target.value });
  };

  handlePartChange = e => {
    this.setState({ part: e.target.value });
  };

  handlePlacementChange = e => {
    this.setState({ placement: e.target.value });
  };

  handleLengthChange = e => {
    this.setState({ length: e.target.value });
  };

  handleWidthChange = e => {
    this.setState({ width: e.target.value });
  };

  handleWeightChange = e => {
    this.setState({ weight: e.target.value });
  };

  handleProstheticImageChange = e => {
    this.setState({ prosthetic_image: e.target.value });
  };

  handleQualityChange = e => {
    this.setState({ quality: e.target.value });
  };

  handleURLChange = e => {
    this.setState({ urls: e.target.value });
  };

  async onDonate(e) {
    e.preventDefault();
    try {
      let res = await prostheticsService.insert(this.state);
      this.props.history.replace("/");
    } catch (error) {
      console.log(error);
    }
    this.props.history.push("/ThankYou1");
  }

  render() {
    return (
      <form onSubmit={this.onDonate}>
        <div className="container w3-col l4 w3-center">
          <div className="form-row" />
          <div className="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="form-group">
            <label for="inputAddress2">Address 2</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div class="form-group">
              <label for="state" class="col-sm-2 control-label">
                State
              </label>
              <div class="col-sm-10">
                <select class="form-control" id="state" name="state">
                  <option value="">N/A</option>
                  <option value="AK">Alaska</option>
                  <option value="AL">Alabama</option>
                  <option value="AR">Arkansas</option>
                  <option value="AZ">Arizona</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DC">District of Columbia</option>
                  <option value="DE">Delaware</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="IA">Iowa</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MD">Maryland</option>
                  <option value="ME">Maine</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MO">Missouri</option>
                  <option value="MS">Mississippi</option>
                  <option value="MT">Montana</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="NE">Nebraska</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NV">Nevada</option>
                  <option value="NY">New York</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VA">Virginia</option>
                  <option value="VT">Vermont</option>
                  <option value="WA">Washington</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WV">West Virginia</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
            </div>
            <div className="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" for="gridCheck">
                Save Contact Information
              </label>
            </div>
          </div>

          <hr className="hr" />

          <div className="form-group">
            <label for="brand-input">Prosthetic Brand</label>
            <input type="text" className="form-control" id="brand-input" />
          </div>

          <div className="form-group">
            <label for="part-input">Type of Part</label>
            <input type="text" className="form-control" id="part-input" />
          </div>

          <div className="form-froup">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onChange={this.handleQualityChange}
              >
                Select Part location
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li class="dropdown-item" href="#">
                  Upper Limb
                </li>
                <li class="dropdown-item" href="#">
                  Lower Limb
                </li>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label for="exampleFormControlTextarea1">
              Donation Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            />
          </div>

          <div class="form-group">
            <label for="image-upload">Upload images</label>
            <p>
              Our site supports url links as images. Please enter URLs below.
            </p>
            <input
              type="text"
              multiple="true"
              name="image-upload"
              id="uploadedfile"
              class="form-control"
            />
          </div>

          <button
            href="/ThankYou1"
            type="submit"
            className="btn btn-primary"
            id="button"
            onClick={this.onDonate}
          >
            Donate
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(DonateForm);

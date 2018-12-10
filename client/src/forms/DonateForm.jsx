import React from "react";
import * as prostheticsService from "../services/prosthetics";
import "./DonateForm.css";
import { withRouter } from "react-router";

class DonateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      urls: " "
    };
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
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
      <form>
        <div className="form-group">
          <label for="formGroupExampleInput">First Name </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="First Name"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Last Name"
          />
        </div>

        <div className="form-row" />
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Email"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputPassword4">Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Address 2</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">State</label>
            <select id="inputState" className="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip</label>
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
            <label className="form-check-label" htmlFor="gridCheck">
              Save Contact Information
            </label>
          </div>
        </div>

        <hr className="hr"/>

        <div className="form-group">
          <label htmlFor="brand-input" >Prosthetic Brand</label>
          <input type="text" className="form-control" id="brand-input" />
        </div>

        <div className="form-group">
          <label htmlFor="part-input" >Type of Part</label>
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
            >
              Select Part location
            </button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">
            Donation Description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          />
        </div>

        <div class="form-group">
          <label htmlFor="image-upload">Upload images</label>
          <p>Our site supports url links as images. Please enter URLs below.</p>
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
      </form>
    );
  }
}
export default withRouter(DonateForm);

import React, { Component } from "react";
import { injectStripe } from "react-stripe-elements";
import { postCharge } from "../services/stripeService";
import "./CheckoutForm.css";
import CardSection from "./CardSection";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customerName: ""
    };
  }

  async handleSubmit(e) {
    e.preventDefault();
    try {
      let res = await this.props.stripe.createToken({
        name: this.state.customerName
      });

      await postCharge(res.token.id, 9999);
    } catch (e) {
      console.log(e);
    }
  }

  handleNameInput(e) {
    this.setState({ customerName: e.target.value });
  }

  render() {
    return (
      <div id="form-container">
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            onChange={e => this.handleNameInput(e)}
            placeholder="Name"
            htmlFor="name"
            id="name"
          />
          <CardSection />
          <div id="image-container">
            <span id="card-image" />
            <div id="card-front">
              <input type="text" id="card-token" />

              {/* <label for="card-holder">Card Holder
      </label> */}

              <div id="exp-container">
                <label for="card-exp">Expiration</label>
                <input
                  id="card-month"
                  type="text"
                  placeholder="MM"
                  length="2"
                />
                <input id="card-year" type="text" placeholder="YY" length="2" />
              </div>
              <div id="cvc-container">
                <label for="card-cvc"> CVC/CVV</label>
                <input
                  id="card-cvc"
                  placeholder="XXX-X"
                  type="text"
                  min-length="3"
                  max-length="4"
                />
                <p>Last 3 or 4 digits</p>
              </div>
            </div>
          </div>
        </form>

        <div>
          <button type="button" id="card-btn">
            SUBMIT
          </button>
        </div>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);

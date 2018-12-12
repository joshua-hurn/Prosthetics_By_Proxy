import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import { StripeProvider, Elements } from "react-stripe-elements";
import InjectedCheckoutForm from "./CheckoutForm";
import DonateForm from "../forms/DonateForm";
import "./Donations.css";

class Donations extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron
          title="Donations"
          subtitle="Provider of Prosthetic Patient Needs"
        />
        <div className="donate-container">
          <div>
            <div className="d-flex justify-content-center" >
            <h1 className="mr-3 outlineblack whitepacifico">Donate a </h1><h1 className="ml-3 outline redbungee">prosthesis</h1>
            </div>
            <p className="text-center font-weight-bold" style={{ fontSize: "28px", color: "white" }}>
              PBP happily accepts the following new prostheses as donations:
              Above-knee, below-knee, body harnesses, arm prostheses, prosthetic
              hands.
            </p>
          </div>
          <div>
            <DonateForm />
          </div>
        </div>
        <h2 className="donate-money-form">Donate to PBP</h2>
            <p>
              PBP is a non-profit organization and as such we rely on user
              donation and goodwill to keep our site live. Feel free to make a
              donation!
            </p>
        <StripeProvider apiKey="pk_test_5GDgprhGFrgFpd2hZxcxSRlQ">
          <Elements>
            <InjectedCheckoutForm />
          </Elements>
        </StripeProvider>
        <Footer />
      </div>
    );
  }
}
export default Donations;

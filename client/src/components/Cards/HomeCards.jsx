import React from "react";
import { Link } from "react-router-dom";
import "./HomeCards.css";

class HomeCards extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Recipients</h5>
              <p className="card-text">Find What You Need </p>
              <a href="/AllParts" className="btn btn-danger">
                Select
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Donors</h5>
              <p className="card-text">Give a prosthetic</p>
              <a href="/Donations" className="btn btn-danger">
                Donate
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HomeCards;

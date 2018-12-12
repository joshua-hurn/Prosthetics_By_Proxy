import React from "react";
import { Link } from "react-router-dom";
import "./LowerCard.css";

const LowerCard = props => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-6 mx-auto">
          <div className="card" style={{width: '18rem', margin: '20px'}}>
            <div className="card-body">
              <h5 className="card-title">{props.prosthetic.brand}</h5>
              <p className="card-text">{props.prosthetic.part}</p>
              <p className="card-text">  length: {props.prosthetic.length}</p>
              <p className="card-text">  width: {props.prosthetic.width}</p>
              <p className="card-text">  weight: {props.prosthetic.weight}</p>
              <a href="#" class="btn btn-primary">
                View This Part
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LowerCard;

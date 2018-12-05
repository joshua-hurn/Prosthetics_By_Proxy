import React from "react";
import { Link } from "react-router-dom";

const LowerCard = props => {
  return (
    <React.Fragment>
      <div class="row">
        <div class="col-sm-6 mx-auto">
          <div class="card" style={{width: '18rem', margin: '20px'}}>
            <div class="card-body">
              <h5 class="card-title">{props.prosthetic.brand}</h5>
              <p class="card-text">{props.prosthetic.part}</p>
              <p class="card-text">  length: {props.prosthetic.length}</p>
              <p class="card-text">  width: {props.prosthetic.width}</p>
              <p class="card-text">  weight: {props.prosthetic.weight}</p>
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

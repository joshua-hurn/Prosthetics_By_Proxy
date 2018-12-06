import React from "react";
import { Link } from "react-router-dom";

const ProstheticsCard = props => {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-header bg-secondary text-white">
          Parts ID: {props.id}
        </div>
        <div className="card-body">
          <h5 class="card-title">{props.brand}</h5>
          <p class="card-text">{props.part}</p>
          <p class="card-text"> length: {props.length}</p>
          <p class="card-text"> width: {props.width}</p>
          <p class="card-text"> weight: {props.weight}</p>

          <Link to={`/single/${props.id}`} className="btn btn-primary">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProstheticsCard;

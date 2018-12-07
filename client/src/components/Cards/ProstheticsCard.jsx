import React from "react";
import { Link } from "react-router-dom";

const ProstheticsCard = props => {
  return (
    <div className="col-md-4 mt-4">
      <div className="card">
        <div className="card-header bg-secondary text-white">
          Parts ID: {props.prosthetic.id}
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.prosthetic.brand}</h5>
          <p className="card-text">{props.prosthetic.part}</p>
          <p className="card-text"> length: {props.prosthetic.length}</p>
          <p className="card-text"> width: {props.prosthetic.width}</p>
          <p className="card-text"> weight: {props.prosthetic.weight}</p>

          <Link to={`/part/${props.prosthetic.id}`} className="btn btn-primary">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProstheticsCard;

import React from "react";
import { Link } from "react-router-dom";
import "./ProstheticsCard.css";

const ProstheticsCard = props => {
  return (
    <div className="prostheticCard">
      <div className="wrapper">
        <div className="img">
          <img
            id="prosthetic-img"
            className="rounded"
            src={props.prosthetic.prosthetic_image}
            alt="Image 1"
          />
        </div>
        <div className="prosthetic-info">
          <div className="prosthetic-title">{props.prosthetic.brand}</div>
          <div className="prosthetic-quality">
            <strong>Quality: </strong> {props.prosthetic.quality}
          </div>
          <Link to={`/part/${props.prosthetic.id}`} className="btn btn-sm prosthetic-btn ">
            See More
          </Link>
          <Link to={"./ThankYou"} className="btn btn-danger">
            Reserve
          </Link>
          <time className="result-date">{props.prosthetic._created}</time>
        </div>
      </div>
    </div>
  );
};

export default ProstheticsCard;

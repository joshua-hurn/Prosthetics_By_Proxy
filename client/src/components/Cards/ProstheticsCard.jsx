import React from "react";
import { Link } from "react-router-dom";
import "./ProstheticsCard.css";

const ProstheticsCard = props => {
  return (
    <div className="prostheticCard col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div className="tile">
        <div className="wrapper">
          <div className="prostheic-img img-fluid">
            <img className="rounded mx-auto d-block" src={props.prosthetic.prosthetic_image} alt="Image 1" />
          </div>

          <div className="info">
            <div className="title">{props.prosthetic.brand}</div>
            <div className="quality">
              <strong>Quality: </strong> {props.prosthetic.quality}
            </div>
          </div>

          <Link to={`/part/${props.prosthetic.id}`} classNameName="btn">
            See More
          </Link>
          <time class="result-date" datetime="2018-12-11 06:47" title="Tue 11 Dec 06:47:26 AM">Dec 11</time>
        </div>
      </div>
    </div>
  );
};

export default ProstheticsCard;

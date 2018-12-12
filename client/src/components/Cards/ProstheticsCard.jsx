import React from "react";
import { Link } from "react-router-dom";
import "./ProstheticsCard.css";

const ProstheticsCard = props => {
  return (
    <div className="prostheticCard p-2" style={{ background: "black", borderRadius: ".5em", border: "black solid 3px"}}>
      <div className="wrapper text-center" style={{ backgroundColor: "black", borderRadius: ".5em" }}>
        <div className="img">
          <img
            id="prosthetic-img"
            className="rounded"
            src={props.prosthetic.prosthetic_image}
            alt="Image 1"
          />
        </div>
        <div className="prosthetic-info text-center">
          <div className="prosthetic-title text-white font-weight-bold">{props.prosthetic.brand}</div>
          <div className="prosthetic-quality text-white m-2">
            <strong>Quality: </strong> {props.prosthetic.quality}
          </div><br/>
          <div className="d-flex justify-content-center">
          <Link to={`/part/${props.prosthetic.id}`} className="btn btn-outline-danger mr-2">
            See More
          </Link>
          <Link to={"./ThankYou1"} className="btn btn-outline-danger ml-2">
            Reserve
          </Link></div><br/>
          
        </div>
        <time className="result-date text-white">12.10.2018</time>
      </div>
    </div>
  );
};

export default ProstheticsCard;

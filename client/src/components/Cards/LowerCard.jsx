import React from "react";
import { Link } from "react-router-dom";
import "./LowerCard.css";

const LowerCard = props => {
  return (
    <React.Fragment>
        <div className="lowerCard p-2" style={{ background: "black", borderRadius: ".5em", border: "black solid 3px" }}>
          <div className="text-center" style={{ color: "white", backgroundColor: "black", borderRadius: ".5em" }}>
            <div className="img">
              <img
                id="prosthetic-img"
                className="rounded"
                src={props.prosthetic.prosthetic_image}
                alt="Image 1"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{props.prosthetic.brand}</h5>
              <p className="card-text">{props.prosthetic.part}</p>
              <p className="card-text">  LENGTH: {props.prosthetic.length}</p>
              <p className="card-text">  WIDTH: {props.prosthetic.width}</p>
              <p className="card-text">  WEIGHT: {props.prosthetic.weight}</p>
              <a href="#" className="btn btn-outline-danger">
                View This Part
              </a>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
};


export default LowerCard;
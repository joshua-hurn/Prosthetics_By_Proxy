import React from "react";
import { Link } from "react-router-dom";
import "./LowerCard.css";

const LowerCard = props => {
  return (
    <React.Fragment>
      <div className="">
        <div className="mx-auto" >
          <div className="card" style={{ color: "white", width: '18rem', margin: '20px', background: "black" }}>
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
              <p className="card-text">  length: {props.prosthetic.length}</p>
              <p className="card-text">  width: {props.prosthetic.width}</p>
              <p className="card-text">  weight: {props.prosthetic.weight}</p>
              <a href="#" className="btn btn-outline-danger">
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
import React from "react";
import { Link } from "react-router-dom";
import "./UpperCard.css";

const UpperCard = props => {
  return (
    <React.Fragment>
      <div class="">
        <div class="mx-auto" >
          <div class="card" style={{ color: "white", width: '18rem', margin: '20px', background: "black" }}>
            <div className="img">
              <img
                id="prosthetic-img"
                className="rounded"
                src={props.prosthetic.prosthetic_image}
                alt="Image 1"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">{props.prosthetic.brand}</h5>
              <p class="card-text">{props.prosthetic.part}</p>
              <p class="card-text">  length: {props.prosthetic.length}</p>
              <p class="card-text">  width: {props.prosthetic.width}</p>
              <p class="card-text">  weight: {props.prosthetic.weight}</p>
              <a href="#" class="btn btn-outline-danger">
                View This Part
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};


export default UpperCard;
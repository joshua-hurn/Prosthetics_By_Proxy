import React from "react";
import { Link } from "react-router-dom";
import "./ProstheticsCard.css";

const ProstheticsCard = props => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div className="tile">
        <div className="wrapper">
          <div className="header">Event Title</div>

          <div className="banner-img">
            <img src="http://via.placeholder.com/640x360" alt="Image 1" />
          </div>

          <div className="dates">
            <div className="title">
              
              <span />
            </div>
            <div className="ends">
              <strong>ENDS</strong> 14:30 JAN 2015
            </div>
          </div>

          <div className="stats">
            <div>
              <strong>INVITED</strong> 3098
            </div>

            <div>
              <strong>JOINED</strong> 562
            </div>

            <div>
              <strong>DECLINED</strong> 182
            </div>
          </div>
          <Link to={`/part/${props.prosthetic.id}`} classNameName="btn">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProstheticsCard;

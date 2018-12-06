import React, { Component } from "react";
import "./Carousel.css";

class Carousel extends Component {
  render() {
    return (
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-50"
              src="https://storage.pixteller.com/designs/designs-images/2018-12-04/06/ojohion-1-5c06a4a99ba99.png"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-50"
              src="https://storage.pixteller.com/designs/designs-images/2018-12-04/06/ljbo-1-5c06aaeeb119d.png"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-50"
              src="https://storage.pixteller.com/designs/designs-images/2018-12-04/06/uogug-1-5c06ad076efbd.png"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carousel;

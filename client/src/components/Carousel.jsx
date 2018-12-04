import React, {Component} from 'react';
import './Carousel.css';

class Carousel extends Component {
    render () {
        return (
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-50" src="https://storage.pixteller.com/designs/designs-images/2018-12-04/06/ojohion-1-5c06a4a99ba99.png" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-50" src="https://storage.pixteller.com/designs/designs-images/2018-12-04/06/ljbo-1-5c06aaeeb119d.png" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-50" src="https://storage.pixteller.com/designs/designs-images/2018-12-04/06/uogug-1-5c06ad076efbd.png" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>   
</div>


        );
    }
}

export default Carousel;
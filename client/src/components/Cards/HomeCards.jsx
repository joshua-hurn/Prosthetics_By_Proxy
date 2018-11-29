import React from 'react';
import {Link} from 'react-router-dom';



class HomeCards extends React.Component {
    render () {
    return (
        <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Recipients</h5>
              <p class="card-text">Find What You Neeed </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Donars</h5>
              <p class="card-text">Give a prosthetic</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>

        );
    }

}
export default HomeCards;
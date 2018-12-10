import React, { Component, Fragment } from 'react';
import {Map, Circle, GoogleApiWrapper} from 'google-maps-react';
import { config } from '../../../server/src/config';

const style = {
  maxWidth: "100px",
  maxHeight: "100px",
  display: "flex",
  flex: 1
}

const coords = { lat: -21.805149, lng: -49.0921657 };

export class MapContainer extends Component {
  render() {
    return (
      <div style={style}>
       <Map
      initialCenter={coords}
      google={this.props.google}
      style={{width: 500, height: 500, position: 'relative'}}
      zoom={14}
    >
      <Circle
        radius={1200}
        center={coords}
        onMouseover={() => console.log('mouseover')}
        onClick={() => console.log('click')}
        onMouseout={() => console.log('mouseout')}
        strokeColor='transparent'
        strokeOpacity={0}
        strokeWeight={5}
        fillColor='#FF0000'
        fillOpacity={0.2}
      />
    </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (config.GOOGLE_MAPS_API_KEY)
})(MapContainer)
import React, { Component, Fragment } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { config } from '../../../server/src/config';

const style = {
  maxWidth: "100px",
  maxHeight: "100px",
  display: "flex",
  flex: 1
}

export class MapContainer extends Component {
  render() {
    return (
      <div style={style}>
        <Map initialCenter={{
          lat: 37.774929,
          lng: -122.419416
        }} google={this.props.google} zoom={14}>
 
        <Marker position={{lat: 37.774929, lng: -122.419416}}

        onClick={this.onMarkerClick}
        name={'Current location'} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (config.GOOGLE_MAPS_API_KEY)
})(MapContainer)
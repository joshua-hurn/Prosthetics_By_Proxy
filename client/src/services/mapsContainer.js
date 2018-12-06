import React, { Component, Fragment } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { config } from '../../../server/src/config';
 
export class MapContainer extends Component {
  render() {
    const style = {
      width: '100%',
      height: '100%'
    }
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
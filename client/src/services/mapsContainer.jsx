import React, { Component } from "react";
import { Map, Circle, GoogleApiWrapper } from "google-maps-react";
import { config } from "../../../server/src/config";

const style = {
  maxWidth: "100px",
  maxHeight: "100px",
  display: "flex",
  flex: 1
};

const coords = { lat: -21.805149, lng: -49.0921657 };

class MapContainer extends Component {
  render() {
    return (
      <div className="map-container">
        <Map
          initialCenter={coords}
          google={this.props.google}
          style={{ height: 250, position: "relative" }}
          zoom={14}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: config.GOOGLE_MAPS_API_KEY
})(MapContainer);

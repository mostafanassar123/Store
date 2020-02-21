import React from "react";
import {
  Marker,
  withGoogleMap,
  GoogleMap,
  withScriptjs
} from "react-google-maps";

export default withScriptjs(
  withGoogleMap(props => {
    return (
      <GoogleMap
        zoom={8}
        defaultCenter={{
          lat: -34.397,
          lng: 150.644
        }}
      >
        {props.isMarkerShown && (
          <Marker position={{ lat: -34.397, lng: 150.644 }} />
        )}
      </GoogleMap>
    );
  })
);

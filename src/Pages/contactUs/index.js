import React from "react";
import MapComponent from "./InitialMap";
// { apiKey: "YOUR_GOOGLE_API_KEY_GOES_HERE" }

const ContactUsMap = () => {
  return (
    <MapComponent
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAzI7oOxUI__GNAZQzHLxkvf6M6LjZf138&libraries=places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: "400px" }} />}
      mapElement={<div style={{ height: "100%" }} />}
    />
  );
};

export default ContactUsMap;

import React from "react";
import Map from "../components/Map/Map";

const Mapgg = () => {
  const key = "AIzaSyDNI_ZWPqvdS6r6gPVO50I4TlYkfkZdXh8";
  return (
    <div>
      <header>Map Demo</header>
      <Map
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={
          <div
            style={{
              height: `90vh`,
              margin: `auto`,
              border: "2px solid black",
            }}
          />
        }
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default Mapgg;

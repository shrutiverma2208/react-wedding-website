import React from 'react';
import Map from './Map';

const MapLocation = () => {
  const latitude = 26.426338; // Example latitude
  const longitude = 80.327559; // Example longitude

  return (
    <div>
      <h1>Location</h1>
      <Map latitude={latitude} longitude={longitude} />
    </div>
  );
};

export default MapLocation;
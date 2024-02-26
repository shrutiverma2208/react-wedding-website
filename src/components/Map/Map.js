import React from 'react';


const Map = ({ latitude, longitude }) => {
  const mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <a style={{textDecoration:'underline',color:'green',textAlign:'center',fontWeight:'bold'}}
    href={mapLink} target="_blank" rel="noopener noreferrer">
      Open in Google Maps
    </a>
  );
};

export default Map;
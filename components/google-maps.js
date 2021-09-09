import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const defaultCenter = { lat: 50.858680, lng: 4.374210 };

const defaultOptions = { scrollwheel: false };

const RegularMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={ defaultCenter }
      defaultOptions={ defaultOptions }
    >
      <Marker position={ defaultCenter } />
    </GoogleMap>
  ))
);

const loadingElementStyle = { height: '100%' };
const mapElementStyle = { height: '100%' };

export default function GoogleMaps(){
  return (
    <>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB01u6Zgb0r_X647UpE4P2W0yAjQeQO_Xo&callback=initMap"></script>
    <RegularMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB01u6Zgb0r_X647UpE4P2W0yAjQeQO_Xo"
      loadingElement={<div style={ loadingElementStyle } />}
      containerElement={<div className="h-48 md:h-full" />}
      mapElement={<div style={ mapElementStyle } />}
    />  
    </>
  );
} 
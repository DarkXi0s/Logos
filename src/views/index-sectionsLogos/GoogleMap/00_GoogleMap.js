/*
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 33.9958666,
      lng: -6.8468501,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCrVw_XPsqRh64lMUGNcfVKCNd_cRJUacs' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          title={'The marker`s title will appear as a tooltip.'}
          name={'Dolores park'}
          position={{ lat: 33.9958666, lng: -6.8468501 }}
        />
        <Marker />
        <AnyReactComponent lat={33.9958666} lng={-6.8468501} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
*/
import React, { Component } from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

const LIBRARIES = ["places"];

class Map extends Component {
  render() {
    const { center, zoom } = this.props;

    return (
      <div className="wrapper">
        <LoadScript
          googleMapsApiKey="AIzaSyDSoxzHe9khsoO3CbaUDT0JBgLhZ-BHY_0"
          libraries={LIBRARIES}
        >
          <GoogleMap
            id="map"
            center={center}
            zoom={zoom}
            mapContainerStyle={{ height: "45vh", width: "auto" }}
          >
            {/*  Marker component */}
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    );
  }
}

export default Map;
